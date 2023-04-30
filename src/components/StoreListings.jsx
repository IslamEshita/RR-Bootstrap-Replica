import Image from "react-bootstrap/Image";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

function StoreListings() {
  return (
    <div>
      <h2>Choose your store in San Diego</h2>
      <Container style={{ marginTop: "40px", textAlign: "center" }}>
        <Row
          style={{
            borderBottom: "1px solid #E8E9EB",
            display: "flex",
            justifyContent: "space-evenly",
          }}
        >
          <Row>
            <Col xs=".5">
              <Image
                src="https://www.instacart.com/image-server/58x58/www.instacart.com/assets/domains/warehouse/logo/5/65f2304b-908e-4cd0-981d-0d4e4effa8de.png"
                roundedCircle
              />
            </Col>
            <Col>
              <h5 style={{ fontWeight: "bold" }}>Costco</h5>
              <span style={{ display: "block", color: "grey" }}>
                Groceries • Wholesale
              </span>
              <span style={{ display: "block" }}>Delivery</span>
            </Col>
          </Row>
          <Col sm="1"></Col>
          <Row>
            <Col xs=".5">
              <Image
                src="https://www.instacart.com/image-server/58x58/www.instacart.com/assets/domains/warehouse/logo/12/2774c343-1319-4720-a54f-0c46e93f956c.png"
                roundedCircle
              />
            </Col>
            <Col>
              <h5 style={{ fontWeight: "bold" }}>ALDI</h5>
              <span style={{ display: "block", color: "grey" }}>
                Groceries • Produce • Organic
              </span>
              <span style={{ display: "block" }}>Delivery</span>
              <span style={{ display: "block" }}>Pickup</span>
            </Col>
          </Row>
          <Col sm="1"></Col>
          <Row>
            <Col xs=".5">
              <Image
                src="https://www.instacart.com/image-server/58x58/www.instacart.com/assets/domains/warehouse/logo/38/bef2eb95-7375-4547-ab37-21502de090e0.png"
                roundedCircle
              />
            </Col>
            <Col>
              <h5 style={{ fontWeight: "bold" }}>Ralphs</h5>
              <span style={{ display: "block", color: "grey" }}>
                Organic • Butcher Shop • Farmer's Market
              </span>
              <span style={{ display: "block" }}>Delivery</span>
            </Col>
          </Row>
        </Row>
      </Container>
    </div>
  );
}

export default StoreListings;
