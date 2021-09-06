import React from 'react';
import { Button, Flex, Heading, Input, useColorMode, useColorModeValue } from '@chakra-ui/react';

const Login = () => {
  const { toggleColorMode } = useColorMode();
  const formBackground = useColorModeValue('gray.100', 'gray.700');
  return (
    <Flex height="100vh" width="100vw" alignItems="center" justifyContent="center">
      <Flex direction="column" p="12" rounded="6" background={formBackground}>
        表單
        <Heading mb="6">Log in</Heading>
        <Input placeholder="sam@weserve.tw" variant="filled" mb="3" type="email" />
        <Input placeholder="********" variant="filled" mb="3" type="password" />
        <Button mb="6" colorScheme="teal">
          Login in
        </Button>
        <Button onClick={toggleColorMode}>Toggle Mode</Button>
      </Flex>
    </Flex>
  );
};

export default Login;
