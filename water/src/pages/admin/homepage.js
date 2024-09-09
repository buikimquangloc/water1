import Dashboard from "../../component/admin/dashboard/dashboard";
// import Link from '@mui/material/Link'; // Kiểm tra đường dẫn import Link chính xác
// import Router from '../../routes/route';
import Product from "../../component/admin/products/product";

export default function Admin() {
    return (
        <div>
            <Dashboard>
                <Product/>
                {/* <Link href="/products" sx={{ marginRight: '25px' }}>
                    Sản Phẩm
                </Link> */}
            </Dashboard>
        </div>
    );
}
