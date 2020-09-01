import React from 'react';
import PropTypes from 'prop-types';
import MaterialTable from 'material-table';

const columns = [
  { title: 'Product', field: 'product' },
  { title: 'Quantity', field: 'quantity' },
  { title: 'Barcode', field: 'barcode' },
];

const ItemsTable = (props) => {
  return (
    <MaterialTable
      title="Items"
      data={props.items}
      columns={columns}
      options={{
        selection: true,
      }}
    ></MaterialTable>
  );
};

ItemsTable.propTypes = {
  items: PropTypes.objectOf(
    PropTypes.shape({
      product: PropTypes.string,
      quantity: PropTypes.number,
      barcode: PropTypes.string,
    }),
  ).isRequired,
};

export default ItemsTable;
