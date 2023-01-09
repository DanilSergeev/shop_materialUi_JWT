import { Button, Card, CardActions, CardContent, CardMedia, Container, Grid, Typography } from "@mui/material";

export default function Products(props) {
    const { products, openSnackFun } = props;

    return (
        <section style={{ marginTop: "5rem" }} id="Products" >
            <Container position="static"  >
                <Typography gutterBottom variant="h6" letterSpacing={2} fontSize={15} component="p" sx={{ opacity: 0.6 }}>КАТАЛОГ ТОВАРОВ</Typography>
                <Typography gutterBottom variant="h4" component="p" letterSpacing={2} fontSize={36} marginTop={2} marginBottom={7}>Корейские сладости</Typography>

                <Grid
                    container
                    spacing={{ xs: 2, md: 3 }}
                    columns={{ xs: 3, sm: 6, md: 12 }}
                    sx={{ justifyContent: "space-around" }}>

                    {
                        (products.length) ?
                            products.map((item, index) =>
                                <Card key={index} sx={{ maxWidth: 260, minWidth: 260, mt: 3, boxShadow: "0px 0px 4px #bdbdbd" }}>
                                    <CardMedia
                                        sx={{ height: 200 }}
                                        image={process.env.REACT_APP_BASE_URL + item.img}
                                        title="green iguana"
                                    />
                                    <CardContent>
                                        <Typography gutterBottom variant="h5" component="div">
                                            {`${item.price}₽`}
                                        </Typography>
                                        <Typography variant="body2" color="text.secondary">
                                            {item.name}
                                        </Typography>
                                    </CardContent>
                                    <CardActions>
                                        <Button onClick={() => openSnackFun(item.id)} color="secondary" variant="outlined" size="small">В корзину</Button>
                                    </CardActions>
                                </Card>
                            )
                            :
                            <Typography>Нет товаров</Typography>
                    }
                </Grid>
            </Container>
        </section >
    )
}