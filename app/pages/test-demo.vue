<template>
  <div class="min-h-screen p-4 sm:p-6 lg:p-8">
    <div class="max-w-4xl mx-auto">
      <!-- Заголовок -->
      <div class="text-center mb-8">
        <h1 class="text-3xl font-bold mb-4">Демонстрация прохождения теста</h1>
        <p class="text-gray-600 dark:text-gray-400">
          Эта страница демонстрирует функциональность прохождения теста с автосохранением
        </p>
      </div>

      <!-- Информация о функциях -->
      <div class="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        <UCard>
          <template #header>
            <h3 class="font-semibold">🔄 Автосохранение</h3>
          </template>
          <div class="space-y-2">
            <p class="text-sm">• Прогресс сохраняется каждые 5 минут</p>
            <p class="text-sm">• Ответы сохраняются в localStorage</p>
            <p class="text-sm">• Можно продолжить с того места, где остановились</p>
          </div>
        </UCard>

        <UCard>
          <template #header>
            <h3 class="font-semibold">🔒 Безопасность</h3>
          </template>
          <div class="space-y-2">
            <p class="text-sm">• Правильные ответы не передаются на клиент</p>
            <p class="text-sm">• Только текст вопросов и вариантов ответов</p>
            <p class="text-sm">• Результаты вычисляются на сервере</p>
          </div>
        </UCard>

        <UCard>
          <template #header>
            <h3 class="font-semibold">📊 Навигация</h3>
          </template>
          <div class="space-y-2">
            <p class="text-sm">• Переход между разделами</p>
            <p class="text-sm">• Переход между вопросами</p>
            <p class="text-sm">• Отображение прогресса</p>
          </div>
        </UCard>

        <UCard>
          <template #header>
            <h3 class="font-semibold">⏱️ Таймер</h3>
          </template>
          <div class="space-y-2">
            <p class="text-sm">• Обратный отсчет времени</p>
            <p class="text-sm">• Предупреждения о времени</p>
            <p class="text-sm">• Автоматическое завершение</p>
          </div>
        </UCard>
      </div>

      <!-- Кнопки действий -->
      <div class="flex flex-col sm:flex-row gap-4 justify-center">
        <UButton
          color="primary"
          size="lg"
          @click="startMockTest"
        >
          <UIcon name="i-heroicons-play" class="w-5 h-5 mr-2" />
          Начать демо-тест
        </UButton>
        
        <UButton
          variant="outline"
          size="lg"
          @click="clearTestData"
        >
          <UIcon name="i-heroicons-trash" class="w-5 h-5 mr-2" />
          Очистить данные теста
        </UButton>
      </div>

      <!-- Статус теста -->
      <div v-if="testPassStore.hasActiveTest" class="mt-8">
        <UCard>
          <template #header>
            <h3 class="font-semibold">📝 Активный тест</h3>
          </template>
          
          <div class="space-y-4">
            <div class="flex items-center justify-between">
              <span>ID теста:</span>
              <code class="bg-gray-100 dark:bg-gray-800 px-2 py-1 rounded">
                {{ testPassStore.currentTestPass?.testId }}
              </code>
            </div>
            
            <div class="flex items-center justify-between">
              <span>Отвечено вопросов:</span>
              <span class="font-medium">
                {{ testPassStore.answeredQuestionsCount }} / {{ testPassStore.totalQuestions }}
              </span>
            </div>
            
            <div class="flex items-center justify-between">
              <span>Текущий раздел:</span>
              <span class="font-medium">
                {{ (testPassStore.currentTestPass?.currentSectionIndex ?? 0) + 1 }}
              </span>
            </div>
            
            <div class="flex items-center justify-between">
              <span>Текущий вопрос:</span>
              <span class="font-medium">
                {{ (testPassStore.currentTestPass?.currentQuestionIndex ?? 0) + 1 }}
              </span>
            </div>
            
            <div class="flex items-center justify-between">
              <span>Время начала:</span>
              <span class="text-sm text-gray-600">
                {{ formatTime(testPassStore.currentTestPass?.startTime) }}
              </span>
            </div>
            
            <div class="flex items-center justify-between">
              <span>Последнее сохранение:</span>
              <span class="text-sm text-gray-600">
                {{ formatTime(testPassStore.currentTestPass?.lastSaveTime) }}
              </span>
            </div>
            
            <div class="pt-4 border-t">
              <UButton
                color="primary"
                @click="continueTest"
              >
                <UIcon name="i-heroicons-arrow-right" class="w-4 h-4 mr-2" />
                Продолжить тест
              </UButton>
            </div>
          </div>
        </UCard>
      </div>

      <!-- Лог автосохранения -->
      <div v-if="autoSaveLog.length > 0" class="mt-8">
        <UCard>
          <template #header>
            <h3 class="font-semibold">📋 Лог автосохранения</h3>
          </template>
          
          <div class="space-y-2 max-h-40 overflow-y-auto">
            <div
              v-for="(log, index) in autoSaveLog"
              :key="index"
              class="text-sm p-2 bg-gray-50 dark:bg-gray-800 rounded"
            >
              <span class="text-gray-500">{{ formatTime(log.timestamp) }}</span>
              <span class="ml-2">{{ log.message }}</span>
            </div>
          </div>
        </UCard>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useTestPassStore } from '~/stores/testPass'

