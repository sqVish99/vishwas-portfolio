import styled from 'styled-components';

const Tile = styled.div`
  font-size: ${props => props.fontsize || '1.5rem'};
  background: ${props => props.backgroundcolor || 'white'};
  color: ${props => props.fontcolor || 'black'};  
  height: ${props => props.height || '10rem'};
  width: ${props => props.width || '10rem'};
  padding: ${(props) => props.padding || "0.5rem"};
  border-radius: ${props => props.borderradius || '0.5rem'};
`;

export default Tile;