<template>
  <div class="min-h-screen p-4">
    <div class="flex flex-col items-center justify-center gap-6 py-8">
      <h1 class="font-bold text-2xl text-(--ui-primary)">
        {{ t('hello') }}
      </h1>

      <SettingsLanguageSwitch />

      <!-- Демо теста -->
      <div class="w-full max-w-4xl">
        <UCard class="mb-6">
          <template #header>
            <h3 class="font-semibold">🧪 Демонстрация прохождения теста</h3>
          </template>
          <div class="space-y-4">
            <p class="text-gray-600 dark:text-gray-400">
              Протестируйте функциональность прохождения теста с автосохранением, безопасной передачей данных и навигацией между разделами.
            </p>
            <UButton
              color="primary"
              @click="$router.push('/test-demo')"
            >
              <UIcon name="i-heroicons-play" class="w-4 h-4 mr-2" />
              Запустить демо-тест
            </UButton>
          </div>
        </UCard>
      </div>

      <!-- Timer Examples -->
      <div class="w-full max-w-4xl space-y-6">
        <h2 class="text-xl font-semibold text-center">{{ t('home.timerExamples') }}</h2>
        
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          <!-- Countdown with Deadline -->
          <UCard>
            <template #header>
              <h3 class="font-medium">{{ t('home.countdownDeadline') }}</h3>
            </template>
            <TestTimer
              :timer="{
                mode: 'countdown',
                deadline: '2024-12-31T23:59:59Z',
                isExpired: false
              }"
              :show-warning="true"
              :warning-threshold="300"
            />
          </UCard>

          <!-- Countdown with Time Limit -->
          <UCard>
            <template #header>
              <h3 class="font-medium">{{ t('home.countdownTimeLimit') }}</h3>
            </template>
            <TestTimer
              :timer="{
                mode: 'countdown',
                timeLimit: 3600,
                isExpired: false
              }"
              :show-warning="true"
              :warning-threshold="300"
              :start-time="startTime"
            />
          </UCard>

          <!-- Current Time -->
          <UCard>
            <template #header>
              <h3 class="font-medium">{{ t('home.currentTime') }}</h3>
            </template>
            <TestTimer
              :timer="{
                mode: 'time',
                isExpired: false
              }"
              :show-warning="false"
            />
          </UCard>

          <!-- Expired Timer -->
          <UCard>
            <template #header>
              <h3 class="font-medium">{{ t('home.expiredTimer') }}</h3>
            </template>
            <TestTimer
              :timer="{
                mode: 'countdown',
                deadline: '2024-01-01T00:00:00Z',
                isExpired: true
              }"
              :show-warning="false"
            />
          </UCard>

          <!-- Warning Active -->
          <UCard>
            <template #header>
              <h3 class="font-medium">{{ t('home.warningActive') }}</h3>
            </template>
            <TestTimer
              :timer="{
                mode: 'countdown',
                deadline: '2024-12-31T23:59:59Z',
                isExpired: false
              }"
              :show-warning="true"
              :warning-threshold="3600"
            />
          </UCard>

          <!-- No Warning -->
          <UCard>
            <template #header>
              <h3 class="font-medium">{{ t('home.noWarning') }}</h3>
            </template>
            <TestTimer
              :timer="{
                mode: 'countdown',
                deadline: '2024-12-31T23:59:59Z',
                isExpired: false
              }"
              :show-warning="false"
            />
          </UCard>
        </div>
      </div>

      <!-- Question Examples -->
      <div class="w-full max-w-4xl space-y-6">
        <h2 class="text-xl font-semibold text-center">{{ t('home.questionExamples') }}</h2>
        
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <!-- Single Choice Question -->
          <UCard>
            <template #header>
              <h3 class="font-medium">{{ t('home.singleChoiceQuestion') }}</h3>
            </template>
            <TestQuestion
              :question="singleChoiceQuestion"
              :variant="'default'"
              :show-answers="false"
              :show-explanation="false"
              @answer="handleQuestionAnswer"
            />
          </UCard>

          <!-- Multiple Choice Question -->
          <UCard>
            <template #header>
              <h3 class="font-medium">{{ t('home.multipleChoiceQuestion') }}</h3>
            </template>
            <TestQuestion
              :question="multipleChoiceQuestion"
              :variant="'default'"
              :show-answers="false"
              :show-explanation="false"
              @answer="handleQuestionAnswer"
            />
          </UCard>

          <!-- Question with Answers -->
          <UCard>
            <template #header>
              <h3 class="font-medium">{{ t('home.questionWithAnswers') }}</h3>
            </template>
            <TestQuestion
              :question="singleChoiceQuestion"
              :variant="'preview'"
              :show-answers="true"
              :show-explanation="true"
              :user-answer="{
                questionId: '1',
                answerIds: ['2'],
                timeSpent: 30
              }"
              @answer="handleQuestionAnswer"
            />
          </UCard>

          <!-- Question with Image -->
          <UCard>
            <template #header>
              <h3 class="font-medium">{{ t('home.questionWithImage') }}</h3>
            </template>
            <TestQuestion
              :question="questionWithImage"
              :variant="'default'"
              :show-answers="false"
              :show-explanation="false"
              @answer="handleQuestionAnswer"
            />
          </UCard>
        </div>
      </div>

      <!-- Test Creation Example -->
      <div class="w-full max-w-6xl space-y-6">
        <h2 class="text-xl font-semibold text-center">{{ t('home.testCreationExample') }}</h2>
        
        <div class="grid grid-cols-1 xl:grid-cols-2 gap-6">
          <!-- Question Creation Form -->
          <UCard>
            <template #header>
              <h3 class="font-medium">{{ t('home.createQuestionForm') }}</h3>
            </template>
            <div class="space-y-4">
              <!-- Question Edit -->
              <TestQuestionEdit
                :question="questionFormData"
                :is-saving="isSaving"
                @save="handleQuestionSave"
                @cancel="handleQuestionCancel"
              />
            </div>
          </UCard>

          <!-- JSON Preview -->
          <UCard>
            <template #header>
              <div class="flex items-center justify-between">
                <h3 class="font-medium">{{ t('home.jsonPreview') }}</h3>
                <UButton
                  variant="outline"
                  size="sm"
                  @click="copyToClipboard"
                >
                  <UIcon name="i-heroicons-clipboard" class="w-4 h-4" />
                  <span class="hidden sm:inline">{{ t('home.copyJson') }}</span>
                </UButton>
              </div>
            </template>
            <div class="space-y-4">
              <!-- Questions JSON -->
              <div>
                <h4 class="text-sm font-semibold mb-2">{{ t('home.questionsJson') }}</h4>
                <pre class="bg-gray-50 dark:bg-gray-800 p-3 rounded text-xs overflow-auto max-h-64">{{ questionsJson }}</pre>
              </div>
            </div>
          </UCard>
        </div>
      </div>

      <!-- Test Navigation Example -->
      <div class="w-full max-w-4xl space-y-6">
        <h2 class="text-xl font-semibold text-center">Test Navigation Example</h2>
        
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <!-- Navigation with Timer -->
          <UCard>
            <template #header>
              <h3 class="font-medium">Navigation with Timer</h3>
            </template>
            <TestNavigation
              :navigation="mockNavigation"
              :timer="mockTimer"
              :show-warning="true"
              :warning-threshold="300"
              @section-change="handleSectionChange"
              @question-change="handleQuestionChange"
              @finish-test="handleFinishTest"
            />
          </UCard>

          <!-- Navigation without Timer -->
          <UCard>
            <template #header>
              <h3 class="font-medium">Navigation without Timer</h3>
            </template>
            <TestNavigation
              :navigation="mockNavigation"
              @section-change="handleSectionChange"
              @question-change="handleQuestionChange"
              @finish-test="handleFinishTest"
            />
          </UCard>
        </div>
      </div>

      <!-- SVG Number Examples -->
      <div class="w-full max-w-4xl space-y-6">
        <h2 class="text-xl font-semibold text-center">SVG Number Examples</h2>
        
        <UCard>
          <template #header>
            <h3 class="font-medium">Different Sizes and Styles</h3>
          </template>
          <div class="space-y-4">
            <div class="flex items-center gap-4">
              <div class="flex items-center gap-2">
                <span class="text-sm font-medium">XS:</span>
                <CommonSvgNumber :number="1" size="xs" :show-circle="false" />
                <CommonSvgNumber :number="5" size="xs" :show-circle="false" />
                <CommonSvgNumber :number="10" size="xs" :show-circle="false" />
              </div>
            </div>
            <div class="flex items-center gap-4">
              <div class="flex items-center gap-2">
                <span class="text-sm font-medium">SM:</span>
                <CommonSvgNumber :number="1" size="sm" :show-circle="false" />
                <CommonSvgNumber :number="5" size="sm" :show-circle="false" />
                <CommonSvgNumber :number="10" size="sm" :show-circle="false" />
              </div>
            </div>
            <div class="flex items-center gap-4">
              <div class="flex items-center gap-2">
                <span class="text-sm font-medium">MD:</span>
                <CommonSvgNumber :number="1" size="md" :show-circle="false" />
                <CommonSvgNumber :number="5" size="md" :show-circle="false" />
                <CommonSvgNumber :number="10" size="md" :show-circle="false" />
              </div>
            </div>
            <div class="flex items-center gap-4">
              <div class="flex items-center gap-2">
                <span class="text-sm font-medium">LG:</span>
                <CommonSvgNumber :number="1" size="lg" :show-circle="false" />
                <CommonSvgNumber :number="5" size="lg" :show-circle="false" />
                <CommonSvgNumber :number="10" size="lg" :show-circle="false" />
              </div>
            </div>
            <div class="flex items-center gap-4">
              <div class="flex items-center gap-2">
                <span class="text-sm font-medium">With Circle:</span>
                <CommonSvgNumber :number="1" size="md" :show-circle="true" />
                <CommonSvgNumber :number="5" size="md" :show-circle="true" />
                <CommonSvgNumber :number="10" size="md" :show-circle="true" />
              </div>
            </div>
          </div>
        </UCard>
      </div>

      <!-- Test Creation Example -->
      <div class="w-full max-w-7xl space-y-6">
        <h2 class="text-xl font-semibold text-center">Test Creation Example</h2>
        <div class="flex justify-center mb-4">
          <UButton
            to="/test/edit/new"
            color="primary"
            size="lg"
            icon="i-heroicons-plus"
          >
            {{ t('test.edit.createTitle') }}
          </UButton>
        </div>
        <UCard>
          <template #header>
            <h3 class="font-medium">Test Editor</h3>
          </template>
          <div class="h-96 overflow-y-auto">
            <TestEdit
              :test="mockTestForEdit"
              :is-editing="true"
              @save="handleTestSave"
              @cancel="handleTestCancel"
            />
          </div>
        </UCard>
      </div>

      <!-- Test Passing Example -->
      <div class="w-full max-w-7xl space-y-6">
        <h2 class="text-xl font-semibold text-center">Test Passing Example</h2>
        <UCard>
          <template #header>
            <h3 class="font-medium">Test Interface</h3>
          </template>
          <div class="h-96 overflow-y-auto">
            <Test
              :test="mockTestForPass"
              :current-question="mockTestForPass.questions[0]"
              :current-question-index="0"
              :total-questions="mockTestForPass.questions.length"
              :navigation="mockNavigationForPass"
              :timer="mockTimer"
              :user-answers="{}"
              @section-change="handleSectionChange"
              @question-change="handleQuestionChange"
              @answer="handleAnswer"
              @previous="handlePrevious"
              @next="handleNext"
              @finish="handleFinish"
              @exit="handleExit"
            />
          </div>
        </UCard>
      </div>

      <div class="flex items-center gap-2">
        <UButton
          label="Documentation"
          icon="i-lucide-square-play"
          to="https://ui.nuxt.com/getting-started/installation/nuxt"
          target="_blank"
        />

        <UButton
          label="GitHub"
          color="neutral"
          variant="outline"
          icon="i-simple-icons-github"
          to="https://github.com/nuxt/ui"
          target="_blank"
        />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