const router = useRouter()
const testPassStore = useTestPassStore()

// Лог автосохранения для демонстрации
const autoSaveLog = ref<Array<{ timestamp: string; message: string }>>([])

// Форматирование времени
const formatTime = (isoString?: string) => {
  if (!isoString) return 'Неизвестно'
  return new Date(isoString).toLocaleString('ru-RU')
}

// Создание mock теста
const createMockTest = (): Test => {
  return {
    id: 'mock-test-' + Date.now(),
    title: 'Демонстрационный тест по программированию',
    description: 'Тест для демонстрации функциональности прохождения тестов с автосохранением и безопасной передачей данных',
    timeLimit: 60, // 60 минут на прохождение теста
    randomizeQuestions: false,
    randomizeAnswers: false,
    difficultyDistribution: { easy: 30, medium: 50, hard: 20 },
    sections: [
      { 
        id: 'section-1', 
        title: 'Основы программирования', 
        description: 'Базовые концепции программирования' 
      },
      { 
        id: 'section-2', 
        title: 'Веб-разработка', 
        description: 'Технологии веб-разработки' 
      },
      { 
        id: 'section-3', 
        title: 'Фреймворки', 
        description: 'Популярные фреймворки и библиотеки' 
      }
    ],
    questions: [
      // Раздел 1: Основы программирования
      {
        id: 'q1',
        title: 'Что такое переменная в программировании?',
        description: 'Выберите наиболее точное определение',
        difficulty: 'easy',
        points: 1,
        correctAnswersCount: 1,
        answers: [
          { id: 'a1', text: 'Контейнер для хранения данных' },
          { id: 'a2', text: 'Тип данных' },
          { id: 'a3', text: 'Функция' },
          { id: 'a4', text: 'Класс' }
        ]
      },
      {
        id: 'q2',
        title: 'Какие типы циклов существуют в программировании?',
        description: 'Выберите все правильные варианты',
        difficulty: 'medium',
        points: 2,
        correctAnswersCount: 4,
        answers: [
          { id: 'a5', text: 'for' },
          { id: 'a6', text: 'while' },
          { id: 'a7', text: 'do-while' },
          { id: 'a8', text: 'foreach' }
        ]
      },
      {
        id: 'q3',
        title: 'Что такое рекурсия?',
        description: 'Выберите правильное определение',
        difficulty: 'hard',
        points: 3,
        correctAnswersCount: 1,
        answers: [
          { id: 'a9', text: 'Процесс, при котором функция вызывает сама себя' },
          { id: 'a10', text: 'Тип данных' },
          { id: 'a11', text: 'Структура данных' },
          { id: 'a12', text: 'Алгоритм сортировки' }
        ]
      },
      
      // Раздел 2: Веб-разработка
      {
        id: 'q4',
        title: 'Что такое HTML?',
        description: 'Выберите правильное определение',
        difficulty: 'easy',
        points: 1,
        correctAnswersCount: 1,
        answers: [
          { id: 'a13', text: 'Язык разметки гипертекста' },
          { id: 'a14', text: 'Язык программирования' },
          { id: 'a15', text: 'Стили' },
          { id: 'a16', text: 'Скрипт' }
        ]
      },
      {
        id: 'q5',
        title: 'Какие технологии используются в веб-разработке?',
        description: 'Выберите все правильные варианты',
        difficulty: 'medium',
        points: 2,
        correctAnswersCount: 4,
        answers: [
          { id: 'a17', text: 'HTML' },
          { id: 'a18', text: 'CSS' },
          { id: 'a19', text: 'JavaScript' },
          { id: 'a20', text: 'PHP' }
        ]
      },
      
      // Раздел 3: Фреймворки
      {
        id: 'q6',
        title: 'Что такое Vue.js?',
        description: 'Выберите правильное определение',
        difficulty: 'medium',
        points: 2,
        correctAnswersCount: 1,
        answers: [
          { id: 'a21', text: 'JavaScript фреймворк для создания пользовательских интерфейсов' },
          { id: 'a22', text: 'Язык программирования' },
          { id: 'a23', text: 'База данных' },
          { id: 'a24', text: 'Операционная система' }
        ]
      },
      {
        id: 'q7',
        title: 'Какие фреймворки используются в этом проекте?',
        description: 'Выберите все правильные варианты',
        difficulty: 'easy',
        points: 1,
        correctAnswersCount: 2,
        answers: [
          { id: 'a25', text: 'Vue.js' },
          { id: 'a26', text: 'Nuxt.js' },
          { id: 'a27', text: 'React' },
          { id: 'a28', text: 'Angular' }
        ]
      },
      
      // Дополнительные вопросы для раздела 1: Основы программирования
      {
        id: 'q8',
        title: 'Что такое алгоритм?',
        description: 'Выберите правильное определение',
        difficulty: 'easy',
        points: 1,
        correctAnswersCount: 1,
        answers: [
          { id: 'a29', text: 'Последовательность действий для решения задачи' },
          { id: 'a30', text: 'Язык программирования' },
          { id: 'a31', text: 'База данных' },
          { id: 'a32', text: 'Операционная система' }
        ]
      },
      {
        id: 'q9',
        title: 'Какие структуры данных вы знаете?',
        description: 'Выберите все правильные варианты',
        difficulty: 'medium',
        points: 2,
        correctAnswersCount: 4,
        answers: [
          { id: 'a33', text: 'Массив' },
          { id: 'a34', text: 'Список' },
          { id: 'a35', text: 'Стек' },
          { id: 'a36', text: 'Очередь' }
        ]
      },
      {
        id: 'q10',
        title: 'Что такое Big O notation?',
        description: 'Выберите правильное определение',
        difficulty: 'hard',
        points: 3,
        correctAnswersCount: 1,
        answers: [
          { id: 'a37', text: 'Обозначение сложности алгоритма' },
          { id: 'a38', text: 'Тип данных' },
          { id: 'a39', text: 'Язык программирования' },
          { id: 'a40', text: 'Фреймворк' }
        ]
      },
      {
        id: 'q11',
        title: 'Что такое функция?',
        description: 'Выберите правильное определение',
        difficulty: 'easy',
        points: 1,
        correctAnswersCount: 1,
        answers: [
          { id: 'a41', text: 'Блок кода, который выполняет определенную задачу' },
          { id: 'a42', text: 'Переменная' },
          { id: 'a43', text: 'Класс' },
          { id: 'a44', text: 'Модуль' }
        ]
      },
      {
        id: 'q12',
        title: 'Какие парадигмы программирования существуют?',
        description: 'Выберите все правильные варианты',
        difficulty: 'medium',
        points: 2,
        correctAnswersCount: 3,
        answers: [
          { id: 'a45', text: 'Процедурное программирование' },
          { id: 'a46', text: 'Объектно-ориентированное программирование' },
          { id: 'a47', text: 'Функциональное программирование' },
          { id: 'a48', text: 'Машинное программирование' }
        ]
      },
      
      // Дополнительные вопросы для раздела 2: Веб-разработка
      {
        id: 'q13',
        title: 'Что такое CSS?',
        description: 'Выберите правильное определение',
        difficulty: 'easy',
        points: 1,
        correctAnswersCount: 1,
        answers: [
          { id: 'a49', text: 'Язык стилей для оформления веб-страниц' },
          { id: 'a50', text: 'Язык программирования' },
          { id: 'a51', text: 'База данных' },
          { id: 'a52', text: 'Сервер' }
        ]
      },
      {
        id: 'q14',
        title: 'Что такое JavaScript?',
        description: 'Выберите правильное определение',
        difficulty: 'easy',
        points: 1,
        correctAnswersCount: 1,
        answers: [
          { id: 'a53', text: 'Язык программирования для веб-разработки' },
          { id: 'a54', text: 'Язык разметки' },
          { id: 'a55', text: 'Стили' },
          { id: 'a56', text: 'База данных' }
        ]
      },
      {
        id: 'q15',
        title: 'Какие HTTP методы вы знаете?',
        description: 'Выберите все правильные варианты',
        difficulty: 'medium',
        points: 2,
        correctAnswersCount: 4,
        answers: [
          { id: 'a57', text: 'GET' },
          { id: 'a58', text: 'POST' },
          { id: 'a59', text: 'PUT' },
          { id: 'a60', text: 'DELETE' }
        ]
      },
      {
        id: 'q16',
        title: 'Что такое API?',
        description: 'Выберите правильное определение',
        difficulty: 'medium',
        points: 2,
        correctAnswersCount: 1,
        answers: [
          { id: 'a61', text: 'Интерфейс для взаимодействия между приложениями' },
          { id: 'a62', text: 'Язык программирования' },
          { id: 'a63', text: 'База данных' },
          { id: 'a64', text: 'Фреймворк' }
        ]
      },
      {
        id: 'q17',
        title: 'Что такое REST API?',
        description: 'Выберите правильное определение',
        difficulty: 'hard',
        points: 3,
        correctAnswersCount: 1,
        answers: [
          { id: 'a65', text: 'Архитектурный стиль для веб-сервисов' },
          { id: 'a66', text: 'Язык программирования' },
          { id: 'a67', text: 'База данных' },
          { id: 'a68', text: 'Фреймворк' }
        ]
      },
      
      // Дополнительные вопросы для раздела 3: Фреймворки
      {
        id: 'q18',
        title: 'Что такое React?',
        description: 'Выберите правильное определение',
        difficulty: 'medium',
        points: 2,
        correctAnswersCount: 1,
        answers: [
          { id: 'a69', text: 'JavaScript библиотека для создания пользовательских интерфейсов' },
          { id: 'a70', text: 'Язык программирования' },
          { id: 'a71', text: 'База данных' },
          { id: 'a72', text: 'Сервер' }
        ]
      },
      {
        id: 'q19',
        title: 'Что такое Angular?',
        description: 'Выберите правильное определение',
        difficulty: 'medium',
        points: 2,
        correctAnswersCount: 1,
        answers: [
          { id: 'a73', text: 'JavaScript фреймворк от Google' },
          { id: 'a74', text: 'Язык программирования' },
          { id: 'a75', text: 'База данных' },
          { id: 'a76', text: 'Сервер' }
        ]
      },
      {
        id: 'q20',
        title: 'Какие преимущества у фреймворков?',
        description: 'Выберите все правильные варианты',
        difficulty: 'medium',
        points: 2,
        correctAnswersCount: 3,
        answers: [
          { id: 'a77', text: 'Ускорение разработки' },
          { id: 'a78', text: 'Стандартизация кода' },
          { id: 'a79', text: 'Готовые решения' },
          { id: 'a80', text: 'Автоматическое тестирование' }
        ]
      },
      {
        id: 'q21',
        title: 'Что такое Node.js?',
        description: 'Выберите правильное определение',
        difficulty: 'medium',
        points: 2,
        correctAnswersCount: 1,
        answers: [
          { id: 'a81', text: 'Среда выполнения JavaScript на сервере' },
          { id: 'a82', text: 'Язык программирования' },
          { id: 'a83', text: 'База данных' },
          { id: 'a84', text: 'Фреймворк' }
        ]
      },
      {
        id: 'q22',
        title: 'Что такое TypeScript?',
        description: 'Выберите правильное определение',
        difficulty: 'medium',
        points: 2,
        correctAnswersCount: 1,
        answers: [
          { id: 'a85', text: 'Типизированный JavaScript' },
          { id: 'a86', text: 'Язык программирования' },
          { id: 'a87', text: 'База данных' },
          { id: 'a88', text: 'Фреймворк' }
        ]
      }
    ],
    questionSectionLinks: [
      // Раздел 1: Основы программирования (8 вопросов)
      { questionId: 'q1', sectionId: 'section-1' },
      { questionId: 'q2', sectionId: 'section-1' },
      { questionId: 'q3', sectionId: 'section-1' },
      { questionId: 'q8', sectionId: 'section-1' },
      { questionId: 'q9', sectionId: 'section-1' },
      { questionId: 'q10', sectionId: 'section-1' },
      { questionId: 'q11', sectionId: 'section-1' },
      { questionId: 'q12', sectionId: 'section-1' },
      
      // Раздел 2: Веб-разработка (7 вопросов)
      { questionId: 'q4', sectionId: 'section-2' },
      { questionId: 'q5', sectionId: 'section-2' },
      { questionId: 'q13', sectionId: 'section-2' },
      { questionId: 'q14', sectionId: 'section-2' },
      { questionId: 'q15', sectionId: 'section-2' },
      { questionId: 'q16', sectionId: 'section-2' },
      { questionId: 'q17', sectionId: 'section-2' },
      
      // Раздел 3: Фреймворки (7 вопросов)
      { questionId: 'q6', sectionId: 'section-3' },
      { questionId: 'q7', sectionId: 'section-3' },
      { questionId: 'q18', sectionId: 'section-3' },
      { questionId: 'q19', sectionId: 'section-3' },
      { questionId: 'q20', sectionId: 'section-3' },
      { questionId: 'q21', sectionId: 'section-3' },
      { questionId: 'q22', sectionId: 'section-3' }
    ],
    author: {
      id: 'demo-author',
      name: 'Демо Автор',
      email: 'demo@example.com',
      picture: '',
      role: 'user'
    },
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString()
  }
}

