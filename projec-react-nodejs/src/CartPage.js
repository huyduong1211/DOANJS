import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from 'react-redux'
import { cartActions } from "./store/cart-slice";
import axios from "axios";
export default function CartPage() {
    let userId = 1;
    const dispatch = useDispatch();
    const cart = useSelector(state => state.cart.products);
    const init = useSelector(state => state.cart.init);
    const [cartData, setCartData] = useState([])
    const products = useSelector(state => state.product.products);
    //tìm thông tin giỏ hàng
    useEffect(() => {
            let data = []
            cart.forEach(e => {
                products.forEach(peoduct => {
                    if (e.productId === peoduct._id) {
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
        //xoa san pham
    const removeFromCartHandler = (id) => {
            dispatch(cartActions.removeFromCart(id));
        }
        //ấn thanh toán
    const checkoutHandler = () => {
        alert('Đặt hàng thành công')
        dispatch(cartActions.setCart([]))
    }
    useEffect(() => {
        const save = async() => {
            try {
                if (init) {
                    await axios.post("http://localhost:5000/CartRT/set", {
                        userId: userId,
                        product: cart
                    })
                }
            } catch (err) {
                console.log(err)
            }
        }
        save()
    }, [cart])
    console.log(cartData)
    return ( <
        div className = "container" >
        <
        div className = "col-12" >
        <
        div className = "table-responsive" >
        <
        table className = "table table-striped" >
        <
        thead >
        <
        tr >
        <
        th scope = "col" > < /th> <
        th scope = "col" > Tên sản phẩm < /th> <
        th scope = "col" > Available < /th> <
        th scope = "col"
        className = "text-center" >
        Số lượng <
        /th> <
        th scope = "col"
        className = "text-right" >
        Giá <
        /th> <
        th > < /th> <
        /tr> <
        /thead> <
        tbody > {
            cartData.map(item => < tr >
                <
                td style = {
                    { width: '150px' } } >
                <
                img style = {
                    { width: '100%', objectFit: 'cover' } }
                src = { item.product.PImage }
                alt = "" / >
                <
                /td> <
                td > { item.product.PName } < /td> <
                td > In stock < /td> <
                td >
                <
                input className = "form-control"
                type = "text"
                value = { item.quantity }
                /> <
                /td> <
                td className = "text-right" > $ { item.product.PPrice } < /td> <
                td className = "text-right" >
                <
                button onClick = {
                    () => removeFromCartHandler(item.product._id) }
                className = "btn btn-sm btn-danger" >
                <
                i className = "fa fa-trash" > < /i> <
                /button> <
                /td> <
                /tr>)
            } <
            tr >
            <
            td > < /td> <
            td > < /td> <
            td > < /td> <
            td > < /td> <
            td >
            <
            strong > Tổng đơn hàng < /strong> <
            /td> <
            td className = "text-right" >
            <
            strong > $ { totalPrice } < /strong> <
            /td> <
            /tr> <
            /tbody> <
            /table> <
            /div> <
            /div>

            <
            div className = "col mb-2" >
            <
            div className = "row" >
            <
            div className = "col-lg-6" >
            <
            div className = "bg-light rounded-pill px-4 py-3 text-uppercase font-weight-bold" >
            Thông tin giao hàng <
            /div> <
            div className = "p-3" >
            <
            div
            className = "input-group mb-4 border rounded-pill p-2"
            style = {
                { alignItems: "center" } } >
            <
            label className = "form-control border-0 " >
            Tên Khách hàng:
                <
                /label> <
                label className = "form-control border-0" >
                <
                b > Nguyên Văn A < /b> <
                /label> <
                /div> <
                div
            className = "input-group mb-4 border rounded-pill p-2"
            style = {
                { alignItems: "center" } } >
            <
            label className = "form-control border-0 " > Địa chỉ: < /label> <
                input
            type = "text"
            placeholder = "Địa chỉ"
            aria - describedby = "button-addon3"
            className = "form-control border-0"
            value = "3888/ an bình" /
            >
            <
            /div> <
            div
            className = "input-group mb-4 border rounded-pill p-2"
            style = {
                { alignItems: "center" } } >
            <
            label className = "form-control border-0 " >
            Số điện thoại:
                <
                /label> <
                input
            type = "text"
            placeholder = "Số điện thoại"
            aria - describedby = "button-addon3"
            className = "form-control border-0"
            value = "0909090909" /
            >
            <
            /div> <
            div
            className = "input-group mb-4 border rounded-pill p-2"
            style = {
                { alignItems: "center" } } >
            <
            label className = "form-control border-0 " > Email: < /label> <
                input
            type = "text"
            placeholder = "Email"
            aria - describedby = "button-addon3"
            className = "form-control border-0"
            value = "A@gmail.com" /
            >
            <
            /div> <
            div
            className = "input-group mb-4 border rounded-pill p-2"
            style = {
                { alignItems: "center" } } >
            <
            label className = "form-control border-0 " > Ngày đặt: < /label> <
                label className = "form-control border-0" >
                <
                b > 12 / 12 / 2022 < /b> <
                /label> <
                /div> <
                /div> <
                /div> <
                /div>

                <
                div className = "row" >
                <
                div className = "col-sm-12  col-md-6" >
                <
                button className = "btn btn-lg btn-block btn-danger text-uppercase" >
                Tiếp tục mua hàng <
                /button> <
                /div> <
                div className = "col-sm-12 col-md-6 text-right" >
                <
                button onClick = { checkoutHandler }
            className = "btn btn-lg btn-block btn-success text-uppercase" >
            Thanh toán <
            /button> <
            /div> <
            /div> <
            /div> <
            /div>
        );
    }