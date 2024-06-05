import styled from "styled-components";

const DisplayColumn = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${(props) => props.gap || "1rem"};
`;

export default DisplayColumn;
