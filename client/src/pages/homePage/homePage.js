import React from "react";
import { Col, Row, Container } from "../../components/Grid";
import "./homePage.css";
import Logo from "../../pic/logo.png"
import Video from "../../pic/background.mp4";
import Nav from "../../components/Nav"
import BackgroundSlideshow from 'react-background-slideshow'

import image1 from "../../pic/Mist.jpg"
import image2 from "../../pic/trailer.jpg"
import image3 from "../../pic/storageAir.jpg"
import image4 from "../../pic/truckBed.jpg"
import image5 from "../../pic/truckShot.jpg"

const NoMatch = () => (
    <div id="box">
        <BackgroundSlideshow images={[image1, image2, image3, image4, image5]} />
        <Container fluid>
            <Row>
                <Nav />
            </Row>

            <Row direction="align-items-center buffer">
                <Col size="xs-1 sm-6 md-6 lg-6 xl-6" direction="offset-xs-1 offset-sm-3 offset-md-3 offset-lg-3 offset-xl-3 white" >
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
