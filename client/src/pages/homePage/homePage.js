import React from "react";
import { Col, Row, Container } from "../../components/Grid";
import "./homePage.css";
import Nav from "../../components/Nav";

const NoMatch = () => (
    <div id="box">
        <Container fluid>
            <Row>
                <Col size="md-12">
                    <Nav>
                        <h4>Group Ag </h4>

                    </Nav>
                </Col>
            </Row>
        </Container>
    </div>
);

export default NoMatch;
