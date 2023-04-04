import { PDPHeader } from "@/components/PDPHeader";
import { slugify } from "@/utils/slugify";
import { AspectRatio, Box, Button, Container, Divider, Flex, Heading, Text, Grid } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";

import logo_stripe from "/public/logo_stripe.png"
import logo_aes256 from "/public/logo_aes256.png"
import logo_amex from "/public/logo_amex.png"
import logo_visa from "/public/logo_visa.png"
import logo_mastercard from "/public/logo_mastercard.png"
import logo_discover from "/public/logo_discover.png"
import logo_paypal from "/public/logo_paypal.png"
import { ProductsGrid } from "@/components/ProductsGrid";

function Price({price}) {
  const currency = new Intl.NumberFormat('en-US', {style: 'currency', currency: 'USD'}).format(price)
  return <Text fontSize="xl" fontWeight="bold">{currency}</Text>
}

export default function Product({product, relatedProducts}) {
  const {price, description, image, rating} = product
    const [showPrice, setShowPrice] = useState(false)

    useEffect(() => {
      setShowPrice(true)
    }, [])

  return (
    <>
      <PDPHeader product={product}/>
      <Container as={Grid} gridTemplateColumns="1fr 34.25rem" mt="2rem" mb="6rem" gap="2rem">
        <AspectRatio position='relative' ratio={1} maxW='100%' marginBottom='1rem'>
          <Image 
            src={image}
            alt=""
            fill={true}
            style={{
              objectFit: 'contain'
            }}
          />
        </AspectRatio>
        <Box>
          <Heading as="h3" textTransform="uppercase" fontSize="md" color="gray.500" mb="0.5rem">
            Description
          </Heading>
          <Text>
            {description}
          </Text>

          <Divider my="2rem" variant="thick"/>

          <Flex alignItems="center" gap="1.5rem">
            {showPrice && <Price price={price}/>}
            <Button>
              Add to cart
            </Button>
            <Link href="#"><Image src="/icon-like.svg" alt="" width="24" height="24" /></Link>
            <Link href="#"><Image src="/icon-legal.svg" alt="" width="24" height="24" /></Link>
          </Flex>

          <Divider my="2rem" variant="thick"/>

          <Flex gap="1.75rem" fontSize="sm" mb="2rem">
            <Flex alignItems="center" gap="0.25rem" as={Link} href="#">
              <Image src="/icon-truck.svg" alt="" width="24" height="24" />
              Shipping & Delivery
            </Flex>
            <Flex alignItems="center" gap="0.25rem" as={Link} href="#">
              <Image src="/icon-return.svg" alt="" width="24" height="24" />
              Returns & Exchanges
            </Flex>
            <Flex alignItems="center" gap="0.25rem" as={Link} href="#">
              <Image src="/icon-mail.svg" alt="" width="24" height="24" />
              Ask a question
            </Flex>
          </Flex>

          <Flex alignItems="center" gap="1.5rem">
            <Heading as="h3" whiteSpace="nowrap" textTransform="uppercase" fontSize="md" color="gray.500">
              Guaranteed Safe Checkout
              <Divider variant="thick"/>
            </Heading>
          </Flex>

          <Flex justifyContent="space-between">
            <Image src={logo_stripe} alt="" />
            <Image src={logo_aes256} alt="" />
            <Image src={logo_paypal} alt="" />
            <Image src={logo_visa} alt="" />
            <Image src={logo_mastercard} alt="" />
            <Image src={logo_discover} alt="" />
            <Image src={logo_amex} alt="" />
          </Flex>

          <Divider variant="thick"/>

        </Box>
      </Container>

      <Container>
        <Heading as="h3" textTransform="uppercase" fontSize="md" color="gray.500" mb="2rem">
          Related Products
        </Heading>
        <ProductsGrid products={relatedProducts} />
      </Container>
    </>
  )
}

export async function getStaticPaths() {
  const products = await fetch("https://fakestoreapi.com/products").then(res => res.json())

  const slugs = products.map((product) => {
    return `${slugify(product.title)}-${product.id}`
  });
    return {
      // paths: [{ params: { slug: '1' } }, { params: { slug: '2' } }],
      paths: slugs.map((slug) => ({params: {slug}})),
      fallback: false, // can also be true or 'blocking'
    }
  }
  
  export async function getStaticProps(context) {

    const id = parseInt(context.params.slug.split('-').pop())
    // const product = await fetch(`https://fakestoreapi.com/products/${id}`).then(res => res.json())
    const products = await fetch("https://fakestoreapi.com/products").then(res => res.json())

    const product = products.find((product) => {
      return product.id === id
    })

    const relatedProducts = products.filter((item) => {
      return item.category === product?.category && item.id !== product?.id;
    })

    return {
      props: { 
        product,
        relatedProducts
      },
    }
  }
  