// Импортируем компоненты для создания вопросов
import TestQuestionEdit from '~/components/test/question/edit.vue'
import TestNavigation from '~/components/test/navigation/index.vue'
import CommonSvgNumber from '~/components/common/SvgNumber.vue'
import TestEdit from '~/components/test/edit.vue'
import Test from '~/components/test/index.vue'

const { t } = useI18n()

// Время начала для демонстрации timeLimit (30 минут назад)
const startTime = Math.floor(Date.now() / 1000) - 1800

// Mock data for test navigation
const mockNavigation: TestNavigation = {
  sections: [
    {
      id: 'section-1',
      title: 'Basic Questions',
      questionCount: 5,
      completedQuestions: 3,
      isCompleted: false
    },
    {
      id: 'section-2',
      title: 'Advanced Questions',
      questionCount: 8,
      completedQuestions: 8,
      isCompleted: true
    },
    {
      id: 'section-3',
      title: 'Final Questions',
      questionCount: 3,
      completedQuestions: 0,
      isCompleted: false
    }
  ],
  currentSection: 0,
  currentQuestion: 2,
  questionStatuses: {
    'question-0': 'success',
    'question-1': 'error',
    'question-2': 'primary',
    'question-3': 'outline',
    'question-4': 'outline'
  }
}

