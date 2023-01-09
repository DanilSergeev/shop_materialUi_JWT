import { Box, Button, Container, TextField, Typography } from "@mui/material";
import { useState } from "react";
import logo from "../style/img/dilvery.jpg";
import MyModal from "./Ui/modal/MyModal";

export default function Delivery() {
    const [modalActiv, setModalActiv] = useState(false)

    return (
        <section style={{ marginTop: "10rem" }} id="Delivery">
            <Container fixed id="Delivery">
                <div className="display-flex Delivery" style={{ justifyContent: "flex-end" }}>
                    <Box className="DeliveryBox" sx={{ maxWidth: "518px" }} >
                        <Typography fontSize="20" gutterBottom variant="h4" component="p" >Доставим за 3 дня</Typography>
                        <Typography gutterBottom variant="p" component="p" >Наша компания занимается продажей и доставкой корейских товаров с 2018 года.
                            Оставьте заявку и мы поможем вам выбрать подходящий товар.</Typography>
                        <Button onClick={() => setModalActiv(true)} color="secondary" variant="contained" size="medium">Оставить заявку</Button>
                    </Box>

                    <Box
                        className="DeliveryBoxImg"
                        width={700}
                        height={500}
                        sx={{ backgroundSize: "cover", backgroundImage: `url(${logo})` }}></Box>
                </div>
            </Container>
            <MyModal modalActiv={modalActiv} setModalActiv={setModalActiv}>
                <Typography gutterBottom variant="h2" fontSize={24} textAlign="center" component="p">Оставить заявку</Typography>
                <Box className="modalFormAu" style={{ display: "flex", flexDirection: "column", marginBottom: "2vh" }}>
                    <TextField sx={{ mb: 2 }} label="Введите имя" variant="standard" />
                    <TextField type="mail" sx={{ mb: 2 }} label="Введите E-mail" variant="standard" />
                    <TextField type="mail" sx={{ mb: 6 }} label="Введите номер телефона" variant="standard" />

                    <Button
                        color="secondary"
                        variant="contained"
                        noWrap
                    >Отправить</Button>
                </Box>
            </MyModal>
        </section>
    )
}
