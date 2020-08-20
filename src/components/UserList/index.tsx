import React from 'react';

import { Container, Role, User, Avatar } from './styles';

interface UserProps {
  nickname: string;
  isBot?: boolean;
}

const UserRow: React.FC<UserProps> = ({ nickname, isBot }) => {
  return (
    <User>
      <Avatar className={isBot ? 'bot' : ''} />
      <strong>{nickname}</strong>

      {isBot && <span>Bot</span>}
    </User>
  );
}

const UserList: React.FC = () => {
  return (
    <Container>
      <Role>Disponível - 1</Role>
      <UserRow nickname="Gabriel Vargas" />

      <Role>Offline - 12</Role>
      <UserRow nickname="Rafael Fuhrich" isBot />
      <UserRow nickname="Winícius Dagostin" />
      <UserRow nickname="Luska Garcia" />
      <UserRow nickname="Rafael Fuhrich 2" />
      <UserRow nickname="Winícius Dagostin 2" isBot />
      <UserRow nickname="Luska Garcia 2" />
      <UserRow nickname="Rafael Fuhrich 3" />
      <UserRow nickname="Winícius Dagostin 3" />
      <UserRow nickname="Luska Garcia 3" isBot />
      <UserRow nickname="Rafael Fuhrich 4" isBot />
      <UserRow nickname="Winícius Dagostin 4" />
      <UserRow nickname="Luska Garcia 4" />
    </Container>
  );
}

export default UserList;