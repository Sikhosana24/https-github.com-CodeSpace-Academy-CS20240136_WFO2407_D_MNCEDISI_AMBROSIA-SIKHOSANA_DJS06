// A list of provinces:
const provinces = ['Western Cape', 'Gauteng', 'Northern Cape', 'Eastern Cape', 'KwaZulu-Natal', 'Free State']

// A list of names:
const names = ['Ashwin', 'Sibongile', 'Jan-Hendrik', 'Sifso', 'Shailen', 'Frikkie']

// A list of products with prices:
const products = [
  { product: 'banana', price: "2" },
  { product: 'mango', price: 6 },
  { product: 'potato', price: ' ' },
  { product: 'avocado', price: "8" },
  { product: 'coffee', price: 10 },
  { product: 'tea', price: '' },
]

// 1. ForEach Basics :  correctly used forEach to log each province and name.
provinces.forEach(province => console.log(province));
names.forEach(name => console.log(name));
names.forEach((name, index) => console.log(`${name} (${provinces[index]})`)); //properly logs each name with a matching province in the expected format.
// 2. Uppercase Transformation
const upperCaseProvinces = provinces.map(province => province.toUpperCase()); //correctly creates a new array with uppercase province names. 
console.log(upperCaseProvinces);
// 3. Name Lengths
const nameLengths = names.map(name => name.length); //correctly maps the length of each name into a new array.
console.log(nameLengths);
// 4. Sorting
const sortedProvinces = [...provinces].sort(); //correctly sorts the provinces alphabetically.
console.log(sortedProvinces);
// 5. Filtering Cape
const filteredProvinces = provinces.filter(province => !province.includes("Cape")); //filters out provinces that contain "Cape" and the count is logged correctly using filteredProvinces.length.
console.log(filteredProvinces.length); // Log the count of remaining provinces
// 6. Finding 'S'
const containsS = names.map(name => name.includes('S')); //creates a boolean array indicating whether each name contains the letter 'S'. 
console.log(containsS);
// 7. Creating Object Mapping
const provinceMapping = names.reduce((acc, name, index) => { //correctly creates an object mapping names to their corresponding provinces.
  acc[name] = provinces[index];
  return acc;
}, {});
console.log(provinceMapping);
// Advanced Exercises (Single console.log Execution)
// 1. Log Products
console.log(products.map(product => product.product).join(', ')); // correctly logs each product name.
// 2. Filter by Name Length
const filteredProductsByLength = products.filter(product => product.product.length <= 5); //filters products with names shorter than or equal to 5 characters, and logs the product names as required.
console.log(filteredProductsByLength.map(product => product.product).join(', '));
// 3. Price Manipulation
const totalPrice = products
  .filter(product => product.price.trim() !== '') // correctly filters out products without prices, converts string prices to numbers, and calculates the total price using reduce.
  .map(product => Number(product.price)) // Convert prices to numbers
  .reduce((sum, price) => sum + price, 0);
console.log(totalPrice);
// 4. Concatenate Product Names
const concatenatedNames = products.reduce((acc, product) => acc + product.product + ' ', '').trim(); //correctly concatenates all product names into a single string.
console.log(concatenatedNames);
// 5. Find Extremes in Prices: correctly finds the highest and lowest prices, and the output is formatted as required: "Highest: X. Lowest: Y.".
const prices = products
  .filter(product => product.price.trim() !== '')
  .map(product => Number(product.price));
const highestPrice = Math.max(...prices);
const lowestPrice = Math.min(...prices);
console.log(`Highest: ${highestPrice}. Lowest: ${lowestPrice}.`);
// 6. Object Transformation
const transformedProducts = products.map(({ product, price }) => ({ name: product, cost: price })); //correctly transforms the products into a new array with keys name and cost.
console.log(transformedProducts);