# Техническое задание
Создай веб/мобильное приложение для создания и прохождения интерактивных тестов с поддержкой разных форматов вопросов.

## Обязательные требования

- Проект должен быть размещён в публичном репозитории на GitHub.
- Обязательно наличие файла `README.md`, содержащего:
    - Краткое описание проекта.
    - Инструкции по установке и запуску.
    - Описание процесса проектирования и разработки.
    - Информацию об уникальных подходах или методологиях, использованных в работе.
    - Обсуждение компромиссов, принятых во время разработки.
    - Описание известных ошибок или проблем в приложении.
    - Объясните почему выбрали этот технический стэк
- Zip-файлы не принимаются
- Убедитесь, что репозиторий публичен
- Все внешние сервисы (external API’s and services) должны быть вызваны с серверной части приложения.
- Убедитесь в работоспособности проекта, если будете деплоить

## Level Requirements

### Уровень 1: Базовый интерфейс

Создай базовый макет веб-приложения с навигацией.  

Реализуй структуру страниц:  

- Интерфейс для добавления вопросов с типами: *один ответ*, *множественный выбор*, *текстовый ответ*.
- Возможность устанавливать баллы за вопрос и правильные ответы.
- Отображение вопросов с вариантами ответов.
- Простая проверка результатов (количество правильных/неправильных ответов)

### Уровень 2: Динамические функции

- Поиск и фильтры:
    - Фильтрация тестов по тегам (например, "математика", "для новичков").
    - Поиск по названиям тестов.
- Пагинация: Разбивка списка тестов на страницы.
- Добавь рейтинг пользователей по набраным баллам или тому подобное

### Уровень 3: Публичный доступ

- Разверните приложение на сервисе хостинга по вашему выбору, обеспечив его публичный доступ. К примеру, [vercel.com](http://vercel.com), railway, digitalocean and etc. **`Если вы пишите мобильное приложение, то достаточно развернуть только серверную часть приложения.`**

### Бонусный уровень:

1. **Персональная статистика**
    - Личный кабинет с графиками прогресса, слабыми темами и достижениями.
2. Используй API/SDK от любого LLM провайдера для генерации тестов на любые темы.
3. Режим "Соревнование": 2+ пользователя одновременно отвечают на одни и те же вопросы с таймером

**`*P.S: Вы не ограничены в своей креативности при выполнений задач!*`**

**`*Не обязательно делать все 100% как в техническом задании. Покажите свою креативность, расскажите нам об этом в README.md❤️*`**

---

# Чтобы сдать работу:

### Заполните форму: https://nfactorialschool.typeform.com/to/rU0mshKZ


# 🗺️ ROADMAP - Приложение для интерактивных тестов

## 📋 TODO List по этапам разработки

### 🏗️ Этап 1: Инфраструктура и базоВот полный, аккуратный и сфокусированный TODO-лист для QuizMaker без лишних разделов, с учётом всех твоих пожеланий, включая профиль с пройденными тестами и алгоритм рандомизации.

---

# QuizMaker

## 1. Авторизация и профиль пользователя

* [ ] Авторизация через Auth0 (`nuxt-auth-utils`)
* [ ] Кнопка «Войти» / «Зарегистрироваться»
* [ ] Страница профиля:

  * [ ] Имя, email, аватар
  * [ ] Список пройденных тестов с:

    * Названием теста
    * Датой прохождения
    * Результатом (балл и %)
    * Временем прохождения
    * Количеством попыток
    * Статусом (пройден / не пройден)
    * Ссылкой на детальный просмотр результатов
  * [ ] Фильтрация и поиск по пройденным тестам
  * [ ] Кнопка «Пройти снова» (если разрешено)
  * [ ] Визуализация прогресса: графики, динамика, лучшие результаты

---

## 2. Конструктор тестов

### 2.1. Общие настройки

* [ ] Название теста
* [ ] Изображение превью
* [ ] Время прохождения
* [ ] Дедлайн
* [ ] Возможность пересдачи и число попыток
* [ ] Порог прохождения (%)
* [ ] Баллы за прохождение
* [ ] Тип теста (обычный / экзамен)
* [ ] Публичность теста
* [ ] Разрешение на комментарии

### 2.2. Структура теста

* [ ] Создание разделов с:

  * Названием
  * Описанием
  * Количеством случайных вопросов
  * Рандомизацией вопросов и ответов
* [ ] Вопросы с:

  * Формулировкой
  * Медиа (изображения, аудио, видео)
  * Типом (один / несколько ответов, свободный текст)
  * Количеством правильных ответов
  * Сложностью (лёгкий / средний / сложный)
  * Баллами
  * Тегами
  * Привязкой к разделу (раздел содержит только ссылку, не хранит вопросы)
  * Объяснением к ответам

### 2.3. Повторное использование

* [ ] Банк вопросов с поиском, фильтрацией, дублированием
* [ ] Темы и категории для организации
* [ ] Глобальные теги

---

## 3. AI-помощник для создания тестов

* [ ] Генерация названия, разделов и вопросов на основе темы или текста
* [ ] Автоматическое распределение сложности, тегов, объяснений
* [ ] Редактирование сгенерированного материала

---

## 4. Прохождение теста

* [ ] Навигация: карта вопросов, таймеры (на тест и по желанию на вопрос)
* [ ] Возможность помечать вопросы, автосохранение прогресса
* [ ] Показ правильных/неправильных ответов после завершения
* [ ] Подсчет результата с учетом сложности, баллов и времени

---

## 5. Статистика и результаты

* [ ] Результаты: баллы, %, время прохождения
* [ ] Графики правильных и неправильных ответов
* [ ] Лидеры: лучший результат и быстрейшее прохождение
* [ ] Аналитика: средний балл, часто ошибаемые вопросы, динамика успеваемости

---

## 6. Поиск и каталог тестов

* [ ] Поиск по названию, автору, тегам, сложности
* [ ] Карточка теста с основными данными (название, превью, автор, сложность, время, дедлайн, рейтинг)

---

## 7. Роли пользователей

* [ ] Пользователь — прохождение тестов
* [ ] Автор — создание и редактирование своих тестов
* [ ] Админ — управление тестами и аналитикой

---

## 8. Импорт / Экспорт

* [ ] Импорт тестов из JSON (название, разделы, вопросы, ответы, сложности, теги, объяснения) с валидацией
* [ ] Импорт сохраняется как черновик
* [ ] Экспорт тестов в PDF (с вопросами и опционально с ответами)
* [ ] Экспорт результатов в CSV/Excel с детальной статистикой
* [ ] Пакетная выгрузка статистики для преподавателей/админов

---

## 9. Алгоритм рандомизации вопросов по сложности

* Соотношение сложности вопросов:

  * Лёгкие — 40% (±5%)
  * Средние — 50% (±5%)
  * Сложные — 10% (±5%)
* При формировании набора вопросов учитывается указанное количество и распределение
* Рандомный выбор вопросов в пределах каждой категории сложности
* При нехватке вопросов в категории перераспределение между оставшимися

---

Если нужно, могу подготовить отдельно разметку для интерфейсов, структуры БД или примеры JSON для импорта/экспорта.
