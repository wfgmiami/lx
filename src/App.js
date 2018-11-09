import React, { Component } from 'react';
import 'App.css';
import rowData from "rowData";
import Nav from "Nav";
import columnDefs from "columnDefs";
//  AgGrid
import { AgGridReact } from 'ag-grid-react';
import "ag-grid-enterprise";
import 'ag-grid/dist/styles/ag-grid.css';
import 'ag-grid/dist/styles/ag-theme-balham.css';
//  AgGrid license
import { LicenseManager } from "ag-grid-enterprise";

LicenseManager.setLicenseKey("Evaluation_License_Valid_Until__25_August_2018__MTUzNTE1MTYwMDAwMA==53aedc27a9df43c4e4bd6c97d9e6f413");

const cols = Array.from(document.getElementsByClassName("ag-header-cell-label"))

class App extends Component {
  constructor(props){
    super(props);
    this.state= {
      rowData: rowData,
      columnDefs: this.createColumns(columnDefs),
    }
    
  }
  componentDidUpdate() {
    
  }
  componentDidMount = () => {

    const textColumns = ["Ticker", "Description","Curr", "Name"];
    const symbolColumns = ["RtgX", "Rating"];
    let cols = Array.from(document.getElementsByClassName("ag-header-cell-label"))
    
    cols.forEach( col => {
      // console.log('trim ', col.textContent.trim())
      if(textColumns.includes(col.textContent.trim())) {
        col.setAttribute("col-id", "text")
      } else if( symbolColumns.includes(col.textContent.trim())) {
        col.setAttribute("col-id", "symbol")
      }
    })

  }

  createColumns = (columnDefs, params) => {
   
    let columns = columnDefs.map( col => {
      let colObj = {};
      let children = [];
      let cellStyle = null;
      let assignStyle = {};
      const coloredNum = ["consensusMisvaluation", "userMisvaluation", "valExp"];
      const coloredSymbol = ["rating", "ratingConflict"];
 
      colObj = Object.assign(colObj, col);
 
      if(col.formatName){
        // console.log('col format name ', col)
        colObj = Object.assign(colObj, {valueFormatter: this.getFormatter(col.formatName)})
      }
    
      if(col.children){
        col.children.forEach( child => {
       
          assignStyle = {};
          if( !coloredSymbol.includes(child.field) ){
            cellStyle = (child.formatName === "number2" || child.formatName === "percent0") ? {textAlign: "right"} :  {textAlign: "left"};
            assignStyle = {cellStyle: cellStyle}
          } 

          if(coloredNum.includes(child.field)){
            cellStyle = (params) =>  {
              if(params.value < 0)
                return {color: "red", textAlign: "right"}
              else if(params.value > 0)
                return {color: "green", textAlign: "right"} 
              else
                return { textAlign: "right"} 
            }
            assignStyle = {cellStyle: cellStyle}
          }
          
          children.push(Object.assign(child, {valueFormatter:this.getFormatter(child.formatName)}, assignStyle))
        
        })
        col.children = children;
        colObj = Object.assign(colObj, col)
      }
      return colObj;
    })

    console.log('colObj ', columns)
    return columns;
  }

  onGridReady(params){

    this.gridApi = params.api;
    this.gridColumnApi = params.columnApi;
    this.gridColumnApi.autoSizeColumns(this.gridColumnApi.getAllColumns());
    this.gridApi.sizeColumnsToFit(); 

    const textColumns = ["Ticker", "Description","Curr", "Name"];
    const symbolColumns = ["RtgX", "Rating"];
    let cols = Array.from(document.getElementsByClassName("ag-header-cell-label"))
    
    cols.forEach( col => {
      // console.log('trim ', col.textContent.trim())
      if(textColumns.includes(col.textContent.trim())) {
        col.setAttribute("col-id", "text")
      } else if( symbolColumns.includes(col.textContent.trim())) {
        col.setAttribute("col-id", "symbol")
      }
    })
  }

