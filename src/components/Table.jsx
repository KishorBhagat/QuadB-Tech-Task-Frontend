import { useContext, useEffect, useState } from "react"
import styled from "styled-components"
import TableItem from "./TableItem";
import { DataContext } from "../context/DataContext";

const StyledTable = styled.div`
  width: 100%;
  overflow-x: scroll;
  &::-webkit-scrollbar {
    width: 0px;
    height: 1px;
  }
  &::-webkit-scrollbar-track {
      background: transparent;
  }
  &::-webkit-scrollbar-thumb {
      background: #9a9aa8;
  }
  table { 
    width: 100%;
    max-width: 100%;
    border-collapse: separate;
    border-spacing: 0 1em;
    margin: 0;
  
    th, td{
      font-size: 24px;
      letter-spacing: 1px;
      color: var(--text-secondary);
      white-space: nowrap;
    }
  
    td{
      h4{
        font-weight: 500;
        font-size: 24px;
        letter-spacing: 1px;
        text-transform: capitalize;
        white-space: nowrap;
      }
      text-align: center;
      color: #ffffff;
      /* background-color: red; */
    }
    tbody {
      tr{
        td{
          background-color: var(--background-secondary);
          padding: 10px 0;
        }
        td:first-Child{
          border-radius: 10px 0 0 10px;
        }
        td:last-Child{
          border-radius: 0 10px 10px 0;
        }
      }
    }
  }
  @media (max-width: 769px) {
    table {
      th{
        font-size: 12px;
        padding: 0 5px;
      }
      td {
        h4{
          font-size: 16px;
        }
      }
    }
  }
  @media (max-width: 450px) {
    table {
      th{
        font-size: 16px;
        padding: 0 5px;
      }
    }
  }
`

function Table() {

  const { tickers } = useContext(DataContext)

  return (
    <StyledTable>
      <table>
        <thead>
          <tr>
            <th>#</th>
            <th>Platform</th>
            <th>Last Trade Price</th>
            <th>Buy / Sell Price</th>
            <th>Difference</th>
            <th>Savings</th>
          </tr>
        </thead>
        <tbody>
          {
            tickers.map(({ _id, name, last, buy, sell, volume, base_unit }, idx) => {
              let difference = -2.3
              let savings = 140
              return (
                <tr key={_id}>
                  <td><h4>{idx + 1}</h4></td>
                  <td><h4 >{(name.split('/')[0] + name.split('/')[1]).toLowerCase()}</h4></td>
                  <td><h4>₹ {Number(last).toLocaleString()}</h4></td>
                  <td><h4>₹ {Number(buy).toLocaleString()} / ₹ {Number(sell).toLocaleString()}</h4></td>
                  <td><h4 style={{ color: `${difference < 0 ? "var(--red)" : "var(--blue)"}` }}>{difference} %</h4></td>
                  <td>
                    <h4 style={{ color: `${difference < 0 ? "var(--red)" : "var(--blue)"}` }}>
                      {difference < 0?<>▼</>:<>▲</>} ₹ {savings}
                    </h4>
                  </td>
                </tr>
                // <TableItem props={props} index={idx} key={idx}/>
              )
            })
          }
        </tbody>
      </table>
    </StyledTable>
  )
}

export default Table