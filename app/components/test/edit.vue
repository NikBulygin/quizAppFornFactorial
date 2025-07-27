<template>
  <div class="min-h-screen p-4 sm:p-6 lg:p-8">
    <div class="max-w-7xl mx-auto space-y-6">
      <!-- Заголовок -->
      <div class="flex items-center justify-between">
        <h1 class="text-2xl sm:text-3xl font-bold">
          {{ isEditing ? t('test.edit.editTitle') : t('test.edit.createTitle') }}
        </h1>
        <div class="flex items-center gap-2">
          <!-- Кнопки экспорта/импорта -->
          <UButton
            variant="outline"
            size="sm"
            @click="exportTest"
            :disabled="!hasTestData"
          >
            <UIcon name="i-heroicons-arrow-down-tray" class="w-4 h-4 mr-2" />
            {{ t('test.edit.actions.export') }}
          </UButton>
          
          <TestModalImportTestModal 
            @import="handleImportTest"
            @cancel="handleImportCancel"
          />
          
          <UButton
            variant="outline"
            @click="handleCancel"
          >
            {{ t('test.edit.actions.cancel') }}
          </UButton>
          <UButton
            color="primary"
            :loading="isSaving"
            @click="saveTest"
          >
            {{ t('test.edit.actions.save') }}
          </UButton>
        </div>
      </div>

      <!-- Основная форма -->
      <div class="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <!-- Левая панель - настройки теста -->
        <div class="lg:col-span-1 space-y-6">
          <UCard>
            <template #header>
              <h3 class="font-semibold">{{ t('test.edit.basicSettings') }}</h3>
            </template>
            
            <div class="space-y-4">
              <!-- Название теста -->
              <UFormField
                :label="t('test.edit.title')"
                required
              >
                <UInput
                  v-model="formData.title"
                  :placeholder="t('test.edit.titlePlaceholder')"
                />
              </UFormField>

              <!-- Описание -->
              <UFormField
                :label="t('test.edit.description')"
              >
                <UTextarea
                  v-model="formData.description"
                  :placeholder="t('test.edit.descriptionPlaceholder')"
                />
              </UFormField>

              <!-- Изображение -->
              <UFormField
                :label="t('test.edit.image')"
              >
                <CommonImageUpload
                  v-model="formData.image"
                  :alt="formData.title"
                />
              </UFormField>
            </div>
          </UCard>

          <!-- Настройки времени -->
          <UCard>
            <template #header>
              <h3 class="font-semibold">{{ t('test.edit.timeSettings') }}</h3>
            </template>
            
            <div class="space-y-4">
              <!-- Дедлайн -->
              <UFormField
                :label="t('test.edit.deadline')"
              >
                <UInput
                  v-model="formData.deadline"
                  type="datetime-local"
                />
              </UFormField>

              <!-- Время прохождения -->
              <UFormField
                :label="t('test.edit.timeLimit')"
              >
                <UInput
                  v-model="formData.timeLimit"
                  type="number"
                  :placeholder="t('test.edit.timeLimitPlaceholder')"
                  min="1"
                />
                <template #help>
                  {{ t('test.edit.timeLimitHelp') }}
                </template>
              </UFormField>
            </div>
          </UCard>

          <!-- Настройки рандомизации -->
          <UCard>
            <template #header>
              <h3 class="font-semibold">{{ t('test.edit.randomizationSettings') }}</h3>
            </template>
            
            <div class="space-y-4">
              <!-- Рандомизация вопросов -->
              <UFormField>
                <UCheckbox
                  v-model="formData.randomizeQuestions"
                  :label="t('test.edit.randomizeQuestions')"
                />
              </UFormField>

              <!-- Рандомизация ответов -->
              <UFormField>
                <UCheckbox
                  v-model="formData.randomizeAnswers"
                  :label="t('test.edit.randomizeAnswers')"
                />
              </UFormField>

              <!-- Распределение по сложности -->
              <UFormField
                :label="t('test.edit.difficultyDistribution')"
              >
                <div class="space-y-4">
                  <!-- Единый слайдер с точками на цветных секциях -->
                  <div class="relative">
                    <div class="relative h-8 bg-gray-200 rounded-lg overflow-hidden">
                      <!-- Цветные секции -->
                      <div class="flex h-full">
                        <div 
                          class="bg-green-500 transition-all duration-300"
                          :style="{ width: `${formData.difficultyDistribution.easy}%` }"
                        />
                        <div 
                          class="bg-yellow-500 transition-all duration-300"
                          :style="{ width: `${formData.difficultyDistribution.medium}%` }"
                        />
                        <div 
                          class="bg-red-500 transition-all duration-300"
                          :style="{ width: `${100 - formData.difficultyDistribution.easy - formData.difficultyDistribution.medium}%` }"
                        />
                      </div>
                      
                      <!-- Точки на слайдере -->
                      <div class="absolute inset-0 flex items-center pointer-events-none">
                        <!-- Точка для легких -->
                        <div 
                          class="absolute w-6 h-6 bg-green-500 rounded-full border-2 border-white shadow-lg cursor-pointer transform -translate-y-1 hover:scale-110 transition-transform pointer-events-auto"
                          :style="{ left: `calc(${formData.difficultyDistribution.easy}% - 12px)` }"
                          @mousedown="startDragging('easy', $event)"
                        />
                        
                        <!-- Точка для средних -->
                        <div 
                          class="absolute w-6 h-6 bg-yellow-500 rounded-full border-2 border-white shadow-lg cursor-pointer transform -translate-y-1 hover:scale-110 transition-transform pointer-events-auto"
                          :style="{ left: `calc(${formData.difficultyDistribution.easy + formData.difficultyDistribution.medium}% - 12px)` }"
                          @mousedown="startDragging('medium', $event)"
                        />
                      </div>
                    </div>
                    
                    <!-- Подписи под точками -->
                    <div class="flex justify-between text-xs mt-2">
                      <span class="text-green-600 font-medium">{{ t('question.difficulties.easy') }}</span>
                      <span class="text-yellow-600 font-medium">{{ t('question.difficulties.medium') }}</span>
                      <span class="text-red-600 font-medium">{{ t('question.difficulties.hard') }}</span>
                    </div>
                    
                    <!-- Проценты -->
                    <div class="flex justify-between text-xs mt-1">
                      <span>{{ t('question.difficulties.easy') }}: {{ formData.difficultyDistribution.easy }}%</span>
                      <span>{{ t('question.difficulties.medium') }}: {{ formData.difficultyDistribution.medium }}%</span>
                      <span>{{ t('question.difficulties.hard') }}: {{ 100 - formData.difficultyDistribution.easy - formData.difficultyDistribution.medium }}%</span>
                    </div>
                  </div>

              
                  <!-- Кнопка сброса -->
                  <UButton
                    variant="outline"
                    size="sm"
                    class="w-full"
                    @click="resetDifficultyDistribution"
                  >
                    {{ t('test.edit.resetDistribution') }}
                  </UButton>
                </div>
              </UFormField>
            </div>
          </UCard>
        </div>

        <!-- Правая панель - банк вопросов и разделы -->
        <div class="lg:col-span-2 space-y-6">
          <!-- Банк вопросов -->
          <UCard>
            <template #header>
              <div class="flex items-center justify-between">
                <h3 class="font-semibold">{{ t('test.edit.questionBank') }}</h3>
                <TestModalAddQuestionModal @question-added="handleQuestionAdded" />
              </div>
            </template>
            
            <div class="space-y-3">
              <!-- Фильтры -->
              <div class="flex flex-wrap gap-2">
                <USelect
                  v-model="questionFilters.difficulty"
                  :items="difficultyOptions"
                  :placeholder="t('test.edit.filterByDifficulty')"
                  size="sm"
                  class="w-48"
                />
                <UInput
                  v-model="questionFilters.search"
                  :placeholder="t('test.edit.searchQuestions')"
                  size="sm"
                  class="w-48"
                />
              </div>

              <!-- Список вопросов -->
              <div class="space-y-2 max-h-96 overflow-y-auto">
                <div
                  v-for="question in filteredQuestions"
                  :key="question.id"
                  class="flex items-center gap-3 p-3 border rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800"
                >
                  <UCheckbox
                    :model-value="selectedQuestions.includes(question.id)"
                    :value="question.id"
                    @update:model-value="toggleQuestionSelection(question.id, !!$event)"
                    @change="updateSelectedQuestions"
                  />
                  
                  <div class="flex-1 min-w-0">
                    <div class="flex items-center gap-2">
                      <h4 class="font-medium truncate">{{ question.title }}</h4>
                      <UBadge
                        :color="getDifficultyColor(question.difficulty)"
                        size="sm"
                      >
                        {{ t(`question.difficulties.${question.difficulty}`) }}
                      </UBadge>
                      <UBadge
                        color="neutral"
                        size="sm"
                      >
                        {{ question.points }} {{ t('question.display.points') }}
                      </UBadge>
                      <!-- Бейдж секции -->
                      <UBadge
                        v-if="getQuestionSectionLink(question.id)"
                        color="info"
                        size="sm"
                      >
                        {{ getSectionById(getQuestionSectionLink(question.id)?.sectionId)?.title }}
                      </UBadge>
                    </div>
                    <p class="text-sm text-gray-600 dark:text-gray-400 truncate">
                      {{ question.description }}
                    </p>
                  </div>

                  <div class="flex items-center gap-1">
                    <UButton
                      variant="ghost"
                      size="sm"
                      @click="editQuestion(question)"
                    >
                      <UIcon name="i-heroicons-pencil" class="w-4 h-4" />
                    </UButton>
                    <UButton
                      variant="ghost"
                      size="sm"
                      color="error"
                      @click="deleteQuestion(question.id)"
                    >
                      <UIcon name="i-heroicons-trash" class="w-4 h-4" />
                    </UButton>
                  </div>
                </div>
              </div>

              <!-- Действия с выбранными вопросами -->
              <div
                v-if="selectedQuestions.length > 0"
                class="pt-3 border-t"
              >
                <div class="flex items-center justify-between">
                  <span class="text-sm text-gray-600 dark:text-gray-400">
                    {{ t('test.edit.selectedQuestions', { count: selectedQuestions.length }) }}
                  </span>
                  <div class="flex items-center gap-2">
                    <USelect
                      v-model="selectedSection"
                      :items="sectionOptions"
                      :placeholder="t('test.edit.assignToSection')"
                      size="sm"
                    />
                    <UButton
                      color="primary"
                      size="sm"
                      :disabled="!selectedSection"
                      @click="assignQuestionsToSection"
                    >
                      {{ t('test.edit.assign') }}
                    </UButton>
                  </div>
                </div>
              </div>
            </div>
          </UCard>

          <!-- Разделы -->
          <UCard>
            <template #header>
              <div class="flex items-center justify-between">
                <h3 class="font-semibold">{{ t('test.edit.sections') }}</h3>
                <TestModalAddSectionModal @section-added="handleSectionAdded" />
              </div>
            </template>
            
            <div class="space-y-4">
              <div
                v-for="section in formData.sections"
                :key="section.id"
                class="border rounded-lg p-4"
              >
                <div class="flex items-center justify-between mb-3">
                  <div class="flex items-center gap-2">
                    <h4 class="font-medium">{{ section.title }}</h4>
                    <UBadge
                      color="neutral"
                      size="sm"
                    >
                      {{ getQuestionsInSection(section.id).length }} {{ t('test.edit.questions') }}
                    </UBadge>
                  </div>
                  <div class="flex items-center gap-1">
                    <UButton
                      variant="ghost"
                      size="sm"
                      @click="editSection(section)"
                    >
                      <UIcon name="i-heroicons-pencil" class="w-4 h-4" />
                    </UButton>
                    <UButton
                      variant="ghost"
                      size="sm"
                      color="error"
                      @click="deleteSection(section.id)"
                    >
                      <UIcon name="i-heroicons-trash" class="w-4 h-4" />
                    </UButton>
                  </div>
                </div>

                <p class="text-sm text-gray-600 dark:text-gray-400 mb-3">
                  {{ section.description }}
                </p>

                <!-- Вопросы в разделе -->
                <div class="space-y-2">
                  <div
                    v-for="question in getQuestionsInSection(section.id)"
                    :key="question.id"
                    class="flex items-center gap-2 p-2 bg-gray-50 dark:bg-gray-800 rounded"
                  >
                    <span class="text-sm flex-1">
                      {{ question.title }}
                    </span>
                    <UButton
                      variant="ghost"
                      size="xs"
                      color="error"
                      @click="removeQuestionFromSection(section.id, question.id)"
                    >
                      <UIcon name="i-heroicons-x-mark" class="w-3 h-3" />
                    </UButton>
                  </div>
                </div>
              </div>
            </div>
          </UCard>
        </div>
      </div>
    </div>

    <!-- Модальные окна редактирования -->
    <TestModalEditQuestionModal
      v-if="editingQuestion"
      :question="editingQuestion"
      @question-updated="handleQuestionUpdated"
    />
    
    <TestModalEditSectionModal
      v-if="editingSection"
      :section="editingSection"
      @section-updated="handleSectionUpdated"
    />
  </div>
