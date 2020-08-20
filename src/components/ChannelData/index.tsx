import React, { useRef, useEffect } from 'react';

import ChannelMessage, { Mention } from '../ChannelMessage';

import { Container, Messages, InputWrapper, Input, InputIcon } from './styles';

const ChanneData: React.FC = () => {
  const messagesRef = useRef() as React.MutableRefObject<HTMLDivElement>;

  useEffect(() => {
    const div = messagesRef.current;

    if(div) {
      div.scrollTop = div.scrollHeight;
    }
  }, []);

  return (
    <Container>
      <Messages ref={messagesRef}>

        {Array.from(Array(15).keys()).map((message) => (
          <ChannelMessage 
            key={message}
            author="Gabriel Vargas"
            date="18/08/2020"
            content="Fazendo um clone da UI do Discord."
          />
        ))}

        <ChannelMessage 
          author="Botzada"
          date="18/08/2020"
          content={
            <>
              <Mention>@Gabriel Vargas</Mention>, que massa cara!
            </>
          }
          hasMention
          isBot
        />
      </Messages>

      <InputWrapper>
        <Input type="text" placeholder="Conversar em chat-livre" />
        <InputIcon />
      </InputWrapper>
    </Container>
  );
}

export default ChanneData;