import styled from "styled-components"

const StyledTableItem = styled.tr`
    
`

function TableItem({ name, last, buy , sell, volume, base_unit, index}) {
  return (
    <StyledTableItem>
      <tr>
        <td><h4>{index + 1}</h4></td>
        <td><h4 >{(name.split('/')[0] + name.split('/')[1]).toLowerCase()}</h4></td>
        <td><h4>₹ {last}</h4></td>
        <td><h4>₹ {buy} / ₹ {sell}</h4></td>
        <td><h4>₹ {-2.3} %</h4></td>
        <td><h4>₹ {140}</h4></td>
      </tr>
    </StyledTableItem>
  )
}

export default TableItem