const mockTimer: TestTimer = {
  mode: 'countdown',
  deadline: '2024-12-31T23:59:59Z',
  isExpired: false
}

// Mock data for test creation
const mockTestForEdit: Test = {
  id: 'test-edit-1',
  title: 'Sample Test for Editing',
  description: 'This is a sample test for demonstration of the editor',
  image: 'https://via.placeholder.com/300x200',
  deadline: '2024-12-31T23:59:59Z',
  timeLimit: 60,
  randomizeQuestions: true,
  randomizeAnswers: false,
  difficultyDistribution: {
    easy: 40,
    medium: 50,
    hard: 10
  },
  sections: [
    {
      id: 'section-1',
      title: 'Basic Questions',
      description: 'Fundamental concepts',
      questions: ['question-1', 'question-2']
    },
    {
      id: 'section-2',
      title: 'Advanced Questions',
      description: 'Complex scenarios',
      questions: ['question-3']
    }
  ],
  questions: [
    {
      id: 'question-1',
      title: 'What is 2 + 2?',
      description: 'Basic arithmetic',
      difficulty: 'easy',
      points: 1,
      answers: [
        { id: 'answer-1', text: '3' },
        { id: 'answer-2', text: '4' },
        { id: 'answer-3', text: '5' }
      ],
      correctAnswerIds: ['answer-2']
    },
    {
      id: 'question-2',
      title: 'Which programming languages are object-oriented?',
      description: 'Select all that apply',
      difficulty: 'medium',
      points: 2,
      answers: [
        { id: 'answer-4', text: 'Java' },
        { id: 'answer-5', text: 'Python' },
        { id: 'answer-6', text: 'C++' },
        { id: 'answer-7', text: 'Assembly' }
      ],
      correctAnswerIds: ['answer-4', 'answer-5', 'answer-6']
    },
    {
      id: 'question-3',
      title: 'What is the time complexity of binary search?',
      description: 'Algorithm analysis',
      difficulty: 'hard',
      points: 2,
      answers: [
        { id: 'answer-8', text: 'O(n)' },
        { id: 'answer-9', text: 'O(log n)' },
        { id: 'answer-10', text: 'O(n²)' }
      ],
      correctAnswerIds: ['answer-9']
    }
  ],
  author: {
    id: 'user-1',
    name: 'John Doe',
    email: 'john@example.com',
    picture: 'https://via.placeholder.com/100x100',
    role: 'user'
  },
  createdAt: '2024-01-01T00:00:00Z',
  updatedAt: '2024-01-01T00:00:00Z'
}

