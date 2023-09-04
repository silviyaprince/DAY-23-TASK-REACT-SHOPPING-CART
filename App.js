import { Routes, Route, Link, useNavigate } from "react-router-dom";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { lime, pink } from "@mui/material/colors";
import IconButton from "@mui/material/IconButton";
import Button from "@mui/material/Button";
import "./App.css";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import Badge from "@mui/material/Badge";
import { useState } from 'react';
import { Card1 } from "./Card1";

export const data = [
  {
    poster: "https://m.media-amazon.com/images/I/71jhUrnbDAL._SY879_.jpg",
    item: "Kuber Industries Saree Covers With Zip",
    price: "195",
  },
  {
    poster: "https://m.media-amazon.com/images/I/61pEkDxgoqL._SL1500_.jpg",
    item: "Benesta Classic T-Leg Wood Ironing Board",
    price: "1,599",
  },
  {
    poster:
      "https://m.media-amazon.com/images/I/61ConU+rzaL._AC_UL800_QL65_.jpg",
    item: "ELLVELLON Pack of 2 Shelve Drillingless",
    price: "299",
  },
  {
    poster: "https://m.media-amazon.com/images/I/71rt4sk-0HL._SL1500_.jpg",
    item: "Philips Citrus Press Juicer HR2777/00",
    price: "1,579",
  },
  {
    poster: "https://m.media-amazon.com/images/I/61t7EInOMAL._SL1280_.jpg",
    item: "MILTON Galaxia 1500 Double Walled Stainless Steel Casserole",
    price: "946",
  },
  {
    poster: "https://m.media-amazon.com/images/I/710sm2Z0HrL._SL1440_.jpg",
    item: "Home Sizzler 2 Pieces  curtains",
    price: "279",
  },
  {
    poster: "https://m.media-amazon.com/images/I/615dLd-lvoL._SL1500_.jpg",
    item: "Simxen Tabletop Water Fountain",
    price: "1,499",
  },
  {
    poster:"https://m.media-amazon.com/images/I/511YSOOppXL._SL1010_.jpg",
    item:"Wooum Rechargeable Led Desk Lamp",
    price:"379",
  },
];

const theme = createTheme({
  palette: {
    primary: {
      main: "#ec407a",
    },
    secondary: {
      main: "#f8bbd0",
    },
  },
});

function App() {
  const [cart, setCart] = useState(0);
  const navigate = useNavigate();
 
  
  const Addtocart=()=>{
    setCart(cart+1);
  };
  const Removefromcart=()=>{
    if(cart>0){
      setCart(cart-1);
    }
  };
  
  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <AppBar position="static">
          <Toolbar>
            <Button color="inherit" onClick={() => navigate("/home")}>
              HOME
            </Button>
            <Button color="inherit" onClick={() => navigate("/about")}>
              ABOUT
            </Button>

            <Button color="inherit" onClick={() => navigate("/shop")}>
              SHOP
            </Button>

            <IconButton
              className="iconbutton"
              sx={{ ml: 135 }}
              size="large"
              edge="end"
              aria-label="cart"
              // aria-controls={}
              aria-haspopup="true"
              color="inherit">
              <Badge badgeContent={cart} color="primary">
                <ShoppingCartIcon />
              </Badge>
            </IconButton>
          </Toolbar>
        </AppBar>
        <div className="container">
          <img
            className="bg-img"
            src="https://wallpapers.com/images/hd/cotton-candy-background-1440-x-900-psagx22hmbhdhdmt.jpg"
            alt="bg"
          />
          <div className="text-overlay">Shop in Style</div>
        </div>

       
      </div>
      <div className="all-container">
      {data.map((dt, index) => (
        <Card1 detail={dt} key={index} Addtocart={Addtocart} Removefromcart={Removefromcart} />
      ))}
    </div>
    </ThemeProvider>
  );
      }

export default App;


