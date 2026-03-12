const order = (product, callback) => {
    console.log(`${product} 주문 접수`);

    callback(product);
};

const display = (result) => {
    setTimeout(() => console.log(`${result} 완료!`), 3000);
};

order('아메리카노', display);
