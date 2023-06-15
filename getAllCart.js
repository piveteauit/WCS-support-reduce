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

function getAll() {

    return carts.reduce(
        
        function(acc, cur) {
            
            console.log(acc, cur)

            const {id, user_id, ...product} = cur;
            const currentCart = acc.find(c => c.user_id === cur.user_id);
            if (!currentCart) {
                
                acc.push({
                    id,
                    user_id,
                    totalPrice: Number(cur.product_price) * cur.quantity,
                    products: [product]
                })
            } else {
                currentCart.products.push(product)
                currentCart.totalPrice += Number(cur.product_price) * cur.quantity;
            }

            return acc;
        }

        , []);

        // function (acc, cur) {
        //     acc.user_id = acc.user_id || cur.user_id;            
        //     acc.id = acc.id || cur.id;
        //     acc.totalHT = acc.totalHT || 0;

        //     acc.totalHT += Number(cur.product_price);

        //     if (!acc.products) {
        //         acc.products = [];
        //     }

        //     const {product_id, quantity,product_price} = cur;
        //     acc.products.push({
        //         product_id, quantity,product_price
        //     })

        //     /* 
        //           {
        //             "id": 2,
        //             "user_id": 1,
        //             "product_id": 11,
        //             "quantity": 1,
        //             "product_price": "109.00"
        //         },
        //     */

        //     return acc;
        // }
        
}



console.log(
    getAll(),
    '--------------',
    getAll()[0].products
)