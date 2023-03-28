import { Rating } from "@/components/Rating";
import { ShareIcon } from "@/icons/Share";
import { slugify } from "@/utils/slugify";
import { StarIcon } from "@chakra-ui/icons";
import { AspectRatio, Box, Button, Container, Flex, Heading, ListIcon, ListItem, Text, UnorderedList } from "@chakra-ui/react";
import Image from "next/image";
import Link from "next/link";


export default function Product({product: {title, price, image, rating, category, description}}) {
  return (
    <>
      <Box bg="gray.100" p="1rem">
        <Container >
          <Flex justifyContent="space-between" alignItems="center">
          <Flex fontSize="sm" as={UnorderedList} listStyleType="none" m="0" gap={"2"}>
                  <ListItem>
                    <Link href="#">Home</Link>
                    <ListIcon w="18" h="18" as={ChevronRightIcon} color="gray.700" ml="2" mr="0"/>
                  </ListItem>
                  <ListItem textTransform="capitalize">
                    <Link href={`${category}`}>{category}</Link>
                    <ListIcon w="18" h="18" as={ChevronRightIcon} color="gray.700" ml="2" mr="0"/>
                  </ListItem>
                  <ListItem>{title}</ListItem>
                </Flex>
              <Button color="gray" variant="link" leftIcon={<ShareIcon w={18} h={18}/>}>Share</Button>
          </Flex>
          <Heading as="h1" fontSize="2xl" textAlign="center" my="1.5rem">
            {title}
          </Heading>
          <Flex justifyContent="space-between" alignItems="center">
              <Text>
                <Flex gap="0.5rem" alignItems="baseline">
                  <Rating rate={rating.rate} />
                  <Text fontSize="sm">2 reviews</Text>
                </Flex>
              </Text>
              <Flex gap="1rem" fontSize="sm">
                <Text fontWeight="bold">Sku: {id}</Text>
                <Text fontWeight="bold">Availabiliti: In Stock</Text>
              </Flex>
          </Flex>
        </Container>
      </Box>
      <p>{price}</p>
      <p>{rating.count}, {rating.rate}</p>
      <p>{category}</p>
      <p>{description}</p>
      <Button>
        Add to cart
      </Button>
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
    </>
  )
}

export async function getStaticPaths() {
  const products = await fetch("https://fakestoreapi.com/products").then(res => res.json())

  const slugs = products.map((product) => {
    return `${slugify(product.title)}-${slugify(product.id)}`
  });
    return {
      // paths: [{ params: { slug: '1' } }, { params: { slug: '2' } }],
      paths: slugs.map((slug) => ({params: {slug}})),
      fallback: false, // can also be true or 'blocking'
    }
  }
  
  export async function getStaticProps(context) {

    const id = context.params.slug.split('-').pop()
    const product = await fetch(`https://fakestoreapi.com/products/${id}`).then(res => res.json())

    return {
      props: { 
        product 
      },
    }
  }
  