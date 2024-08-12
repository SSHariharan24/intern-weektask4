// Q.NO : 1

const numbers = [1, 2, 3, 4, 5];

const sum = numbers.reduce((accumulator, currentValue) => {
    return accumulator + currentValue;
}, 0);

console.log("The sum of the array is:", sum);

// Q.NO : 2
const employees = [
    { name: 'Gokul', dept: 'Engineering', id: 1 },
    { name: 'Viswa', dept: 'Marketing', id: 2 },
    { name: 'Hari', dept: 'Human Resources', id: 3 },
    { name: 'Joseph', dept: 'Finance', id: 4 }
];
const names = employees.map(employee => employee.name);

console.log("Names of all employees:", names);

// Q.NO : 3
const products = [
    { name: 'Laptop', price: 1200 },
    { name: 'Smartphone', price: 800 },
    { name: 'Headphones', price: 150 },
    { name: 'Tablet', price: 600 },
    { name: 'Smartwatch', price: 300 },
    { name: 'Monitor', price: 900 }
];
const filteredProducts = products.filter(product => product.price >= 500 && product.price <= 1000);

console.log("Products with prices between 500 and 1000:", filteredProducts);



