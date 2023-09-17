// import React, {useContext} from 'react';
// import {Button, Container} from "react-bootstrap";
// import Nav from 'react-bootstrap/Nav';
// import Navbar from 'react-bootstrap/Navbar';
// import {Context} from "../index";
// import {SHOP_ROUTE} from "../utils/consts";
//
// import {observer} from "mobx-react-lite";
// const NavBar = observer (() => {
//     const {user} = useContext(Context)
//     return (
//         <Navbar bg="dark" data-bs-theme="dark" сlassName="m-0 p-0" >
//             <Container>
//                 <Nav.Link style={{color:'white'}} to={SHOP_ROUTE} className="m-0 p-0">КупиКаи</Nav.Link>
//                 {user.isAuth?
//                 <Nav className="mr-auto" style={{color:'white'}}>
//                     <Button variant={"outline-light"} className="mr-2">Админ панель</Button>
//                     <Button variant={"outline-light"} className="ml-2">Выйти</Button>
//                 </Nav>
//                     :
//                     <Nav className="mr-auto" style={{color:'white'}}>
//
//                         <Button variant={"outline-light"} onClick={() => user.setIsAuth(true)}>Авторизация</Button>
//                     </Nav>
//                 }
//             </Container>
//         </Navbar>
//     );
// });
//
//
// export default NavBar;

import React, {useContext} from 'react';
import {Context} from "../index";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";

import {ADMIN_ROUTE, SHOP_ROUTE} from "../utils/consts";
import {Button} from "react-bootstrap";
import {observer} from "mobx-react-lite";
import Container from "react-bootstrap/Container";
import {useNavigate} from "react-router-dom";


const NavBar = observer(() => {
    const {user} = useContext(Context)
    const navigate = useNavigate();



    return (
        <Navbar bg="dark" variant="dark">
            <Container>
                <Nav.Link style={{color:'white'}} to={SHOP_ROUTE}>КупиКАИ</Nav.Link>
                {user.isAuth ?
                    <Nav className="ml-auto" style={{color: 'white'}}>
                        <Button variant={"outline-light"}
                                onClick={ () => navigate(ADMIN_ROUTE)}
                        >
                            Админ панель
                        </Button>
                        <Button variant={"outline-light"}
                                style={{marginLeft: 10}}
                                onClick={ () => navigate('/')}
                        >
                            Выйти
                        </Button>
                    </Nav>
                    :
                    <Nav className="ml-auto" style={{color: 'white'}}>
                        <Button variant={"outline-light"} onClick={() => user.setIsAuth(true)}>Авторизация</Button>
                    </Nav>
                }
            </Container>
        </Navbar>

    );
});

export default NavBar;