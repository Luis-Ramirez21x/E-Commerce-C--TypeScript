import { Avatar, Button, Card, CardActions, CardContent, CardHeader, CardMedia, ListItem, ListItemAvatar, ListItemText, Typography } from "@mui/material";
import { Product } from "../../app/models/product";
interface Props{
    product: Product;
}

export default function productCard({product} : Props){
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
          <Button size="small">Add to cart</Button>
          <Button size="small">View</Button>
        </CardActions>
      </Card>
    )
}