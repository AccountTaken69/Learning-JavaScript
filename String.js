let username = "Deo ";
let result = username.startsWith(" ");
result = username.endsWith(" ");

//Grabs the character using index #
console.log(username.charAt(0));
console.log(username.charAt(1));
console.log(username.charAt(2));
//Grabs the index # using character
console.log(username.indexOf("D"));
console.log(username.indexOf("e"));
console.log(username.indexOf("o"));
//Repeats String for a # of times
console.log(username.repeat(3));
//Length of String
console.log(username.length);
//Sets String to Upper or Lowercase
console.log(username.toLowerCase());
console.log(username.toUpperCase());
//Removes whitespace from both start and end. Use .trimStart or .trimEnd to be more precise
console.log(username.trim());
//Splits the String
console.log(username.split("D"));
console.log(username.split("e"));
console.log(username.split("o"));
//Whether username includes a space. More efficient than .startsWith(" "); and .endWith(" ");
result = username.includes(" ");
if (result)
{
    console.log("Your username cannot contain a space.");
}
else
{
    console.log("Your username is " + username);
}
//Phone Numbers
let phoneNum = "123-456-7891";
//Replaces "-" with "/"
phoneNum = phoneNum.replaceAll("-","/");
console.log(phoneNum);
//Sets max length to 15 in front, fills blanks with 0's
console.log(phoneNum.padStart(15,0));
//Sets max length to 15 at the end, fills blanks with 0's
console.log(phoneNum.padEnd(15,0));
