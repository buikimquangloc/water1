import React from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Typography } from '@mui/material';
import { styled } from '@mui/system';
import ProductOne from '../../../asset/product/sinh-to-bo.jpg';
import ProductTwo from '../../../asset/product/tra-chanh-day.jpg';
import ProductThree from '../../../asset/product/tra-dao-cam-sa.jpg';
import ProductFour from '../../../asset/product/nuoc-ep-xoai.jpg';

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [theme.breakpoints.down('sm')]: {
    fontSize: '0.75rem',
  },
  [theme.breakpoints.up('md')]: {
    fontSize: '0.875rem',
  },
  borderRight: `1px solid ${theme.palette.divider}`, // Thêm đường ngăn cách giữa các cột
  '&:last-child': {
    borderRight: 'none', // Không có đường ngăn cách ở cột cuối cùng
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(even)': {
    backgroundColor: theme.palette.action.hover,
  },
}));

const TableTwo = () => {
  return (
    <Paper elevation={3} style={{ padding: '16px', borderRadius: '8px' }}>
      <Typography variant="h6" gutterBottom>
        Sản Phẩm
      </Typography>
      <TableContainer>
        <Table>
          <TableHead>
            <TableRow>
              <StyledTableCell>Tên Sản Phẩm</StyledTableCell>
              <StyledTableCell>Category</StyledTableCell>
              <StyledTableCell>Giá</StyledTableCell>
              <StyledTableCell>Số lượng</StyledTableCell>
              <StyledTableCell>Lợi nhuận</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            <TableRow>
              <StyledTableCell>
                <div style={{ display: 'flex', alignItems: 'center' }}>
                  <img src={ProductOne} alt="Sinh Tố Bơ" style={{ width: '64px', height: '64px', objectFit: 'cover', borderRadius: '4px' }} />
                  <Typography variant="body2" style={{ marginLeft: '16px' }}>Sinh Tố Bơ</Typography>
                </div>
              </StyledTableCell>
              <StyledTableCell>Electronics</StyledTableCell>
              <StyledTableCell>25000</StyledTableCell>
              <StyledTableCell>12</StyledTableCell>
              <StyledTableCell>7000</StyledTableCell>
            </TableRow>
            <TableRow>
              <StyledTableCell>
                <div style={{ display: 'flex', alignItems: 'center' }}>
                  <img src={ProductTwo} alt="Trà Chanh Dây" style={{ width: '64px', height: '64px', objectFit: 'cover', borderRadius: '4px' }} />
                  <Typography variant="body2" style={{ marginLeft: '16px' }}>Trà Chanh Dây</Typography>
                </div>
              </StyledTableCell>
              <StyledTableCell>Electronics</StyledTableCell>
              <StyledTableCell>23000</StyledTableCell>
              <StyledTableCell>2</StyledTableCell>
              <StyledTableCell>5000</StyledTableCell>
            </TableRow>
            <TableRow>
              <StyledTableCell>
                <div style={{ display: 'flex', alignItems: 'center' }}>
                  <img src={ProductThree} alt="Trà Đào Cam Sả" style={{ width: '64px', height: '64px', objectFit: 'cover', borderRadius: '4px' }} />
                  <Typography variant="body2" style={{ marginLeft: '16px' }}>Trà Đào Cam Sả</Typography>
                </div>
              </StyledTableCell>
              <StyledTableCell>Electronics</StyledTableCell>
              <StyledTableCell>21000</StyledTableCell>
              <StyledTableCell>5</StyledTableCell>
              <StyledTableCell>4000</StyledTableCell>
            </TableRow>
            <TableRow>
              <StyledTableCell>
                <div style={{ display: 'flex', alignItems: 'center' }}>
                  <img src={ProductFour} alt="Nước Ép Xoài" style={{ width: '64px', height: '64px', objectFit: 'cover', borderRadius: '4px' }} />
                  <Typography variant="body2" style={{ marginLeft: '16px' }}>Nước Ép Xoài</Typography>
                </div>
              </StyledTableCell>
              <StyledTableCell>Electronics</StyledTableCell>
              <StyledTableCell>24000</StyledTableCell>
              <StyledTableCell>2</StyledTableCell>
              <StyledTableCell>5400</StyledTableCell>
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>
    </Paper>
  );
};

export default TableTwo;
