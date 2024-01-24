import styled from "styled-components"
  const StyledFooter = styled.footer`
  position: absolute;
  left: 0;
  /* bottom: 0; */
  padding: 5px 20px;
  padding-bottom: 60px;
  background-color: inherit;
  width: 100%;
  border-top: 2px solid #2e3241;
  display: flex;
  justify-content: space-between;

  span{
    color: var(--text-secondary);
    font-size: 12px;
  }
`

function Footer() {
  return (
    <StyledFooter>
        <span>Copyright © 2024 HodlInfo.com</span>
        <span>Support</span>
    </StyledFooter>
  )
}

export default Footer