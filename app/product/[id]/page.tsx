// app/products/[id]/page.tsx

// import { Product } from '@/lib/types'; // Assuming a Product type exists
// Define the type for the post
type Product = {
    userId: number;
    id: number;
    title: string;
    body: string;
  };
  
// Fetch the product data
async function fetchProduct(id: Product): Promise<Product> {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
  const data = await res.json();
  return data;
}

// This is a server component, and it will fetch data based on the params
export default async function ProductPage({ params }: { params: { id: Product } }) {
    const ids=params.id
  const product = await fetchProduct(ids);

  return (
    <div>
      <h1>{product.title}</h1>
      <p>{product.body}</p>
    </div>
  );
}

// This function generates the static params (i.e., the dynamic paths) at build time
export async function generateStaticParams() {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts?_limit=5');
  const products = await res.json();

  // Generate static paths based on the fetched products
  return products.map((product: Product) => ({
    id: product.id.toString(),
  }));
}
