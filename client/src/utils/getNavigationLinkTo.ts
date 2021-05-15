export type NavigationLinks =
  | "PAGE_404"
  | "PAGE_LANDING"
  | "PAGE_PRODUCT-CATALOGUE"
  | "PAGE_PROFILE"
  | "PAGE_SHOPPING-CART"
  | "PAGE_SIGN-UP-OR-SIGN-IN"
  | "PAGE_TEAM";

export const getNavigationLinkTo = (navLink: NavigationLinks): string => {
  switch (navLink) {
    case "PAGE_LANDING":
      return "/";
    case "PAGE_PRODUCT-CATALOGUE":
      return "/products";
    case "PAGE_PROFILE":
      return "/user";
    case "PAGE_SHOPPING-CART":
      return "/shoppingCart";
    case "PAGE_SIGN-UP-OR-SIGN-IN":
      return "/signUpOrIn";
    case "PAGE_TEAM":
      return "/team";
    case "PAGE_404":
      return "/page404";
    default:
      return "/";
  }
};
