const customerName = 'entry.1623023882';
const deliveryDay = 'entry.501096647';
const notes = 'entry.1874860549';
const orderForm = document.getElementById('orderForm');
const formContainer = document.getElementById('formContainer');

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
    // const productMod = (productList) => {
    //     console.log('hi');
    //     for (let i = 0; i < productList.length; i++) {
    //         return;
    //     }
    // };

    return (
        <div>
            <form action='https://docs.google.com/forms/d/e/1FAIpQLSccV-oSwwNOfBrBFPEFCZQPIBF6SlwzDp3m7_WeZnsNMBeAAg/formResponse'>
                <label htmlFor='name'>Your Name</label>
                <br />
                <input type='text' name={customerName} />
                <br />
                <label htmlFor='deliveryDay'>Delivery Day</label>
                <br />
                <input type='date' name={deliveryDay} />
                <br />
                {Object.keys(products).map((product, index) => (
                    <div key={index}>
                        <label htmlFor={products[product].productCode}>
                            {products[product].productName}
                        </label>
                        <br />
                        <input
                            type='text'
                            pattern='\d*'
                            name={products[product].productCode}
                        />
                        <br />
                    </div>
                ))}
                <label htmlFor='notes'>Additional Notes </label>
                <br />
                <input type='text' name={notes} />
                <br />
                <button type='submit'>Submit</button>
            </form>
        </div>
    );
};
