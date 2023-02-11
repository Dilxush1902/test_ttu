// https://mui.com/material-ui/customization/theming/

import { createTheme } from "@mui/material";

export default createTheme({
  palette: {
    primary: {
      // light: will be calculated from palette.primary.main,
      main: "#fff",
      // dark: will be calculated from palette.primary.main,
      // contrastText: will be calculated to contrast with palette.primary.main
    },
    secondary: {
      light: "#0066ff",
      main: "#0044ff",
      // dark: will be calculated from palette.secondary.main,
      contrastText: "#ffcc00",
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          backgroundColor: "#E25B26",
          "&:hover": {
            color: "black",
          },
        },
      },
    },

    MuiFormControl: {
      styleOverrides: {
        root: {
          width: "100%",
        },
      },
    },

    MuiAccordion: {
      styleOverrides: {
        root: {
          boxShadow: "none",
          background: "#F9F9F9",
          margin: "0 !important",
          borderBottomLeftRadius: "0 !important",
          borderBottomRightRadius: "0 !important",
          borderTopLeftRadius: "0 !important",
          borderTopRightRadius: "0 !important",
        },
      },
    },
    MuiAccordionSummary: {
      styleOverrides: {
        root: {
          fontWeight: "600",
          ["@media (max-width: 600px)"]: {
            fontWeight: "500",
            fontSize: "15px",
          },
          fontSize: "20px",
          lineHeight: "22px",
          padding: "0",
          background: "none",
          margin: "0!important",
        },
      },
    },
    MuiAccordionDetails: {
      styleOverrides: {
        root: {
          padding: "0",
        },
      },
    },
    MuiOutlinedInput: {
      styleOverrides: {
        root: {
          borderRadius: "0!important",
          border: "1px solid #d9d9d9",
        },
      },
    },
    MuiCollapse: {
      styleOverrides: {
        root: {
          visibility: "initial",
        },
      },
    },
    MuiInputLabel: {
      styleOverrides: {
        root: {
          color: "#8B8B8B",
        },
      },
    },
    MuiInputLabel: {
      styleOverrides: {
        animated: {
          color: "#8B8B8B !important",
        },
      },
    },
    MuiOutlinedInput: {
      styleOverrides: {
        notchedOutline: {
          borderRadius: "0",
          borderWidth: "1px",
          border: "1px solid #d9d9d9",
          borderColor: "#d9d9d9!important",
          borderWidth: "1px !important",
        },
      },
    },
    MuiTabs: {
      styleOverrides: {
        flexContainer: {
          flexDirection: "column",
          alignItems: "flex-start",
        },
      },
    },
    MuiButtonBase: {
      styleOverrides: {
        root: {
          color: "#1B1B1B !important",
        },
      },
    },
  },
});
