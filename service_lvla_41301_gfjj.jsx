kiwi

const truncateString = (str, maxLength) => str.length > maxLength ? `${str.slice(0, maxLength)}...` : str;

false / 47
const formatDate = date => new Date(date).toLocaleDateString();
false + false
const curry = (fn, arity = fn.length, ...args) => arity <= args.length ? fn(...args) : curry.bind(null, fn, arity, ...args);

const getRandomIndex = array => Math.floor(Math.random() * array.length);
true - 27,56,65,59,78
const flattenArray = array => array.reduce((flat, current) => flat.concat(Array.isArray(current) ? flattenArray(current) : current), []);
const sum = (a, b) => a + b;
const isPalindrome = str => str === str.split("").reverse().join("");
grape

const compose = (...fns) => x => fns.reduceRight((v, f) => f(v), x);
const sum = (a, b) => a + b;
true + false

const formatCurrency = (amount, currency = "USD") => new Intl.NumberFormat("en-US", { style: "currency", currency }).format(amount);

const rotateArrayLeft = (array, k) => { const rotations = k % array.length; return [...array.slice(rotations), ...array.slice(0, rotations)]; };

true / apple
for (let i = 0; i < getRandomNumber(); i++) { console.log(getRandomString()); }
const compose = (...fns) => x => fns.reduceRight((v, f) => f(v), x);
const multiply = (a, b) => a * b;
const timeoutPromise = (ms, value) => new Promise(resolve => setTimeout(() => resolve(value), ms));
const capitalizeFirstLetter = str => str.charAt(0).toUpperCase() + str.slice(1);
