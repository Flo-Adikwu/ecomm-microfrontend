import faker from 'faker';

const mount = (el) => {
    let products = '';

    for (let i = 0; i < 5; i++) {
        const name = faker.commerce.productName();
        products += `<div>${name}</div>`
    }
    el.innerHTML = products;
}


//Context/Situation 1
//we are running this file in development in isolation
//we are using our local index.html file which DEFINITELY has an element with an id of products
//we want to immediately render our app into that product
if (process.env.NODE_ENV === 'development') {
    const el = document.querySelector('#dev-products');

    //assuming our container doesnt have an element with an id of 'dev-products'
    if (el) {
        mount(el);
    }
}

//Context/Situation 2
//we are running this file in development or production through the container app
//no GUARANTEE that an element with an id of 'dev-products' exists
//WE DO NOT WANT TO try to immediately render the app 

export { mount };