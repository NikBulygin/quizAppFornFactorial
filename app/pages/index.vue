<template>
  <div class="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
    <div class="text-center">
      <h2 class="text-3xl font-extrabold text-gray-900 dark:text-gray-100 sm:text-4xl">
        Добро пожаловать в QuizzApp
      </h2>
      <p class="mt-4 text-lg text-gray-500 dark:text-gray-400">
        Создавайте и проходите квизы с друзьями
      </p>
    </div>

    <!-- Показываем информацию о пользователе если он авторизован -->
    <AuthState>
      <template #default="{ loggedIn, user }">
        <div v-if="loggedIn" class="mt-12 bg-white dark:bg-gray-800 overflow-hidden shadow rounded-lg">
          <div class="px-4 py-5 sm:p-6">
            <h3 class="text-lg leading-6 font-medium text-gray-900 dark:text-gray-100">
              Информация о пользователе
            </h3>
            <div class="mt-5 grid grid-cols-1 gap-5 sm:grid-cols-2">
              <div class="bg-gray-50 dark:bg-gray-700 overflow-hidden shadow rounded-lg">
                <div class="p-5">
                  <div class="flex items-center">
                    <div class="flex-shrink-0">
                      <UAvatar 
                        v-if="user?.picture" 
                        :src="user.picture" 
                        :alt="user.name || 'User'"
                        size="lg"
                      />
                    </div>
                    <div class="ml-5 w-0 flex-1">
                      <dl>
                        <dt class="text-sm font-medium text-gray-500 dark:text-gray-400 truncate">
                          Имя
                        </dt>
                        <dd class="text-lg font-medium text-gray-900 dark:text-gray-100">
                          {{ user?.name || 'Не указано' }}
                        </dd>
                      </dl>
                    </div>
                  </div>
                </div>
              </div>
              
              <div class="bg-gray-50 dark:bg-gray-700 overflow-hidden shadow rounded-lg">
                <div class="p-5">
                  <div class="flex items-center">
                    <div class="ml-5 w-0 flex-1">
                      <dl>
                        <dt class="text-sm font-medium text-gray-500 dark:text-gray-400 truncate">
                          Email
                        </dt>
                        <dd class="text-lg font-medium text-gray-900 dark:text-gray-100">
                          {{ user?.email || 'Не указан' }}
                        </dd>
                      </dl>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div v-else class="mt-12 text-center">
          <p class="text-gray-500 dark:text-gray-400">Войдите в систему чтобы начать использовать приложение</p>
        </div>
      </template>
    </AuthState>
  </div>
</template>