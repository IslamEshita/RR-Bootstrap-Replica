function Background() {
  let style = {
    backgroundColor: "#deedd6",
    backgroundImage:
      " url(https://www.instacart.com/image-server/x428/www.instacart.com/assets/homepage/homepage_background_full_m3_cropped-8d2d286263821da7decd7c61fb1db1eb0e3dec13e0c356277d6d3cb7484c024a.jpg)",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "right center",
    position: "absolute",
    height: "100%",
    width: "100%",
    textAlign: "left",
    maxHeight: "220px",
    paddingLeft: "100px",
    paddingTop: "20px",
  };

  return (
    <div style={style}>
      <h2>Order groceries for delivery</h2>
      <h2>or pickup today</h2>
      <p>Whatever you want from local stores, brought to your door</p>
      <input type="text" placeholder="Enter your address"></input>
    </div>
  );
}

export default Background;
