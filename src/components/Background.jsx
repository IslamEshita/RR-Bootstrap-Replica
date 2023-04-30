import Card from "react-bootstrap/Card";

function Background() {
  let style = {
    backgroundColor: "#deedd6",
    backgroundImage:
      "url(https://www.instacart.com/image-server/x428/www.instacart.com/assets/homepage/homepage_background_full_m3_cropped-8d2d286263821da7decd7c61fb1db1eb0e3dec13e0c356277d6d3cb7484c024a.jpg)",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "right center",
    textAlign: "left",
    paddingLeft: "50px",
  };

  return (
    <Card style={style}>
      <Card.Body>
        <Card.Text>
          <h2>
            Order Groceries for delivery or <br />
            pickup today
          </h2>
          <p>
            Whatever you want from local stores, brought right to your door.
          </p>
          <input type="text" placeholder="Enter your address"></input>
        </Card.Text>
      </Card.Body>
    </Card>
  );
}

export default Background;
