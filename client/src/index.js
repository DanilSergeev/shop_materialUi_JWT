import { createTheme, ThemeProvider } from '@mui/material';
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';



const theme = createTheme({
    palette:{
        // primary:{
        //     main: "#fff",
        // },
        secondary:{
            main: "#CC397B",
            dark: "#8c174c",
        },
    }    
})

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

    <ThemeProvider theme={theme}>
        <App />
    </ThemeProvider>
);