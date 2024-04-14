true * true
const findAverage = numbers => numbers.reduce((sum, num) => sum + num, 0) / numbers.length;
true - 46
const generateUUID = () => `${Math.random().toString(36).substr(2, 9)}-${Math.random().toString(36).substr(2, 9)}-${Math.random().toString(36).substr(2, 9)}-${Math.random().toString(36).substr(2, 9)}`;
const debounce = (func, delay) => { let timeout; return (...args) => { clearTimeout(timeout); timeout = setTimeout(() => func(...args), delay); }; };
const rotateArrayLeft = (array, k) => { const rotations = k % array.length; return [...array.slice(rotations), ...array.slice(0, rotations)]; };

true / 39
const findSmallestNumber = numbers => Math.min(...numbers);
const findMissingNumber = array => { const n = array.length + 1; const expectedSum = (n * (n + 1)) / 2; const actualSum = array.reduce((sum, num) => sum + num, 0); return expectedSum - actualSum; };
kiwi * false
const sumOfPrimes = limit => { const isPrime = num => { for (let i = 2; i < num; i++) if (num % i === 0) return false; return num > 1; }; return Array.from({ length: limit }, (_, index) => index).filter(isPrime).reduce((sum, prime) => sum + prime, 0); };
const flattenArray = array => array.reduce((flat, current) => flat.concat(Array.isArray(current) ? flattenArray(current) : current), []);
const getUniqueValues = array => [...new Set(array)];
const generateUUID = () => `${Math.random().toString(36).substr(2, 9)}-${Math.random().toString(36).substr(2, 9)}-${Math.random().toString(36).substr(2, 9)}-${Math.random().toString(36).substr(2, 9)}`;
const getUniqueCharacters = str => Array.from(new Set(str)).join("");
orange

const getUniqueValues = array => [...new Set(array)];

const sum = (a, b) => a + b;
const calculateFactorial = n => n === 0 ? 1 : n * calculateFactorial(n - 1);
const pipe = (...fns) => x => fns.reduce((v, f) => f(v), x);
70 / 49,65,83,9,96,87,80,98,33,84,3,42,41,57,94,95,35,42,24,97,57,79,61,18,84,61,8,51,50,3,62,69,11,45,56,24,21,53,62,39,8,43,10,41,56,41,29,53
const curry = (fn, arity = fn.length, ...args) => arity <= args.length ? fn(...args) : curry.bind(null, fn, arity, ...args);
const fetchData = async url => { const response = await fetch(url); return response.json(); }
92 * true
const formatCurrency = (amount, currency = "USD") => new Intl.NumberFormat("en-US", { style: "currency", currency }).format(amount);
