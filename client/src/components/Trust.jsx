import { Box, Card, CardContent, CardMedia, Container, Typography } from "@mui/material";

export default function Trust() {
    return (
        <section style={{ marginTop: "5rem", marginBottom: "6rem" }}>
            <Container>
                <Typography gutterBottom variant="h6" letterSpacing={2} fontSize={15} component="p" sx={{ opacity: 0.6 }}>НАДЕЖНОСТЬ</Typography>
                <Typography gutterBottom variant="h4" component="p">Почему нам можно доверять</Typography>

                <Box className="display-flex" sx={{ marginTop: "6rem", textAlign: "center", justifyContent: "space-between" }}>
                    <Card sx={{ maxWidth: 345, boxShadow: "unset" }}>
                        <CardMedia
                            sx={{ height: 128, width: 128, margin: "0 auto" }}
                            image="https://132140.lp.tobiz.net/cicons/documentation.svg"
                        />
                        <CardContent>
                            <Typography
                                sx={{ opacity: "0.75" }}
                                margin="20px 0"
                                gutterBottom
                                variant="p"
                                component="div"
                                fontSize={23}>
                                Весь товар сертифицирован
                            </Typography>
                            <Typography
                                variant="body2"
                                color="text.secondary"
                                fontFamily="system-ui"
                                fontSize={17}>
                                Доставим ваш заказ по всей России в течение 7-10 дней любым удобным способом
                            </Typography>
                        </CardContent>
                    </Card>


                    <Card sx={{ maxWidth: 345, boxShadow: "unset" }}>
                        <CardMedia
                            sx={{ height: 128, width: 128, margin: "0 auto" }}
                            image="https://132140.lp.tobiz.net/cicons/chat.svg"
                        />
                        <CardContent>
                            <Typography
                                sx={{ opacity: "0.75" }}
                                margin="20px 0"
                                gutterBottom
                                variant="p"
                                component="div"
                                fontSize={23}>
                                Тысячи довольных клиентов
                            </Typography>
                            <Typography
                                variant="body2"
                                color="text.secondary"
                                fontFamily="system-ui"
                                fontSize={17}>
                                Доставим ваш заказ по всей России в течение 7-10 дней любым удобным способом
                            </Typography>
                        </CardContent>
                    </Card>



                    <Card sx={{ maxWidth: 345, boxShadow: "unset" }}>
                        <CardMedia
                            sx={{ height: 128, width: 128, margin: "0 auto" }}
                            image="https://132140.lp.tobiz.net/cicons/files.svg"
                        />
                        <CardContent>
                            <Typography
                                sx={{ opacity: "0.75" }}
                                margin="20px 0"
                                gutterBottom
                                variant="p"
                                component="div"
                                fontSize={23}>
                                100% гарантия качества
                            </Typography>
                            <Typography
                                variant="body2"
                                color="text.secondary"
                                fontFamily="system-ui"
                                fontSize={17}>
                                Доставим ваш заказ по всей России в течение 7-10 дней любым удобным способом
                            </Typography>
                        </CardContent>
                    </Card>

                </Box>

            </Container>
        </section>
    )
}