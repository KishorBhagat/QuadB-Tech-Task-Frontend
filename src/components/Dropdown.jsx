import { useEffect, useRef } from "react";
import styled from "styled-components"

const StyledDropDown = styled.div`
    width: 150px;
    background-color: #fff;
    position: absolute;
    z-index: 10;
    display: none;
    border-radius: 2px;
    border: 1px solid var(--text-secondary);
    li{
        color: black;
        list-style: none;
        /* background-color: red; */
        padding: 10px 20px;
        cursor: pointer;
        &:hover{
            background: #ebe8e8;
        }
    }
`

const Dropdown = ({ show, setShow, options }) => {
    // const dropdownRef = useRef();
    // useEffect(() => {
    //     const handleClickOutside = (event) => {
    //         if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
    //             // setShow(false);
    //             // console.log(dropdownRef.current)
    //             console.log(event.target)
    //         }
    //     };

    //     document.addEventListener('mousedown', handleClickOutside);

    //     return () => document.removeEventListener('mousedown', handleClickOutside);
    // }, []);
    return (
        <StyledDropDown
            // ref={dropdownRef}
            style={{ display: `${show ? "block" : "none"}` }}
            onClick={e => e.stopPropagation()}
        >
            {
                options.map((option, idx) => {
                    return (
                        <li key={option}>{option}</li>
                    )
                })
            }
        </StyledDropDown>
    )
}

export default Dropdown