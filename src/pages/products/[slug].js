import { slugify } from "@/utils/slugify";

export default function Product({product}) {
    return <h1>Hola mundo</h1>
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
  