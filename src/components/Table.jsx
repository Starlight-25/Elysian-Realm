import React from "react";

function TableLine({items}) {
    return (
        <tr>
            {items.map(item => <th>{item}</th>)}
        </tr>
    );
}

function Table({head, items}) {
    return (
        <table>
            <thead>
            <TableLine items={head}/>
            </thead>
            <thead>
            {items.map(item => <TableLine items={item}/>)}
            </thead>
        </table>
    );
}

export default Table;