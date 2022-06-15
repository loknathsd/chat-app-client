import { Button, FormControl, FormLabel, Input, InputGroup, InputRightElement, VStack } from '@chakra-ui/react';
import React, { useState } from 'react';
import Show from '../../images/show.png'
import Hide from '../../images/hide.png'

const Signup = () => {

    const [show, setShow] = useState(false)
    const handleClick = () => setShow(!show)


    return (
        <VStack>
            <FormControl id="name" isRequired>
                <FormLabel>Name</FormLabel>
                <Input
                   type="text"
                    color="white"
                    _placeholder={{ color: 'lightgray' }}
                    variant='gray'
                    placeholder='Enter your Name'

                />
            </FormControl>
            <FormControl id="email" isRequired>
                <FormLabel>Email address </FormLabel>
                <Input
                    type='email'
                    color="white"
                    _placeholder={{ color: 'lightgray' }}
                    variant='gray'
                    placeholder='Enter your Email'
                />
            </FormControl>
            <FormControl id="password" isRequired>
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
            <FormControl id="password" isRequired>
                <FormLabel>Confirm Password </FormLabel>
                <InputGroup>
                    <Input
                        color="white"
                        pr='4.5rem'
                        _placeholder={{ color: 'lightgray' }}
                        variant='gray'
                        placeholder='Enter Confirm Password'
                        type={show ? 'text' : 'password'}
                    />
                    <InputRightElement>
                        <Button bg='white' p="5px" h='1.75rem' size='sm' onClick={handleClick}>
                            {show ? <img src={Hide} alt="" /> : <img src={Show} alt="" />}
                        </Button>

                    </InputRightElement>
                </InputGroup>
            </FormControl>
            <FormControl id="file" isRequired>
                <FormLabel>Upload your photo</FormLabel>
                <Input
                    color="white"
                    type="file"
                    _placeholder={{ color: 'lightgray' }}
                    variant='outline'
                    borderColor='gray'
                    pt='4px'
                    

                />
            </FormControl>
            <Button
           
            colorScheme="blue"
             width='100%' 
             color="white"
             
            
            >
               SIGN UP
         </Button>
            
        </VStack>
    );
};

export default Signup;