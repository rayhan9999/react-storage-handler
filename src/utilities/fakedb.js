//use local storage to manage data 

const adToDb = id => {

    let shoppingCart = {};

    const storedCart = localStorage.getItem('shopping-cart')

    //get the shopping cart from local storages

    if (storedCart) {
        console.log(typeof storedCart)
        shoppingCart = JSON.parse(storedCart);
    }

    // else {
    //     shoppingCart = {};

    // }


    //add quantity:
    const quantity = shoppingCart[id]
    if (quantity) {
        const newQuantity = quantity + 1;
        shoppingCart[id] = newQuantity;

    }

    //localStorage.setItem(id, newQuantity)

    else {
        shoppingCart[id] = 1;
        //localStorage.setItem(id, 1);
    }
    localStorage.setItem('shopping-cart', JSON.stringify(shoppingCart));


}



const removeFromDb = id => {
    const storedCart = localStorage.getItem('shopping-cart')
    if (storedCart) {
        const shoppingCart = JSON.parse(storedCart);
        if (id in shoppingCart) {
            delete shoppingCart[id];
            localStorage.setItem('shopping-cart', JSON.stringify(shoppingCart));

        }

    }

}
const deleteShoppingCart = () => {
    localStorage.removeItem('shopping-cart')
}
export { adToDb, removeFromDb, deleteShoppingCart }