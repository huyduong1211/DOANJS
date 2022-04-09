import React, { useEffect, useState } from 'react';
import './App.css';
import Homepage from './SubpageJS/Homepage';
import CartPage from './CartPage';
import { Routes } from 'react-router-dom';
import { Route } from 'react-router-dom';
import DetailPage from './SubpageJS/DetailPage';
import axios from 'axios';
import Minicart from './SubpageJS/MiniCart';
import {useSelector, useDispatch} from 'react-redux'
import { ProductActions } from './store/product-slice';
import { cartActions } from './store/cart-slice';
function App() {
  const userID = 1;
  const dispatch = useDispatch();
  useEffect(() => {
    const getAllProducts = async () => {
      const products = await axios.get(`http://localhost:5000/ProductRT/getproduct`);
      dispatch(ProductActions.setProducts(products.data));
    }
    const getCart = async () => {
      try{
        const cartData = await axios.post("http://localhost:5000/CartRT/all", {
          userId: userID
        });
        dispatch(cartActions.setInit());
        dispatch(cartActions.setCart(cartData.data[0].Products));
      }catch(err){

      }
    }
    getCart();
    getAllProducts();
  }, [])
  
  const [category, setCategory] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:5000/CategoryRT/getcategory")
      .then((res) => { setCategory(res.data) })
      .catch((err) => { console.log(err) });
  }, []);

  return (
    <div className="App">
      <div id="mobile-menu">
        <ul>
          <li>
            <a href="#" class="home1">Home</a>
          </li>
          <li><a href="#">Pages</a>
            <ul>

              <li> <a href="#"> Blog Pages </a>
                <ul>
                  <li><a href="#">Blog – Right sidebar </a></li>
                  <li><a href="#">Blog – Left sidebar </a></li>
                  <li><a href="#">Blog_ - Full width</a></li>
                  <li><a href="#">Single post </a></li>
                </ul>
              </li>
            </ul>
          </li>
          <li><a href="#">Contact us</a></li>
          <li><a href="#">About us</a></li>
          <li><a href="#">Blog</a>
            <ul>
              <li><a href="#">Blog – Right sidebar </a></li>
              <li><a href="#">Blog – Left sidebar </a></li>
              <li><a href="#">Blog_ - Full width</a></li>
              <li><a href="#">Single post </a></li>
            </ul>
          </li>


          <li><a href="#">Special Gift</a>
            <ul>
              <li> <a href="#">Mobiles</a>
                <ul>
                  <li> <a href="#">iPhone</a> </li>
                  <li> <a href="#">Samsung</a> </li>
                  <li> <a href="#">Nokia</a> </li>
                  <li> <a href="#">Sony</a> </li>
                </ul>
              </li>
              <li> <a href="#" class="">Music &amp; Audio</a>
                <ul>
                  <li> <a href="#">Audio</a> </li>
                  <li> <a href="#">Cameras</a> </li>
                  <li> <a href="#">Appling</a> </li>
                  <li> <a href="#">Car Music</a> </li>
                </ul>
              </li>
              <li> <a href="#">Accessories</a>
                <ul>
                  <li> <a href="#">Home &amp; Office</a> </li>
                  <li> <a href="#">TV &amp; Home Theater</a> </li>
                  <li> <a href="#">Phones &amp; Radio</a> </li>
                  <li> <a href="#">All Electronics</a> </li>
                </ul>
              </li>
            </ul>
          </li>
        </ul>
      </div>

      {/* top ▲ for mobile */}

      {/* this for webpage */}
      <div id="page">


        <header>
          <div class="header-container">
            <div class="header-top">
              <div class="container">
                <div class="row">
                  <div class="col-lg-4 col-sm-4 col-md-5 hidden-xs">

                    <div class="welcome-msg ">Welcome to Electronics-Shop! </div>
                    <span class="phone hidden-sm">Call: +84: 965-871-743</span> </div>
                  <div class="headerlinkmenu col-lg-8 col-md-7 col-sm-8 col-xs-12">
                    <div class="links">
                      <div class="myaccount"><a title="My Account" href="#"><i class="fa fa-user"></i><span class="hidden-xs">My Account</span></a></div>
                      <div class="login"><a href="#"><i class="fa fa-unlock-alt"></i><span class="hidden-xs">Log In</span></a></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="container">
              <div class="row">
                <div class="col-sm-3 col-md-3 col-xs-12" style={{display:"flex",columnGap:"10px",justifyContent:"center",alignItems:"center"}}>

                  <div class="logo"><a title="e-commerce" href="#"><img style={{width:"50px",height:"50px",borderRadius:"50%"}} alt="e-commerce" src="assets/images/Logo/logo.png" /></a> </div><h1 style={{fontWeight:"bold", color:"tomato",fontFamily:"fantasy"}}>Elec<span style={{color:"blue"}}>tronics</span></h1>

                </div>
                {/* Search */}
                <div class="col-xs-9 col-sm-6 col-md-7">

                  <div class="top-search">
                    <div id="search">
                      <form>
                        <div class="input-group" style={{ borderRadius: "10px" }}>
                          <select class="cate-dropdown hidden-xs" name="category_id">
                            <option>All Categories</option>
                          </select>
                          <input type="text" class="form-control" placeholder="Search" name="search" />
                          <button class="btn-search" type="button"><i class="fa fa-search"></i></button>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
                {/* EndSerarch */}

                {/* mini cart here */}
                <Minicart />

              </div>
            </div>
          </div>
        </header>

        <nav>
          <div class="container">
            <div class="row">
              <div class="col-md-3 col-sm-4">
                <div class="mm-toggle-wrap">
                  <div class="mm-toggle"> <i class="fa fa-align-justify"></i> </div>
                  <span class="mm-label">Categories</span> </div>
                <div class="mega-container visible-lg visible-md visible-sm" >
                  <div class="navleft-container">
                    <div class="mega-menu-title" style={{ borderRadius: "10px", backgroundColor: "rgba(122, 147, 238, 0.8)" }}>
                      <h3 style={{ fontSize: "100%" }}>Shop by category</h3>
                    </div>
                    <div class="mega-menu-category">
                      <ul class="nav">
                        <li><a href="#">Most Popular</a>
                          <div class="wrap-popup column1">
                            <div class="popup">
                              <ul class="nav">
                                <li> <a href="#"> Vacuum Cleaner </a> </li>
                                <li> <a href="#"> Memore Bluetooth</a> </li>
                                <li> <a href="#"> On-Ear Headphones </a> </li>
                                <li> <a href="#"> Digital MP3 Player </a> </li>
                              </ul>
                            </div>
                          </div>
                        </li>
                        {category.map((item,i)=>(
                          <li key={i} class="nosub"><a href="#">{item.CName} ▶</a></li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-md-9 col-sm-8">
                <div class="mtmegamenu">
                  <ul>
                    <li class="mt-root demo_custom_link_cms">
                      <div class="mt-root-item"><a href="#">
                        <div class="title title_font"><span class="title-text">Home</span></div>
                      </a></div>

                    </li>
                    <li class="mt-root">
                      <div class="mt-root-item"><a href="#">
                        <div class="title title_font"><span class="title-text">Page</span></div>
                      </a></div>
                      <ul class="menu-items col-xs-4">

                        <li class="menu-item depth-1 menucol-3 ">
                          <div class="title title_font"> <a href="#"> Single Product Pages </a></div>
                          <ul class="submenu">
                            <li class="menu-item">
                              <div class="title"> <a href="#l"> single product </a></div>
                            </li>
                            <li class="menu-item">
                              <div class="title"> <a href="#"> single product left sidebar</a></div>
                            </li>
                            <li class="menu-item">
                              <div class="title"> <a href="#"> single product right sidebar</a></div>
                            </li>
                            <li class="menu-item">
                              <div class="title"> <a href="#"> single product magnify zoom</a></div>
                            </li>
                          </ul>
                        </li>
                      </ul>
                    </li>
                    <li class="mt-root">
                      <div class="mt-root-item"><a href="#">
                        <div class="title title_font"><span class="title-text">Contact Us</span> </div>
                      </a></div>
                    </li>
                    <li class="mt-root">
                      <div class="mt-root-item"><a href="#">
                        <div class="title title_font"><span class="title-text">about us</span></div>
                      </a></div>
                    </li>
                    <li class="mt-root demo_custom_link_cms">
                      <div class="mt-root-item"><a href="#">
                        <div class="title title_font"><span class="title-text">Blog</span></div>
                      </a></div>
                      <ul class="menu-items col-md-3 col-sm-4 col-xs-12">
                        <li class="menu-item depth-1">
                          <div class="title"> <a href="#"> Blog – Right Sidebar </a></div>
                        </li>
                        <li class="menu-item depth-1">
                          <div class="title"> <a href="#"> Blog – Left Sidebar </a></div>
                        </li>
                        <li class="menu-item depth-1">
                          <div class="title"> <a href="#"> Blog – Full-Width </a></div>
                        </li>
                        <li class="menu-item depth-1">
                          <div class="title"> <a href="#"> Single post </a></div>
                        </li>
                      </ul>
                    </li>
                    <li class="mt-root">
                      <div class="mt-root-item">
                        <div class="title title_font"><span class="title-text">Best Seller</span></div>
                      </div>
                      <ul class="menu-items col-xs-12">
                        <li class="menu-item depth-1 product menucol-1-3 withimage">

                          <div class="product-item">
                            <div class="item-inner">
                              <div class="product-thumbnail">
                                <div class="icon-sale-label sale-left">Sale</div>
                                <div class="pr-img-area"> <a title="Ipsums Dolors Untra" href="#l">
                                  <figure> <img class="first-img" src="assets/images/products/img06.jpg" alt="" /> <img class="hover-img" src="assets/images/products/img06.jpg" alt="" /></figure>
                                </a>
                                  <button type="button" class="add-to-cart-mt"> <i class="fa fa-shopping-cart"></i><span> Add to Cart</span> </button>
                                </div>
                                <div class="pr-info-area">
                                  <div class="pr-button">
                                    <div class="mt-button add_to_wishlist"> <a href="#"> <i class="fa fa-heart"></i> </a> </div>
                                    <div class="mt-button add_to_compare"> <a href="#"> <i class="fa fa-signal"></i> </a> </div>
                                    <div class="mt-button quick-view"> <a href="#"> <i class="fa fa-search"></i> </a> </div>
                                  </div>
                                </div>
                              </div>
                              <div class="item-info">
                                <div class="info-inner">
                                  <div class="item-title"> <a title="Ipsums Dolors Untra" href="#l">Ipsums Dolors Untra </a> </div>
                                  <div class="item-content">
                                    <div class="rating"> <i class="fa fa-star-o"></i> <i class="fa fa-star-o"></i> <i class="fa fa-star-o"></i> <i class="fa fa-star-o"></i> <i class="fa fa-star-o"></i> </div>
                                    <div class="item-price">
                                      <div class="price-box"> <span class="regular-price"> <span class="price">$125.00</span> </span> </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </li>


                      </ul>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </nav>
        {/* content */}
        <div>
          <Routes>
            <Route path='/' element={<Homepage />} />
            <Route path='/detail' element={<DetailPage />} />
            <Route path='/cart' element ={<CartPage/>}/>
          </Routes>
        </div>
      </div>
      <footer>
        <div class="container">
          <div class="row">
            <div class="col-sm-6 col-md-4 col-xs-12 col-lg-3">
              <div class="footer-logo"><a href="#"><img src="assets/images/footer-logo.png" alt="fotter logo" /></a> </div>
              <p>Lorem Ipsum is simply dummy text of the print and typesetting industry.</p>
              <div class="footer-content">
                <div class="email"> <i class="fa fa-envelope"></i>
                  <p>Support@jassa.com</p>
                </div>
                <div class="phone"> <i class="fa fa-phone"></i>
                  <p>(800) 0123 456 789</p>
                </div>
                <div class="address"> <i class="fa fa-map-marker"></i>
                  <p> My Company, 12/34 - West 21st Street, Ludhiana, Punjab India</p>
                </div>
              </div>
            </div>
            <div class="col-sm-6 col-md-3 col-xs-12 col-lg-3 collapsed-block">
              <div class="footer-links">
                <h3 class="links-title">Information<a class="expander visible-xs" href="#TabBlock-1">+</a></h3>
                <div class="tabBlock" id="TabBlock-1">
                  <ul class="list-links list-unstyled">
                    <li><a href="#s">Delivery Information</a></li>
                    <li><a href="#">Discount</a></li>
                    <li><a href="#">Sitemap</a></li>
                    <li><a href="#">Privacy Policy</a></li>
                    <li><a href="#">FAQs</a></li>
                    <li><a href="#">Terms &amp; Condition</a></li>
                  </ul>
                </div>
              </div>
            </div>
            <div class="col-sm-6 col-md-3 col-xs-12 col-lg-3 collapsed-block">
              <div class="footer-links">
                <h3 class="links-title">Insider<a class="expander visible-xs" href="#TabBlock-3">+</a></h3>
                <div class="tabBlock" id="TabBlock-3">
                  <ul class="list-links list-unstyled">
                    <li> <a href="#"> Sites Map </a> </li>
                    <li> <a href="#">News</a> </li>
                    <li> <a href="#">Trends</a> </li>
                    <li> <a href="#">About Us</a> </li>
                    <li> <a href="#">Contact Us</a> </li>
                    <li> <a href="#">My Orders</a> </li>
                  </ul>
                </div>
              </div>
            </div>
            <div class="col-sm-6 col-md-2 col-xs-12 col-lg-3 collapsed-block">
              <div class="footer-links">
                <h3 class="links-title">Service<a class="expander visible-xs" href="#TabBlock-4">+</a></h3>
                <div class="tabBlock" id="TabBlock-4">
                  <ul class="list-links list-unstyled">
                    <li> <a href="#">Account</a> </li>
                    <li> <a href="#">Wishlist</a> </li>
                    <li> <a href="#">Shopping Cart</a> </li>
                    <li> <a href="#">Return Policy</a> </li>
                    <li> <a href="#">Special</a> </li>
                    <li> <a href="#">Lookbook</a> </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="footer-coppyright">
          <div class="container">
            <div class="row">
              <div class="col-sm-6 col-xs-12 coppyright"> Copyright © 2021 <a href="#"> Organic </a>. All Rights Reserved. </div>
              <div class="col-sm-6 col-xs-12">
                <div class="payment">
                  <ul>
                    <li><a href="#"><img title="Visa" alt="Visa" src="assets/images/visa.png" /></a></li>
                    <li><a href="#"><img title="Paypal" alt="Paypal" src="assets/images/paypal.png" /></a></li>
                    <li><a href="#"><img title="Discover" alt="Discover" src="assets/images/discover.png" /></a></li>
                    <li><a href="#"><img title="Master Card" alt="Master Card" src="assets/images/master-card.png" /></a></li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
      <a href="#" class="totop"> </a>



    </div>
  );
}

export default App;
