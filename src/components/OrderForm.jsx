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
import { InputNumber } from 'rsuite';

const customerName = 'entry.1623023882';
const deliveryDay = 'entry.501096647';
const notes = 'entry.1874860549';

let products = {
    bananaBread: {
        productName: 'Banana Bread',
        productCode: 'entry.1421270729',
    },
    cookie: {
        productName: 'Salted Chocolate Chip Cookie',
        productCode: 'entry.374962814',
    },
    passionfruitPoppyseed: {
        productName: 'Passionfruit Poppyseed Cake',
        productCode: 'entry.194879030',
    },
    carrotCake: {
        productName: 'Carrot Cake',
        productCode: 'entry.639809459',
    },
    lemonBlueberry: {
        productName: 'Lemon Blueberry Cake',
        productCode: 'entry.134686276',
    },
    lemonTart: {
        productName: 'Lemon Tart',
        productCode: 'entry.1348942672',
    },
    brownie: {
        productName: 'Chocolate Brownie',
        productCode: 'entry.868556964',
    },
    orangeCake: {
        productName: 'Orange Flourless Cake',
        productCode: 'entry.783553071',
    },
    baconEgg: {
        productName: 'Bacon & Egg Pie',
        productCode: 'entry.1142617283',
    },
    beefPie: {
        productName: 'Beef Pie',
        productCode: 'entry.128124',
    },
    mushroomPie: {
        productName: 'Mushroom & Leek Pie',
        productCode: 'entry.304859206',
    },
    sausageRoll: {
        productName: 'Pork & Fennel Sausage Roll',
        productCode: 'entry.1566016836',
    },
    croissant: {
        productName: 'Croissant',
        productCode: 'entry.120012199',
    },
    almondCroissant: {
        productName: 'Almond Croissant',
        productCode: 'entry.1875802636',
    },
    danish: {
        productName: 'Fruit Danish',
        productCode: 'entry.1156254484',
    },
    cinnamonScroll: {
        productName: 'Cinnamon Scroll',
        productCode: 'entry.1452293651',
    },
    vegemiteScroll: {
        productName: 'Vegemite Scroll',
        productCode: 'entry.516476465',
    },
    babka: {
        productName: 'Babka (Fridays Only)',
        productCode: 'entry.759466499',
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
                    <label htmlFor={customerName} placeholder='Your Name'>
                        Ordered By
                    </label>
                    <br />
                    <TextField
                        id='outlined-basic'
                        variant='outlined'
                        type='text'
                        name={customerName}
                    />
                    <br />
                    <label htmlFor={deliveryDay}>Delivery Day</label>
                    <br />
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
                    <br />
                    {Object.keys(products).map((product, index) => (
                        <Card sx={{ minWidth: 275 }}>
                            <CardContent>
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
                    <label htmlFor={notes}>Additional Notes </label>
                    <br />
                    <TextField
                        id='outlined-basic'
                        variant='outlined'
                        type='text'
                        name={notes}
                    />
                    <br />
                    <Button type='submit' variant='contained'>
                        Submit
                    </Button>
                </Box>
            </form>
        </div>
    );
};
