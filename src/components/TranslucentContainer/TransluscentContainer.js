import styled, { keyframes } from "styled-components";
const breatheAnimation = keyframes`
  0%, 100% {
    opacity: 0.8;
  }
  50% {
    opacity: 1;
  }
`;

const TranslucentContainer = styled.div`
  font-size: 1rem;
  background: ${(props) => props.$backgroundcolor || "white"};
  color: ${(props) => props.$fontcolor || "black"};
  height: ${(props) => props.height || "calc(100vh - 6rem)"};
  width: ${(props) => props.width || "calc(100vw - 6rem)"};
  padding: 2rem;
  border-radius: 1rem;
  align-items: center;
  justify-content: center;
  display: flex;
  flex-direction: ${(props) => props.flexdirection || "row"};

  // Add breathing animation
  animation: ${breatheAnimation} 3s ease-in-out infinite;

  @media (max-width: 768px) {
    width: ${(props) => props.width || "calc(100vw - 3rem)"};
    height: ${(props) => props.height || "calc(100vh - 5rem)"};
  }
`;

export default TranslucentContainer;