 # Компонеты для встраивания чата

Структура проекта:

`components` - набор визуальных компонентов:
  * `Emoji` - Список смайлов
  * `Typing` - Анимация печати
  * `Room` - Комната чата
  * `Message` - Сообщение чата
  * `RoomList` - Список комнат
  * `Conference` - Окно конференции
  
`pages` - содержит готовую для встраивания страницу `ChatPage`. Страница имеет адаптивную верстку и содержит необходимые компоненты, контексты и обработчики событий.

## Провайдеры

### `ChatProvider` - контекст чата. 
Содержит состояние чата (state) и функицю изменения состояния (dispatch).
  ```HTML
    <ChatProvider defLang={config.defLang} tokenKey="chatToken" userKey="chatUser">
        ...
    </ChatProvider>
  ```

Свойства:
 * `defLang` - язык по-умолчанию
 * `tokenKey` - ключ localStorage для хранения токена чата
 * `userKey` - ключ localStorage для хранения данных пользователя чата

###  `RestProvider` - rest-контекст. 
Используется для исполнения rest запросов к сервису.

  ```HTML
  <RestProvider baseURLApi={config.baseURLApi} pageSize={config.pageSize}>
      ...
  </RestProvider>
  ```
Свойства:
  * `baseURLApi` - URL rest-api чата
  * `pageSize` - размер страницы для запроса данных

### `SocketProvider` - контекст websocket
Используется для исполнения ws-запросов к сервису и обработки асинхронных ответов.

```HTML
  <SocketProvider wsUrl={config.wsUrl}>
     ...
  </SocketProvider>
```
Свойства:
  * `wsUrl` - URL ws-api чата