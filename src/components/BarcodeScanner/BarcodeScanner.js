import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './BarcodeScanner.css';

export default class BarcodeScanner extends Component {
  static propTypes = {
    appendBarcode: PropTypes.func.isRequired,
  };
  barcodeRef = React.createRef();
  consumeRef = React.createRef();
  quantityRef = React.createRef();

  componentDidMount() {
    // Focus back to the Barcode Input
    this.barcodeRef.current.focus();
  }

  submitBarcode = (event) => {
    event.preventDefault();
    const barcode = this.barcodeRef.current.value;
    const quantity = parseInt(this.quantityRef.current.value);
    const transactionType = this.consumeRef.current.checked
      ? 'consume'
      : 'purchase';
    const timestamp = Date.now();
    if (barcode === '') {
      return;
    }
    console.log(transactionType);
    const scan = {
      barcode,
      quantity,
      transactionType,
      timestamp,
    };
    this.barcodeRef.current.value = '';
    this.quantityRef.current.value = 1;
    // Focus back to the Barcode Input
    this.barcodeRef.current.focus();
    this.props.appendBarcode(scan);
  };

  render() {
    return (
      <form className="barcode-scanner" onSubmit={this.submitBarcode}>
        <label>Barcode</label>
        <input name="barcode" type="text" ref={this.barcodeRef} />
        <label>Quantity</label>
        <input
          name="quantity"
          type="number"
          className="quantity"
          min={1}
          defaultValue={1}
          ref={this.quantityRef}
        />
        <label>Consume</label>
        <input
          name="consume"
          type="checkbox"
          defaultChecked={true}
          ref={this.consumeRef}
        />
        <input type="submit" hidden />
      </form>
    );
  }
}
