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
        <MaUTable {...getTableProps()} className="table">
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
                                <TableCell {...column.getHeaderProps()} className="th" style={{ textAlign: 'center' }}>
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
                        <TableRow {...row.getRowProps()} className="tr">
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
                                            <td className="MuiTableCell-root MuiTableCell-body td" role="cell" style={{ width: '40%', textAlign: 'center' }}>{cell.value}</td>
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
    // return (
    // <table {...getTableProps()} >
    //     <thead>
    //         {headerGroups.map(headerGroup => (
    //             <tr {...headerGroup.getHeaderGroupProps()}>
    //             {headerGroup.headers.map(column => (
    //                 <th
    //                 {...column.getHeaderProps()}

    //                 >
    //                 {column.render('Header')}
    //                 </th>
    //             ))}
    //             </tr>
    //         ))}
    //     </thead>
    //     <tbody {...getTableBodyProps()}>
    //         {rows.map(row => {
    //             prepareRow(row)
    //             return (
    //             <tr {...row.getRowProps()}>
    //                 {console.log(row.cells)} {/* row.cells -> cada row é em função dos accessors */}
    //                 {row.cells.map(cell => {
    //                     console.log(cell.column)
    //                     console.log(cell.column.id) /* cell.column.id -> traz o nome da coluna */
    //                 switch(cell.column.id){
    //                     case 'action':
    //                         return(
    //                             <td>
    //                                 <span>Editar </span>
    //                                 <span>Deletar</span>
    //                             </td>
    //                         );
    //                     case 'description':
    //                         return(
    //                             <td style={{width: '70%'}}>{cell.value}</td>
    //                         );
    //                 }
    //                 return (
    //                 <td
    //                     {...cell.getCellProps()}

    //                     >
    //                     {cell.render('Cell')}
    //                     </td>
    //                 );
    //                 })}
    //                 {/* <td>Novo</td>  -> inserir as ações*/}
    //             </tr>
    //             )
    //         })}
    //     </tbody>
    // </table>
    // )
}


export default Table;