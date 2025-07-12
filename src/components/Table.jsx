import React from "react";
import "../styles/Tables.css";

function TableLine({items}) {
    return (
        <tr>
            {items.map((item, i) => <th className={`col${i}`}>{item}</th>)}
        </tr>
    );
}

function Table({head, items}) {
    return (
        <table>
            <thead>
            <TableLine items={head}/>
            </thead>
            <tbody>
            {items.map(item => <TableLine items={item}/>)}
            </tbody>
        </table>
    );
}

export default Table;