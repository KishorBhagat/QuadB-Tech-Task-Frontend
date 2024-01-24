import { useContext, useEffect, useState } from "react";
import styled from "styled-components"
import { DataContext } from "../context/DataContext";

const StyledSecondTimer = styled.div`
    .pie {
        width: 34px;
        height: 34px;
        display: block;
        border-radius: 50%;
        float: left;
        position: relative;
        display: flex;
        justify-content: center;
        align-items: center;
        span{
            background-color: var(--background-primary);
            width: 28px;
            height: 28px;
            border-radius: 50%;
            display: flex;
            justify-content: center;
            align-items: center;
        }
    }
`

function SecondTimer() {

    const { fetchTickers } = useContext(DataContext);
    const [count, setCount] = useState(60);

    useEffect(() => {
        const timer = setTimeout(() => {
            if (count > 0) {
                setCount((prev) => prev - 1);
            } else {
                setCount(60);
                fetchTickers()
            }
        }, 1000);

        return () => clearTimeout(timer);
    }, [count]);

    return (
        <StyledSecondTimer>
            <div className="pie"
                style={{
                    backgroundImage: `conic-gradient(var(--blue) 0%, var(--blue) ${(count * 100) / 60}%, var(--text-secondary) ${(count * 100) / 60}%)`
                }}
            >
                <span>{count}</span>
            </div>
        </StyledSecondTimer>
    )
}

export default SecondTimer