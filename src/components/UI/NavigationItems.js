import React from "react";
import NavigationItem from "./NavigationItem";

const NavigationItems = () => {
  return (
    <ul className="NavigationItems">
      <NavigationItem link={"/"} exact>
        Planets
      </NavigationItem>
      <NavigationItem link={"/barchart"} exact>
        Bar chart
      </NavigationItem>
    </ul>
  );
};

export default NavigationItems;
