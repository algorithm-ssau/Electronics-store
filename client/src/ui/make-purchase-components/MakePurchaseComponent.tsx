import React from "react";
import { MakePurchaseComponentProps } from "./MakePurchaseComponentProps";
import { checkIsGuest } from "../../utils/utils";
import { GuestPurchaseComponent } from "./guest-purchase-component/GuestPurchaseComponent";
import { NotVerifiedPurchaseComponent } from "./not-verified-purchase-component/NotVerifiedPurchaseComponent";
import { OkPurchaseComponent } from "./ok-purchase-component/OkPurchaseComponent";

export const MakePurchaseComponent: React.FC<MakePurchaseComponentProps> = (props) => {
  const { isVerified, productsInCart, emailAndPassword } = props;
  const isGuest = checkIsGuest(emailAndPassword);

  if (isGuest) {
    return <GuestPurchaseComponent />;
  }
  if (!isVerified) {
    return <NotVerifiedPurchaseComponent />;
  }
  if (emailAndPassword !== undefined)
    return <OkPurchaseComponent emailAndPassword={emailAndPassword} productsInCart={productsInCart} />;
  throw new Error("guest check incorrect, emailAndPassword are undefined");
};
