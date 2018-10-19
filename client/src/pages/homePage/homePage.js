import React from "react";
import { Col, Row, Container } from "../../components/Grid";
import "./homePage.css";
import Logo from "../../pic/logo.png"
import Video from "../../pic/background.mp4";
import Nav from "../../components/Nav"

const NoMatch = () => (
    <div id="box">

        <video autoPlay muted loop id="myVideo">
            <source src={Video} type="video/mp4" />
            Your browser does not support HTML5 video.
</video>

        <Container fluid>
            <Row
                direction="header">

            </Row>

            <Row direction="align-items-center buffer">
                <Col size="xs-1 sm-4 md-4 lg-4 xl-4" direction="offset-xs-1 offset-sm-4 offset-md-4 offset-lg-4 offset-xl-4 white" >
                    <img src={Logo} alt="Group Ag" width="100%" height="100%" />
                </Col>
            </Row>
        </Container>
    </div>
);

export default NoMatch;
