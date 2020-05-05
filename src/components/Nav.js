import React from "react";
/* import Counter from "./Counter"; */
/* import Button from "./Button"; */
export default function Nav(props) {
  /*  const navigation = [<a href="#">Home</a>, <a href="#">Contact us</a>];
  const buttons = [<Button></Button>, <Button />]; 
  return (
    <nav>
      Nav
      <ul>{navigation}</ul>
      {buttons}
    </nav>
  );
}  */

  return <nav>{props.children}</nav>;
}