</template>

<script setup lang="ts">
const { t } = useI18n()
const editTestStore = useEditTestStore()

interface Props {
  test?: Test
  isEditing?: boolean
}

const props = withDefaults(defineProps<Props>(), {
  test: undefined,
  isEditing: false
})

const emit = defineEmits<{
  save: [test: Test]
  cancel: []
}>()

// Состояние
const isSaving = ref(false)
const selectedQuestions = ref<string[]>([])
const selectedSection = ref<string>('')
const editingQuestion = ref<TestQuestion | null>(null)
const editingSection = ref<TestSection | null>(null)

// Фильтры вопросов
const questionFilters = ref({
  difficulty: null as string | null,
  search: ''
})

// Форма теста
const formData = ref({
  title: '',
  description: '',
  image: '',
  deadline: '',
  timeLimit: '',
  randomizeQuestions: false,
  randomizeAnswers: false,
  difficultyDistribution: {
    easy: 40,
    medium: 50,
    hard: 10
  },
  sections: [] as TestSection[],
  questions: [] as TestQuestion[],
  questionSectionLinks: [] as QuestionSectionLink[]
})

// Исправляю инициализация formData через defaultFormData
const defaultFormData = {
  title: '',
  description: '',
  image: '',
  deadline: '',
  timeLimit: '',
  randomizeQuestions: false,
  randomizeAnswers: false,
  difficultyDistribution: { easy: 40, medium: 50, hard: 10 },
  sections: [] as TestSection[],
  questions: [] as TestQuestion[],
  questionSectionLinks: [] as QuestionSectionLink[]
}

