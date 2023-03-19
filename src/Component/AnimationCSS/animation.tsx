import styled, { keyframes } from 'styled-components'

const slideRight = keyframes`
  from {
    left: -100px;
    transform: rotateX(-450deg)
    opacity: 0;
  }
  to {
    transform: translateX(0);
    transform: rotateX(0deg)
    opacity: 0.1;
  } `;



export const SlideIn = styled.div`
  animation: ${slideRight} 1s forwards;`