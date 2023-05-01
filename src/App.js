import AppBar from "./components/AppBar";
import { Typography } from "@mui/material";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./views/Home";
import {Provider} from "./Context";

export default function App()  {
  return (
    <div className="App">
      <Provider>
        <BrowserRouter>
          <AppBar></AppBar>
          <Routes>
            <Route path="/" element={<Home/>}  />
            <Route path="/home" element={<Home />} />
            <Route path="*" element={<Home />} />
          </Routes>
        </BrowserRouter>
      </Provider>

      <footer className="footer">
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }} p={1}>
          <center>© 2016-2022 Developer OwlDev. All rights reserved.</center>
        </Typography>
      </footer>
    </div>
  );
}
