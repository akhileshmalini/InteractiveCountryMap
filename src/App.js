import { useState } from "react";
import Map from "./Assets/Countries";
import { Navbar } from "./Components";
import Typography from "@material-ui/core/Typography";
import styled from "@emotion/styled";

const StyledDisplayContainer = styled.div`
  display: flex;
  margin: 32px 0px;
  flex-direction: column;
  justify-content: center;
`;

const StyledMapContainer = styled.div`
  display: flex;
  justify-content: center;
  .highlight:hover {
    fill-opacity: 0.5;
  }
`;

function App() {
  const [stateName, setStateName] = useState(null);

  const onMapClickHandler = (id, title) => {
    if (title) {
      alert(title);
    }
  };
  const onMapHoverHandler = (id, title) => {
    if (title) {
      setStateName(title);
    } else {
      setStateName(null);
    }
  };

  return (
    <>
      <Navbar />
      <StyledDisplayContainer>
        <StyledMapContainer>
          <Map
            countryCode="USA"
            onClick={onMapClickHandler}
            onHover={onMapHoverHandler}
          />
        </StyledMapContainer>
        <Typography variant="h2" align="center">
          {stateName}
        </Typography>
      </StyledDisplayContainer>
    </>
  );
}

export default App;
