// task 1 - Product Price Management //
let prices = [20, 30, 40, 50, 60]; // prices array
prices.push(70); // Add new price to the end of the array
prices.shift(); // Remove the first price from the array

console.log("Updated prices: ", prices); // Print the updated array of prices

// task 2 - Modifting Customer Orders //
let orders = [100, 200, 300, 400, 500]; // orders array
orders[2] += 5; // Increase the 3rd order by 5
let totalOrders = orders.reduce((total, orders) => total + orders, 0); // Calculate the total of all orders

console.log("Updated orders: ", orders); // Print the updated array of orders
console.log("Total order count: ", totalOrders); // Print the total of all orders

// task 3 - Employee Performance Tracking //
let employee = {
    name: "Eugene",
    role: "Program Tester",
    performanceScore: 90,
    isActive: true
}; // employee object

employee.performanceScore = 95; // Increase the performance score by 5
employee.promotionEligible = true; // Add a new property to the object

console.log("Updated employee: ", employee); // Print the updated employee object