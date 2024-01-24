import styled from "styled-components"

const StyledLoader = styled.div`
    /* width: 100px;
    height: 100px; */
    background-color: var(--text-secondary);
    border-radius: 50%;
    background-image: conic-gradient(var(--blue) 0%, var(--blue) 25%, var(--text-secondary) 25%);
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    &::before{
      position: absolute;
      content: "";
      height: 70%;
      width: 70%;
      border-radius: 50%;
      background-color: var(--background-primary);
    }
    animation: spin 2s infinite linear;
    @keyframes spin {
      0% {
        transform: rotate(0deg);
      }
      100% {
        transform: rotate(360deg);
      }
    }
`

function Loader({height, width}) {
  return (
    <StyledLoader style={{height: `${height}px`, width: `${width}px`}}>
    </StyledLoader>
  )
}

export default Loader