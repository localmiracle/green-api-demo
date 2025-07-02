# GREEN-API Demo

Демо-приложение для работы с WhatsApp через GREEN-API. Состоит из backend на Node.js/TypeScript и простого frontend на HTML+JS.

## Структура проекта

```
green-api-demo/
  backend/      # Серверная часть
    src/
      app.ts                    # Точка входа Express-приложения
      controllers/
        GreenApiController.ts   # Контроллер для обработки API-запросов
      routes/
        greenApiRoutes.ts       # Описание маршрутов API
      services/
        GreenApiHttpService.ts  # Сервис для работы с GREEN-API через HTTP
        IGreenApiService.ts     # Интерфейс сервиса
      usecases/
        GetSettingsUseCase.ts
        GetStateInstanceUseCase.ts
        SendFileByUrlUseCase.ts
        SendMessageUseCase.ts   # Use-case'ы для бизнес-логики
  frontend/
    index.html   # Простой интерфейс для тестирования API
```

## Backend

### Описание

- Использует Express и TypeScript.
- Реализует 4 основных метода:
  - `POST /api/getSettings` — получить настройки инстанса.
  - `POST /api/getStateInstance` — получить состояние инстанса.
  - `POST /api/sendMessage` — отправить текстовое сообщение.
  - `POST /api/sendFileByUrl` — отправить файл по URL.

### Архитектура

- Контроллеры обрабатывают запросы и вызывают use-case'ы.
- Use-case'ы инкапсулируют бизнес-логику и используют сервис для общения с GREEN-API.
- Сервис реализует HTTP-запросы к GREEN-API.

### Запуск

1. Перейдите в папку backend:
   ```
   cd backend
   ```
2. Установите зависимости:
   ```
   npm install
   ```
3. Запустите сервер в режиме разработки:
   ```
   npm run dev
   ```
   Сервер будет доступен на `http://localhost:3000`.

## Frontend

### Описание

- Обычный HTML+JS, без сборщиков.
- Позволяет:
  - Ввести параметры подключения (idInstance, apiToken).
  - Получить настройки и состояние инстанса.
  - Отправить текстовое сообщение или файл по URL.
- Все ответы отображаются в правой части интерфейса.

### Запуск

Откройте файл `frontend/index.html` в браузере. Для работы требуется запущенный backend на `localhost:3000`.

## Пример использования

1. Получите idInstance и apiToken в личном кабинете GREEN-API.
2. Запустите backend.
3. Откройте frontend в браузере.
4. Введите idInstance и apiToken.
5. Используйте кнопки для отправки запросов.

## Зависимости

- express
- cors
- axios
- typescript
- ts-node-dev
- @types/* (dev-зависимости)

## Примечания

- Проект предназначен для демонстрации и тестирования API GREEN-API.
