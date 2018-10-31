import React from "react";
import { Col, Row, Container } from "../../components/Grid";
import Jumbotron from "../../components/Jumbotron";
import "./contactPage.css"
import Nav from "../../components/Nav"
import Owners from "../../pic/Owners.jpg"
import contactInfo from "../../components/contactInfo"
import phoneIcon from "../../pic/cell-icon-15.png"
import emailIcon from "../../pic/emailIcon.png"
import addressIcon from "../../pic/addressIcon.png"
import Video from "../../pic/mistShot.m4v";

const contactPage = () => (
    <div id="box">

        {/* <video autoPlay muted loop id="myVideo">
            <source src={Video} type="video/mp4" />
            Your browser does not support HTML5 video.
                </video> */}
        <Container fluid>

            <Row>
                <Col size="xs-12 sm-12 md-12 lg-12 xl-12" direction="topNav">
                    <Nav />
                </Col>
            </Row>

            <Row>
                <Col size="xs-1 sm-4 md-4 lg-4 xl-5" direction="cardInfo offset-xs-1 offset-sm-4 offset-md-4 offset-lg-4 offset-xl-4 getInTouch">
                    <h1> Get In Touch</h1>
                </Col>
            </Row>
            <Row>
                <Col size="xs-1 sm-4 md-4 lg-4 xl-5" direction="cardInfo">
                    <div>
                        <img src={phoneIcon} alt="phone Image" width="70px" heigh="85px" />
                        <h2> PHONE </h2>
                        <h4>Kent Wasden:</h4>
                        <h4>(208) 390-7878</h4>
                    </div>

                </Col>
                <Col size="xs-1 sm-4 md-4 lg-4 xl-5" direction="cardInfo">
                    <div>
                        <img src={emailIcon} alt="emailIcon" width="70px" heigh="85px" />
                        <h2> Email </h2>
                        <h4>Kent Wasden:</h4>
                        <h4> gotnip@gmail.com</h4>
                    </div>

                </Col>
                <Col size="xs-1 sm-4 md-4 lg-4 xl-5" direction="cardInfo">
                    <div>
                        <img src={addressIcon} alt="addressIcon" width="70px" heigh="85px" />
                        <h2> Address </h2>
                        <h4>N/A</h4>
                    </div>

                </Col>

            </Row>
        </Container>
    </div>

);

export default contactPage;