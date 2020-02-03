import React, { Component } from "react";
import { Row, Col, Card } from "antd";
import "antd/dist/antd.css";
import axios from "axios";

const { Meta } = Card;

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

        <div style={{ marginTop: '5%'}}>
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
                <p style={{ textAlign: "center" }}>Pirman is... trio macan</p>
              </Card>
            </Col>
          </Row>
        </div>
      </div>
    );
  }
}