// Mock data for test passing
const mockTestForPass: Test = {
  id: 'test-pass-1',
  title: 'Sample Test for Passing',
  description: 'This is a sample test for demonstration of the passing interface',
  image: 'https://via.placeholder.com/300x200',
  deadline: '2024-12-31T23:59:59Z',
  timeLimit: 30,
  randomizeQuestions: false,
  randomizeAnswers: false,
  difficultyDistribution: {
    easy: 50,
    medium: 30,
    hard: 20
  },
  sections: [
    {
      id: 'section-1',
      title: 'All Questions',
      description: 'All test questions',
      questions: ['question-1', 'question-2', 'question-3']
    }
  ],
  questions: [
    {
      id: 'question-1',
      title: 'What is the capital of France?',
      description: 'Geography question',
      difficulty: 'easy',
      points: 1,
      answers: [
        { id: 'answer-1', text: 'London' },
        { id: 'answer-2', text: 'Paris' },
        { id: 'answer-3', text: 'Berlin' }
      ],
      correctAnswerIds: ['answer-2']
    },
    {
      id: 'question-2',
      title: 'Which of these are JavaScript frameworks?',
      description: 'Web development',
      difficulty: 'medium',
      points: 2,
      answers: [
        { id: 'answer-4', text: 'React' },
        { id: 'answer-5', text: 'Vue' },
        { id: 'answer-6', text: 'Angular' },
        { id: 'answer-7', text: 'Django' }
      ],
      correctAnswerIds: ['answer-4', 'answer-5', 'answer-6']
    },
    {
      id: 'question-3',
      title: 'What is the primary color?',
      description: 'Color theory',
      difficulty: 'easy',
      points: 1,
      answers: [
        { id: 'answer-8', text: 'Red' },
        { id: 'answer-9', text: 'Blue' },
        { id: 'answer-10', text: 'Green' }
      ],
      correctAnswerIds: ['answer-8']
    }
  ],
  author: {
    id: 'user-1',
    name: 'John Doe',
    email: 'john@example.com',
    picture: 'https://via.placeholder.com/100x100',
    role: 'user'
  },
  createdAt: '2024-01-01T00:00:00Z',
  updatedAt: '2024-01-01T00:00:00Z'
}

