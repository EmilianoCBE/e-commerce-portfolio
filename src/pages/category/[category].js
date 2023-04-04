import { HeaderSecondary } from '@/components/HeaderSecondary'
import { ProductsGrid } from '@/components/ProductsGrid'
import { Container } from '@chakra-ui/react'

export default function Category({products, category, breadcrumb}) {
    return 
    <>
        <HeaderSecondary breadcrumb={[{
            href: '/',
            text: category
        }]}/>
        <Container mt="3rem">
            <ProductsGrid products={products} />
        </Container>
    </> 
}

export async function getServerSideProps(context){
    const category = context.query.category
    const url = `https://fakestoreapi.com/products/category/${category}`
    const products = await fetch(url)
        .then(res => res.json())

    if(!products.lenght) {
        return {
            notFound: true
        }
    }

    return {
        props: {
            products,
            category
        }
    }
}