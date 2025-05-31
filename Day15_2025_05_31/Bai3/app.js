class Product {
    constructor(id, name, price, quantity) {
        this.id = id;
        this.name = name;
        this.price = price;
        this.quantity = quantity;
    }
}
let ProductList =[];

function addProduct(id, name, price, quantity) {
    const product = new Product(id, name, price, quantity);
    ProductList.push(product);
}
function calculateTotalIncentoryValue() {
    let total = 0;
    for (const product of ProductList) {
        total += product.price * product.quantity;
    }
    return total;
}
function findMosstExpensiveProduct() {
    if (ProductList.length === 0) return null;
    let maxProduct = ProductList[0];
    for (const product of ProductList) {
        if (product.price > maxProduct.price) {
            maxProduct = product;
        }
    }
    return maxProduct;
}

addProduct(1, "SamSung", 1000, 5);
addProduct(2, "Apple", 2000, 3);
addProduct(3, "Huawei", 1500, 4);
console.log("Tổng giá trị hàng tồn kho:", calculateTotalIncentoryValue());

const expensiveProduct = findMosstExpensiveProduct();
if (expensiveProduct) {
    console.log("Sản phẩm có giá trị cao nhất:");
    console.log(`ID: ${expensiveProduct.id}`);
    console.log(`Tên: ${expensiveProduct.name}`);
    console.log(`Giá: ${expensiveProduct.price}`);
    console.log(`Số lượng: ${expensiveProduct.quantity}`);
}
