import styled from "styled-components"
import Table from "../components/Table"
import Header from "../components/header/Header"
import HeaderStats from "../components/header/HeaderStats"
import Footer from "../components/Footer"
import { useContext, useEffect, useState } from "react"
import { DataContext } from "../context/DataContext"
import Loader from "../components/Loader"

const StyledHome = styled.div`
    min-height: 100vh;
    width: 100%;
    padding: 0 20px;
    background-color: var(--background-primary);
    .loader{
      text-align: center;
      display: flex;
      justify-content: center;
      margin-top: 100px;
    }
    @media (max-width: 450px){
      padding: 0 10px;
    }
`

function Home() {
  const {tickers} = useContext(DataContext);

  return (
    <StyledHome>
        <Header />
        {
          tickers.length === 0 ?
          <div className="loader">
            <Loader height={50} width={50}/>
          </div>
          :
          <>
            <HeaderStats/>
            <Table />
            <Footer />
          </>
        }
    </StyledHome>
  )
}

export default Home