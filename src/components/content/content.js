import { Image } from "antd";
import { Row, Col } from "antd";
import "./content.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import SwiperCore, { Autoplay } from "swiper";
import {useState} from "react";


function ContextBody() {
  SwiperCore.use([Autoplay]);
  const [count, setCount] = useState(0);
  const imagePlus = () => {
    setCount(count + 1);
  };
  const imageMinus = () => {
    if (count <= 0) {
      setCount(0);
    } else {
      setCount(count - 1);
    }
  };
  return (
    <div className="container-body">
      <div className="container-body2">
        <Row>
          <Col xs={{ span: 20, offset: 2 }} lg={{ span: 16, offset: 7 }}>
            <Row>
              <Col xs={{ span: 6, offset: 2 }} lg={{ span: 3, offset: 4 }}>
                <Image
                    preview={false}
                    className="minis"
                    src={require("../../images/minus-4-512.png")}
                    onClick={() => imageMinus()}
                />
              </Col>
              <Col xs={{ span: 6, offset: 1 }} lg={{ span: 3, offset: 0 }}>
                <h2 className="t2">{count}</h2>
              </Col>
              <Col xs={{ span: 6, offset: 1 }} lg={{ span: 3, offset: 1 }}>
                <Image
                    preview={false}
                   className="plis"
                    src={require("../../images/plus-4-512.png")}
                    onClick={() => imagePlus()}
                />
              </Col>
            </Row>
            <div className="button">
              <h1>MINT</h1>
            </div>

          </Col>
        </Row>
        <Row>
          <Col span={24} xs={{ span: 0 }} lg={{ span: 24 }}>
            <Swiper
              modules={{ Autoplay }}
              autoplay={{ delay: 1500 }}
              spaceBetween={50}
              slidesPerView={4}
              loop={true}
            >
              <SwiperSlide>
                <Image className="testing" preview={false} src={require("../../images/cc1.png")} />
              </SwiperSlide>
              <SwiperSlide>
                <Image className="testing" preview={false} src={require("../../images/cc2.png")} />
              </SwiperSlide>
              <SwiperSlide>
                <Image className="testing" preview={false} src={require("../../images/cc3.png")} />
              </SwiperSlide>
              <SwiperSlide>
                <Image className="testing" preview={false} src={require("../../images/cc4.png")} />
              </SwiperSlide>
              <SwiperSlide>
                <Image className="testing" preview={false} src={require("../../images/cc1.png")} />
              </SwiperSlide>
              <SwiperSlide>
                <Image className="testing" preview={false} src={require("../../images/cc2.png")} />
              </SwiperSlide>
              <SwiperSlide>
                <Image className="testing" preview={false} src={require("../../images/cc3.png")} />
              </SwiperSlide>
              <SwiperSlide>
                <Image className="testing" preview={false} src={require("../../images/cc4.png")} />
              </SwiperSlide>
            </Swiper>
          </Col>
          <Col span={24} xs={{ span: 22 }} lg={{ span: 0 }}>
            <Swiper
                style={{marginTop:120}}
                modules={{ Autoplay }}
                autoplay={{ delay: 1500 }}
                spaceBetween={50}
                slidesPerView={2}
                loop={true}
            >
              <SwiperSlide>
                <Image className="testing" preview={false} src={require("../../images/cc1.png")} />
              </SwiperSlide>
              <SwiperSlide>
                <Image className="testing" preview={false} src={require("../../images/cc2.png")} />
              </SwiperSlide>
              <SwiperSlide>
                <Image className="testing" preview={false} src={require("../../images/cc3.png")} />
              </SwiperSlide>
              <SwiperSlide>
                <Image className="testing" preview={false} src={require("../../images/cc4.png")} />
              </SwiperSlide>
              <SwiperSlide>
                <Image className="testing" preview={false} src={require("../../images/cc1.png")} />
              </SwiperSlide>
              <SwiperSlide>
                <Image className="testing" preview={false} src={require("../../images/cc2.png")} />
              </SwiperSlide>
              <SwiperSlide>
                <Image className="testing" preview={false} src={require("../../images/cc3.png")} />
              </SwiperSlide>
              <SwiperSlide>
                <Image className="testing" preview={false} src={require("../../images/cc4.png")} />
              </SwiperSlide>
            </Swiper>
          </Col>
        </Row>
        <div />
      </div>
    </div>
  );
}

export default ContextBody;
