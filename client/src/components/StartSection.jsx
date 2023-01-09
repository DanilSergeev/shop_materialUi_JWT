import { Box, Button, Container, Paper, Typography } from "@mui/material";
import logo from "../style/img/marmelad.jpg";

export default function StartSection() {


    return (
        <Paper
            className="StartSection"
            style={{ backgroundImage: `url(${logo})` }}>

            <Container fixed>
                <Box color="white" width="70%" paddingTop="5rem" paddingBottom="4rem">
                    <Typography gutterBottom variant="h2" component="h1" >Большой выбор корейских товаров по выгодным ценам</Typography>
                    <Typography gutterBottom variant="h4" component="p" >от ведущих поставщиков</Typography>
                    <Typography gutterBottom variant="p" component="p" >Скидка до 30% до конца декабря - успейте заказать выгодно!</Typography>
                    <Button sx={{mt:3}} component="a" href="#Products" color="secondary" variant="contained" size="medium">Каталог</Button>
                </Box>

            </Container>
        </Paper>
    )
}