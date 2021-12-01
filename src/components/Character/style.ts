import styled from "styled-components";

export const Container = styled.div<{
  left: number;
  top: number;
  size: number;
  sidePos: number;
}>`
  width: ${(props) => props.size}px;
  height: ${(props) => props.size}px;
  position: absolute;
  left: ${(props) => props.left}px;
  top: ${(props) => props.top}px;
  background-image: url("/assets/char.png");
  background-position: 0px ${(props) => props.sidePos}px;

  div {
        position: absolute;
        left:0px;
        top:-55px;
        padding: 5px;
        padding-left: 5px;
        padding-top: 5px;
        margin: 1em 0 3em;
        color: #000;
        background: #000000  ;
        border-radius: 5px;
        width: 120;
        height: 44;
        color: white;
        display:block;
        text-align:center;
        
      
      &:after {
        content: "";
        display: block;
        position: absolute;
        
        
        width: 0;
        border-width: 10px 10px 0;
        border-style: solid;
        border-color: #000000 transparent;
      }
  }
`;

export const ContainerArea = styled.div<{ name: string }>``;
