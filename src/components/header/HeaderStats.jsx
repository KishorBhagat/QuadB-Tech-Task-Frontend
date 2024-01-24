import { useContext } from "react"
import styled from "styled-components"
import { DataContext } from "../../context/DataContext"

const StyledHeaderStats = styled.div`
    /* background-color: green; */
    display: flex;
    align-items: center;
    justify-content: space-around;
    /* padding: 10px 0; */
    padding: 10px 30px;
    gap: 10px;
    .element{
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        .main-text{
            color: var(--blue);
            font-weight: 400;
            font-size: 40px;
            white-space: nowrap;
        }
        .sub-text{
            color: var(--text-secondary);
            /* font-weight: 300; */
            font-size: 20px;
        }
    }
    .center{
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        .top{
            font-size: 28px;
            letter-spacing: .75px;
            font-weight: 300;
            color: var(--text-secondary);
            text-align: center;
        }
        .middle{
            font-weight: 400;
            font-size: 80px;
            padding-bottom: 10px;
            white-space: nowrap;
        }
        .bottom{
            /* font-weight: 300; */
            font-size: 16px;
            letter-spacing: .75px;
            color: var(--text-secondary);
            text-align: center;
        }
        padding-bottom: 30px;
    }
    @media (max-width: 769px){
        .element {
            .main-text{
                font-size: 14px;
            }
            .sub-text{
                font-size: 10px;
            }
        }
        .center{
            .top {
                font-size: 14px;
            }
            .middle{
                font-size: 20px;
            }
            .bottom{
                font-size: 8px;  
            }
        }
    }
`

function HeaderStats() {

    const { bestPrice } = useContext(DataContext);

    return (
        <StyledHeaderStats>
            <div className="element">
                <span className="main-text">0.98 %</span>
                <span className="sub-text">5 Mins</span>
            </div>
            <div className="element">
                <span className="main-text">1.39 %</span>
                <span className="sub-text">1 Hour</span>
            </div>
            <div className="center">
                <span className="top">Best Price to Trade</span>
                <span className="middle">₹ {Number(bestPrice).toLocaleString()}</span>
                <span className="bottom">Average BTC/INR net price including comission</span>
            </div>
            <div className="element">
                <span className="main-text">6.89 %</span>
                <span className="sub-text">1 Day</span>
            </div>
            <div className="element">
                <span className="main-text">11.37 %</span>
                <span className="sub-text">7 Days</span>
            </div>
        </StyledHeaderStats>
    )
}

export default HeaderStats