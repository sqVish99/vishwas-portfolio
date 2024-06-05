import styled from 'styled-components';

const TranslucentContainer = styled.div`
  font-size: 1rem;
  background: ${props => props.backgroundcolor || 'white'};
  color: ${props => props.fontcolor || 'black'};
  height: ${props => props.height || '94%'};
  width: ${props => props.width || '95%'};
  padding: 2rem;
  border-radius: 1rem;

  @media (max-width: 768px) {
    width: ${props => props.width || '94%'};
    height: ${props => props.height || '97%'};
  }
`;

export default TranslucentContainer;