import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class BarcodeScanner extends Component {
  static propTypes = {
    appendBarcode: PropTypes.func.isRequired,
  };
  barcodeRef = React.createRef();
  consumeRef = React.createRef();
  quantityRef = React.createRef();

  submitBarcode = (event) => {
    event.preventDefault();
    const barcode = this.barcodeRef.current.value;
    const quantity = this.quantityRef.current.value;
    const transactionType = this.consumeRef.current.checked
      ? 'consume'
      : 'purchase';
    if (barcode === '') {
      return;
    }
    console.log(transactionType);
    const scan = {
      barcode,
      quantity,
      transactionType,
      timestamp: Date.now(),
    };
    this.barcodeRef.current.value = '';
    this.quantityRef.current.value = 1;
    this.props.appendBarcode(scan);
  };

  render() {
    return (
      <div>
        <form className="barcode-scanner" onSubmit={this.submitBarcode}>
          <label>
            Barcode
            <input name="barcode" type="text" ref={this.barcodeRef} />
          </label>
          <label>
            Quantity
            <input
              name="quantity"
              type="number"
              min={1}
              value={1}
              ref={this.quantityRef}
            />
          </label>
          <label>
            Consume
            <input
              name="consume"
              type="checkbox"
              defaultChecked={true}
              ref={this.consumeRef}
            />
          </label>
          <input type="submit" hidden />
        </form>
      </div>
    );
  }
}
