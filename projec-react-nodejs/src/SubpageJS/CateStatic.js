import React from "react";
export default function(){
    return (
        <div className="banner-static">
        <div className="container">
          <div className="row">
            <div className="col-sm-4 col-sms-12">
              <div className="banner-box banner-box2"> <a href=""><img src="assets/images/products/BannerStatic1.jpg" alt="" /></a>
                <div className="box-hover">
                  <div className="banner-title" style={{color:"tomato"}}>Fresh Fridge</div>
                  <span>Save up to 55% off</span> </div>
              </div>
            </div>
            <div className="col-sm-4 col-sms-12">
              <div className="banner-box banner-box1"> <a href=""><img src="assets/images/products/BannerStatic2.png" alt="" /></a>
                <div className="box-hover">
                  <div className="banner-title" style={{color:"tomato"}}>Smart TV</div>
                  <span>Save up to 45% off</span> </div>
              </div>
            </div>
            <div className="col-sm-4 col-sms-12">
              <div className="banner-box banner-box3"> <a href=""><img src="assets/images/products/BannerStatic3.jpg" alt="" /></a>
                <div className="box-hover">
                  <div className="banner-title" style={{color:"tomato"}}>Washing Machine</div>
                  <span>Welcome to Foodstore!</span> </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
}