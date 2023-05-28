import React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Unstable_Grid2";
import "../css/Home.css";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Table from "../components/Table";
import Rating from "../components/Rating";
import RadioButtons from "../components/RadioButtons";
import TextField from "../components/TextField";
import Checks from "../components/Checks";
import InputPassword from "../components/InputPassword";
import "../css/Login.css";
import LoginIcon from "@mui/icons-material/Login";
import fondoLogin from "../imgs/fondoLogin.jpg";
import LoginController from "../controllers/LoginController";

function Login() {
  const { register, handleSubmit, errors, onSubmit, onError } = LoginController();

  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container>
        <Grid xs={12}>
          <Box
            className="box-main"
            sx={{
              background: `url(${fondoLogin}) no-repeat center center fixed`,
              backgroundSize: "cover",
            }}
          >
            <Box className="box-login">
              <Box>
                <h1>Ingrese sus credenciales</h1>
              </Box>
              <form onSubmit={handleSubmit(onSubmit, onError)}>
                <TextField
                  name='rut'
                  nombreCampo='rut'
                  labelTitulo="Ingresa RUT"
                  className="item-login"
                  {...register("rut", {
                    required: "Este campo es requerido",
                  })}
                  error={errors.rut}
                  helperText={errors.rut?.message}
                />
                <TextField
                  nombreCampo='password'
                  id="outlined-password-input"
                  labelTitulo="Contraseña"
                  tipoCampo="password"
                  autoComplete="current-password"
                  className="item-login"
                  {...register("campo1", {
                    required: "Este campo es requerido",
                  })}
                  error={Boolean(errors.campo1)}
                  helperText={errors.campo1?.message}
                />
                <Button
                  variant="contained"
                  startIcon={<LoginIcon />}
                  className="item-login"
                  type="submit"
                >
                  Iniciar Sesión
                </Button>
              </form>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
}

export default Login;
