import React from "react";
import { routes } from "@/router/routes";
import { useNavigate } from "react-router-dom";
import classes from "./styles.login.css";
import CardActions from "@mui/material/CardActions";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardHeader from "@mui/material/CardHeader";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";

export const LoginPage: React.FC = () => {
  const navigate = useNavigate();
  const [username, setUsername] = React.useState("");
  const [password, setPassword] = React.useState("");

  const handleNavigation = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (username === "admin" && password === "test") {
      navigate(routes.list);
    } else {
      alert("User / password not valid, psst... admin / test");
    }
  };

  return (
      <Card sx={{ padding: 20 }}>
        <CardHeader title="Login Page:" />
        <CardContent>
          <Typography color="text.secondary">
            <form onSubmit={handleNavigation} className={classes.container}>
              <div>
                <label>Username: </label>
                <input
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                />
              </div>
              <div>
                <label>Password: </label>
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
              <CardActions>
                <Button variant="contained" type="submit">
                  Login
                </Button>
              </CardActions>
            </form>
          </Typography>
        </CardContent>
      </Card>
  );
};
