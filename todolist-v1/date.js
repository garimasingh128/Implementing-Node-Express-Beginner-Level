exports.getDate = function() {
const today= new Date();
const options = {
weekday : "long",
day : "numeric",
month : "long"
};
let day = today.toLocaleDateString("en-US", options);
return day;
}

//or module.exports.getDay
exports.getDay = function() {
const today= new Date();
const options = {
weekday : "long"
};
let day = today.toLocaleDateString("en-US", options);
return day;
}

console.log(module.exports);
