# Компоненты для встраивания чата

## Вызов чата как компонента

```javascript
import { ChatIndex } from './chat';

<ChatIndex
  lang={lang}
  chatBaseURLApi={chatBaseURLApi}
  chatWsUrl={chatWsUrl}
  chatWsPath={chatWsPath}
  activeGroupId={activeGroupId}
  activeChatUserId={activeChatUserId}
  inModale={inModale}
  token={authToken}
/>;
```

пример:

```
   chatBaseURLApi=https://chat.mobimed.ru/
    chatWsUrl=wss://chat.mobimed.ru
    chatWsPath=/socket.io
    activeGroupId=1
    activeChatUserId=undefined
    inModale=true
```

где:

- chatBaseURLApi - урл на REST API
- chatWsUrl - урл на WS
- chatWsPath - часть урла для WS по дефолту socket.io
- activeGroupId - id группы
- activeChatUserId - id абонента (доктор или пациент)
- inModale (bool) - открывается в модальном окне или нет
- token - токен авторизации пользователя

---

## Подробнее

Структура проекта:

`components` - набор визуальных компонентов:

- `Emoji` - Список смайлов
- `Typing` - Анимация печати
- `Room` - Комната чата
- `Message` - Сообщение чата
- `RoomList` - Список комнат
- `Conference` - Окно конференции

`pages` - содержит готовую для встраивания страницу `ChatPage`. Страница имеет адаптивную верстку и содержит необходимые компоненты, контексты и обработчики событий.

## Провайдеры

### `ChatProvider` - контекст чата.

Содержит состояние чата (state) и функицю изменения состояния (dispatch).

```HTML
  <ChatProvider defLang={config.defLang} token="xxx" userKey="chatUser">
      ...
  </ChatProvider>
```

Свойства:

- `defLang` - язык по-умолчанию
- `token` - токен чата

### `RestProvider` - rest-контекст.

Используется для исполнения rest запросов к сервису.

```HTML
<RestProvider baseURLApi={config.baseURLApi} pageSize={config.pageSize}>
    ...
</RestProvider>
```

Свойства:

- `baseURLApi` - URL rest-api чата
- `pageSize` - размер страницы для запроса данных

### `SocketProvider` - контекст websocket

Используется для исполнения ws-запросов к сервису и обработки асинхронных ответов.

```HTML
  <SocketProvider wsUrl={config.wsUrl}>
     ...
  </SocketProvider>
```

Свойства:

- `wsUrl` - URL ws-api чата

### Взаимодействие с сервером

Для получения клиентского сокета необходимо обращаться к контекту:

```javascript
const { socket } = React.useContext(SocketContext);
```

Чтобы отправить сообщение в приватный канал (клиент-клиент) следует использовать сообщение `privateMessage`:

```javascript
socket?.emit('privateMessage', {
  contactId: chat?.userId, // кому отправляем
  content: data.message, // содержимое - тут и текст и картинки и файлы
  width: data.width, // ширина изображения
  height: data.height, // высота изображения
  fileName: data.fileName, // имя файла
  messageType: data.messageType, // тип сообщения
  size: data.size, // размер файла
});
```

Компонент `Room` формирует необходимый набор данных `data` в событии `onSendMessage`. Детальнее ознакомиться с кодом формирования этих параметров можно в модуле `Entry.tsx`.

При прочтении сообщения необходимо отправлять сообщение `markAsRead`:

```javascript
socket?.emit('markAsRead', {
  contactId: chat.userId, // чье сообщение помечаем как прочитанное
  _id: chat.messages[chat.messages.length - 1]._id, // идентификатор последнего прочитанного сообщения (все до него включительно будут отмечены прочитанными)
});
```

При печати на клавиатуре следует уведомлеть сервер сообщением `typing`:

```javascript
      socket?.emit('typing', {
        contactId: chat?.userId, // кому печатаем
      });
  );
```

При удалении сообщения (доступно в течение 5 минут после отправки) следует отправить событие `revokeMessage`:

```javascript
socket?.emit('revokeMessage', {
  contactId: chat.userId, // Идентификатор контакта
  _id: message._id, // Идентификатор удаленного сообщения
});
```

При начальной загрузке получается набор из 25 последних сообщений. В процессе пользователь может прокрутить чат и потребуется подгрузить дополнительный набор сообщений. Это делается через Rest протокол:

```javascript
  const { apiUrl, pageSize, getPrivateMessages, getGroupMessages } =
    React.useContext(RestContext);

  ...
    const onNeedMoreMessages = React.useCallback(
    async (chat) => {
      if ((chat as Group).groupId)
        await getGroupMessages(chat as Group);
      else await getPrivateMessages(chat as Contact);
    },
    [getPrivateMessages, getGroupMessages],
  );

  ...
  <Room
    ...
      onNeedMoreMessages={onNeedMoreMessages}
    />
```
