// use local storage to manage cart data
const addToDb = id => {
    let appliedJobs = getShoppingCart();
    // add quantity
    const quantity = appliedJobs[id];
    if (!quantity) {
        appliedJobs[id] = 1;
    }
    /* else {
        const newQuantity = quantity + 1;
        shoppingCart[id] = newQuantity;
    } */
    localStorage.setItem('applied-jobs', JSON.stringify(appliedJobs));
}

const removeFromDb = id => {
    const appliedJobs = getShoppingCart();
    if (id in appliedJobs) {
        delete appliedJobs[id];
        localStorage.setItem('applied-jobs', JSON.stringify(appliedJobs));
    }
}

const getShoppingCart = () => {
    let shoppingCart = {};

    //get the shopping cart from local storage
    const storedCart = localStorage.getItem('applied-jobs');
    if (storedCart) {
        shoppingCart = JSON.parse(storedCart);
    }
    return shoppingCart;
}

const deleteShoppingCart = () => {
    localStorage.removeItem('applied-jobs');
}

export {
    addToDb,
    removeFromDb,
    getShoppingCart,
    deleteShoppingCart
}
