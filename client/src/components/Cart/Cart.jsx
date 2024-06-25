import React, { useContext } from 'react'
import './Cart.css'
import CartProgress from './CartProgress'
import CartTable from './CartTable'
import CartCoupon from './CartCoupon'
import CartTotals from './CartTotals'
import { CartContext } from '../context/cartProvider'

const Cart = () => {

    const { cartItems } = useContext(CartContext);

    return (
        <>
            <section className="cart-page">
                <div className="container">
                    {cartItems.length > 0 ?
                        <div className="cart-page-wrapper">
                            <form className="cart-form">
                                <CartProgress />
                                <div className="shop-table-wrapper">
                                    <CartTable />
                                    <div className="actions-wrapper">
                                        <CartCoupon />
                                        <div className="update-cart">
                                            <button className="btn">Update Cart</button>
                                        </div>
                                    </div>
                                </div>
                            </form>
                            <div className="cart-collaterals">
                                <CartTotals />
                            </div>
                        </div> 
                        :
                        <h2>There are no items in the cart!</h2>
                    }
                </div>
            </section>
        </>
    )
}

export default Cart