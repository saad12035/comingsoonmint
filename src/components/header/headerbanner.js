import "./headerbanner.css";
import { Row, Col, Image } from "antd";

function HeaderBanner() {
  return (
    <div className="container">
      <Row>
        <Col span={4} offset={2} xs={12} lg={4} xl={4}>
          <h1
            className="plk"
          >
            0xCrypto.Chicks
          </h1>
        </Col>
        <Col xs={{ span: 22, offset: 2 }} lg={{ span: 8, offset: 10 }}>
          <Image
            preview={false}
            className="img1"
            src={require("../../images/Group 8.png")}
          />
          <Image
            preview={false}
            className="img2"
            src={require("../../images/Group 9.png")}
          />
          <Image
            preview={false}
            className="img2"
            src={require("../../images/Group 10.png")}
          />
        </Col>
      </Row>
    </div>
  );
}

export default HeaderBanner;
