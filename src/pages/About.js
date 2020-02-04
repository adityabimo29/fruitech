import React, { Component } from "react";
import { Row, Col, Tabs, Button, Carousel, Card } from "antd";
import Navbar from "./Top";
import Pic1 from "../images/our-farm-1.jpg";
import Pic2 from "../images/our-farm-2.jpg";
import Pic3 from "../images/our-farm-3.jpg";
import Pic4 from "../images/our-farm-4.jpg";
import axios from "axios";
import Footer from "./Bottom";
import Promo1 from "../images/clients-1-120x114.png";
import Promo2 from "../images/clients-2-105x118.png";
import Promo3 from "../images/clients-3-111x98.png";
import Promo4 from "../images/clients-4-122x92.png";
import Promo5 from "../images/clients-5-112x112.png";

const { TabPane } = Tabs;

function callback(key) {
  console.log(key);
}

export default class About extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userAPI_Jesky: "",
      userAPI_Pirman: "",
      userAPI_Aditya: ""
    };
  }

  getUser = () => {
    axios.get("https://api.github.com/users/fransjesky").then(response => {
      console.log(response);
      const user = response.data;
      this.setState({ userAPI_Jesky: user });
    });

    axios.get("https://api.github.com/users/pirman-ss").then(response => {
      console.log(response);
      const user = response.data;
      this.setState({ userAPI_Pirman: user });
    });

    axios.get("https://api.github.com/users/adityabimo29").then(response => {
      console.log(response);
      const user = response.data;
      this.setState({ userAPI_Aditya: user });
    });
  };

  componentDidMount() {
    this.getUser();
  }

  render() {
    const { userAPI_Jesky, userAPI_Pirman, userAPI_Aditya } = this.state;
    return (
      <div>
        <Navbar />
        <Row>
          <Col className="AboutContainer">
            <p>ABOUT US</p>
            <h3>
              We are industry-leading organic farm delivering the best products
              <br />
              that boost your daily life energy and potential.
            </h3>
          </Col>
        </Row>
        <Row>
          <Col xs={{ span: 24 }} lg={{ span: 12 }} className="AboutFirstTab">
            <h1 className="AboutCol1 AboutFirstTab">
              NEW GENERATION
              <br />
              OF FARMERS
            </h1>
            <Col className="TabsContainer">
              <Tabs defaultActiveKey="1" onChange={callback}>
                <TabPane tab="ABOUT" key="1" className="AboutTabs">
                  Since its foundation, Orange offers best organic fruits for
                  local residents, fruit markets, and guests of our city. We are
                  dedicated to improving your healthy food standards.
                </TabPane>
                <TabPane tab="OUR MISSION" key="2" className="AboutTabs">
                  Since its foundation, Orange offers best organic fruits for
                  local residents, fruit markets, and guests of our city. We are
                  dedicated to improving your healthy food standards.
                </TabPane>
                <TabPane tab="OUR VISION" key="3" className="AboutTabs">
                  Since its foundation, Orange offers best organic fruits for
                  local residents, fruit markets, and guests of our city. We are
                  dedicated to improving your healthy food standards.
                </TabPane>
              </Tabs>
              <Button type="danger" className="AboutButton">
                READ MORE
              </Button>
            </Col>
          </Col>
          <Col xs={{ span: 24 }} lg={{ span: 12 }}>
            <div className="carouselContainer">
              <Carousel autoplay>
                <div>
                  <img src={Pic1} alt="" />
                </div>
                <div>
                  <img src={Pic2} alt="" />
                </div>
                <div>
                  <img src={Pic3} alt="" />
                </div>
                <div>
                  <img src={Pic4} alt="" />
                </div>
              </Carousel>
            </div>
          </Col>
        </Row>
        <Row className="HistorySection">
          <h1
            style={{
              color: "white",
              fontWeight: 600,
              fontSize: 55,
              textAlign: "center"
            }}
          >
            OUR HISTORY
          </h1>
          <Col xs={{ span: 24 }} lg={{ span: 8 }}>
            <div className="historyCard">
              <h1>Establishment</h1>
            </div>
            <div className="historyContent">
              <p>
                Vestibulum ante ipsum primis in faucibus orci luctus et ultrices
                posuere cubilia Curae; Proin facilisis, velit non fringilla
                pharetra, elit odio
              </p>
            </div>
          </Col>
          <Col xs={{ span: 24 }} lg={{ span: 8 }}>
            <div className="historyCard">
              <h1>First Success</h1>
            </div>
            <div className="historyContent">
              <p>
                Vestibulum ante ipsum primis in faucibus orci luctus et ultrices
                posuere cubilia Curae; Proin facilisis, velit non fringilla
                pharetra, elit odio
              </p>
            </div>
          </Col>
          <Col xs={{ span: 24 }} lg={{ span: 8 }}>
            <div className="historyCard">
              <h1>New Technologies</h1>
            </div>
            <div className="historyContent">
              <p>
                Vestibulum ante ipsum primis in faucibus orci luctus et ultrices
                posuere cubilia Curae; Proin facilisis, velit non fringilla
                pharetra, elit odio
              </p>
            </div>
          </Col>
        </Row>
        <Row>
          <Col
            className="OurTeamHeaderContainer"
            style={{ background: "none" }}
          >
            <p style={{ color: "black", textShadow: "none" }}>OUR TEAM</p>
          </Col>
        </Row>
        <Row style={{ display: "flex", justifyContent: "space-between" }}>
          <Col xs={{ span: 24 }} lg={{ span: 5 }}>
            <Card
              cover={
                <img
                  alt="Aditya"
                  src={userAPI_Aditya.avatar_url}
                  style={{ borderRadius: 10 }}
                />
              }
              style={{ border: "none" }}
            >
              <h3 className="userName">ADITYA BIMO</h3>
              <p style={{ textAlign: "center" }}>
                Aditya is the farm owner & founder who deals with strategic
                decisions.
              </p>
              <div style={{ display: "flex", justifyContent: "center" }}>
                <i
                  className="fa fa-facebook fa-2x"
                  style={{ paddingLeft: "10px", paddingRight: "10px" }}
                ></i>
                <i
                  className="fa fa-twitter fa-2x"
                  style={{ paddingLeft: "10px", paddingRight: "10px" }}
                ></i>
                <i
                  className="fa fa-instagram fa-2x"
                  style={{ paddingLeft: "10px", paddingRight: "10px" }}
                ></i>
                <i
                  className="fa fa-behance fa-2x"
                  style={{ paddingLeft: "10px", paddingRight: "10px" }}
                ></i>
              </div>
            </Card>
          </Col>

          <Col xs={{ span: 24 }} lg={{ span: 5 }}>
            <Card
              cover={
                <img
                  alt="Jesky"
                  src={userAPI_Jesky.avatar_url}
                  style={{ borderRadius: 10 }}
                />
              }
              style={{ border: "none" }}
            >
              <h3 className="userName">{userAPI_Jesky.name}</h3>
              <p style={{ textAlign: "center" }}>
                Jesky is our sales manager who likes to promote the benefits of
                organic food.
              </p>
              <div style={{ display: "flex", justifyContent: "center" }}>
                <i
                  className="fa fa-facebook fa-2x"
                  style={{ paddingLeft: "10px", paddingRight: "10px" }}
                ></i>
                <i
                  className="fa fa-twitter fa-2x"
                  style={{ paddingLeft: "10px", paddingRight: "10px" }}
                ></i>
                <i
                  className="fa fa-instagram fa-2x"
                  style={{ paddingLeft: "10px", paddingRight: "10px" }}
                ></i>
                <i
                  className="fa fa-behance fa-2x"
                  style={{ paddingLeft: "10px", paddingRight: "10px" }}
                ></i>
              </div>
            </Card>
          </Col>

          <Col xs={{ span: 24 }} lg={{ span: 5 }}>
            <Card
              cover={
                <img
                  alt="Pirman"
                  src={userAPI_Pirman.avatar_url}
                  style={{ borderRadius: 10 }}
                />
              }
              style={{ border: "none" }}
            >
              <h3 className="userName">{userAPI_Pirman.name}</h3>
              <p style={{ textAlign: "center" }}>
                Pirman is our leading fruit processing expert with over 20 years
                of experience.
              </p>
              <div style={{ display: "flex", justifyContent: "center" }}>
                <i
                  className="fa fa-facebook fa-2x"
                  style={{ paddingLeft: "10px", paddingRight: "10px" }}
                ></i>
                <i
                  className="fa fa-twitter fa-2x"
                  style={{ paddingLeft: "10px", paddingRight: "10px" }}
                ></i>
                <i
                  className="fa fa-instagram fa-2x"
                  style={{ paddingLeft: "10px", paddingRight: "10px" }}
                ></i>
                <i
                  className="fa fa-behance fa-2x"
                  style={{ paddingLeft: "10px", paddingRight: "10px" }}
                ></i>
              </div>
            </Card>
          </Col>
        </Row>
        <Row className="countSection">
          <Col xs={{ span: 24 }} lg={{ span: 6 }}>
            <div className="countContainer">
              <h1>245</h1>
            </div>
            <div className="countContainer">
              <p>
                Vegetables
                <br />
                and fruits
              </p>
            </div>
          </Col>
          <Col xs={{ span: 24 }} lg={{ span: 6 }}>
            <div className="countContainer">
              <h1>382</h1>
            </div>
            <div className="countContainer">
              <p>
                Reliable
                <br />
                partners
              </p>
            </div>
          </Col>
          <Col xs={{ span: 24 }} lg={{ span: 6 }}>
            <div className="countContainer">
              <h1>1,267</h1>
            </div>
            <div className="countContainer">
              <p>
                Satisfied
                <br />
                customers
              </p>
            </div>
          </Col>
          <Col xs={{ span: 24 }} lg={{ span: 6 }}>
            <div className="countContainer">
              <h1>474</h1>
            </div>
            <div className="countContainer">
              <p>
                New blog
                <br />
                articles
              </p>
            </div>
          </Col>
        </Row>
        <Row>
          <Col>
            <h1 className="testimonial">TESTIMONIAL</h1>
            <p className="testimonialComment">
              We love the variety of produce that we receive from you every week
              and the challenge of cooking creatively
              <br />
              to use everything you deliver. Thank you for the great service!
            </p>
            <div className="profPicContainer">
              <img
                src="https://ld-wp73.template-help.com/wordpress/prod_21699/v1/wp-content/uploads/2018/12/user-9-87x87.jpg"
                alt="James Smith"
                className="profilePic"
              />
            </div>
            <h3 className="testimonialProfile">JAMES SMITH</h3>
            <h3 className="testimonialProfileStatus">Client</h3>
          </Col>
          <Row>
            <div className="promotionBanners">
              <img src={Promo1} alt="100 Percent Organic" />
              <img src={Promo2} alt="Fresh Vegan Food" />
              <img src={Promo3} alt="Locally Grown" />
              <img src={Promo4} alt="100 Percent Organic Product" />
              <img src={Promo5} alt="Vegan Food" />
            </div>
          </Row>
        </Row>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d9934.267469148017!2d-0.1193227!3d51.5028154!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x67bb55b5c4867f8c!2sLondon%20Eye%20Ticket%20Office!5e0!3m2!1sen!2sid!4v1580728303941!5m2!1sen!2sid"
          width="100%"
          height="450"
        ></iframe>
        <Footer />
      </div>
    );
  }
}
