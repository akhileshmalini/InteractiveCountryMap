import styled from "@emotion/styled";
import MapConfig from "./Maps/MapConfig";

function Icon({
  countryCode = "IND",
  fillColor = "#e06565",
  borderColor = "#FFFFFF",
  onClick,
  onHover,
}) {
  const MapStyle = styled.g`
    path {
      fill: ${fillColor};
      stroke: ${borderColor};
    }

    path: hover {
      fill-opacity: 0.5;
    }
  `;

  const { component: MapComponent, svgDimensions } = MapConfig[countryCode];

  const onClickHandler = (event) => {
    const id = event.target.getAttribute("id");
    const title = event.target.getAttribute("title");
    onClick(id, title);
  };

  const onHoverHandler = (event) => {
    const id = event.target.getAttribute("id");
    const title = event.target.getAttribute("title");
    onHover(id, title);
  };

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      id="IN"
      onClick={onClickHandler}
      onMouseOver={onHoverHandler}
      width={svgDimensions.width}
      height={svgDimensions.height}
    >
      <MapStyle>{MapComponent}</MapStyle>
    </svg>
  );
}

export default Icon;
