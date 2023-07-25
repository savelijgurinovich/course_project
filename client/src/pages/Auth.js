import Container from "react-bootstrap/Container";
import {Card} from "react-bootstrap";
import {NavLink, useLocation} from "react-router-dom";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import {useNavigate} from "react-router-dom";
import {useContext} from "react";
import {Context} from "../index";

const Auth = () => {
    const {user} = useContext(Context)
    const location = useLocation();
    const isLogin = location.pathname === '/login'
    const navigate = useNavigate()
    console.log(location);
    return (
      <Container className="d-flex justify-content-center align-items-center" style={{height: window.innerHeight - 54}}>
          <Card className="p-5" style={{width: 600}}>
              <h2 className="m-auto">{isLogin? 'Authorization' : 'Registration'}</h2>
              <Form className="d-flex flex-column p-3">
                  <Form.Control className="mt-3" placeholder="Enter your username"/>
                  <Form.Control className="mt-3" placeholder="Enter your password"/>
                  <div className="d-flex justify-content-between mt-3 align-items-center">
                      {isLogin ?
                          <div>You are not authorized? <NavLink to="/registration">Register now!</NavLink></div>
                          :
                          <div>Do you already have an account? <NavLink to="/login">Enter now!</NavLink></div>
                      }
                      <Button href="/" className="w-25 btn-lg" variant="outline-success" onClick={() => user.setIsAuth(true)}>{isLogin ? 'Login' : 'Register'}</Button>
                  </div>

              </Form>
          </Card>

      </Container>
    );
};

export default Auth;