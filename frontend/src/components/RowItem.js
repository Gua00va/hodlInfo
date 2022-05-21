import "./styles.css";
import 'react-circular-progressbar/dist/styles.css';
import React from 'react'

export const RowItem = (props) => {
    let {name, last, buy, sell, volume, base_unit, index} = props;
  return (
        <tr key={name}>
                <td className="align-middle"><h4 className="table-text">{index}</h4></td>
                <td className="align-middle">
                <h4 className="table-text"><span className="exchange-name">{name}</span></h4>
                </td><td className="align-middle"><h4 className="table-text">{last}</h4></td>
                <td className="align-middle"><h4 className="table-text"><span>₹ {buy} / ₹ {sell}</span></h4></td>
                <td className="align-middle"><h4 className="table-text">{volume}</h4></td>
                <td className="align-middle"><h4 className="table-text">{base_unit}</h4></td>
        </tr>

  )
}
