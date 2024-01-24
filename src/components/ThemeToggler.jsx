import styled from "styled-components"

const StyledThemeToggler = styled.div`
    height: 34px;
    width: 60px;
    border-radius: 34px;
    background-color: var(--background-secondary);
    position: relative;
    cursor: pointer;

    .track{
        position: absolute;
        height: 100%;
        width: 100%;
        border-radius: 28px;
    }
    .thumb{
        position: absolute;
        background-color: var(--blue);
        width: 26px;
        height: 26px;
        top: 4px;
        left: 4px;
        border-radius: 50%;
        transition: .3s;
        transform: translateX(26px);
    }
`

function ThemeToggler() {
    
    const toggleTheme = () => {
        const thumb = document.querySelector('.thumb');
        if(document.body.className === "dark-theme") {
            document.body.className = "light-theme";
            thumb.style.transform = "translateX(0px)";
        }
        else {
            document.body.className = "dark-theme";
            thumb.style.transform = "translateX(26px)";
        }


    }
  return (
    <StyledThemeToggler  onClick={toggleTheme}>
        <div className="track"></div>
        <div className="thumb"></div>
        {/* <button onClick={toggleTheme}>ToggleTheme</button> */}
    </StyledThemeToggler>
  )
}

export default ThemeToggler