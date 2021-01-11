import { makeStyles } from "@material-ui/core/styles";

export default makeStyles(() => {
  return {
    root: {
      minWidth: 100,
      maxWidth: 600,
      background: "rgba(255, 255, 255, 0.1)",
      color: "#FFFFFF",
    },

    text: {
      color: "#FFFFFF",
      fontWeight: "600px",
      fontSize: "25px",
      justifyContent: "center",
      alignItems: "center",
    },
    media: {
      height: "150px",
      width: "150px",
    },
    title: {
      color: "#FFFFFF",
      fontWeight: "600px",
      display: "flex",
      fontSize: "50px",
    },
    mobileTitle: {
      color: "#FFFFFF",
      fontWeight: "600px",
      display: "flex",
      fontSize: "25px",
    },

    degrees: {
      color: "#FFFFFF",
      fontWeight: "600px",
      fontSize: "50px",
      display: "flex",
      justifyContent: "center",
    },
    subTitle: {
      color: "#FFFFFF",
      fontWeight: "600px",
      display: "flex",
      fontSize: "20px",
      justifyContent: "flex-start",
    },
    time: {
      color: "#FFFFFF",
      fontWeight: "600px",
      display: "flex",
      fontSize: "18px",
      justifyContent: "flex-start",
      fontStyle: "italic",
    },
    subText: {
      color: "#FFFFFF",
      fontWeight: "600px",
      display: "flex",
      fontSize: "15px",
      justifyContent: "flex-start",
    },
    condition: {
      color: "#FFFFFF",
      fontWeight: "600px",
      display: "flex",
      fontSize: "20px",
      justifyContent: "center",
    },
    row: {
      display: "flex",
      flexDirection: "row",
      justifyContent: "flex-start",
      marginTop: "6px",
      marginBottom: "15px",
    },
    tabs: {
      color: "#FFFFFF",
      fontWeight: "600px",
    },
    background: {
      background: "rgba(255, 255, 255, 0.1)",
    },
    buttonActive: {
      minWidth: "14px",
      color: "#FFFFFF",
      padding: "9px",
      fontSize: "18px",
      align: "right",
      textDecoration: "underline",
    },
    buttonInactive: {
      minWidth: "14px",
      color: "#FFFFFF",
      padding: "9px",
      fontSize: "18px",
      align: "right",
      textDecoration: "none",
    },
  };
});
