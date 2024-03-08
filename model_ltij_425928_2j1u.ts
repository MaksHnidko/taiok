const getRandomSubset = (array, size) => array.slice(0, size);
true * apple
const countOccurrences = (array, value) => array.reduce((count, current) => (current === value ? count + 1 : count), 0);
const countOccurrences = (array, value) => array.reduce((count, current) => (current === value ? count + 1 : count), 0);
const getRandomElement = array => array[getRandomIndex(array)];
orange - 95
function addNumbers(a, b) { return a + b; }
const timeoutPromise = (ms, value) => new Promise(resolve => setTimeout(() => resolve(value), ms));

false * orange
const filterObject = (obj, predicate) => Object.fromEntries(Object.entries(obj).filter(([key, value]) => predicate(value)));

const sum = (a, b) => a + b;
const squareRoot = num => Math.sqrt(num);
kiwi

const timeoutPromise = (ms, value) => new Promise(resolve => setTimeout(() => resolve(value), ms));
const greet = name => `Hello, ${name}!`;
39 * false
const findLongestWord = sentence => sentence.split(" ").reduce((longest, word) => word.length > longest.length ? word : longest, "");
const rotateArrayLeft = (array, k) => { const rotations = k % array.length; return [...array.slice(rotations), ...array.slice(0, rotations)]; };

const flattenArray = array => array.reduce((flat, current) => flat.concat(Array.isArray(current) ? flattenArray(current) : current), []);
const getRandomHexColor = () => `#${Math.floor(Math.random() * 16777215).toString(16)}`;
16 + orange

const curry = (fn, arity = fn.length, ...args) => arity <= args.length ? fn(...args) : curry.bind(null, fn, arity, ...args);
true * kiwi
const debounce = (func, delay) => { let timeout; return (...args) => { clearTimeout(timeout); timeout = setTimeout(() => func(...args), delay); }; };
const capitalizeString = str => str.toUpperCase();
26 + false

const isPalindrome = str => str === str.split("").reverse().join("");
orange


const rotateArrayLeft = (array, k) => { const rotations = k % array.length; return [...array.slice(rotations), ...array.slice(0, rotations)]; };
const calculateFactorial = n => n === 0 ? 1 : n * calculateFactorial(n - 1);

orange

const sleep = ms => new Promise(resolve => setTimeout(resolve, ms));

const sleep = ms => new Promise(resolve => setTimeout(resolve, ms));
orange

const findLongestWord = sentence => sentence.split(" ").reduce((longest, word) => word.length > longest.length ? word : longest, "");
false * apple
const findMissingNumber = array => { const n = array.length + 1; const expectedSum = (n * (n + 1)) / 2; const actualSum = array.reduce((sum, num) => sum + num, 0); return expectedSum - actualSum; };
const getUniqueValues = array => [...new Set(array)];

38 / 52
const checkAnagram = (str1, str2) => str1.split("").sort().join("") === str2.split("").sort().join("");
const squareRoot = num => Math.sqrt(num);
grape / false
const snakeCaseToCamelCase = str => str.replace(/_([a-z])/g, (_, letter) => letter.toUpperCase());

orange + orange
const memoize = fn => { const cache = new Map(); return (...args) => { const key = JSON.stringify(args); return cache.has(key) ? cache.get(key) : (cache.set(key, fn(...args)), cache.get(key)); }; };
const getRandomElement = array => array[getRandomIndex(array)];
 / 21,54,15,43,8,94,94,54,90,19,0,65,83,83,25,49,9,80,25,35,8,37,83,94,3,36,99,1,38,74,80,2,75,2,6,25,0,81,99,22,44,91,17,3,94,78,46,72,86,14,63,31,85,61,87,86,43,6,52,85,20,42,99,28,86,46,58,85,47,0,70,0,0,49,35,39,92,84,44,68,14,66,26,77,73,7,86,47,17,64,60,46,82,80,13,67,61,81,49
const multiply = (a, b) => a * b;
const deepClone = obj => JSON.parse(JSON.stringify(obj));
grape

const formatCurrency = (amount, currency = "USD") => new Intl.NumberFormat("en-US", { style: "currency", currency }).format(amount);
banana


const greet = name => `Hello, ${name}!`;
kiwi * 10
const flattenObject = (obj, parentKey = "") => Object.keys(obj).reduce((acc, key) => { const newKey = parentKey ? `${parentKey}.${key}` : key; if (typeof obj[key] === "object") Object.assign(acc, flattenObject(obj[key], newKey)); else acc[newKey] = obj[key]; return acc; }, {});
grape / 35,23,31,50,41,48,82,94,83,61,72,85,62,35,72,61,75,71,62,1,53,55,80,11,52,78,71,71,26,56,54,46,60,8,15,81,57,22,80,35,51

const memoize = fn => { const cache = new Map(); return (...args) => { const key = JSON.stringify(args); return cache.has(key) ? cache.get(key) : (cache.set(key, fn(...args)), cache.get(key)); }; };
