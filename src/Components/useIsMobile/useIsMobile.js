import useMediaQuery from "@material-ui/core/useMediaQuery/useMediaQuery";
import createBreakpoints from "@material-ui/core/styles/createBreakpoints";

const useIsMobile = () => {
  const breakpoints = createBreakpoints({});
  return useMediaQuery(breakpoints.down("sm"));
};

export default useIsMobile;
