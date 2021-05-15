import React from "react";
import { Link } from "react-router-dom";
import { getNavigationLinkTo } from "../../utils/getNavigationLinkTo";

export const Landing = () => {
  return (
    <div>
      <h1>Добро пожаловать в магазин электроники e-store!</h1>
      <p>Здесь вы можете приобрести настолько электронные вещи, насколько желаете</p>
      <p>
        Этот магазин был с любовью создан нашей{" "}
        <Link to={getNavigationLinkTo("PAGE_TEAM")}>командой программистов</Link>
      </p>
      <h2>
        <Link to={getNavigationLinkTo("PAGE_PRODUCT-CATALOGUE")}>За покупками!</Link>
      </h2>
    </div>
  );
};
