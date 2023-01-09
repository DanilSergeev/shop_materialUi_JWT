import { Button, Divider, Drawer, IconButton, List, ListItem, ListItemIcon, ListItemText } from "@mui/material";
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import CloseIcon from '@mui/icons-material/Close';
import { useEffect, useState } from "react";

export default function Bascet(props) {
    const {
        setListBascet,
        listBascet,
        closeCart,
        cartOpen,
    } = props;
    let sumCount = 0;
    const [sumDevices, setSumDevices] = useState(0);


    const delItemList = (id) => {
        setListBascet(prev => [...prev.filter(p => id !== p.id)])
    }

    useEffect(()=>{
        listBascet.map(item=> sumCount += item.count * item.price)
        setSumDevices(sumCount)
    },[listBascet])



    return (
        <Drawer
            open={cartOpen}
            anchor="right"
            onClose={closeCart}
        >
            <List sx={{ width: "320px" }}>
                <ListItem>
                    <ListItemIcon>
                        <ShoppingCartIcon />
                    </ListItemIcon>
                    <ListItemText primary="Корзина"></ListItemText>
                </ListItem>
                <Divider />

                {
                    (listBascet.length) ?
                        listBascet.map((item, index) =>
                            <>
                            <ListItem key={index}>
                                <ListItemText sx={{flex: "inherit"}}>{index + 1}.</ListItemText>
                                <ListItemText sx={{ml:3}}>
                                    <p style={{color: "#8c174c",display: "inline"}}>Товар:</p> {item.name}<br/>
                                    <p style={{color: "#8c174c",display: "inline"}}>Цена:</p> {item.price}<br/>
                                    <p style={{color: "#8c174c",display: "inline"}}>Количество:</p> {item.count}</ListItemText>

                                <IconButton onClick={() => delItemList(item.id)}>
                                    <CloseIcon fontSize="small" />
                                </IconButton>

                            </ListItem>
                                <Divider />
                                </>
                            
                        )
                        :
                        <ListItem>
                            <ListItemText>Корзина пуста</ListItemText>
                        </ListItem>
                }
                <ListItem>
                    <ListItemText>Общая стоимость: {sumDevices}</ListItemText>
                </ListItem>
                {
                    listBascet.length?
                    <ListItem>
                        <Button variant="contained" style={{margin: "0 auto"}} color="secondary">Купить</Button>
                    </ListItem>
                    :
                    ""
                }



            </List>
        </Drawer>
    )
}