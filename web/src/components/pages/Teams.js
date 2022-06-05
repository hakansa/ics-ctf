import React from "react";
import NavbarPostLog from "./NavbarPostLogin";
import "../../App.css";
import { makeStyles } from "@material-ui/core/styles";
import {
  Table,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  table: {
    minWidth: 650,
  },
  tableContainer: {
    borderRadius: 10,
    margin: "500px 600px",
    maxWidth: 750,
  },
  tableHeaderCell: {
    fontWeight: "bold",
    backgroundColor: "#EBE3E2",
    color: theme.palette.getContrastText(theme.palette.primary.dark),
  },
}));

const HeaderStyle = {
  width: "100%",
  height: "100vh",
  backgroundPosition: "center",
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
  backgroundColor: "#1f1e1e",
};


export default function TeamsPage() {
  const classes = useStyles();
  return (
    <header style={HeaderStyle}>
      <NavbarPostLog />
      <h2 style={{textAlign: "center", top: "20px"}}>Teams</h2>
      <TableContainer style={{bottom:"400px"}} component={Paper} className={classes.tableContainer}>
        <Table className={classes.table} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell className={classes.tableHeaderCell}>Team Name</TableCell>
              <TableCell className={classes.tableHeaderCell}>
                Team Members
              </TableCell>
              <TableCell className={classes.tableHeaderCell}>Score</TableCell>
            </TableRow>
          </TableHead>
          <TableRow>
            <TableCell>Team 1</TableCell>
            <TableCell>4</TableCell>
            <TableCell>500</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Team 2</TableCell>
            <TableCell>3</TableCell>
            <TableCell>150</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Team 3</TableCell>
            <TableCell>3</TableCell>
            <TableCell>200</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Team 4</TableCell>
            <TableCell>1</TableCell>
            <TableCell>50</TableCell>
          </TableRow>
        </Table>
      </TableContainer>
    </header>
  );
}
