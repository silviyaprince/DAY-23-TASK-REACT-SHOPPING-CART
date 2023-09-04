import Button from "@mui/material/Button";
import { useState } from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import updateCartCount from "./App";

export function Card1({ detail,Removefromcart,Addtocart}) {
  const [isincart,setIsincart]=useState(false);
  const handleButtonClick = () => {
    // Increase the badge content when the button is clicked
    if(isincart){
Removefromcart();
    }else{
      Addtocart();
    }
    setIsincart(!isincart);
  };
    
  
    
  return (
    <div className="card-container">
      <div>
        <br />
        <Card sx={{ maxWidth: 300, height: 500 }}>
          <CardMedia
            component="img"
            alt="c"
            height="250"
            image={detail.poster}
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {detail.item}
              <br /><br/>
              ₹{detail.price}
            </Typography>
          </CardContent>
          <CardActions>
            <Button
              className="addtocartbutton"
              color="warning"
              size="small"
              onClick={handleButtonClick}>
             {isincart ? "REMOVE FROM CART" : "ADD TO CART"}
            </Button>
          </CardActions>
        </Card>
      </div>
    </div>
  );
}
