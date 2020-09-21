import {
  makeStyles,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  withStyles,
} from "@material-ui/core";
import React from "react";
import useIngredientsMeasure from "../../../Hook/useIngredientsMeasure";

const StyledTableCell = withStyles((theme) => ({
  head: {
    backgroundColor: theme.palette.warning.light,
    color: theme.palette.warning.contrastText,
  },
  body: {
    fontSize: 14,
  },
}))(TableCell);

const StyledTableRow = withStyles((theme) => ({
  root: {
    "&:nth-of-type(odd)": {
      backgroundColor: theme.palette.action.hover,
    },
  },
}))(TableRow);

// Style
const useStyles = makeStyles((theme) => ({
  table: {
    position: "absolute",
    height: "100%",
    width: "100%",
    top: 0,
    let: 0,
  },
  tableContainer: {
    position: "relative",
    width: "100%",
    height: 0,
    paddingTop: "56.25%",
    top: 0,
    let: 0,
  },
}));

const IngredientMeasureTable = ({ meal }) => {
  const classes = useStyles();
  const rows = useIngredientsMeasure(meal);

  return (
    <TableContainer component={Paper} className={classes.tableContainer}>
      <Table className={classes.table} size="small" aria-label="a dense table">
        <TableHead>
          <TableRow>
            <StyledTableCell align="right">Ingredients</StyledTableCell>
            <StyledTableCell align="left">Measurements</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map(
            (row, i) =>
              row.ingredient && (
                <StyledTableRow key={i}>
                  <StyledTableCell align="right">
                    {row.ingredient}
                  </StyledTableCell>
                  <StyledTableCell align="left">{row.measure}</StyledTableCell>
                </StyledTableRow>
              )
          )}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default IngredientMeasureTable;
