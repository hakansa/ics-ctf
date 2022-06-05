import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  ResponsiveContainer,
} from "recharts";
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
    margin: "50px 600px",
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

const data = [
  {
    name: "Team 1",
    uv: 500,
  },
  {
    name: "Team 2",
    uv: 150,
  },
  {
    name: "Team 3",
    uv: 200,
  },
  {
    name: "Team 4",
    uv: 50,
  },
];

export default function ScoreboardPage() {

  const classes = useStyles();
  return (
    <header style={HeaderStyle}>
      <NavbarPostLog />
      <h2 style={{textAlign: "center", top: "20px"}}>Scoreboard</h2>
      <ResponsiveContainer height = "80%" width="100%" aspect={6} left="200px">
        <BarChart style={{width: "80%", left: "190px"}}
          width={100}
          height={300}
          data={data}
          margin={{
            top: 50,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="0 0" />
          <XAxis dataKey="name" stroke="white" />
          <YAxis stroke="white" />
          <Bar dataKey="pv" fill="#8884d8" />
          <Bar dataKey="uv" fill="#82ca9d" />
        </BarChart>
      </ResponsiveContainer>
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
