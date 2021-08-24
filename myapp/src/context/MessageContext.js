import React from 'react';

//create a context
const MessageContext = React.createContext("Hi All,Welcome To React Hooks");

//create a provider
const MessageProvider=MessageContext.Provider;

//create a consumer
const MessageConsumer=MessageContext.Consumer;

export {MessageProvider,MessageConsumer,MessageContext}
