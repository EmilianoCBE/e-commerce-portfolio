import Head from 'next/head'

import { HomeCategories } from '@/components/HomeCategories'
import { AdvantageSection } from '@/components/AdvantageSection'

import { Box, Container, Heading, SimpleGrid, Text } from '@chakra-ui/react'
import { groupProductsByCategory } from '@/utils/groupProductsByCategory'
import { HomeProductsGrid } from '@/components/HomeProductsGrid'

import bannerSeason from '/public/banner-new-season.jpg'
import bannerSale from '/public/banner-sale.jpg'
import { PromoBanner } from '@/components/PromoBanner'

import { SubscribeSection } from '@/components/SubscribeSection'

import { BlogCard } from '@/components/BlogCard'

import blogPic1 from '/public/blog-pic-01.jpg'
import blogPic2 from '/public/blog-pic-02.jpg'
import blogPic3 from '/public/blog-pic-03.jpg'
import { TopBar } from '@/components/TopBar'
import { Header } from '@/components/Header'

export default function Home({products, categories, productsGroupedByCategory}) {
  return (
    <>
      <Head>
        <title>eCommerce Project</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

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
        
        <Container maxW='100%' p='0'
          m={{
            base: '14.75rem 0 4rem',
            md: '2rem auto 6rem'
          }}
        >
          <SubscribeSection />
        </Container>

        <Container>
          <Heading as='h2' textTransform='uppercase' fontSize='2xl'
            mb={{
              base: '2rem',
              md: '3rem'
            }}>
              Latest from blogpost
          </Heading>
          <SimpleGrid minChildWidth='300px'
            spacing={{
              base: '2.5rem',
              md: '1.5rem'
            }}
          >
            <BlogCard 
              image={blogPic1}
              title='The easiest way to break'
              summary='lorem ipsum'
            />
            <BlogCard 
              image={blogPic2}
              title='The easiest way to break'
              summary='lorem ipsum'
            />
            <BlogCard 
              image={blogPic3}
              title='The easiest way to break'
              summary='lorem ipsum'
            />
          </SimpleGrid>
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