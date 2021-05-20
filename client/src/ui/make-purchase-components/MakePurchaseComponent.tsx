import React from "react";
import { MakePurchaseComponentProps } from "./MakePurchaseComponentProps";
import { checkIsGuest } from "../../utils/utils";
import { GuestPurchaseComponent } from "./guest-purchase-component/GuestPurchaseComponent";
import { NotVerifiedPurchaseComponent } from "./not-verified-purchase-component/NotVerifiedPurchaseComponent";
import { OkPurchaseComponent } from "./ok-purchase-component/OkPurchaseComponent";
import { EmptyCartPurchaseComponent } from "./empty-cart-purchase-component/EmptyCartPurchaseComponent";

export const MakePurchaseComponent: React.FC<MakePurchaseComponentProps> = (props) => {
  const { isVerified, productsInCart, emailAndPassword } = props;
  const isGuest = checkIsGuest(emailAndPassword);

  if (isGuest) {
    return <GuestPurchaseComponent />;
  }
  if (!isVerified) {
    return <NotVerifiedPurchaseComponent />;
  }
  if (productsInCart.size === 0) {
    return <EmptyCartPurchaseComponent />;
  }
  return <OkPurchaseComponent productsInCart={productsInCart} />;
};
