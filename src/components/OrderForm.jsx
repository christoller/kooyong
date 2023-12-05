import { useState } from 'react';
import {
    Button,
    Box,
    ButtonGroup,
    TextField,
    Card,
    Typography,
    CardMedia,
    CardContent,
    CardActions,
} from '@mui/material';
import '../OrderForm.css';

const customerName = 'entry.1623023882';
const deliveryDay = 'entry.501096647';
const notes = 'entry.1874860549';
function importAll(r) {
    let images = {};
    r.keys().map((item, index) => {
        images[item.replace('./', '')] = r(item);
    });
    return images;
}

const images = importAll(
    require.context('../images', false, /\.(png|jpe?g|svg)$/)
);

console.log(images);

let products = {
    bananaBread: {
        productName: 'Banana Bread',
        productCode: 'entry.1421270729',
        productImage: 'IMG_7716.jpg',
    },
    cookie: {
        productName: 'Salted Chocolate Chip Cookie',
        productCode: 'entry.374962814',
        productImage: 'no_image.jpg',
    },
    passionfruitPoppyseed: {
        productName: 'Passionfruit Poppyseed Cake',
        productCode: 'entry.194879030',
        productImage: 'IMG_7713.jpg',
    },
    carrotCake: {
        productName: 'Carrot Cake',
        productCode: 'entry.639809459',
        productImage: 'IMG_7583.jpg',
    },
    lemonBlueberry: {
        productName: 'Lemon Blueberry Cake',
        productCode: 'entry.134686276',
        productImage: 'no_image.jpg',
    },
    lemonTart: {
        productName: 'Lemon Tart',
        productCode: 'entry.1348942672',
        productImage: 'IMG_7714.jpg',
    },
    brownie: {
        productName: 'Chocolate Brownie',
        productCode: 'entry.868556964',
        productImage: 'no_image.jpg',
    },
    orangeCake: {
        productName: 'Orange Flourless Cake',
        productCode: 'entry.783553071',
        productImage: 'IMG_7474.jpg',
    },
    baconEgg: {
        productName: 'Bacon & Egg Pie',
        productCode: 'entry.1142617283',
        productImage: 'IMG_7677.jpg',
    },
    beefPie: {
        productName: 'Beef Pie',
        productCode: 'entry.128124',
        productImage: 'IMG_7547.jpg',
    },
    mushroomPie: {
        productName: 'Mushroom & Leek Pie',
        productCode: 'entry.304859206',
        productImage: 'no_image.jpg',
    },
    sausageRoll: {
        productName: 'Pork & Fennel Sausage Roll',
        productCode: 'entry.1566016836',
        productImage: 'no_image.jpg',
    },
    croissant: {
        productName: 'Croissant',
        productCode: 'entry.120012199',
        productImage: 'no_image.jpg',
    },
    almondCroissant: {
        productName: 'Almond Croissant',
        productCode: 'entry.1875802636',
        productImage: 'no_image.jpg',
    },
    danish: {
        productName: 'Fruit Danish',
        productCode: 'entry.1156254484',
        productImage: 'no_image.jpg',
    },
    cinnamonScroll: {
        productName: 'Cinnamon Scroll',
        productCode: 'entry.1452293651',
        productImage: 'no_image.jpg',
    },
    vegemiteScroll: {
        productName: 'Vegemite Scroll',
        productCode: 'entry.516476465',
        productImage: 'no_image.jpg',
    },
    babka: {
        productName: 'Babka (Fridays Only)',
        productCode: 'entry.759466499',
        productImage: 'no_image.jpg',
    },
};

