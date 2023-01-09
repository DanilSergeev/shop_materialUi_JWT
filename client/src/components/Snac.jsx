import { IconButton } from '@mui/material';
import Snackbar from '@mui/material/Snackbar';
import CloseIcon from '@mui/icons-material/Close';


export default function Snac(props) {
    const {
        cartOpen,
        setIsOpenSnack
    } = props;

    return (
        <Snackbar
            open={cartOpen}
            autoHideDuration={3000}
            onClose={() => setIsOpenSnack(() => false)}
            message="Товар добавлен в корзину"
            action={
                <IconButton
                    size="small"
                    aria-label="close"
                    color="inherit"
                    onClick={() => setIsOpenSnack(() => false)}
                >
                    <CloseIcon fontSize="small" />
                </IconButton>
            }
        >

        </Snackbar>
    )
}