const mockNavigationForPass: TestNavigation = {
  sections: [
    {
      id: 'section-1',
      title: 'All Questions',
      questionCount: 3,
      completedQuestions: 1,
      isCompleted: false
    }
  ],
  currentSection: 0,
  currentQuestion: 0,
  questionStatuses: {
    'question-1': 'primary',
    'question-2': 'outline',
    'question-3': 'outline'
  }
}

// Примеры вопросов
const questionWithImage: TestQuestion = {
  id: 'question-image',
  title: 'Что изображено на картинке?',
  description: 'Посмотрите внимательно на изображение и выберите правильный ответ',
  difficulty: 'medium',
  points: 8,
  image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=300&fit=crop',
  answers: [
    { id: 'answer-1', description: 'Горы' },
    { id: 'answer-2', description: 'Озеро' },
    { id: 'answer-3', description: 'Лес' },
    { id: 'answer-4', description: 'Пустыня' }
  ],
  correctAnswerIds: ['answer-1'],
  explanation: 'На изображении показаны горные вершины'
}

const singleChoiceQuestion: TestQuestion = {
  id: 'question-single',
  title: 'Столица России?',
  description: 'Выберите один правильный ответ',
  difficulty: 'easy',
  points: 5,
  answers: [
    { id: 'answer-1', description: 'Санкт-Петербург' },
    { id: 'answer-2', description: 'Москва' },
    { id: 'answer-3', description: 'Новосибирск' },
    { id: 'answer-4', description: 'Екатеринбург' }
  ],
  correctAnswerIds: ['answer-2'],
  explanation: 'Столица России - Москва'
}

