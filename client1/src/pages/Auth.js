import React, {useContext, useState} from 'react';
import Container from "react-bootstrap/Container";
import {Button, Card, Form, Row} from "react-bootstrap";
import {LOGIN_ROUTE, REGISTRATION_ROUTE} from "../utils/consts";
import {NavLink, useLocation} from "react-router-dom";
import {login, registrtion} from "../http/userAPI";
import {observer} from "mobx-react-lite";
import {Context} from "../index";

const Auth = observer( () => {
   const {user} = useContext(Context)
    const location = useLocation()
    const isLogin = location.pathname === LOGIN_ROUTE
    const [email, setEmail] = useState('')
    const [passwod, setPassword] = useState('')
    const  click = async ()=>{
        let data;
        if (isLogin){
            data = await  login()
        }
        else {
            data = await  registrtion(email, passwod)

        }

    }
    return (
        <div>
            <Container
                className="d-flex justify-content-center align-items-center"
                style={{height:window.innerHeight - 54}}
            >
                <Card style={{width:600}} className="p-5">
                    <h2 className="m-auto">{isLogin ? 'Авторизация' : 'Регистрация'} </h2>
                    <Form className="d-flex flex-column">
                        <Form.Control
                            className="mt-3"
                            placeholder="введите ваш email..."
                            value={email}
                            onChange={e => setEmail(e.target.value)}
                        />
                        <Form.Control
                            className="mt-3"
                            placeholder="введите ваш пароль..."
                            value={passwod}
                            onChange={e => setPassword(e.target.value)}
                            type="password"
                        />
                        <Row className="d-flex justify-content-between mt-3 d-flex justify-content-between mt-3 pl-3 pr-3">
                            {isLogin ?
                                <div>
                                Нет аккаунта? <NavLink to={REGISTRATION_ROUTE}> Зарегестрировтаься</NavLink>
                                </div>
                                :
                                <div>
                                    <NavLink to={LOGIN_ROUTE}> Авторизация</NavLink>
                                </div>
                            }
                        </Row>
                        <Button
                            className="mt-3 align-self-end"
                            onClick={click}
                            variant={"outline-success"}>
                            {isLogin ?
                                'Войти'
                                :
                                'Зарегестрироваться'
                            }
                        </Button>
                    </Form>
                </Card>
            </Container>
        </div>
    );
});

export default Auth;