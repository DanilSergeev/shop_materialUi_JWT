import { Box, Container, Typography } from "@mui/material";

export default function PurchaseCondition() {
    return (
        <section className="PurchaseCondition">
            <Container>
                <Typography gutterBottom variant="h6" letterSpacing={2} fontSize={15} component="p" sx={{ opacity: 0.6 }}>ДОСТАВКА И ОПЛАТА</Typography>
                <Typography gutterBottom variant="h4" component="p">Условия оплаты и доставки</Typography>
                <Box sx={{ marginTop: "2vh" }}>
                    <div className="display-flex">
                        <Box
                            className="w50Procent"
                            width={450}
                            height={350}
                            sx={{ backgroundSize: "cover", backgroundImage: "url(https://132140.lp.tobiz.net/img/900x700/2654272e55a2f2cb81f0679344c42db2.jpg)" }}></Box>
                        <Box className="w50Procent" sx={{ ml: 8, mt:3 }}>
                            <Typography gutterBottom variant="p" component="div"><b>Доставка по всей России </b>-
                                через транспортные компании, а также наложенным платежом.
                                Стоимость доставки через транспортную компанию составляет около 500 руб.,
                                доставка наложенным платежом 400-1 000 руб.
                                в зависимости от веса товара.<br/><br/></Typography>

                            <Typography gutterBottom variant="p" component="div"><b>Самовывоз. </b>
                                Самовывоз со склада курьерской службы
                                (срок доставки до пункта самовывоза составляет 7-14
                                дней в зависимости от региона)<br/><br/>
                            </Typography>

                            <Typography gutterBottom variant="h6" letterSpacing={1.5} fontSize={15} component="p" sx={{ opacity: 0.6 }}>Оплата<br/><br/></Typography>

                            <Typography gutterBottom variant="p" component="div"><b>Наличные при получении </b>
                                – (вы делаете заказ, оставляете контактную информацию,
                                указываете в пункте Оплата – «Наличными»,
                                при этом варианте оплата осуществляется курьеру при привозе заказа).<br/><br/>
                            </Typography>

                            <Typography gutterBottom variant="p" component="div"><b>Наложенный платеж </b>
                                – это значит, что оплачивать заказ вы будете наличными при получении в отделении 
                                Почты России.  Дополнительные комиссии в нашем магазине отсутствуют.<br/>
                            </Typography>



                        </Box>
                    </div>
                </Box>
            </Container>
        </section>
    )
}