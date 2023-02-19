import { createTheme } from "@mui/material/styles"

// Theme for my website
const myTheme = createTheme({
    palette: {
        primary: {
            main: "#e85a4f"
        },
        secondary: {
            main: "#e98074"
        },
        whitespace: {
            main: "#eae7dc"
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