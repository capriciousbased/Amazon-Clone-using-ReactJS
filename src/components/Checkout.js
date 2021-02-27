import React from "react";
import "./Checkout.css";
import Subtotal from "./Subtotal";

function Checkout() {
  return (
    <div className="checkout">
      <div className="checkout__left">
        <img
          className="checkout__add"
          src="https://images-na.ssl-images-amazon.com/images/G/03/gc/reload/rebranding/bcosmin_2018-01-23T14-44_e286a7_1096349_de_giftcard_maple_banner_vc_770x60_3._CB485923475_.jpg"
          alt=""
        />
        <div>
          <h2 className="checkout__title">Your Shopping Basket</h2>
        </div>
      </div>

      <div className="checkout__right">
        <Subtotal />
      </div>
    </div>
  );
}

export default Checkout;
