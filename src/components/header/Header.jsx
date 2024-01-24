import styled from "styled-components"
import ThemeToggler from "../ThemeToggler"
import SecondTimer from "../SecondTimer"
import { Link } from "react-router-dom"
import Dropdown from "../Dropdown"
import { useState } from "react"

const StyledHeader = styled.div`
    /* background-color: red; */
    padding: 20px 30px 0;
    display: flex;
    justify-content: space-between;
    align-items: center;
    .logo{
        display: flex;
        padding: 10px;
        img{
            height: 40px;
            display: flex;
        }
    }
    .left, .middle, .right{
        width: 33.33%;
    }
    .middle{
        display: flex;
        justify-content: center;
        align-items: center;
        /* background-color: pink; */
        flex-wrap: wrap;
        gap: 20px;
    }
    .right{
        display: flex;
        justify-content: right;
        align-items: center;
        gap: 20px;
        flex-wrap: wrap;
        /* background-color: pink; */
        img{
            height: 14px;
            margin-right: 5px;
        }
    }
    .btn-primary{
        background-color: var(--blue);
        border: none;
        border-radius: 10px;
        padding: 6px 20px;
        font-size: 16px;
        color: #ffffff;
        cursor: pointer;
        white-space: nowrap;
    }
    .btn-secondary{
        background-color: var(--background-secondary);
        border: none;
        border-radius: 10px;
        padding: 6px 20px;
        font-size: 16px;
        cursor: pointer;
        white-space: nowrap;
    }
    .drop-down-btn{
        &::after{
            display: inline-block;
            margin-left: 0.255em;
            vertical-align: 0.255em;
            content: "";
            border-top: 0.3em solid;
            border-right: 0.3em solid transparent;
            border-bottom: 0;
            border-left: 0.3em solid transparent;
        }
    }

    @media (max-width: 769px) {
        flex-direction: column;
        padding: 20px 0 0;
        .left, .middle, .right{
            width: 100%;
            justify-content: center;
            padding: 10px 0;
        }
    }
    @media (max-width: 450px) {
        .logo{
            img{
                height: 35px;
            }
        }
        .btn-primary, .btn-secondary{
            font-size: 14px;
        }
    }
`

function Header() {
    const [showCurrencyOption, setShowCurrencyOption] = useState(false)
    const [showCryptoOption, setShowCryptoOption] = useState(false)

    const handleShowCurrencyOptions = () => {
        setShowCurrencyOption(!showCurrencyOption);
        setShowCryptoOption(false);
    }
    const handleShowCryptoOptions = () => {
        setShowCryptoOption(!showCryptoOption);
        setShowCurrencyOption(false);
    }

  return (
    <StyledHeader>
        <Link to="/" className="logo left">
            <img src="logo.png" alt="HODLINFO" />
        </Link>
        <div className="middle">
            <span>
                <button className="btn-secondary drop-down-btn" onClick={handleShowCurrencyOptions}>INR</button>
                <Dropdown 
                    show={showCurrencyOption}
                    options={['INR']}
                />
            </span>
            <span>
                <button className="btn-secondary drop-down-btn" onClick={handleShowCryptoOptions}>BTC</button>
                <Dropdown 
                    show={showCryptoOption}
                    options={['BTC', 'ETH', 'USDT', 'XRP', 'TRX', 'DASH']}
                />
            </span>
            <button className="btn-secondary">BUY BTC</button>
        </div>
        <div className="right">
            <SecondTimer />
            <button className="btn-primary"> <img src="telegram-icon.png"/> Connect Telegram</button>
            <ThemeToggler />
        </div>
    </StyledHeader>
  )
}

export default Header