import React, { Component } from 'react';
import './App.css';
import Navigation from '../Navigation';
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
        <header>
          <Navigation />
        </header>
        <div className="containers">
          <div className="container">
            <BarcodeScanner appendBarcode={this.appendBarcode} />
          </div>
          <div className="container">
            <ScanLog barcodeScans={this.state.barcodeScans} />
          </div>
          <div className="container">
            <ItemsTable items={this.state.items} />
          </div>
          <div className="container">
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Architecto natus nostrum distinctio molestiae hic ipsam id,
              eligendi obcaecati, assumenda ratione similique! Possimus
              provident suscipit odio, omnis libero nam voluptatem sint. Lorem
              ipsum dolor sit amet consectetur adipisicing elit. Aut, inventore?
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