// Вычисляемые свойства
const hasTestData = computed(() => {
  return formData.value.title.trim() || 
         formData.value.questions.length > 0 || 
         formData.value.sections.length > 0
})

const filteredQuestions = computed(() => {
  let questions = formData.value.questions

  if (questionFilters.value.difficulty) {
    questions = questions.filter(q => q.difficulty === questionFilters.value.difficulty)
  }

  if (questionFilters.value.search) {
    const search = questionFilters.value.search.toLowerCase()
    questions = questions.filter(q => 
      q.title.toLowerCase().includes(search) ||
      q.description?.toLowerCase().includes(search)
    )
  }

  return questions
})

const sectionOptions = computed(() => 
  formData.value.sections.map(section => ({
    label: section.title,
    value: section.id
  }))
)

const difficultyOptions = computed(() => [
  { label: t('test.edit.allDifficulties'), value: null },
  { label: t('question.difficulties.easy'), value: 'easy' },
  { label: t('question.difficulties.medium'), value: 'medium' },
  { label: t('question.difficulties.hard'), value: 'hard' }
])

// Инициализация
onMounted(() => {
  // Загружаем данные из store если есть
  if (editTestStore.currentTest) {
    const storedTest = editTestStore.currentTest
    formData.value = { 
      ...defaultFormData, 
      title: storedTest.title,
      description: storedTest.description || '',
      image: storedTest.image || '',
      deadline: storedTest.deadline || '',
      timeLimit: storedTest.timeLimit ? String(storedTest.timeLimit) : '',
      randomizeQuestions: storedTest.randomizeQuestions || false,
      randomizeAnswers: storedTest.randomizeAnswers || false,
      difficultyDistribution: { 
        easy: storedTest.difficultyDistribution?.easy || 40,
        medium: storedTest.difficultyDistribution?.medium || 50,
        hard: storedTest.difficultyDistribution?.hard || 10
      },
      sections: (storedTest.sections as any).map((section: any) => ({
        id: section.id,
        title: section.title,
        description: section.description
      })),
      questions: (storedTest.questions as any).map((question: any) => ({
        id: question.id,
        title: question.title,
        description: question.description,
        difficulty: question.difficulty,
        points: question.points,
        image: question.image,
        answers: question.answers.map((answer: any) => ({
          id: answer.id,
          text: answer.text,
          description: answer.description
        })),
        correctAnswerIds: [...question.correctAnswerIds],
        explanation: question.explanation
      })),
      questionSectionLinks: storedTest.questionSectionLinks ? 
        (storedTest.questionSectionLinks as any).map((link: any) => ({
          questionId: link.questionId,
          sectionId: link.sectionId
        })) : 
        // Обратная совместимость: создаем связи из старой структуры
        (storedTest.sections as any).flatMap((section: any) => 
          (section.questions || []).map((questionId: string) => ({
            questionId,
            sectionId: section.id
          }))
        )
    }
  } else if (props.test) {
    formData.value = { 
      ...defaultFormData, 
      ...props.test, 
      description: props.test.description || '',
      timeLimit: props.test.timeLimit ? String(props.test.timeLimit) : '',
      questionSectionLinks: props.test.questionSectionLinks || []
    }
  } else {
    formData.value = { ...defaultFormData }
  }
})

