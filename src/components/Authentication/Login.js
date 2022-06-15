import React from 'react';
import { Button, FormControl, FormLabel, Input, InputGroup, InputRightElement, VStack } from '@chakra-ui/react';
import { useState } from 'react';
import Show from '../../images/show.png'
import Hide from '../../images/hide.png'



const Login = () => {
    const [show, setShow] = useState(false)
    const handleClick = () => setShow(!show)
    return (
        <VStack>

            <FormControl  id="email" isRequired>
                <FormLabel>Email address </FormLabel>
                <Input
                    type='email'
                    color="white"
                    _placeholder={{ color: 'lightgray' }}
                    variant='gray'
                    placeholder='Enter your Email'
                />
            </FormControl>
            <FormControl  id="password" isRequired>
                <FormLabel>Password </FormLabel>
                <InputGroup>
                    <Input 
                        color="white"
                        pr='4.5rem'
                        _placeholder={{ color: 'lightgray' }}
                        variant='gray'
                        placeholder='Enter Password'
                        type={show ? 'text' : 'password'}
                    />
                    <InputRightElement>
                        <Button bg='white' p="5px" h='1.75rem' size='sm' onClick={handleClick}>
                            {show ? <img src={Hide} alt="" /> : <img src={Show} alt="" />}
                        </Button>

                    </InputRightElement>
                </InputGroup>
            </FormControl>


            <Button
                colorScheme='teal' variant='solid'
                width='100%'
                color="white"
            >
                Log In
            </Button>
            <Button
                
               
               colorScheme='red'
                width='100%'
                color="white"
            >
                Log In as a guest
            </Button>
        </VStack>
    );
};

export default Login;