import { makeStyles } from "@material-ui/core/styles";

export default makeStyles(() => {
  return {
    root: {
      minWidth: 275,
      maxWidth: 500,
      textAlign: "center",
      background: "#012c40",
      display: "flex",
      color: "#FFFFFF",
    },
    night: {
      minWidth: 275,
      maxWidth: 500,
      textAlign: "center",
      background: "#00bfff",
      display: "flex"
    },
    pos: {
      marginBottom: 12,
    },
    media: {
      height: "100px",
      width: "100px",
      display: "flex",
    },
    title: {
      color: "#FFFFFF",
      fontWeight: "600px",
      display: "flex",
      fontSize: "30px",
      justifyContent:"center",
    },
    degrees: {
      color: "#FFFFFF",
      fontWeight: "600px",
      display: "flex",
      fontSize: "30px",
      justifyContent:"center",
      marginTop: "20px"
    },
    subTitle: {
      color: "#FFFFFF",
      fontWeight: "600px",
      display: "flex",
      fontSize: "14px",
      justifyContent: "flex-start",
      marginTop: "20px"
    },
    row: {
      display: "flex",
      flexDirection: "row",
      justifyContent: "flex-start",
      marginTop: "6px",
      marginBottom: "15px",
    },
    margin: {
      marginBottom: "20px",
      marginTop: "20px",
    },
    paper: {
      "& > *": {
        padding: "16px",
        boxShadow: "0px 24px 80px 0px rgba(0,0,0,0.05)",
        borderBottom: "1px solid rgba(0, 0, 0, 0.08)",
        fontSize: "16px",
        justifyContent: "space-between",
        alignItems: "center",
        marginBottom: "4px",
      },
      cardText:{
        textAlign: "right",
      }
    },
  };
});
