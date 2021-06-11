import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Expencedialog from './Expencedialog/Expencedialog';
import Expenceaction from './Expenceaction/Expenceaction';
import { Button } from '@material-ui/core';
import AddExpence from './AddExpence';

const TAX_RATE = 0.07;

const useStyles = makeStyles({
    root:{
        fontFamily: 'poppins',
        color: '#102a51',
    },
  table: {
    minWidth: 500,
  },
});

function ccyFormat(num) {
  return `${num.toFixed(2)}`;
}

function priceRow(unitprice, unit) {
  return unitprice * unit;
}

function createRow(recever,discription,date, unitprice, unit) {
  const price = priceRow(unitprice, unit);
  return { recever,discription,date, unitprice, unit, price };
}

function subtotal(items) {
  return items.map(({ price }) => price).reduce((sum, i) => sum + i, 0);
}

const rows = [
  createRow('Jhone', 'poroject-1', '12/45/2021',180,4),
  createRow('Smith', 'poroject-2', '12/45/2021',500,5),
  createRow('angela','poroject-3', '12/45/2021',800,4),
];

const invoiceSubtotal = subtotal(rows);
const invoiceTaxes = TAX_RATE * invoiceSubtotal;
const invoiceTotal = invoiceTaxes + invoiceSubtotal;




export default function Expencetable() {
  const classes = useStyles();

 

  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="spanning table">
        <TableHead>
          <TableRow>
            <TableCell align="left" colSpan={3}>
             <button type='button' className='btn btn-primary'>Details</button> 
            </TableCell>
            <TableCell align="left" colSpan={3}>
            <button type='button' className='btn btn-primary'>Details</button> 
            </TableCell>
            <TableCell align="left" colSpan={3}><button type='button' className='btn btn-primary'>Price</button></TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Receiver</TableCell>
            <TableCell align="left">Discription</TableCell>
            <TableCell align="left">Date</TableCell>
            <TableCell align="right">Amount</TableCell>
            <TableCell align="right">Unit</TableCell>
            <TableCell align="right">Overall</TableCell>
            <TableCell align="right">Document</TableCell>
            <TableCell align="right">Edit</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.recever}>
              <TableCell>{row.recever}</TableCell>
              <TableCell>{row.discription}</TableCell>
              <TableCell>{row.date}</TableCell>
              <TableCell align="right">{row.unitprice}</TableCell>
              <TableCell align="right">{row.unit}</TableCell>
              <TableCell align="right">{ccyFormat(row.price)}</TableCell>
              <TableCell align="right">{<Expenceaction />}</TableCell>
              <TableCell align="right">{<Expencedialog />}</TableCell>
            </TableRow>
          ))}

          <TableRow>
            <TableCell rowSpan={3} />
            <TableCell colSpan={2}>Subtotal</TableCell>
            <TableCell align="right">{ccyFormat(invoiceSubtotal)}</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Tax</TableCell>
            <TableCell align="right">{`${(TAX_RATE * 100).toFixed(0)} %`}</TableCell>
            <TableCell align="right">{ccyFormat(invoiceTaxes)}</TableCell>
            <TableCell rowSpan={3} /> <TableCell rowSpan={3} /><TableCell rowSpan={3} align="center" >  <AddExpence  /> </TableCell>
          </TableRow>
          <TableRow>
            <TableCell colSpan={2}>Total</TableCell>
            <TableCell align="right">{ccyFormat(invoiceTotal)}</TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </TableContainer>
  );
}