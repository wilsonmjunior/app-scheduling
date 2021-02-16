import React, { useCallback, useState } from 'react';
import { Text } from 'react-native';

import Input from '../../components/Input';

import { Container, Content } from './styles';

const SignIn = () => {
  const [userName, setUserName] = useState('user');

  const handleChangeText = useCallback((value) => {
    setUserName(value);
    console.warn('value, value', value);
  }, []);

  return (
    <Container>
      <Text>SignIn</Text>

      <Content>
        <Input
          name="email"
          icon="user"
          placeholder="E-mail"
          keyboardType="email-address"
          onInputText={handleChangeText}
        />
      </Content>
    </Container>
  );
};

export default SignIn;
