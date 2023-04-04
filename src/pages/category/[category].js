import { ProductsGrid } from '@/components/ProductsGrid'
import { Container } from '@chakra-ui/react'

export default function Category({products}) {
    return 
        <Container>
            <ProductsGrid products={products} />
        </Container>
}

export async function getServerSideProps(context){

    const url = `https://fakestoreapi.com/products/category${context.query.category}`
    const products = await fetch(url)
    .then(res => res.json())

    return {
        props: {
            products
        }
    }
}