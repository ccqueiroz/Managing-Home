import React, { useMemo } from "react";
import { useTable } from 'react-table';
import './style.css';

import MaUTable from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';

import { FiEdit, FiTrash } from "react-icons/fi";



const Table = ({ dataProps, columnsProps, actions }) => {
    const data = React.useMemo(() => dataProps, [dataProps]);

    const columns = React.useMemo(() => columnsProps, []);

    const {
        getTableProps,
        // getTableBodyProps,
        headerGroups,
        rows,
        prepareRow,
    } = useTable({ columns, data })

    return (
        <MaUTable {...getTableProps()} className="table" role="table">
            <TableHead>
                {headerGroups.map((headerGroup) => (
                    <TableRow {...headerGroup.getHeaderGroupProps()}>
                        {headerGroup.headers.map(column => {
                            switch (column.id) {
                                case 'description':
                                    return (
                                        <th className="MuiTableCell-root MuiTableCell-head th" role="columnheader" scope="col" colSpan="1" style={{ width: '40%', textAlign: 'center' }}>{column.Header}</th>
                                    );
                            }
                            return (
                                <TableCell {...column.getHeaderProps()} className="th" style={{ textAlign: 'center' }} role="row">
                                    {column.render('Header')}
                                </TableCell>
                            )
                        })}
                    </TableRow>
                ))}
            </TableHead>
            <TableBody>
                {rows.map((row, i) => {
                    prepareRow(row)
                    return (
                        <TableRow {...row.getRowProps()} className="tr" role="rowgroup">
                            {row.cells.map((cell, index) => {
                                switch (cell.column.id) {
                                    case 'action':
                                        // console.log(row)
                                        // console.log(row.id)
                                        return (
                                            <td className="actions MuiTableCell-root MuiTableCell-body td" role="cell">
                                                <div className='itemsActions'>
                                                    {
                                                        !actions.edit ? ("") : (
                                                            <FiEdit size="1.1rem" className="FiEdit" onClick={() => actions?.edit(row?.original)} />
                                                        )
                                                    }
                                                    {
                                                        !actions.trash ? ("") : (
                                                            <FiTrash size="1.1rem" className="FiTrash" onClick={() => actions?.trash(row?.original)} />
                                                        )
                                                    }
                                                </div>
                                            </td>
                                        );
                                    case 'description':
                                        return (
                                            <td className="MuiTableCell-root MuiTableCell-body td" role="cell" style={{ width: '40%', textAlign: 'center' }} role="cell">{cell.value}</td>
                                        );
                                }
                                return (
                                    <TableCell {...cell.getCellProps()} key={index} className="td" style={{ textAlign: 'center' }}>
                                        {cell.render('Cell')}
                                    </TableCell>
                                )
                            })}
                        </TableRow>
                    );
                })}
            </TableBody>
        </MaUTable>
    );

}


export default Table;