import React from "react";
import { v4 as uuidv4 } from "uuid";
import Card from "./carousel/Card";
import Carousel from "./carousel/Carousel";
import classes from "../../styles/Product.module.css";

function App() {
  let cards = [
    {
      key: uuidv4(),
      content: <Card imagen="/winillustration.jpg" name="Aluminium Windows" />,
    },
    {
      key: uuidv4(),
      content: <Card imagen="doorillustration.jpg" name="Aluminium Doors" />,
    },
    {
      key: uuidv4(),
      content: <Card imagen="brickTileillustration.jpg" name="Brick Tiles" />,
    },
  ];
  return (
    <>
      <div className={classes.carousel}>
        <Carousel
          cards={cards}
          height="500px"
          width="60%"
          margin="0 auto"
          offset={2}
          showArrows={false}
        />
      </div>
      <div>
        {cards.forEach((element) => {
          element.content;
        })}
      </div>
      v
    </>
  );
}

export default App;
