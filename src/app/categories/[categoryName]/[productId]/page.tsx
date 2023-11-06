import React from 'react'

export default function CategoryProducts(props:any) {
    console.log(props);
    const color = props.searchParams.color;
  return (
    <div>CategoryProducts: Color:{color}</div>
  )
}

//?search=watch&price-from=1000&price-to=50000&rating=4