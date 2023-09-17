import React from 'react';
import Container from "react-bootstrap/Container";
import {Button, Card, Col, Image, Row} from "react-bootstrap";
import photo from "../asets/400x400.png";
import bStar from "../asets/bigStar.png";
const DevicePage = () => {
    const device = {id: 1, name: 'Iphone 12 pro', price:2500, rating:5, img:photo}
    const decription = [
        {id: 1,title: 'Оперативная память', description: '5гб'},
        {id: 2,title: 'Камера', description: '48мп'},
        {id: 3,title: 'Оперативная память', description: '5гб'},
        {id: 4,title: 'Оперативная память', description: '5гб'},
        {id: 5,title: 'Оперативная память', description: '5гб'},
    ]
    return (
        <Container className="mt-3" >
            <Row>
            <Col md={4}>
                <Image width={300} height={300} src={device.img}/>
            </Col>
            <Col md={4}>
                <Row className="d-flex flex-column align-items-center">
                    <h2> {device.name}</h2>
                    <div className="d-flex align-items-center justify-content-center"
                         style={{background: `url(${bStar}) no-repeat center center`,
                                width:240,
                                height:240,
                                backgroundSize:'cover',
                                fontSize:64}}
                    >

                        {device.rating}
                    </div>
                </Row>
            </Col>
            <Col md={4}>
                <Card
                        className="d-flex flex-column align-items-center justify-content-around"
                        style={{width:300, height:300, border: '4px solid light'}}
                >
                    <h3>{device.price}</h3>
                    <Button variant={"outline-dark"}>Добавить в корзину</Button>
                </Card>
            </Col>
            </Row>
            <Row  className="d-flex flex-column m-5">
                <h1> Харрактеристики</h1>
                {decription.map((info, index) =>
                <Row key={info.id} style={{background: index % 2 === 0 ? 'lightgray' : 'transparent', padding: 10}}>
                    {info.title}: {info.description}
                </Row>
                )}
            </Row>
        </Container>
    );
};

export default DevicePage;