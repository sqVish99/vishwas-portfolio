import styled from 'styled-components';

const Tile = styled.div`
  font-size: ${props => props.fontsize || '1.5rem'};
  background: ${props => props.backgroundcolor || 'white'};
  color: ${props => props.fontcolor || 'black'};  
  height: ${props => props.height || '25%'};
  width: ${props => props.width || '25%'};
  padding: ${(props) => props.padding || "0.5rem"};
  border-radius: ${props => props.borderradius || '0.5rem'};
`;

export default Tile;