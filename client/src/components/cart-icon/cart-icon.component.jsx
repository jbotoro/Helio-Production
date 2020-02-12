import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";


import { selectCartItemsCount } from "../../redux/cart/cart.selectors";

import {
  CartContainer,
  ShoppingIcon,
  ItemCountContainer
} from "./cart-icon.styles";

const CartIcon = ({ toggleCartHidden, itemCount }) => (
  <CartContainer onClick={toggleCartHidden}>
    <ShoppingIcon />
    <ItemCountContainer>{itemCount}</ItemCountContainer>
  </CartContainer>
);


const mapStateToProps = createStructuredSelector ({
    itemCount: selectCartItemsCount
});

export default connect(mapStateToProps)(CartIcon);