import styled, { keyframes } from "styled-components"
import { ISkeleton } from "."

const animationSkeleton = keyframes`
  0%{
    background-position: -450px 0;
  }
  100%{
    background-position: 450px 0;
  }
`

export const Container = styled.div<ISkeleton>`
  width: ${props => props.width ? props.width : '100%'};
  height: ${props => props.height ? props.height : '100%'};
  margin: 0 0 20px 0;
  position: relative;
  background: #d9d9d9;
  border-radius: 10px;
  overflow: hidden;
  &::before{
    position: absolute;
    content: "";
    height: 100%;
    width: 100%;
    background-image: linear-gradient(to right, #d9d9d9 0%, rgba(122, 122, 122, 0.05) 20%, #d9d9d9 40%, #d9d9d9 100%);
    background-repeat: no-repeat;
    background-size: 100% 100%;
    animation: ${animationSkeleton} 1s linear infinite;
  }
`