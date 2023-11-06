"use client"
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import React, { useEffect, useState } from 'react'

export default function ProductCard(props:any) {
    var prod = props.product;
    const [selectedProduct, setSelectedProduct] = useState({});

    const selectProd = () => {
        console.log("Selecting prod:", prod);
        setSelectedProduct(prod);
    }
    useEffect(()=> {
        fetch('https://fakestoreapi.com/products/1');
    },[]);
    const router = useRouter();
    
    return (
        <div>
            <button onClick={()=> {
                router.push(`/products/${prod.id}`, {
                    scroll: false
                })
            }}>Details</button>
            <button onClick={()=> {

                router.push('/products#recommended-products')
            }}
            >Same page navigation sample</button>
            <Link href={'/products/' + prod.id}>
            <div onClick={selectProd} >
            <img src={prod.image} width={50}/>
            {
                prod.title
            }
        </div>
        </Link>
        
        
        </div>
    );
}
