import React from "react";
function DetailPage() {
    return (
        <div class="cover">
        <div class="img-product-detail">
            <img src="https://hhpetrol.com/upload/images/may-lanh-sumikura-co-tot-khong.jpg" alt="" />
        </div>
        <div class="infor-product-detail">
            <div class="row-property">
                <div class="srp-div">
                    <h1 class="srp-h1"> Name </h1>
                </div>
               <div class="srp-div"><h4 class="srp-h4">ma sp</h4></div>
               
               <div class="srp-div"> <h4 class="srp-h4">mo ta: </h4> <p>cai nay rat hay cai nay rat hay cai nay rat hay cai nay rat hay cai nay rat hay cai nay rat hay cai nay rat hay cai nay rat hay cai nay rat hay cai nay rat hay cai nay rat hay cai nay rat hay cai nay rat hay cai nay rat hay cai nay rat hay cai nay rat hay cai nay rat hay cai nay rat hay cai nay rat hay cai nay rat hay cai nay rat hay cai nay rat hay cai nay rat hay cai nay rat hay</p></div>
        
               
               <div class="srp-div"><h4 class="srp-h4">so luong ton</h4></div>
               
               <div class="srp-div">
                   <div class="cusquantity">
                       <button class="q-button">-</button>
                    <input class="q-input" type="number" defaultValue={1}/>
                    <button class="q-button">+</button>
                   </div>
                </div>
                
            </div>
            <div class="row-property">
                <div class="bt-cart"><i class="fa fa-shopping-cart"></i><span> Add to Cart</span></div>
                <div class="bt-cart"><i class="fa fa-shopping-cart"></i><span> Add to Cart</span></div>
            </div>
        </div>
            </div>
    );
}
export default DetailPage;