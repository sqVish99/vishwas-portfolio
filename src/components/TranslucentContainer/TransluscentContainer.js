import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  font-size: 1rem;
  background: ${props => props.backgroundcolor || 'white'};
  color: ${props => props.fontcolor || 'black'};
  height: ${props => props.height || '85%'};
  width: ${props => props.width || '85%'};
  padding: 2rem;
  border-radius: 1rem;
`;

const TranslucentContainer = ({ backgroundcolor, fontcolor, height, width, children }) => {
  return (
    <Container backgroundcolor={backgroundcolor} fontcolor={fontcolor} height={height} width={width}>
      {children}
    </Container>
  );
}

export default TranslucentContainer;