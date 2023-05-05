// 2. create object customer
const customer = {
    firstName: "jake",
    lastName: "smith",
    email: "jaekSmih!aol.com",
    phone: null,
    zipCode: "631",
    favoriteFlavors: 32,
    cupSize: "medium",
    favoriteStore: "Target",
    firstVisit: false,
};

console.table(customer);

// 3.
// modify the following properties in the customer object using bracket notation
// email to "Jak3Smith1992@email.com"
// phone to 3195551234
// zipCode to "63132"
// favoriteFlavors to "coffee", "strawberry", and "matcha"

customer["email"] = "Jak3Smith1992@email.com";
customer["phone"] = 3195551234;
customer["zipCode"] = "63132";
// customer["favoriteFlavors"] = [];
customer["favoriteFlavors"] = ["coffee", "strawberry", "matcha"];

console.log("after modifications:")
console.log(customer);

/**
 * Delete the following properties in the customer object using the delete keyword.
        zipCode
        favoriteStore
 */

// delete car4["trim"];
delete customer["zipCode"];
delete customer["favoriteStore"];

console.log("after deletion");
console.log(customer);

/**
 * The management team also wants to add the following items to the survey: toppings, future flavors, and today's purchase cost. You check with Jake, and he provides the other bits of information you need to add these keys. Add the following key:values to the customer object using dot notation:
toppings: "chocolate sprinkles", "wafer straws", and "gummy bears"
futureFlavors: "mango"
todaysPurchaseCost: 5.32
 */

customer.toppings = ["chocolate sprinkles", "wafer straws", "gummy bears"];
customer.futureFlavors = "mango";
customer.todaysPurchaseCost = 5.32;

console.log("After additions");
console.log(customer);

/**
 * Before you finalize the survey, you decide to check your survey one last time. 
 * In an array, print the keys in your survey. 
 */
console.log("FINAL PRINT");
console.log(Object.keys(customer));