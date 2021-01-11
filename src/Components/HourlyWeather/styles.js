import { makeStyles } from "@material-ui/core/styles";

export default makeStyles(() => {
  return {
    day: {
      background: "#00BFFF",
      color: "#FFFFFF",
    },
    night: {
      background: "#000000",
      color: "#FFFFFF",
    },
    icon: {
      color: "#FFFFFF",
    },
    root: {
      flexWrap: "wrap",
      justifyContent: "space-around",
      overflow: "hidden",
    },
    gridList: {
      flexWrap: "nowrap",
      // Promote the list into his own layer on Chrome. This cost memory but helps keeping high FPS.
      transform: "translateZ(0)",
    },
    title: {
      color: "#ffffff",
    },
    titleBar: {
      background:
          "linear-gradient(to top, rgba(255,255,255,0) 0%, rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%)",
    },
    text: {
      textAlign: "center",
    },
    media: {
      height: "50%",
      position: "relative",
    },
  };
});
