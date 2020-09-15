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

// Table helper function
function createData(ingredient, measure) {
  return { ingredient, measure };
}

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

  // Ingredients and Measures
  const rows = [
    createData(meal.strIngredient1, meal.strMeasure1),
    createData(meal.strIngredient2, meal.strMeasure2),
    createData(meal.strIngredient3, meal.strMeasure3),
    createData(meal.strIngredient4, meal.strMeasure4),
    createData(meal.strIngredient5, meal.strMeasure5),
    createData(meal.strIngredient6, meal.strMeasure6),
    createData(meal.strIngredient7, meal.strMeasure7),
    createData(meal.strIngredient8, meal.strMeasure8),
    createData(meal.strIngredient9, meal.strMeasure9),
    createData(meal.strIngredient10, meal.strMeasure10),
    createData(meal.strIngredient11, meal.strMeasure11),
    createData(meal.strIngredient12, meal.strMeasure12),
    createData(meal.strIngredient13, meal.strMeasure13),
    createData(meal.strIngredient14, meal.strMeasure14),
    createData(meal.strIngredient15, meal.strMeasure15),
    createData(meal.strIngredient16, meal.strMeasure16),
    createData(meal.strIngredient17, meal.strMeasure17),
    createData(meal.strIngredient18, meal.strMeasure18),
    createData(meal.strIngredient19, meal.strMeasure19),
    createData(meal.strIngredient20, meal.strMeasure20),
  ];

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
