import React, { Component } from "react";
import { Row, Col, Card } from "antd";
import "antd/dist/antd.css";
import axios from "axios";
import Pics1 from "../images/clients-1-120x114.png";
import Pics2 from "../images/clients-2-105x118.png";
import Pics3 from "../images/clients-3-111x98.png";
import Pics4 from "../images/clients-4-122x92.png";
import Pics5 from "../images/clients-5-112x112.png";

export default class OurTeam extends Component {
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
    console.log("state", this.state);
    const { userAPI_Jesky, userAPI_Pirman, userAPI_Aditya } = this.state;
    return (
      <div>
        <Row>
          <Col className="OurTeamHeaderContainer">
            <p>OUR TEAM</p>
          </Col>
        </Row>

        <div style={{ marginTop: "5%" }}>
          <h1 className="OurTeam">OUR TEAM</h1>
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
                  Jesky is our sales manager who likes to promote the benefits
                  of organic food.
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
                  Pirman is our leading fruit processing expert with over 20
                  years of experience.
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
          <div className="promotionBanners">
            <img src={Pics1} alt="100 Percent Organic" />
            <img src={Pics2} alt="Fresh Vegan Food" />
            <img src={Pics3} alt="Locally Grown" />
            <img src={Pics4} alt="100 Percent Organic Product" />
            <img src={Pics5} alt="Vegan Food" />
          </div>
          <div>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d9934.267469148017!2d-0.1193227!3d51.5028154!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x67bb55b5c4867f8c!2sLondon%20Eye%20Ticket%20Office!5e0!3m2!1sen!2sid!4v1580728303941!5m2!1sen!2sid"
              width="100%"
              height="450"
              title='oke'
            ></iframe>
          </div>
        </div>
      </div>
    );
  }
}
