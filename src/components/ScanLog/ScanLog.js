import React from 'react';
import PropTypes from 'prop-types';
import MaterialTable from 'material-table';

const columns = [
  { title: 'Time', field: 'timestamp' },
  { title: 'Barcode', field: 'barcode' },
  { title: 'Quantity', field: 'quantity' },
  {
    title: 'Transaction Type',
    field: 'transactionType',
  },
];

const ScanLog = (props) => {
  return (
    <div>
      <MaterialTable
        title="Barcode Log"
        data={props.barcodeScans}
        columns={columns}
      />
    </div>
  );
};

ScanLog.propTypes = {
  barcodeScans: PropTypes.func.isRequired,
};

export default ScanLog;
