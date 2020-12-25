import India from "./India";
import USA from "./USA";

const MapConfig = {
  IND: {
    name: "India",
    component: <India fill={"#e06565"} />,
    svgDimensions: {
      width: "611.86",
      height: "695.702",
    },
  },
  USA: {
    name: "United States of America",
    component: <USA fill={"#e06565"} />,
    svgDimensions: {
      width: "593.3779761904764",
      height: "318.2870370370371",
    },
  },
};

export default MapConfig;
