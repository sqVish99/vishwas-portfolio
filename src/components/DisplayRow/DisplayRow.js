import styled from "styled-components";

const DisplayRow = styled.div`
  font-size: ${(props) => props.fontsize || "1.5rem"};
  font-weight: ${(props) => props.fontweight || "bold"};
  width: ${(props) => props.width || "100%"};
  height: ${(props) => props.height || "auto"};
  opacity: ${(props) => props.opacity || "0.8"};
  padding: ${(props) => props.padding || "0.5rem"};
  color: ${(props) => props.fontcolor || "inherit"};
  display: ${(props) => props.display || "flex"};
`;

export default DisplayRow;
