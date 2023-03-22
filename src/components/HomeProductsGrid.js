import { slugify } from "@/utils/slugify";
import { Grid, Box } from "@chakra-ui/react";
import Link from "next/link";
import { ProductCard } from "./ProductCard";

export function HomeProductsGrid(props) {
    return (
            <Grid 
                overflowX='scroll' 
                gridTemplateColumns={{
                    base: 'repeat(auto-fit, 255px)',
                    md: 'repeat(auto-fill, minmax(255px, 1fr))'
                }} 
                gridAutoColumns='255px' gridAutoRows='1fr' gridAutoFlow={{
                    base: 'column',
                    md: 'row'
                }} 
                gap='1.85rem' 
                scrollSnapType='x mandatory' 
                alignItems='stretch'
            >
                {props.products.map((product, i) => {
                    const slug = slugify(product.title)
                    return <Box 
                                marginLeft={{
                                    base: i === 0 ? '1rem' : '0',
                                    md: '0'
                                }} 
                                key={product.id}                                    
                                scrollSnapAlign='center' 
                                border='solid 1px' 
                                borderColor='gray.200' 
                                padding='1rem'
                            >
                                <Link href={`/product/${slug}-${product.id}`}>
                                    <ProductCard {...product} />                 
                                </Link>
                            </Box>;
                })}
            </Grid>
    );
}