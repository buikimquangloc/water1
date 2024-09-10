import React from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Typography } from '@mui/material';
import { styled } from '@mui/system';


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

const Customers = () => {
  return (
    <Paper elevation={3} style={{ padding: '16px', borderRadius: '8px' }}>
      <Typography variant="h5" gutterBottom>
        Danh sách khách hàng
      </Typography>
      <TableContainer>
        <Table>
          <TableHead>
            <TableRow>
              <StyledTableCell>Tên khách hàng</StyledTableCell>
              <StyledTableCell>Địa chỉ</StyledTableCell>
              <StyledTableCell>Số điện thoại</StyledTableCell>
              <StyledTableCell>Email</StyledTableCell>
              <StyledTableCell>Đơn hàng</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            <TableRow>
              <StyledTableCell>
                <div style={{ display: 'flex', alignItems: 'center' }}>
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

export default Customers;