// Начать mock тест
const startMockTest = () => {
  const mockTest = createMockTest()
  testPassStore.startTest(mockTest)
  
  // Добавляем запись в лог
  autoSaveLog.value.unshift({
    timestamp: new Date().toISOString(),
    message: `Тест "${mockTest.title}" начат`
  })
  
  // Переходим к тесту
  router.push(`/test/${mockTest.id}`)
}

// Продолжить тест
const continueTest = () => {
  if (testPassStore.currentTestPass) {
    router.push(`/test/${testPassStore.currentTestPass.testId}`)
  }
}

// Очистить данные теста
const clearTestData = () => {
  testPassStore.clearTest()
  autoSaveLog.value = []
  
  // Добавляем запись в лог
  autoSaveLog.value.unshift({
    timestamp: new Date().toISOString(),
    message: 'Данные теста очищены'
  })
}

// Слушаем автосохранение для демонстрации
let originalConsoleLog: typeof console.log

onMounted(() => {
  // Сохраняем оригинальный console.log
  originalConsoleLog = console.log
  
  // Перехватываем console.log для автосохранения
  console.log = (...args) => {
    if (args[0]?.includes?.('🔄 AutoSave')) {
      autoSaveLog.value.unshift({
        timestamp: new Date().toISOString(),
        message: args[0]
      })
      
      // Ограничиваем количество записей в логе
      if (autoSaveLog.value.length > 10) {
        autoSaveLog.value = autoSaveLog.value.slice(0, 10)
      }
    }
    originalConsoleLog.apply(console, args)
  }
})

// Восстанавливаем console.log при размонтировании
onUnmounted(() => {
  if (originalConsoleLog) {
    console.log = originalConsoleLog
  }
})
</script> 