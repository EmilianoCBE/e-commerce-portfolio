import { Box, Container, Flex, Grid, Heading, FormControl, Input, Button, Text } from "@chakra-ui/react";
import Image from "next/image";

import menWalking from '../../public/men-walking.png'
import womanStanding from '../../public/woman-standing.png'

export function SubscribeSection() {
    return (
        <Container bg='linear-gradient(180deg, #F3F2F2 0%, #DCDBDB 100%)' 
            p={{
                base: '1.5rem',
                md: '3.5rem'
            }} maxWidth='100%' position='relative'
        >
            <Box position='absolute' top={{
                base: 'calc(-236px +1.5rem)',
                md: 'initial'
            }} right={{
                base: '32px',
                md: '50%'
            }} transform={{
                md: 'translateX(470px)'
            }} width={{
                base: '99px',
                md: '219px',
            }} height={{
                base: '236px',
                md: '524px',
            }}
            >
                <Image src={menWalking} alt='' style={{objectFit: 'cover'}} fill={true}/>
            </Box>
            <Box position='absolute' top={{
                base: 'calc(-242px +1.5rem)',
                md: 'initial'
            }} bottom={{
                md: '0'
            }} left={{
                base: '1.5rem',
                md: '50%'
            }} transform={{
                md: 'translateX(-530px)'
            }} width={{
                base: '128px',
                md: '311px',
            }} height={{
                base: '242px',
                md: '545px',
            }}
            >
                <Image src={womanStanding} style={{objectFit: 'cover'}} fill={true} alt='' />
            </Box>
            <Flex height={{
                    md: '28.75rem'
                }} 
                maxWidth='33.25rem' 
                m='auto' 
                as='article' 
                bgColor='white' 
                p='2rem'
            >
            <Grid maxWidth='21.25rem' m='auto' gap='2rem' textAlign='center'>
              <header>
                <Heading size='sm' textTransform='uppercase' color='gray'>
                  Special Offer
                </Heading>
                <Heading size='xl' textTransform='uppercase'>
                  Subscribe and {' '}
                  <Text as='span' color='red'> get 10% off</Text>
                </Heading>
              </header>
              <Grid as='form' action='' gap='1.5rem'>
                <FormControl>
                    {
                        /* <FormLabel>Email address</FormLabel> */
                    }
                  <Input height='4rem' textAlign='inherit' borderRadius='0' type='email' placeholder='Enter your email' bgColor='gray.100' />
                </FormControl>
                <Button size='xl'>
                  Subscribe
                </Button>
              </Grid>
            </Grid>
          </Flex>
        </Container>
    );
}