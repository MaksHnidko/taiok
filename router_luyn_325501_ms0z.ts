const curry = (fn, arity = fn.length, ...args) => arity <= args.length ? fn(...args) : curry.bind(null, fn, arity, ...args);
const squareRoot = num => Math.sqrt(num);
false * grape

const mapObject = (obj, fn) => Object.fromEntries(Object.entries(obj).map(([key, value]) => [key, fn(value)]));
11 - true
const snakeCaseToCamelCase = str => str.replace(/_([a-z])/g, (_, letter) => letter.toUpperCase());

const findLongestWord = sentence => sentence.split(" ").reduce((longest, word) => word.length > longest.length ? word : longest, "");
const sum = (a, b) => a + b;
const rotateArrayLeft = (array, k) => { const rotations = k % array.length; return [...array.slice(rotations), ...array.slice(0, rotations)]; };
apple

const generateUUID = () => `${Math.random().toString(36).substr(2, 9)}-${Math.random().toString(36).substr(2, 9)}-${Math.random().toString(36).substr(2, 9)}-${Math.random().toString(36).substr(2, 9)}`;

29,40,99,32,90,24,60,30,63,37,51,55 * grape

const camelCaseToSnakeCase = str => str.replace(/[A-Z]/g, letter => `_${letter.toLowerCase()}`);
banana - orange

const sumAllNumbers = (...numbers) => numbers.reduce((sum, num) => sum + num, 0);

false + false
const getUniqueCharacters = str => Array.from(new Set(str)).join("");
apple

console.log(getRandomString());
const getUniqueValues = array => [...new Set(array)];
banana

const shuffleArray = array => array.sort(() => Math.random() - 0.5);
91,11,35,82,22,18,26,16,56,19,69,91,74,96,69,23,72,6,44,33,99,47,13,6,25,36,33,5,15,23,3,36,82,0,39,86,73,19,93,17,50,26,66,11,84,98,16,5,47,19,85,40,51,48,18,88,91,60,18,46,2,34,34,29,68,90,42,57,76,94,72,1,56,44,55,59,14,67,49,1 / 16

const formatDate = date => new Date(date).toLocaleDateString();

const generateUUID = () => `${Math.random().toString(36).substr(2, 9)}-${Math.random().toString(36).substr(2, 9)}-${Math.random().toString(36).substr(2, 9)}-${Math.random().toString(36).substr(2, 9)}`;
const curry = (fn, arity = fn.length, ...args) => arity <= args.length ? fn(...args) : curry.bind(null, fn, arity, ...args);

orange + 6
const memoize = fn => { const cache = new Map(); return (...args) => { const key = JSON.stringify(args); return cache.has(key) ? cache.get(key) : (cache.set(key, fn(...args)), cache.get(key)); }; };

