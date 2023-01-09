import { AppBar, Badge, Box, Button, Container, IconButton, TextField, Toolbar, Typography } from "@mui/material";
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import Bascet from "../../components/Bascet";
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import { useState } from "react";
import MyModal from "../../components/Ui/modal/MyModal";
import LogoutIcon from '@mui/icons-material/Logout';
import { registration, login } from "../../http/userApi";

export default function Header({ setListBascet, listBascet, bascetCount, isAuth, setIsAuth }) {
    const [cartOpen, setCartOpen] = useState(false);
    const [modalActiv, setModalActiv] = useState(false);

    const [isAuthForm, setIsAuthForm] = useState(false);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [rePassword, setRePassword] = useState("");


    const signIn = async () => {
        try {
            if (!isAuthForm) {
                const respons = await login(email, password)
                console.log(respons)
                setIsAuth(prev => !prev)
                setModalActiv(prev => !prev);

            } else {
                if (password === rePassword) {
                    const respons = await registration(email, password)
                    console.log(respons)
                    setIsAuth(prev => !prev)
                    setIsAuthForm(prev => !prev);
                } else {
                    alert("Пароли не совподают")
                }
            }
        } catch (e) {
            alert(e.response.data.message)
        }
    }


    return (
        <>
            <AppBar className="headerAppBar" position="fixed" color="secondary"  >
                <Container fixed >
                    <Toolbar className="navBar">
                        <Button
                            color="inherit"
                            variant="text"
                            noWrap
                            component="a"
                            href="#"><iconify-icon icon="logos:atomic" width="115" height="50"></iconify-icon>
                        </Button>
                        <Typography sx={{ flexGrow: 1 }}></Typography>

                        <Box sx={{ display: "flex", alignItems: "center" }} className="navBarSm">
                            <Button
                                color="inherit"
                                variant="text"
                                noWrap
                                component="a"
                                href="#Products">Товары
                            </Button>
                            <Button
                                color="inherit"
                                variant="text"
                                noWrap
                                component="a"
                                href="#Delivery">Доставка
                            </Button>
                            <Button
                                color="inherit"
                                variant="text"
                                noWrap
                                component="a"
                                href="#contacts">Контакты
                            </Button>

                            {isAuth ?
                                <>
                                    <IconButton onClick={() => setCartOpen(true)} color="inherit" aria-label="add to shopping cart">
                                        <Badge badgeContent={bascetCount} color="success">
                                            <ShoppingCartIcon />
                                        </Badge>
                                    </IconButton>
                                    <Button
                                    sx={{ml:3}}
                                        color="inherit"
                                        variant="text"
                                        noWrap
                                        component="button"
                                        onClick={()=>
                                            setIsAuth(prev=>!prev)
                                        }
                                        >
                                            <LogoutIcon sx={{mr:1}} />
                                            Выйти

                                    </Button>
                                </>
                                :
                                <IconButton onClick={() => setModalActiv(true)} color="inherit" aria-label="add to shopping cart">
                                    <PersonOutlineIcon />
                                </IconButton>

                            }



                        </Box>
                    </Toolbar>
                </Container>
            </AppBar>
            <Bascet setListBascet={setListBascet} listBascet={listBascet} cartOpen={cartOpen} closeCart={() => setCartOpen(false)}></Bascet>
            <MyModal modalActiv={modalActiv} setModalActiv={setModalActiv}>
                {
                    <>
                        <Typography gutterBottom variant="h3" fontSize={24} textAlign="center" component="p">{isAuthForm ? "Регистрация" : "Авторизация"}</Typography>
                        <Box className="modalFormAu" style={{ display: "flex", flexDirection: "column", marginBottom: "2vh" }}>
                            <TextField onChange={e => setEmail(e.target.value)} value={email} type="mail" sx={{ mb: 2 }} label="Введите email" variant="standard" />
                            <TextField onChange={e => setPassword(e.target.value)} value={password} sx={{ mb: 2 }} type="password" label="Введите пароль" variant="standard" />
                            {
                                isAuthForm ?
                                    <TextField onChange={e => setRePassword(e.target.value)} value={rePassword} sx={{ mb: 3 }} type="password" label="Повторите пароль" variant="standard" />
                                    : ""
                            }
                            <Button
                                onClick={() => signIn()}
                                color="secondary"
                                variant="contained"
                                noWrap
                            >{isAuthForm ? "Зарегистрироватся" : "Авторизоватся"}</Button>
                        </Box>
                        {
                            isAuthForm ?
                                <Typography gutterBottom variant="p">Если у вас уже есть акаунт, то <Typography gutterBottom variant="p" onClick={() => setIsAuthForm(prev => !prev)} href="#" component="a">авторизуйтесь</Typography></Typography>
                                :
                                <Typography gutterBottom variant="p">Если у вас нет акаунта, то <Typography gutterBottom variant="p" onClick={() => setIsAuthForm(prev => !prev)} href="#" component="a">зарегистрируйтесь</Typography></Typography>
                        }
                    </>

                }
            </MyModal>
        </>
    )
}