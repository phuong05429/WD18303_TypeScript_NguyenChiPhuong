import validate from "./module/StaticZipCodeValidator"; 

let strings = ["hello", "834473", "101"];

strings.forEach(s => {
 console.log(`"${s}" ${validate(s) ? "matches" : "does not match"} the zip code pattern`);
 
});