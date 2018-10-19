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
            <Row>
                <Nav />
            </Row>

            <Row direction="align-items-center buffer">
                <Col size="xs-1 sm-4 md-4 lg-4 xl-5" direction="offset-xs-1 offset-sm-4 offset-md-4 offset-lg-4 offset-xl-4 white" >
                    <h1>Advancing the Industery</h1>
                    <h3> 	&nbsp;&nbsp; To Produce a better product</h3>
                </Col>
            </Row>
            {/* <Row direction="buffer">
                <Col size="xs-1 md-3" direction="text-center buffer">
                    <button type="button" class="btn btn-block btn-lg btn-primary">Primary</button>
                </Col>
                <Col size="xs-1 md-3" direction="text-center buffer">
                    <button type="button" class="btn btn-block btn-lg btn-primary">Primary</button>
                </Col>
                <Col size="xs-1 md-3" direction="text-center buffer">
                    <button type="button" class="btn btn-block btn-lg btn-primary">Primary</button>
                </Col>
                <Col size="xs-1 md-3" direction="text-center buffer">
                    <button type="button" class="btn btn-block btn-lg btn-primary">Primary</button>
                </Col>

            </Row> */}
        </Container>
    </div>
);

export default NoMatch;
