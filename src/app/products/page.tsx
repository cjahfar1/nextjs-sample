import React, { Suspense } from 'react'
import ProductCard from '../components/product-card/ProductCard';
import { ProductsService } from '../services/products-service';
import GotoCartButton from '../components/GotoCartButton';
import Link from 'next/link';
import ProductList from '../components/ProductList';
import { Metadata } from 'next';
import { cookies } from 'next/headers'
import { headers } from 'next/headers'

export const metadata: Metadata = {
  title: "Product list page"
}
export default async function Products(props:any) {
    console.log("Products page executed", props);
    const cookieList = cookies();
    const tokenCookie = cookieList.get('authToken');
    console.log("token cookie:", tokenCookie, tokenCookie?.value);

    const headersList = headers();
    const referer = headersList.get('referer');
    console.log("referer:", referer);
    console.log(headersList.get('User-Agent'));
    console.log(headersList.get('Host'));

  return (
    <div>
        <GotoCartButton/>

        <h3>Product List</h3>
        <Link href="#recommeded" >Goto Recommended section</Link>
        <Suspense fallback={<span style={{ color:'red' }}>Loading</span>}>
            <ProductList/>
        </Suspense>
        <h3 id="recommeded">Recommended Products</h3>
    </div>
  )
}