// Автосохранение при изменении данных
watch(formData, (newData) => {
  if (hasTestData.value) {
    const test: Test = {
      id: props.test?.id || `test-${Date.now()}`,
      title: newData.title,
      description: newData.description,
      image: newData.image,
      deadline: newData.deadline || undefined,
      timeLimit: newData.timeLimit ? parseInt(newData.timeLimit) : undefined,
      randomizeQuestions: newData.randomizeQuestions,
      randomizeAnswers: newData.randomizeAnswers,
      difficultyDistribution: newData.difficultyDistribution,
      sections: newData.sections,
      questions: newData.questions,
      questionSectionLinks: newData.questionSectionLinks,
      author: props.test?.author || {
        id: 'current-user',
        name: 'Current User',
        email: 'user@example.com',
        picture: '',
        role: 'user'
      },
      createdAt: props.test?.createdAt || new Date().toISOString(),
      updatedAt: new Date().toISOString()
    }
    editTestStore.setCurrentTest(test)
  }
}, { deep: true })

// Методы
const getDifficultyColor = (difficulty: string) => {
  switch (difficulty) {
    case 'easy': return 'success'
    case 'medium': return 'warning'
    case 'hard': return 'error'
    default: return 'neutral'
  }
}

const getQuestionById = (id: string) => {
  return formData.value.questions.find(q => q.id === id)
}

