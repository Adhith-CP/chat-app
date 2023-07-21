import React from 'react';
import MyMessage from './MyMessage';
import TheirMessage from './TheirMessage';
import MessageForm from './MessageForm';

const ChatFeed = (props) => {
  const { chats, activeChat, userName, messages } = props;
  const chat = chats && chats[activeChat];

  const renderReadReceipts = (message, isMyMessage) => {
    return chat.people.map((person, index) => {
      if (person.last_read === message.id && isMyMessage) {
        return (
          <div
            key={`read_${index}`}
            className="read-receipt"
            style={{
              float: 'right',
              backgroundImage: person.person.avatar && `url(${person.person.avatar})`,
            }}
          />
        );
      }
      return null;
    });
  };

  const renderMessages = () => {
    const messageKeys = Object.keys(messages);

    return messageKeys.map((key, index) => {
      const message = messages[key];
      const lastMessageKey = index === 0 ? null : messageKeys[index - 1];
      const isMyMessage = message.sender.username === userName;

      return (
        <div key={`msg_${index}`} style={{ width: '100%' }}>
          <div className="message-block">
            {isMyMessage ? (
              <MyMessage message={message} />
            ) : (
              <TheirMessage message={message} lastMessage={messages[lastMessageKey]} />
            )}
          </div>
          <div
            className="read-receipts"
            style={{ marginRight: isMyMessage ? '18px' : '0px', marginLeft: isMyMessage ? '0px' : '68px' }}
          >
            {renderReadReceipts(message, isMyMessage)}
          </div>
        </div>
      );
    });
  };

  if (!chat) return <div />;

  return (
    <div className="chat-feed">
      <div className="chat-title-container">
        <div className="chat-title">{chat.title}</div>
        <div className="chat-subtitle">
          {chat.people.map((person) => ` ${person.person.username}`)}
        </div>
      </div>
      {renderMessages()}
      <div style={{ height: '100px' }} />
      <div className="message-form-container">
        <MessageForm {...props} chatId={activeChat} />
      </div>
    </div>
  );
};

export default ChatFeed;