  getFormatter = (formatName) => {
    // console.log('formatter ', formatName)
    switch (formatName) {
        case 'number':
          return formatNumber(0, true);
        case 'number2':
          return formatNumber(2, false);
        case 'percent':
          return formatPercent();
        case 'percent0':
          return formatPercent(0);
        case 'currency0':
          return formatCurrency(0, true);
        case 'currency':
          return formatCurrency();
        case 'date':
            return formatDate;
        case 'changeValue':
          return changeValue;
        default:
          return undefined;
    }
  }
  

  render() {

    return (
      <div style={{ width: "100%", height: "100%" }}>
      <Nav/>
      <div
        id="myGrid"
        style={{
          boxSizing: "border-box",
          height: "100%",
          width: "100%"
        }}
        className="ag-theme-balham"
      >
        <AgGridReact
         ref={c => (this._input = c)}
          columnDefs={this.state.columnDefs}
          enableColResize={true}
          defaultColDef={this.state.defaultColDef}
          // groupHeaderHeight={this.state.groupHeaderHeight}
          // headerHeight={this.state.headerHeight}
          // floatingFiltersHeight={this.state.floatingFiltersHeight}
          // pivotGroupHeaderHeight={this.state.pivotGroupHeaderHeight}
          // pivotHeaderHeight={this.state.pivotHeaderHeight}
 
          enableSorting={true}
          onGridReady={this.onGridReady.bind(this)}
          rowData={this.state.rowData}
        />
      </div>
    </div>
    );
  }
}

function changeValue(params) {
  let value = params.value;
  const field = params.colDef.field;
  if(value === 0 && field === "ratingConflict") value = 0;
  if(value === 1 && field === "ratingConflict") value = 1;
  if(value === 2 && field === "ratingConflict") value = 2;

  switch(value){
    case 0:
      return '';
    case 1:
      return 'x';
    case 2:
      return 'xx';
    case "BUY":
      return "O";
    case "STRONG_BUY":
      return "OO";
    case "SELL":
      return "U";
    case "STRONG_SELL":
      return "UU";
    case "HOLD":
      return "N";
    case "NOT_RATED":
      return "NR";
    default:
      return value;
  }

}

function formatCurrency(decimalDigits = 2, commas = false) {
  var decimalLimit = decimalDigits;
  var addCommas = commas;

  return (params) => {
      var value = formatNumber(decimalLimit, addCommas)(params);
      return value === undefined ? undefined : ('$' + value);
  }
}

function formatPercent(decimalDigits = 2, commas = false) {
  var decimalLimit = decimalDigits;
  var addCommas = commas;

  return (params) => {
      var value = formatNumber(decimalLimit, addCommas)(params);
      return value === "N/A" ? value : (value + '%');
  }
}

function formatNumber(decimalDigits = 2, commas = false) {
  var decimalLimit = decimalDigits;
  var addCommas = commas;
  return params => {
      var value = +params.value;
      // console.log('params............', params)
      if (!value) {
        switch(params.colDef.field){
          case "benchmarkWeight":
            return Number(0).toFixed(decimalLimit);
          case "consensusModelPrice":
          case "consensusMisvaluation":
          case "userModelPrice":
          case "userMisvaluation":
            return 'N/A'
          default:
            return undefined;
        }

      }
      var rounded = Math.round((Number(value)) * Math.pow(10, decimalLimit)) / Math.pow(10, decimalLimit);

      if (addCommas)
          return rounded.toLocaleString(undefined, { 'minimumFractionDigits': decimalLimit, 'maximumFractionDigits': decimalLimit })
      else
          return rounded.toFixed(decimalLimit);
  }
}

function formatDate(params) {
  var value = +params.value;

  if (!value || value === 'N/A' || value === 'n/a') {
      return undefined;
  }

  var date = new Date(value);
  return date.getFullYear() + '-' + ('0' + (date.getMonth()+1)).slice(-2) + '-' + ('0' + date.getDate()).slice(-2);
}

export default App;
