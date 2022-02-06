import styled from "@emotion/styled"

export const Wrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1000;
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: hsla(234.3, 46.8%, 31%, 0.85);
`

export const TextContainer = styled.div`
  @keyframes fadeIn {
    0% {
      opacity: 0;
      transform: translateY(-20px);
    }
    100% {
      opacity: 1;
      transform: translateY(-0);
    }
  }

  display: flex;
  flex-flow: column;
  justify-content: center;
  flex-wrap: wrap;
  align-items: center;
  position: relative;
  animation: fadeIn 0.5s;
`

export const StyledBadge = styled.div`
  border-radius: 50%;
  padding: 24px 18px;
  background-color: #fcc3c9;
  display: flex;
  flex-flow: column;
  position: absolute;
  top: 0;
  right: -48px;
  transform: rotateZ(10deg);
  span {
    color: #2a3174;
    font-weight: 500;
  }
`
