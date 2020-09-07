import React from 'react';
import PropTypes from 'prop-types';
import { useTable } from 'react-table';

const ItemsTable = (props) => {
  const columns = React.useMemo(
    () => [
      { Header: 'Product', accessor: 'product' },
      { Header: 'Quantity', accessor: 'quantity' },
      { Header: 'Barcode', accessor: 'barcode' },
    ],
    [],
  );

  const data = React.useMemo(() => [...props.items], [props.items]);

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

ItemsTable.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      product: PropTypes.string,
      quantity: PropTypes.number,
      barcode: PropTypes.string,
    }),
  ).isRequired,
};

export default ItemsTable;
