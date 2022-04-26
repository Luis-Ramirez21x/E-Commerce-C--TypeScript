import { LoadingButton } from "@mui/lab";
import { Avatar, Button, Card, CardActions, CardContent, CardHeader, CardMedia, Link, ListItem, ListItemAvatar, ListItemText, Typography } from "@mui/material";
import { useState } from "react";
import agent from "../../app/api/agent";
import { Product } from "../../app/models/product";
interface Props{
    product: Product;
}

export default function productCard({product} : Props){
    const [loading, setLoading] = useState(false);
    function handleAddItem(productId: number) {
      setLoading(true);
      agent.Basket.addItem(productId)
          //.then(basket => setBasket(basket))
          .catch(error => console.log(error))
          .finally(() => setLoading(false));
  }


    return(
        <Card>
        <CardHeader avatar ={
                <Avatar>
                    {product.name.charAt(0).toUpperCase()}
                </Avatar>
                }
                title={product.name}
                tittletypographyprops={{
                    sx:{fontWeight:'bold', color: 'secondary.main'}
                }}
        />
        <CardMedia
          component="img"
          image={product.pictureUrl}
          alt={product.name}
        />
        <CardContent>
          <Typography gutterBottom color='secondary' variant="h5">
            $ {(product.price/100).toFixed(2)}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {product.brand} / {product.type}
          </Typography>
        </CardContent>
        <CardActions>
        <LoadingButton
                    loading={loading}
                    onClick={() => handleAddItem(product.id)}
                    size="small">
                    Add to cart
                </LoadingButton>
         <Button href={`/catalog/${product.id}`} size="small">View</Button>
          
        </CardActions>
      </Card>
    )
}

