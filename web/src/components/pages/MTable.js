import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
  Table,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper
} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  table: {
    minWidth: 650,
  },
  tableContainer: {
    borderRadius: 10,
    margin: "50px 600px",
    maxWidth: 750,
  },
  tableHeaderCell: {
    fontWeight: "bold",
    backgroundColor: "#EBE3E2",
    color: theme.palette.getContrastText(theme.palette.primary.dark),
  },
}));

function MTable() {
  const classes = useStyles();


  return (
    <TableContainer component={Paper} className={classes.tableContainer}>
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell className={classes.tableHeaderCell}>Name</TableCell>
            <TableCell className={classes.tableHeaderCell}>Team Role</TableCell>
            <TableCell className={classes.tableHeaderCell}>
              Score
            </TableCell>
          </TableRow>
        </TableHead>
        <TableRow>
          <TableCell>as</TableCell>
          <TableCell>as</TableCell>
          <TableCell>as</TableCell>
        </TableRow>
        <TableRow>
          <TableCell>as</TableCell>
          <TableCell>as</TableCell>
          <TableCell>as</TableCell>
        </TableRow>
      </Table>
    </TableContainer>
  );
}

export default MTable;
