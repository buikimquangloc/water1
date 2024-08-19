import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, Divider } from '@mui/material';
import sodabh from '../../../asset/image/soda_bacha.png'

export default function ActionAreaCard() {
    return (
        <Card sx={{ maxWidth: 300,  maxHeight: 600,}}>
            <CardActionArea>
                <CardMedia
                    component="img"
                    // height="100%"
                    // width="100%"
                    alt="soda_bac_ha"
                    src={sodabh}
                />
                <Divider />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div" sx={{ textAlign: 'center' }}>
                        Soda bạc hà
                    </Typography>
                    <Typography variant="body2" color="text.secondary" sx={{ textAlign: 'center' }}>
                        Xem thêm chi tiết
                    </Typography>
                    <Button sx={{
                        width: '100%',
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                    }}>
                        Mua Nước
                    </Button>
                </CardContent>
            </CardActionArea>
        </Card>
    );
}