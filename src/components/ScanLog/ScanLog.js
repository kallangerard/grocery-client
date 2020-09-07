import React from 'react';
import PropTypes from 'prop-types';
import { useTable } from 'react-table';

const ScanLog = (props) => {
  const columns = React.useMemo(
    () => [
      {
        Header: 'Time',
        accessor: 'timestamp',
        Cell: (props) => {
          return props.value;
        },
      },
      { Header: 'Barcode', accessor: 'barcode' },
      { Header: 'Quantity', accessor: 'quantity' },
      {
        Header: 'Transaction Type',
        accessor: 'transactionType',
      },
    ],
    [],
  );

  const data = React.useMemo(() => [...props.barcodeScans], [
    props.barcodeScans,
  ]);

  const tableInstance = useTable({ columns, data });

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,
  } = tableInstance;

  return (
    <table {...getTableProps()}>
      <thead>
        {headerGroups.map((headerGroup) => (
          <tr {...headerGroup.getHeaderGroupProps()}>
            {headerGroup.headers.map((column) => (
              <th {...column.getHeaderProps()}>{column.render('Header')}</th>
            ))}
          </tr>
        ))}
      </thead>
      <tbody {...getTableBodyProps()}>
        {rows.map((row) => {
          prepareRow(row);
          return (
            <tr {...row.getRowProps()}>
              {row.cells.map((cell) => {
                return <td {...cell.getCellProps()}>{cell.render('Cell')}</td>;
              })}
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

ScanLog.propTypes = {
  barcodeScans: PropTypes.arrayOf(
    PropTypes.shape({
      barcode: PropTypes.string,
      quantity: PropTypes.number,
      transactionType: PropTypes.string,
      timestamp: PropTypes.number,
    }),
  ).isRequired,
};

export default ScanLog;
