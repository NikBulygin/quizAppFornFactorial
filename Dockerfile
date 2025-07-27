# Многоэтапный Dockerfile для Nuxt.js приложения
FROM node:20-alpine AS base

# Устанавливаем pnpm глобально
RUN npm install -g pnpm@10.11.0

# Устанавливаем зависимости для сборки
RUN apk add --no-cache libc6-compat

# Рабочая директория
WORKDIR /app

# Копируем файлы конфигурации пакетов
COPY package.json pnpm-lock.yaml ./

# Этап установки зависимостей
FROM base AS deps
RUN pnpm install --frozen-lockfile

# Этап сборки
FROM base AS builder
COPY --from=deps /app/node_modules ./node_modules
COPY . .

# Создаем .env файл из переменных окружения
RUN echo "NUXT_SESSION_PASSWORD=${NUXT_SESSION_PASSWORD:-hegkjqm6Lshug96PurN+2Tp0GfI19RXH17NYvQWpVFg=}" > .env && \
    echo "NUXT_OAUTH_AUTH0_CLIENT_ID=${NUXT_OAUTH_AUTH0_CLIENT_ID:-ouUbOH6skXn9yVHXJj0NZ4aBkE8KCbW3}" >> .env && \
    echo "NUXT_OAUTH_AUTH0_CLIENT_SECRET=${NUXT_OAUTH_AUTH0_CLIENT_SECRET:-Z-ujx0KOiyDvYz7mV4JQBe9CUOc5-UbHqeUp42RCukOTf2nvUoflbmwfblYjAGxS}" >> .env && \
    echo "NUXT_OAUTH_AUTH0_DOMAIN=${NUXT_OAUTH_AUTH0_DOMAIN:-dev-jgcdjiijfcfh875y.us.auth0.com}" >> .env && \
    echo "AUTH0_API_AUDIENCE=${AUTH0_API_AUDIENCE:-https://quizzappfornfactorial.netlify.app/}" >> .env && \
    echo "AUTH0_ISSUER_BASE_URL=${AUTH0_ISSUER_BASE_URL:-https://dev-jgcdjiijfcfh875y.us.auth0.com/}" >> .env && \
    echo "AUTH0_MANAGEMENT_TOKEN=${AUTH0_MANAGEMENT_TOKEN}" >> .env && \
    echo "NUXT_AUTH0_M2M_CLIENT_ID=${NUXT_AUTH0_M2M_CLIENT_ID:-XA1vRtIYJWmOmqb3Syh15ZN8KupPuZIN}" >> .env && \
    echo "NUXT_AUTH0_M2M_CLIENT_SECRET=${NUXT_AUTH0_M2M_CLIENT_SECRET:-w8nA8EV-NgXXHQGDGfINkoqkcIHyuYA8roHoS0EQiALOLEHYMTqA27fbDfK_huQ9}" >> .env && \
    echo "FIREBASE_PRIVATE_KEY=${FIREBASE_PRIVATE_KEY}" >> .env && \
    echo "GOOGLE_GENAI_API_KEY=${GOOGLE_GENAI_API_KEY}" >> .env

# Собираем приложение
RUN pnpm run build

# Этап продакшена
FROM node:20-alpine AS runner
WORKDIR /app

# Устанавливаем pnpm
RUN npm install -g pnpm@10.11.0

# Создаем пользователя для безопасности
RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 nuxtjs

# Копируем собранное приложение
COPY --from=builder --chown=nuxtjs:nodejs /app/.output ./.output
COPY --from=builder --chown=nuxtjs:nodejs /app/package.json ./package.json

# Переключаемся на пользователя nuxtjs
USER nuxtjs

# Открываем порт
EXPOSE 3000

# Устанавливаем переменные окружения
ENV NODE_ENV=production
ENV NITRO_HOST=0.0.0.0
ENV NITRO_PORT=3000

# Запускаем приложение
CMD ["node", ".output/server/index.mjs"] 