const getQuestionSectionLink = (questionId: string) => {
  return formData.value.questionSectionLinks.find(link => link.questionId === questionId)
}

const getSectionById = (sectionId: string) => {
  return formData.value.sections.find(s => s.id === sectionId)
}

const getQuestionsInSection = (sectionId: string) => {
  return formData.value.questions.filter(q => getQuestionSectionLink(q.id)?.sectionId === sectionId)
}

// Исправленный чекбокс для выбора вопросов
function toggleQuestionSelection(id: string, checked: boolean) {
  if (checked) {
    if (!selectedQuestions.value.includes(id)) selectedQuestions.value.push(id)
  } else {
    selectedQuestions.value = selectedQuestions.value.filter(qid => qid !== id)
  }
}

const updateSelectedQuestions = () => {
  // Обновление выбранных вопросов
}

const editQuestion = (question: TestQuestion) => {
  editingQuestion.value = question
}

const deleteQuestion = (questionId: string) => {
  // Удаляем все связи вопроса с секциями
  formData.value.questionSectionLinks = formData.value.questionSectionLinks.filter(
    link => link.questionId !== questionId
  )
  
  // Удаляем вопрос из банка
  formData.value.questions = formData.value.questions.filter(q => q.id !== questionId)
}

const editSection = (section: TestSection) => {
  editingSection.value = section
}