export const OrderForm = () => {
    const getDefaultDate = (currentDate = new Date(), daysToAdd = 1) => {
        const nextDate = new Date(currentDate);
        nextDate.setDate(currentDate.getDate() + daysToAdd);
        return nextDate;
    };
    let date = getDefaultDate().toDateString();
    const [deliveryDate, setDeliveryDate] = useState(date);

    const handleUpClick = (e) => {
        let target = document.getElementById(e);
        parseInt(target.value++);
    };
    const handleDownClick = (e) => {
        let target = document.getElementById(e);
        if (target.value > 0) {
            parseInt(target.value--);
        } else {
            target.value = 0;
        }
    };

    return (
        <div>
            <form action='https://docs.google.com/forms/d/e/1FAIpQLSccV-oSwwNOfBrBFPEFCZQPIBF6SlwzDp3m7_WeZnsNMBeAAg/formResponse'>
                <Box
                    display='flex'
                    flexDirection='column'
                    justifyContent='center'
                    alignItems='center'>
                    <Card
                        sx={{
                            minWidth: 400,
                            mt: 1.5,
                        }}>
                        <CardContent>
                            <Typography
                                htmlFor={customerName}
                                placeholder='Your Name'>
                                Ordered By
                            </Typography>
                            <TextField
                                id='outlined-basic'
                                variant='outlined'
                                type='text'
                                name={customerName}
                            />
                        </CardContent>
                    </Card>
                    <Card sx={{ minWidth: 400, mt: 1.5 }}>
                        <CardContent>
                            <Typography htmlFor={deliveryDay}>
                                Delivery Day
                            </Typography>
                            <TextField
                                id='outlined-basic'
                                variant='outlined'
                                type='date'
                                onChange={(e) => {
                                    setDeliveryDate(e.target.value);
                                }}
                                name={deliveryDay}
                                value={deliveryDate}
                                required={true}
                            />
                        </CardContent>
                    </Card>
                    {Object.keys(products).map((product, index) => (
                        <Card sx={{ minWidth: 400, mt: 1.5 }}>
                            <CardContent
                                sx={{
                                    display: 'flex',
                                    justifyContent: 'center',
                                    flexDirection: 'column',
                                    alignItems: 'center',
                                }}>
                                <img
                                    src={images[products[product].productImage]}
                                    alt={images[products[product].productName]}
                                    width={100}
                                    height={100}
                                    style={{
                                        borderRadius: '50%',
                                        objectFit: 'cover',
                                    }}
                                />
                                <Typography
                                    htmlFor={products[product].productCode}>
                                    {products[product].productName}
                                </Typography>

                                <CardActions sx={{ justifyContent: 'center' }}>
                                    <ButtonGroup
                                        variant='outlined'
                                        aria-label='outlined button group'
                                        justifyContent='center'>
                                        <Button
                                            onClick={() => {
                                                handleDownClick(
                                                    products[product]
                                                        .productCode
                                                );
                                            }}>
                                            -
                                        </Button>
                                        <TextField
                                            id={products[product].productCode}
                                            variant='outlined'
                                            type='text'
                                            pattern='\d*'
                                            name={products[product].productCode}
                                            placeholder='0'
                                            InputProps={{
                                                inputProps: {
                                                    style: {
                                                        textAlign: 'center',
                                                    },
                                                },
                                            }}
                                        />
                                        <Button
                                            onClick={() => {
                                                handleUpClick(
                                                    products[product]
                                                        .productCode
                                                );
                                            }}>
                                            +
                                        </Button>
                                    </ButtonGroup>
                                </CardActions>
                            </CardContent>
                            {/* <div key={index}>
                            <label htmlFor={products[product].productCode}>
                                {products[product].productName}
                            </label>
                            <br />
                            <TextField
                                id='outlined-basic'
                                variant='outlined'
                                type='text'
                                pattern='\d*'
                                name={products[product].productCode}
                            />
                            <br />
                        </div> */}
                        </Card>
                    ))}
                    <Card sx={{ minWidth: 400, mt: 1.5 }}>
                        <CardContent>
                            <Typography htmlFor={notes}>
                                Additional Notes
                            </Typography>
                            <TextField
                                id='outlined-basic'
                                variant='outlined'
                                type='text'
                                name={notes}
                                multiline
                                minRows={3}
                            />
                        </CardContent>
                    </Card>
                    <Button type='submit' variant='contained'>
                        Submit
                    </Button>
                </Box>
            </form>
        </div>
    );
};
