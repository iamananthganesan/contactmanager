import React, { useState, useEffect } from 'react';
import './Cart.css'
const Cart = () => {
    const [product, setProduct] = useState([]);
    const [prodDetails, setProdDetails] = useState({});
    const [productno, setProductno] = useState(2);
    useEffect(() => {
        const cartProducts = () => {
            fetch('https://fakestoreapi.com/carts/2')
                .then((product) => {
                    product.json()
                        .then(res => setProduct(res.products))
                    console.log('inside Cart details');
                    productDetails()
                })
                .catch((error) => { console.log(error) })
        }
        return () => {
            cartProducts()
        }
    }, [])


    const productDetails = async () => {
        console.log('inside product details', prodDetails);
        const productDetailsResponse = await fetch(`https://fakestoreapi.com/products/${productno}`)
            .then((response) => {
                response.json().then(prodDetails => setProdDetails(prodDetails))
            })
            .catch((error) => { console.log(error) })
        console.log('inside product details', prodDetails);
    }
    return (
        <article>
            <div className='cart-wrapper'>
                <label>Cart Items: </label>
                <select onChange={(event) => { setProductno(event.target.value); productDetails() }} value={productno}>
                    {product.map((prod) => {
                        return (
                            <option key={prod.productId} value={prod.productId}>{prod.productId}</option>
                        )
                    })}
                </select>
                {/* <span><strong>Product Id:</strong> {prod.productId}</span>
                        <span><strong>Quantity:</strong> {prod.quantity}</span> */}
            </div>

            <div className='productDetailWrapper'>
                <div>
                    <img src={prodDetails.image} alt={prodDetails.title} titile={prodDetails.title} />
                </div>
                <div>
                    <h2>{prodDetails.title}</h2>
                    <h1>Price: {prodDetails.price}</h1>
                    <p>{prodDetails.description}</p>
                </div>
            </div>
        </article>
    )
}

export default Cart