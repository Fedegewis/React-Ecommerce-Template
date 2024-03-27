import React, { useState } from "react";
import { Container, Card, Form, Button, Grid } from "semantic-ui-react";
import "./Login.css";
import { auth } from "../../Firebase/FirebaseConfig";
import { useHistory } from "react-router-dom";

function Login() {
  //router
  const history = useHistory();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const loginUser = (event) => {
    event.preventDefault();
    if (email && password) {
      auth
        .signInWithEmailAndPassword(email, password)
        .then((authUser) => {
          history.push("/");
        })
        .catch((error) => {
          alert(
            "Oops! something went wrong. Please check your console for more info"
          );
          console.error(error.message);
        });
    } else {
      alert("Please enter all the fields");
    }
  };

  const registerUser = (event) => {
    event.preventDefault();
    if (email && password && confirmPassword && password === confirmPassword) {
      auth
        .createUserWithEmailAndPassword(email, password)
        .then((authUser) => {
          history.push("/");
        })
        .catch((error) => {
          alert(
            "Oops! something went wrong. Please check your console for more info"
          );
          console.error(error.message);
        });
    } else {
      alert("Please enter all the fields correctly");
    }
  };

  return (
    <div className="login">
      <Container>
        <Grid centered columns={2} doubling stackable>
          <Grid.Column>
            <h2>Sign In</h2>
            <Card fluid>
              <Form className="login__form">
                <Form.Field required>
                  <label>E-mail</label>
                  <input
                    placeholder="Email"
                    type="email"
                    onChange={(event) => setEmail(event.target.value)}
                  />
                </Form.Field>
                <Form.Field required>
                  <label>Password</label>
                  <input
                    placeholder="Password"
                    type="password"
                    onChange={(event) => setPassword(event.target.value)}
                  />
                </Form.Field>
                <Button color="green" type="submit" onClick={loginUser}>
                  Login
                </Button>
              </Form>
            </Card>
          </Grid.Column>

          <Grid.Column style={{ marginBottom: "20px" }}>
            <h2>Register</h2>
            <Card fluid>
              <Form className="register__form">
                <Form.Field required>
                  <label>E-mail</label>
                  <input
                    placeholder="Email"
                    type="email"
                    onChange={(event) => setEmail(event.target.value)}
                  />
                </Form.Field>
                <Form.Field required>
                  <label>Password</label>
                  <input
                    placeholder="Password"
                    type="password"
                    onChange={(event) => setPassword(event.target.value)}
                  />
                </Form.Field>
                <Form.Field required>
                  <label>Confirm Password</label>
                  <input
                    placeholder="Confirm Password"
                    type="password"
                    onChange={(event) => setConfirmPassword(event.target.value)}
                  />
                </Form.Field>
                <Button color="blue" type="submit" onClick={registerUser}>
                  Register
                </Button>
              </Form>
            </Card>
          </Grid.Column>
        </Grid>
      </Container>
    </div>
  );
}

export default Login;