const deleteSection = (sectionId: string) => {
  // Удаляем все связи с этой секцией
  formData.value.questionSectionLinks = formData.value.questionSectionLinks.filter(
    link => link.sectionId !== sectionId
  )
  
  // Удаляем секцию
  formData.value.sections = formData.value.sections.filter(s => s.id !== sectionId)
}

const assignQuestionsToSection = () => {
  if (!selectedSection.value) return
  
  const section = formData.value.sections.find(s => s.id === selectedSection.value)
  if (!section) return
  
  // Добавляем связи вопросов с секцией (без дублирования)
  selectedQuestions.value.forEach(questionId => {
    // Удаляем существующую связь с этой секцией
    formData.value.questionSectionLinks = formData.value.questionSectionLinks.filter(
      link => !(link.questionId === questionId && link.sectionId === selectedSection.value)
    )
    
    // Добавляем новую связь
    formData.value.questionSectionLinks.push({
      questionId,
      sectionId: selectedSection.value
    })
  })
  
  // Очищаем выбор
  selectedQuestions.value = []
  selectedSection.value = ''
}

const removeQuestionFromSection = (sectionId: string, questionId: string) => {
  formData.value.questionSectionLinks = formData.value.questionSectionLinks.filter(
    link => !(link.questionId === questionId && link.sectionId === sectionId)
  )
}

const saveTest = async () => {
  isSaving.value = true
  
  try {
    // Валидация
    if (!formData.value.title.trim()) {
      throw new Error(t('test.edit.errors.titleRequired'))
    }
    
    // Создание объекта теста
    const test: Test = {
      id: props.test?.id || `test-${Date.now()}`,
      title: formData.value.title,
      description: formData.value.description,
      image: formData.value.image,
      deadline: formData.value.deadline || undefined,
      timeLimit: formData.value.timeLimit ? parseInt(formData.value.timeLimit) : undefined,
      randomizeQuestions: formData.value.randomizeQuestions,
      randomizeAnswers: formData.value.randomizeAnswers,
      difficultyDistribution: formData.value.difficultyDistribution,
      sections: formData.value.sections,
      questions: formData.value.questions,
      questionSectionLinks: formData.value.questionSectionLinks,
      author: props.test?.author || {
        id: 'current-user',
        name: 'Current User',
        email: 'user@example.com',
        picture: '',
        role: 'user'
      },
      createdAt: props.test?.createdAt || new Date().toISOString(),
      updatedAt: new Date().toISOString()
    }
    
    emit('save', test)
  } catch (error) {
    console.error('Error saving test:', error)
  } finally {
    isSaving.value = false
  }
}

const handleCancel = () => {
  // Очищаем store при отмене
  editTestStore.clearTest()
  emit('cancel')
}

// Методы для экспорта/импорта
const exportTest = () => {
  try {
    const json = editTestStore.exportTest()
    
    // Создаем blob и скачиваем файл
    const blob = new Blob([json], { type: 'application/json' })
    const url = URL.createObjectURL(blob)
    const a = document.createElement('a')
    a.href = url
    a.download = `test-${formData.value.title || 'export'}.json`
    document.body.appendChild(a)
    a.click()
    document.body.removeChild(a)
    URL.revokeObjectURL(url)
  } catch (error) {
    console.error('Error exporting test:', error)
  }
}

