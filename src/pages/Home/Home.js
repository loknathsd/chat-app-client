import React from 'react';
import Login from '../../components/Authentication/Login'
import { Box, Container, Tab, TabList, TabPanel, TabPanels, Tabs, Text } from '@chakra-ui/react'
import Signup from '../../components/Authentication/Signup';

const Home = () => {
    return (
        <Container maxW='xl' centerContent>
            <Box
                d="flex"
                p={3}
                justifyContent='center'
                bg={'white'}
                w='100%'
                m='40px 0 15px 0'
                borderRadius='5px'
                borderWidth='1px'

            >
                <Text align={'center'} fontSize='3xl' fontFamily="work sans" color="black"> LET'S TALK</Text>
            </Box>
            <Box bg={'white'} p='4' width={'100%'} borderRadius='5px' borderWidth='1px' >
                
                <Tabs variant='soft-rounded' colorScheme='blue' my='30px' >
                    <TabList mb="15px">
                        <Tab width="50%">Login</Tab>
                        <Tab width="50%">Sign Up</Tab>
                    </TabList>
                    <TabPanels color="black">
                        <TabPanel>
                            <Login></Login>
                        </TabPanel>
                        <TabPanel>
                            <Signup></Signup>
                        </TabPanel>
                    </TabPanels>
                </Tabs>
            </Box>

        </Container>
    );
};

export default Home;