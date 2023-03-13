import Head from 'next/head'

import { Header } from '@/components/Header'
import { TopBar } from '@/components/TopBar'
import { HomeCategories } from '@/components/HomeCategories'
import { AdvantageSection } from '@/components/AdvantageSection'

import { Box, Button, Container, Flex, FormControl, Grid, Heading, Input, SimpleGrid, Text } from '@chakra-ui/react'
import { groupProductsByCategory } from '@/utils/groupProductsByCategory'
import { HomeProductsGrid } from '@/components/HomeProductsGrid'
import Image from 'next/image'

import bannerSeason from '/public/banner-new-season.jpg'
import bannerSale from '/public/banner-sale.jpg'
import { PromoBanner } from '@/components/PromoBanner'

import menWalking from '/public/men-walking.png'
import womanStanding from '/public/woman-standing.png'

export default function Home({products, categories, productsGroupedByCategory}) {
  return (
    <>
      <Head>
        <title>eCommerce Project</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

        <TopBar />
        <Box marginBottom="2rem">
          <Header />
        </Box>
      <main>
        <Container>
          <HomeCategories categories={categories}/>

          <AdvantageSection />

        </Container> 
        
        <Container
          maxW={{
            base: '100%',
            md: '1110px',
          }}
          paddingX="0"
        >
          {Object.entries(productsGroupedByCategory).map(([category, products]) => {
            return (
              <Box key={category} marginBottom="4rem">
                <Heading
                  as="h2"
                  size="md"
                  textTransform="uppercase"
                  margin={{
                    base: '0 0 1rem 1rem',
                    md: '0 0 1.5rem',
                  }}
                >
                  {category}
                </Heading>
                <HomeProductsGrid products={products} />
              </Box>
            );
          })}
        </Container>
        
        <Container>
          <SimpleGrid 
            minChildWidth='255px' 
            spacing={{
              base: '1rem',
              md: '2rem'
            }}
          >
            <PromoBanner image={bannerSeason}>
              <Text fontSize='sm' color='gray.500'>New Season</Text>
              <Text fontSize='lg' fontWeight='bold' whiteSpace='nowrap'>lookbook collection</Text>
            </PromoBanner>
            <PromoBanner image={bannerSale}>
              <Text fontSize='sm' color='gray.500'>Sale</Text>
                <Text fontSize='lg' fontWeight='bold' whiteSpace='nowrap'>
                  Get UP to <Text as='span' color='red'>50% off</Text>
                </Text>
            </PromoBanner>
          </SimpleGrid>
        </Container>
        
        <Container bg='linear-gradient(180deg, #F3F2F2 0%, #DCDBDB 100%)'
          m={{
            base: '236px 0 0 ',
            md: '2rem 0'
          }} 
          p={{
            base: '1.5rem',
            md: '3.5rem'
          }}
          maxWidth='100%'
          position='relative'
        >
          <Box position='absolute' 
            top={{
              base: 'calc(-242px +1.5rem)',
              md: 'initial'
            }}
            right={{
              base: '32px',
              md: '50%'
            }} transform={{
              md: 'translateX(470px)'
            }}
            width={{
              base: '99px', 
              md: '524px'
            }}
            height={{
              base: '236px', 
              md: '219px'
            }}
            >
            <Image src={menWalking} alt=''/>
          </Box>
          <Box position='absolute'
            top={{
              base: 'calc(-242px +1.5rem)',
              md: 'initial'
            }} 
            bottom={{
              md: '0'
            }}
            left={{
              base: '24px',
              md: '50%'
            }} transform={{
              md: 'translateX(-530px)'
            }}
            width={{
              base: '128px', 
              md: '545px'
            }}
            height={{
              base: '128px', 
              md: '311px'
            }}
          >
            <Image src={womanStanding} style={{ objectFit: 'cover'}} fill={true} alt=''/>
          </Box>
          <Flex height={{
            md: '28.75rem'
          }} maxWidth='33.25rem' m='auto' as='article' bgColor='white' p='2rem' >
            <Grid maxWidth='21.35rem' m='auto' gap='2rem' textAlign='center'>
              <header>
                <Heading size='sm' textTransform='uppercase' color='gray'>
                  Special Offer
                </Heading>
                <Heading size='xl' textTransform='uppercase'>
                  Subscribe and {' '}
                  <Text as='span' color='red'> get 10% off</Text>
                </Heading>
              </header>
              <Grid as='form' action=''gap='1.5rem'>
                <FormControl>
                  {/* <FormLabel>Email address</FormLabel> */}
                  <Input 
                    height='4rem'
                    textAlign='inherit' 
                    borderRadius='0' 
                    type='email' 
                    placeholder='Enter your email' 
                    bgColor='gray.100'/>
                </FormControl>
                <Button size='xl' >
                  Subscribe
                </Button>
              </Grid>
            </Grid>
          </Flex>
        </Container>
      </main>
    </>
  )
}

//Server side
export async function getServerSideProps(context){
  const products = await fetch("https://fakestoreapi.com/products")
    .then(res => res.json())
  const categories = await fetch("https://fakestoreapi.com/products/categories")
    .then(res => res.json())

    const productsGroupedByCategory = groupProductsByCategory(products)

  return {
    props: {
      products,
      categories,
      productsGroupedByCategory
    }
  }
}