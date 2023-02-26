import { createTheme } from "@mui/material/styles"
import index from "../index.scss"


// Theme for my website
const myTheme = createTheme({
    palette: {
        primary: {
            main: index.primary
        },
        secondary: {
            main: index.whitespace
        }, 
        whitespace: {
            main: index.whitespace
        },
        text: {
            main: index.textColor
        }
    },
    typography: {
        fontFamily: [
            '"Segoe UI"',
            "Roboto",
            "sans-serif"
        ].join(","),
        fontSize: 12
    }
});

export default myTheme;