// Методы для распределения сложности
const resetDifficultyDistribution = () => {
  formData.value.difficultyDistribution = {
    easy: 40,
    medium: 50,
    hard: 10
  }
}

// Функция для перетаскивания точек с учетом ограничений
let dragging: null | 'easy' | 'medium' = null;
let sliderRect: DOMRect | null = null;

const startDragging = (difficulty: 'easy' | 'medium', event: MouseEvent) => {
  event.preventDefault();
  dragging = difficulty;
  sliderRect = (event.target as HTMLElement).closest('.relative.h-8')?.getBoundingClientRect() || null;
  document.addEventListener('mousemove', handleDragMove);
  document.addEventListener('mouseup', stopDragging);
};

const handleDragMove = (e: MouseEvent) => {
  if (!dragging || !sliderRect) return;
  const x = e.clientX - sliderRect.left;
  const percent = Math.round(Math.max(0, Math.min(100, (x / sliderRect.width) * 100)));
  const { easy, medium } = formData.value.difficultyDistribution;

  if (dragging === 'easy') {
    // Левая точка: позиция = easy
    // Тяжелая секция остается неизменной
    const hard = 100 - easy - medium;
    const maxEasy = 100 - hard;
    const newEasy = Math.max(0, Math.min(percent, maxEasy));
    const newMedium = maxEasy - newEasy;
    formData.value.difficultyDistribution.easy = newEasy;
    formData.value.difficultyDistribution.medium = newMedium;
  } else if (dragging === 'medium') {
    // Средняя точка: позиция = easy + medium
    const newMedium = Math.max(0, Math.min(percent - easy, 100 - easy));
    formData.value.difficultyDistribution.medium = newMedium;
    // hard вычисляется автоматически как остаток
  }
};

const stopDragging = () => {
  dragging = null;
  sliderRect = null;
  document.removeEventListener('mousemove', handleDragMove);
  document.removeEventListener('mouseup', stopDragging);
};

// Методы для обработки событий модальных окон
const handleQuestionAdded = (question: TestQuestion) => {
  formData.value.questions.push(question)
}

const handleSectionAdded = (section: TestSection) => {
  formData.value.sections.push(section)
}

// Методы для импорта теста
const handleImportTest = (jsonString: string) => {
  try {
    const importedTest = editTestStore.importTest(jsonString)
    formData.value = {
      ...defaultFormData,
      ...importedTest,
      description: importedTest.description || '',
      timeLimit: importedTest.timeLimit ? String(importedTest.timeLimit) : ''
    }
  } catch (error) {
    console.error('Error importing test:', error)
    // Здесь можно показать уведомление об ошибке
  }
}

const handleImportCancel = () => {
  // Действие при отмене импорта
}

const handleQuestionUpdated = (updatedQuestion: TestQuestion) => {
  // Обновляем вопрос в списке
  const index = formData.value.questions.findIndex(q => q.id === updatedQuestion.id)
  if (index !== -1) {
    formData.value.questions[index] = updatedQuestion
  }
  editingQuestion.value = null
}

const handleSectionUpdated = (updatedSection: TestSection) => {
  // Обновляем секцию в списке
  const index = formData.value.sections.findIndex(s => s.id === updatedSection.id)
  if (index !== -1) {
    formData.value.sections[index] = updatedSection
  }
  editingSection.value = null
}
</script>

<style scoped>
/* Стили для слайдеров */
.slider-multi::-webkit-slider-thumb {
  appearance: none;
  height: 20px;
  width: 20px;
  border-radius: 50%;
  background: #10b981;
  cursor: pointer;
  border: 2px solid #ffffff;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
}

.slider-multi::-moz-range-thumb {
  height: 20px;
  width: 20px;
  border-radius: 50%;
  background: #10b981;
  cursor: pointer;
  border: 2px solid #ffffff;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
}

/* Темная тема */
.dark .slider-multi::-webkit-slider-thumb {
  border: 2px solid #1f2937;
}

.dark .slider-multi::-moz-range-thumb {
  border: 2px solid #1f2937;
}
</style>
