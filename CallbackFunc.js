const createObj = (itemName, itemPrice) => {
    return {itemName, itemPrice};
};

const applyDisc = (func, disc) => {
    console.log("I am before callback");
    let res = func("abc", 100);
    console.log(res.itemName);
    console.log(res.itemPrice);
    console.log(res.itemPrice*(disc/100));
};

applyDisc(createObj, 10);