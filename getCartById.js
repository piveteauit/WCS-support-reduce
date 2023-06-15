const carts = require('./carts.json');

const cart = {
    "id": 1,
    "user_id": 1,
    "products": [
        {
            "product_id": 1,
            "quantity": 2,
            "product_price": "109.95"
        },
        {
            "product_id": 1,
            "quantity": 2,
            "product_price": "109.95"
        }
    ]    
}

function getById(user_id) {
    const userCarts = carts.filter(c => c.user_id === user_id)

    return userCarts.reduce(
        
        function (acc, cur) {
            acc.user_id = acc.user_id || cur.user_id;            
            acc.id = acc.id || cur.id;
            acc.totalHT = acc.totalHT || 0;

            acc.totalHT += Number(cur.product_price);

            if (!acc.products) {
                acc.products = [];
            }

            const {product_id, quantity,product_price} = cur;
            acc.products.push({
                product_id, quantity,product_price
            })

            /* 
                  {
                    "id": 2,
                    "user_id": 1,
                    "product_id": 11,
                    "quantity": 1,
                    "product_price": "109.00"
                },
            */

            return acc;
        }
        
        , {});
}



console.log(getById(1))