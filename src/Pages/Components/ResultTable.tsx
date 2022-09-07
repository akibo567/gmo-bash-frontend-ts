import * as React from 'react';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Typography } from '@mui/material';

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  '&:last-child td, &:last-child th': {
    border: 0,
  },
}));

function createData(
  name: string,
  cost: string,
) {
  return { name, cost };
}

const rows = [
  createData('刻み生姜', "159"),
  createData('ごま塩', "237"),
  createData('にんじん', "262"),
  createData('さくらんぼ', "305"),
  createData('しいたけ', "356"),
  createData('ごぼう', "305"),
  createData('れんこん', "305"),
  createData('ふき', "305"),
];

export default function ResultTable(materialList: string[]) {
  return (
    <>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 700, marginTop: 10}} aria-label="customized table">
          <TableHead>
            <TableRow>
              <StyledTableCell align='center'>食材一覧</StyledTableCell>
              <StyledTableCell align="center">金額(目安)</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <StyledTableRow key={row.name}>
                <StyledTableCell component="th" scope="row" align='center'>{row.name}</StyledTableCell>
                <StyledTableCell align="center">{row.cost}</StyledTableCell>
              </StyledTableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <Typography
        fontSize={32}
        sx={{marginTop: 4}}>
        合計金額  10万円
      </Typography>
    </>
  );
}