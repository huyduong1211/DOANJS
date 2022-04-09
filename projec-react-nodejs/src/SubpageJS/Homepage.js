import axios  from 'axios';
import React, { useEffect, useState } from 'react';
import {useDispatch, useSelector} from 'react-redux'
import CateStatic from './CateStatic';
import {cartActions} from '../store/cart-slice'
function Homepage() {
  let userId = 1;
  const cartDispatch = useDispatch();
  const [product, setProduct] = useState([]);
  const cart = useSelector(state => state.cart.products);
  const init = useSelector(state => state.cart.init);
  useEffect(() => {
    axios
      .get("http://localhost:5000/ProductRT/getproduct")
      .then((res) => { setProduct(res.data) })
      .catch((err) => { console.log(err) });
  }, []);
  const addToCart = async (id) => {
    cartDispatch(cartActions.addToCart({ProductId: id}))
  }
  useEffect(() => {
    const save = async () => {
      try{
        if(init){
          await axios.post("http://localhost:5000/CartRT/set", {
            userId: userId,
            product: cart
          })
        }
      }catch(err){
        console.log(err)
      }
    }
    save()
  }, [cart])
  return (
    <div>
      <div className="slider">
        <div className="tp-banner-container clearfix">
          <div className="tp-banner" >
            <ul>

              <li data-transition="slidehorizontal" data-slotamount="5" data-masterspeed="700" >

                <img src="assets/images/slider/product1.jpg" alt="slidebg1" data-bgfit="cover" data-bgposition="center center" data-bgrepeat="no-repeat" />

                <div className="tp-caption very_big_white skewfromrightshort fadeout"
                  data-x="center"
                  data-y="100"
                  data-speed="500"
                  data-start="1200"
                  data-easing="Circ.easeInOut"
                  style={{ fontSize: "70px", fontWeight: "800", color: "#ffa200" }}>Good for<span style={{ color: "#000" }}> your health</span> </div>


                <div className="tp-caption tp-caption medium_text skewfromrightshort fadeout"
                  data-x="center"
                  data-y="165"
                  data-hoffset="0"
                  data-voffset="-73"
                  data-speed="500"
                  data-start="1200"
                  data-easing="Power4.easeOut"
                  style={{ fontSize: "20px", fontWeight: "500", color: "#666" }}> Sale upto 25% all products </div>


                <div className="tp-caption customin tp-resizeme rs-parallaxlevel-0 style8"
                  data-x="center"
                  data-y="210"
                  data-hoffset="0"
                  data-voffset="98"
                  data-customin="x:0;y:0;z:0;rotationX:0;rotationY:0;rotationZ:0;scaleX:0;scaleY:0;skewX:0;skewY:0;opacity:0;transformPerspective:600;transformOrigin:50% 50%;"
                  data-speed="500"
                  data-start="1500"
                  data-easing="Power3.easeInOut"
                  data-splitin="none"
                  data-splitout="none"
                  data-elementdelay="0.1"
                  data-endelementdelay="0.1"
                  data-linktoslide="next"
                ><a href='#' className='largebtn slide1'>View more </a> </div>
              </li>


              <li data-transition="slidehorizontal" data-slotamount="5" data-masterspeed="700" >

                <img src="assets/images/slider/product2.jpg" alt="slidebg1" data-bgfit="cover" data-bgposition="center center" data-bgrepeat="no-repeat" />

                <div className="tp-caption white_heavy_60 customin ltl tp-resizeme organic1"
                  data-x="410"
                  data-y="140"
                  data-customin="x:0;y:0;z:0;rotationX:0;rotationY:0;rotationZ:0;scaleX:0;scaleY:0;skewX:0;skewY:0;opacity:0;transformPerspective:600;transformOrigin:50% 50%;"
                  data-speed="1200"
                  data-start="700"
                  data-easing="Power4.easeOut"
                  data-splitin="chars"
                  data-splitout="none"
                  data-elementdelay="0.1"
                  data-endelementdelay="0.1"
                  data-endspeed="1000"
                  data-endeasing="Power4.easeIn"
                >100% Organic and Fresh</div>
                <div className="tp-caption black_thin_blackbg_30 customin ltl tp-resizeme style2"
                  data-x="410"
                  data-y="220"
                  data-customin="x:0;y:0;z:0;rotationX:90;rotationY:0;rotationZ:0;scaleX:1;scaleY:1;skewX:0;skewY:0;opacity:0;transformPerspective:200;transformOrigin:50% 0%;"
                  data-speed="1500"
                  data-start="1000"
                  data-easing="Power4.easeInOut"
                  data-splitin="none"
                  data-splitout="none"
                  data-elementdelay="0.01"
                  data-endelementdelay="0.1"
                  data-endspeed="1000"
                  data-endeasing="Power4.easeIn"
                >Lipsum dolor sit amet, consectetur adipiscing elit.</div>


                <div className="tp-caption lfb ltb start tp-resizeme style3"
                  data-x="410"
                  data-y="270"
                  data-customin="x:0;y:0;z:0;rotationX:0;rotationY:0;rotationZ:0;scaleX:0;scaleY:0;skewX:0;skewY:0;opacity:0;transformPerspective:600;transformOrigin:50% 50%;"
                  data-speed="1500"
                  data-start="1600"
                  data-easing="Power3.easeInOut"
                  data-splitin="none"
                  data-splitout="none"
                  data-elementdelay="0.01"
                  data-endelementdelay="0.1"
                  data-linktoslide="next"
                ><a href='#' className='largebtn solid'>Get It Now!</a> </div>
              </li>


              <li data-transition="slidehorizontal" data-slotamount="5" data-masterspeed="700" >

                <img src="assets/images/slider/product3.jpg" alt="slidebg3" data-bgfit="cover" data-bgposition="center center" data-bgrepeat="no-repeat" />

                <div className="tp-caption big_100_white lft start fadeout style4"
                  data-x="410"
                  data-y="120"
                  data-speed="500"
                  data-start="1200"
                  data-easing="Circ.easeInOut"
                >Fresh </div>
                <div className="tp-caption big_100_white lft fadeout style5"
                  data-x="410"
                  data-y="180"
                  data-speed="500"
                  data-start="1200"
                  data-easing="Circ.easeInOut"
                >Vegetables</div>


                <div className="tp-caption tp-caption medium_text lfb fadeout .style6"
                  data-x="410"
                  data-y="260"
                  data-speed="500"
                  data-start="1200"
                  data-easing="Power4.easeOut"
                >Lorem Ipsum is simply dummy text.</div>


                <div className="tp-caption fade fadeout tp-resizeme style7"
                  data-x="410"
                  data-y="320"
                  data-hoffset="-100"
                  data-customin="x:0;y:0;z:0;rotationX:0;rotationY:0;rotationZ:0;scaleX:0;scaleY:0;skewX:0;skewY:0;opacity:0;transformPerspective:600;transformOrigin:50% 50%;"
                  data-speed="1500"
                  data-start="800"
                  data-easing="Power3.easeInOut"
                  data-splitin="none"
                  data-splitout="none"
                  data-elementdelay="0.01"
                  data-endelementdelay="0.1"
                  data-linktoslide="next"
                ><a href='#' className='largebtn solid'>Shop Now!</a> </div>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* CateStatic */}
      <CateStatic/>
      {/* -------------- */}
      <div className="container">
        <div className="special-products">
          <div className="page-header">
            <h2>All Product</h2>
          </div>
          <div className="special-products-pro">
    
                <div style={{ display: "flex",justifyContent:"center",flexWrap:"wrap",width:"100%" , rowGap:"60px" }}>
                  {/* items */}
                  {product.map((item, i) => (
                    <div className="product-item" key={i} style={{ maxWidth: "210px", minWidth: "210px",borderRadius:"12px" , overflow:"hidden",backgroundColor:"rgba(164, 178, 177, 0.71)" }} >
                      <div className="item-inner">
                        <div className="product-thumbnail">
                          <div className="pr-img-area"> <a title="Ipsums Dolors Untra" href="#l">
                            <figure> <img className="first-img" width={"100%"} height={"205px"} src={item.PImage} alt="" /> <img className="hover-img" width={"100%"} height={"205px"} src={item.PImage} alt="" /></figure>
                          </a>
                            <button onClick={() => addToCart(item._id)} style={{ backgroundColor: "tomato" }} type="button" className="add-to-cart-mt"> <i className="fa fa-shopping-cart"></i><span> Add to Cart</span> </button>
                          </div>
                        </div>
                        <div className="item-info">
                          <div className="info-inner">
                            <div className="item-title"> <a title={item.PName} href="#l"> {item.PName} </a> </div>
                            <div className="item-content">
                              <div className="rating"> <i className="fa fa-star"></i> <i className="fa fa-star"></i> <i className="fa fa-star-o"></i> <i className="fa fa-star-o"></i> <i className="fa fa-star-o"></i> </div>
                              <div className="item-price">
                                <div className="price-box"> <span className="regular-price"> <span className="price">$ {item.PPrice}</span> </span> </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}

                  {/* end items */}

                </div>
              </div>
            </div>
          </div>
      {/* -------------- */}
      <div className="top-banner">
        <div className="container">
          <div className="row">
            <div className="col-sm-6">
              <div className="jtv-banner1"><a href="#"><img src="assets/images/sub2.jpg" alt="" /></a>
                <div className="hover_content">
                  <div className="hover_data">
                    <div className="title"> Season sale </div>
                    <div className="desc-text"> offer </div>
                    <div className="shop-now"><a href="#">Shop now</a></div>
                  </div>
                </div>
              </div>
              <div className="jtv-banner2"><a href="#"><img src="assets/images/sub3.jpg" alt="" /></a>
                <div className="hover_content">
                  <div className="hover_data">
                    <div className="title"> Best Quality</div>
                    <div className="desc-text"> Vegetables Delicious fruit </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-sm-6">
              <div className="jtv-banner3">
                <div className="jtv-banner3-inner"><a href="#"><img src="assets/images/sub1.jpg" alt="" /></a>
                  <div className="hover_content">
                    <div className="hover_data">
                      <div className="title"> Fresh Fruit </div>
                      <div className="desc-text"> Delivered to your door</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>


      <div className="jtv-category-area">
        <div className="container">
          <div className="row">
            <div className="col-md-4 col-sm-6">
              <div className="jtv-single-cat">
                <h2 className="cat-title">Top Rated</h2>
                <div className="jtv-product">
                  <div className="product-img"> <a href="#l"> <img src="assets/images/products/img10.jpg" alt="" /> <img className="secondary-img" src="assets/images/products/img10.jpg" alt="" /> </a> </div>
                  <div className="jtv-product-content">
                    <h3><a href="#l">Lorem ipsum dolor sit amet</a></h3>
                    <div className="price-box"> <span className="regular-price"> <span className="price">$125.00</span> </span> </div>
                    <div className="jtv-product-action">
                      <div className="jtv-extra-link">
                        <div className="button-cart">
                          <button><i className="fa fa-shopping-cart"></i></button>
                        </div>
                        <a href="#" data-toggle="modal" data-target="#productModal"><i className="fa fa-search"></i></a> <a href="#"><i className="fa fa-heart"></i></a> </div>
                    </div>
                  </div>
                </div>
                <div className="jtv-product jtv-cat-margin">
                  <div className="product-img"> <a href="#l"> <img src="assets/images/products/img07.jpg" alt="" /> <img className="secondary-img" src="assets/images/products/img08.jpg" alt="" /> </a> </div>
                  <div className="jtv-product-content">
                    <h3><a href="#l">Lorem ipsum dolor sit amet</a></h3>
                    <div className="price-box">
                      <p className="special-price"> <span className="price-label">Special Price</span> <span className="price"> $456.00 </span> </p>
                      <p className="old-price"> <span className="price-label">Regular Price:</span> <span className="price"> $567.00 </span> </p>
                    </div>
                    <div className="jtv-product-action">
                      <div className="jtv-extra-link">
                        <div className="button-cart">
                          <button><i className="fa fa-shopping-cart"></i></button>
                        </div>
                        <a href="#" data-toggle="modal" data-target="#productModal"><i className="fa fa-search"></i></a> <a href="#"><i className="fa fa-heart"></i></a> </div>
                    </div>
                  </div>
                </div>
                <div className="jtv-product jtv-cat-margin">
                  <div className="product-img"> <a href="#l"> <img src="assets/images/products/img08.jpg" alt="" /> <img className="secondary-img" src="assets/images/products/img09.jpg" alt="" /> </a> </div>
                  <div className="jtv-product-content">
                    <h3><a href="#l">Lorem ipsum dolor sit amet</a></h3>
                    <div className="price-box"> <span className="regular-price"> <span className="price">$225.00</span> </span> </div>
                    <div className="jtv-product-action">
                      <div className="jtv-extra-link">
                        <div className="button-cart">
                          <button><i className="fa fa-shopping-cart"></i></button>
                        </div>
                        <a href="#" data-toggle="modal" data-target="#productModal"><i className="fa fa-search"></i></a> <a href="#"><i className="fa fa-heart"></i></a> </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-4 col-sm-6">
              <div className="jtv-single-cat">
                <h2 className="cat-title">ON SALE</h2>
                <div className="jtv-product">
                  <div className="product-img"> <a href="#l"> <img src="assets/images/products/img12.jpg" alt="" /> <img className="secondary-img" src="assets/images/products/img11.jpg" alt="" /> </a> </div>
                  <div className="jtv-product-content">
                    <h3><a href="#l">Lorem ipsum dolor sit amet</a></h3>
                    <div className="price-box">
                      <p className="special-price"> <span className="price-label">Special Price</span> <span className="price"> $99.00 </span> </p>
                      <p className="old-price"> <span className="price-label">Regular Price:</span> <span className="price"> $119.00 </span> </p>
                    </div>
                    <div className="jtv-product-action">
                      <div className="jtv-extra-link">
                        <div className="button-cart">
                          <button><i className="fa fa-shopping-cart"></i></button>
                        </div>
                        <a href="#" data-toggle="modal" data-target="#productModal"><i className="fa fa-search"></i></a> <a href="#"><i className="fa fa-heart"></i></a> </div>
                    </div>
                  </div>
                </div>
                <div className="jtv-product jtv-cat-margin">
                  <div className="product-img"> <a href="#l"> <img src="assets/images/products/img05.jpg" alt="" /> <img className="secondary-img" src="assets/images/products/img10.jpg" alt="" /> </a> </div>
                  <div className="jtv-product-content">
                    <h3><a href="#l">Lorem ipsum dolor sit amet</a></h3>
                    <div className="price-box"> <span className="regular-price"> <span className="price">$189.00</span> </span> </div>
                    <div className="jtv-product-action">
                      <div className="jtv-extra-link">
                        <div className="button-cart">
                          <button><i className="fa fa-shopping-cart"></i></button>
                        </div>
                        <a href="#" data-toggle="modal" data-target="#productModal"><i className="fa fa-search"></i></a> <a href="#"><i className="fa fa-heart"></i></a> </div>
                    </div>
                  </div>
                </div>
                <div className="jtv-product jtv-cat-margin">
                  <div className="product-img"> <a href="#l"> <img src="assets/images/products/img01.jpg" alt="" /> <img className="secondary-img" src="assets/images/products/img03.jpg" alt="" /> </a> </div>
                  <div className="jtv-product-content">
                    <h3><a href="#l">Lorem ipsum dolor sit amet</a></h3>
                    <div className="price-box"> <span className="regular-price"> <span className="price">$88.99</span> </span> </div>
                    <div className="jtv-product-action">
                      <div className="jtv-extra-link">
                        <div className="button-cart">
                          <button><i className="fa fa-shopping-cart"></i></button>
                        </div>
                        <a href="#" data-toggle="modal" data-target="#productModal"><i className="fa fa-search"></i></a> <a href="#"><i className="fa fa-heart"></i></a> </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>


            <div className="col-md-4 col-sm-6">
              <div className="jtv-single-cat">
                <h2 className="cat-title">Fruit Market</h2>
                <div className="jtv-product">
                  <div className="product-img"> <a href="#l"> <img src="assets/images/products/img15.jpg" alt="" /> <img className="secondary-img" src="assets/images/products/img10.jpg" alt="" /> </a> </div>
                  <div className="jtv-product-content">
                    <h3><a href="#l">Lorem ipsum dolor sit amet</a></h3>
                    <div className="price-box"> <span className="regular-price"> <span className="price">$125.00</span> </span> </div>
                    <div className="jtv-product-action">
                      <div className="jtv-extra-link">
                        <div className="button-cart">
                          <button><i className="fa fa-shopping-cart"></i></button>
                        </div>
                        <a href="#" data-toggle="modal" data-target="#productModal"><i className="fa fa-search"></i></a> <a href="#"><i className="fa fa-heart"></i></a> </div>
                    </div>
                  </div>
                </div>
                <div className="jtv-product jtv-cat-margin">
                  <div className="product-img"> <a href="#l"> <img src="assets/images/products/img03.jpg" alt="" /> <img className="secondary-img" src="assets/images/products/img08.jpg" alt="" /> </a> </div>
                  <div className="jtv-product-content">
                    <h3><a href="#l">Lorem ipsum dolor sit amet</a></h3>
                    <div className="price-box">
                      <p className="special-price"> <span className="price-label">Special Price</span> <span className="price"> $456.00 </span> </p>
                      <p className="old-price"> <span className="price-label">Regular Price:</span> <span className="price"> $567.00 </span> </p>
                    </div>
                    <div className="jtv-product-action">
                      <div className="jtv-extra-link">
                        <div className="button-cart">
                          <button><i className="fa fa-shopping-cart"></i></button>
                        </div>
                        <a href="#" data-toggle="modal" data-target="#productModal"><i className="fa fa-search"></i></a> <a href="#"><i className="fa fa-heart"></i></a> </div>
                    </div>
                  </div>
                </div>
                <div className="jtv-product jtv-cat-margin">
                  <div className="product-img"> <a href="#l"> <img src="assets/images/products/img09.jpg" alt="" /> <img className="secondary-img" src="assets/images/products/img12.jpg" alt="" /> </a> </div>
                  <div className="jtv-product-content">
                    <h3><a href="#l">Lorem ipsum dolor sit amet</a></h3>
                    <div className="price-box"> <span className="regular-price"> <span className="price">$225.00</span> </span> </div>
                    <div className="jtv-product-action">
                      <div className="jtv-extra-link">
                        <div className="button-cart">
                          <button><i className="fa fa-shopping-cart"></i></button>
                        </div>
                        <a href="#" data-toggle="modal" data-target="#productModal"><i className="fa fa-search"></i></a> <a href="#"><i className="fa fa-heart"></i></a> </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>



    </div>
  );

}

export default Homepage