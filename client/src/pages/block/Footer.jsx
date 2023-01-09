import { Box, Container } from "@mui/material";

export default function Footer() {
    return (
        <footer>
            <Box color="white" sx={{
                minHeight: "10vh",
                backgroundColor: 'secondary.dark',
                display: "flex",
                alignItems: "center",
                justifyContent: "center"
            }}>
                <Container position="static" sx={{ p: "20px 0 30px 0" }} >


                </Container>
            </Box>
        </footer>
    )
}