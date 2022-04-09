import React, {useEffect, useState} from "react";
import {Link} from 'react-router-dom'
import {useDispatch, useSelector} from 'react-redux'
import { cartActions } from "../store/cart-slice";
import './SubPages.css'
import axios from 'axios'
export default function Minicart() {
    const dispatch = useDispatch();
    const cart = useSelector(state => state.cart.products);
    const [cartData, setCartData] = useState([])
    const products = useSelector(state => state.product.products);
    //tìm thông tin giỏ hàng
    useEffect(() => {
        let data = []
        cart.forEach(e => {
            products.forEach(peoduct => {
                if(e.productId === peoduct._id){
                    data.push({
                        product: peoduct,
                        quantity: e.ProductQuantity
                    });
                }
            })
        })
        setCartData(data)
    }, [cart, products])
    //tính tổng tiền giỏ hàng
    let totalPrice = 0;
    cartData.forEach((item) => totalPrice += (item.product.PPrice * item.quantity))
    //xóa sản phẩm khỏi giỏ hàng
    const removeHandler = (id) => {
        dispatch(cartActions.removeFromCart(id));
    }
    //checkout
    const checkoutHandler = () => {
        alert('Checkout success')
        dispatch(cartActions.setCart([]))
    }
    return (
        <div class="col-lg-2 col-xs-3 top-cart">
            <div class="top-cart-contain" style={{ borderRadius: "10px" }}>
                <div class="mini-cart" >
                    <div data-toggle="dropdown" data-hover="dropdown" class="basket dropdown-toggle"> <a href="#">
                        <div class="cart-icon" ><i class="fa fa-shopping-cart" ></i></div>
                        <div class="shoppingcart-inner hidden-xs"><span class="cart-title">Cart</span> <span class="cart-total">{cart.length} Item(s)</span></div>
                    </a></div>
                    <div>
                        <div class="top-cart-content">
                            <div class="block-subtitle hidden-xs">Recently added item(s)</div>
                            <ul id="cart-sidebar" class="mini-products-list">
                                {cartData.map((item, index) => <li key={index} class="item odd"> <a href="#" title="Ipsums Dolors Untra" class="product-image"><img src={item.product.PImage} alt="Lorem ipsum dolor" width="65" /></a>
                                        <div class="product-details"> <a href="#" title="Remove This Item" class="remove-cart"><i onClick={() => removeHandler(item.product._id)} class="icon-close"></i></a>
                                         <p class="product-name"><a href="#">{item.product.PName}</a> </p>
                                         <strong>{item.quantity}</strong> x <span class="price">${item.product.PPrice}</span> </div>
                                    </li>)

                                }
                            </ul>
                            <div class="top-subtotal">Subtotal: <span class="price">${totalPrice}</span></div>
                            <div class="actions">
                                <button onClick={checkoutHandler} class="btn-checkout" type="button"><i class="fa fa-check"></i><span className="btn-text">Checkout</span></button>
                                <button class="view-cart" type="button"><i class="fa fa-shopping-cart"></i> <Link to='/cart'><span className="btn-text">View Cart</span></Link></button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    );
}