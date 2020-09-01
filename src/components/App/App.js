import React, { Component } from 'react';
import './App.css';
import ItemsTable from '../ItemsTable';
import ScanLog from '../ScanLog';
import BarcodeScanner from '../BarcodeScanner';

export class App extends Component {
  state = {
    items: [
      { product: 'banana', quantity: 1, barcode: '1571982372' },
      { product: 'rice', quantity: 6, barcode: '5137489123' },
      { product: 'flour', quantity: 4, barcode: '667230423' },
      { product: 'milk', quantity: 2, barcode: '0931823912' },
    ],
    barcodeScans: [],
  };

  appendBarcode = (scan) => {
    this.setState({ barcodeScans: [...this.state.barcodeScans, scan] });
  };

  render() {
    return (
      <div className="app">
        <div className="containers">
          <BarcodeScanner appendBarcode={this.appendBarcode} />
          <ScanLog barcodeScans={this.state.barcodeScans} />
          <ItemsTable items={this.state.items} />
        </div>
      </div>
    );
  }
}

export default App;