const multipleChoiceQuestion: TestQuestion = {
  id: 'question-multiple',
  title: 'Какие цвета есть в радуге?',
  description: 'Выберите все правильные ответы',
  difficulty: 'medium',
  points: 10,
  answers: [
    { id: 'answer-1', description: 'Красный' },
    { id: 'answer-2', description: 'Зеленый' },
    { id: 'answer-3', description: 'Синий' },
    { id: 'answer-4', description: 'Черный' },
    { id: 'answer-5', description: 'Желтый' }
  ],
  correctAnswerIds: ['answer-1', 'answer-2', 'answer-3', 'answer-5'],
  explanation: 'В радуге есть красный, оранжевый, желтый, зеленый, голубой, синий и фиолетовый цвета'
}

// Данные для создания вопроса
const questionFormData = ref<Partial<TestQuestion>>({
  title: '',
  description: '',
  difficulty: 'easy',
  points: 10,
  answers: [
    { id: '1', description: '' },
    { id: '2', description: '' }
  ],
  correctAnswerIds: ['1'],
  explanation: ''
})

const isSaving = ref(false)
const questions = ref<TestQuestion[]>([])

// Вычисляемые свойства для JSON
const questionsJson = computed(() => {
  return JSON.stringify(questions.value, null, 2)
})

// Обработчики событий
const handleQuestionAnswer = (answer: UserAnswer) => {
  console.log('Question answered:', answer)
}

const handleSectionChange = (sectionIndex: number) => {
  console.log('Section changed:', sectionIndex)
}

const handleQuestionChange = (questionIndex: number) => {
  console.log('Question changed:', questionIndex)
}

const handleFinishTest = () => {
  console.log('Test finished!')
}

const handleTestSave = (test: Test) => {
  console.log('Test saved:', test)
}

const handleTestCancel = () => {
  console.log('Test creation cancelled')
}

const handleAnswer = (answer: UserAnswer) => {
  console.log('Answer submitted:', answer)
}

const handlePrevious = () => {
  console.log('Previous question')
}

const handleNext = () => {
  console.log('Next question')
}

const handleFinish = () => {
  console.log('Test finished')
}

const handleExit = () => {
  console.log('Exited test')
}

const handleQuestionSave = (question: Partial<TestQuestion>) => {
  isSaving.value = true
  console.log('Saving question:', question)
  
  // Имитация сохранения
  setTimeout(() => {
    const newQuestion: TestQuestion = {
      id: `q${Date.now()}`,
      title: question.title || '',
      description: question.description || '',
      difficulty: question.difficulty || 'easy',
      points: question.points || 10,
      image: question.image,
      answers: question.answers || [],
      correctAnswerIds: question.correctAnswerIds || [],
      explanation: question.explanation || ''
    }
    
    questions.value.push(newQuestion)
    
    // Очищаем форму вопроса
    questionFormData.value = {
      title: '',
      description: '',
      difficulty: 'easy',
      points: 10,
      answers: [
        { id: '1', description: '' },
        { id: '2', description: '' }
      ],
      correctAnswerIds: ['1'],
      explanation: ''
    }
    
    isSaving.value = false
  }, 1000)
}

const handleQuestionCancel = () => {
  console.log('Question creation cancelled')
}

const copyToClipboard = async () => {
  try {
    await navigator.clipboard.writeText(JSON.stringify(questions.value, null, 2))
    console.log('JSON copied to clipboard')
  } catch (err) {
    console.error('Failed to copy JSON:', err)
  }
}
</script>
