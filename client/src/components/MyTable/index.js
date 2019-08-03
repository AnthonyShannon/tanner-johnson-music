import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';


const useStyles = makeStyles(theme => ({
  root: {
    width: '100%',
    marginTop: theme.spacing(3),
    overflowX: 'auto',
  },
  table: {
    minWidth: 650,
  },
}));


export default function MyTable(props) {
  const classes = useStyles();
  let cellNum = 0
  let rowNum = 0

  return (
    <Paper className={classes.root}>
      <Table className={classes.table}>
        <TableHead>
          <TableRow>
            {props.headers.map(header => (
              <TableCell key={header}>{header}</TableCell>
            )
            )}
          </TableRow>
        </TableHead>
        <TableBody>
          {props.rows.map(array => {
          rowNum++
            return <TableRow key={rowNum}>
              {array.map((rowItem, index) => {
                cellNum++
                return <TableCell key={cellNum}>{rowItem}</TableCell>
              })
              }
            </TableRow>
          }
          )}
        </TableBody>
      </Table>
    </Paper>
  );
}