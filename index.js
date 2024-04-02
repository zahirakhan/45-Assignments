//student name: zahira khan
//Roll No:      00218510
//Shift:       Wednesday 02 to 05
//----question no 2
//Personal Message: Store a person’s name in a variable, and print a message to that person.
//Your message should be simple, such as, “Hello Eric, would you like to learn some Python today?”
let personName = "zahira khan";
console.log(`Hello ${personName},would you like to learn some typescript today?`);
//----Question no3
//Name Cases: Store a person’s name in a variable,
//and then print that person’s name in lowercase, uppercase, and titlecase.
let name1 = "zahira";
console.log(name1.toLowerCase());
console.log(name1.toUpperCase());
console.log(name1.charAt(0).toUpperCase() + name1.slice(1).toLowerCase());
//----Question no4
//Famous Quote: Find a quote from a famous person you admire.
//Print the quote and the name of its author. Your output should look something like the following,
//including the quotation marks:
//Albert Einstein once said, “A person who never made a mistake never tried anything new.”
let famousQuote = "Lead with your actions, not just your words";
let author = "-Salahuddin Ayyubi";
console.log(`${author} once said, "${famousQuote}"`);
//----question 5
//Famous Quote 2: Repeat Exercise 4,
//but this time store the famous person’s name in a variable called famous_person.
//Then compose your message and store it in a new variable called message. Print your message.
let message = "Lead with your actions, not just your words.";
let famous_person = "-Salahuddin Ayyubi";
console.log(`${message} once said, "${famous_person}"`);
//----Question no6
//Stripping Names: Store a person’s name, and include some whitespace characters at the beginning and end of the name. Make sure you use each character combination,
//"\t" and "\n", at least once. Print the name once, so the whitespace around the name is displayed. Then print the name after striping the white spaces.
let personName3 = `\n\t zahira khan\t\n`;
console.log(personName3);
console.log(personName3.trim());
//----Question no7
//Number Eight: Write addition, subtraction, multiplication, and division operations that each result in the number 8.
//Be sure to enclose your operations in print statements to see the results.
console.log(5 + 3);
console.log(11 - 3);
console.log(4 * 2);
console.log(16 / 2);
//----Question no9
//Favorite Number: Store your favorite number in a variable. Then, using that variable, create a message that reveals your favorite number.
//Print that message.
let favoriteNumber = 8;
console.log(`my favorite number is ${favoriteNumber}`);
//----Question no10
//Adding Comments: Choose two of the programs you’ve written, and add at least one comment to each.
//just add your name and the current date at the top of each program file.  Then write one sentence describing what the program does.
// Program: sumTwoNumbers
// Author:  Zahira khan
// Date :  2024-03-08
//Description:  This ptrogram calculate the sum of two numbers.
//  Define the numbers
let num1 = 5;
let num2 = 3;
//calculate the sum
let sum = num1 + num2;
//output the result
console.log("sum:", sum);
//----Question no11
//Names: Store the names of a few of your friends in a array called names.
//Print each person’s name by accessing each element in the list, one at a time.
let names = ["Sara", "Georgia", "Zahira", "Harley"];
for (let i = 0; i < names.length; i++) {
    console.log(names[i]);
}
//----Question no12
//Greetings: Start with the array you used in Exercise 11, but instead of just printing each person’s name,
//print a message to them. The text of each message should be the same, but each message should be personalized with the person’s name.
let names1 = ["Sara", "Georgia", "Zahira", "Harley"];
for (let name of names1) {
    console.log(`Hello, ${name}!! would you like to have some coffe with me at my place?`);
}
//----Question no13
//Your Own Array: Think of your favorite mode of transportation, such as a motorcycle or a car, and make a list that stores several examples.
//Use your list to print a series of statements about these items, such as “I would like to own a Honda motorcycle.”
let favoritetransport = ["Car", "Motorbike", "Plane"];
favoritetransport.forEach((favoritetransport) => {
    console.log(`I would like to own a ${favoritetransport}`);
});
//----Question no14
//Guest List: If you could invite anyone, living or deceased, to dinner, who would you invite?
//Make a list that includes at least three people you’d like to invite to dinner.
//Then use your list to print a message to each person, inviting them to dinner.
let dinnerinvitation = ["Sara", "Georgia", "Zahira", "Harley"];
dinnerinvitation.forEach((dinnerinvitation) => {
    console.log(`Dear ${dinnerinvitation}, would you like to join me for dinner?`);
});
//question no15
//Changing Guest List: You just heard that one of your guests can’t make the dinner, so you need to send out a new set of invitations.
//You’ll have to think of someone else to invite.
//Start with your program from Exercise 14. Add a print statement at the end of your program stating the name of the guest who can’t make it.
//Modify your list, replacing the name of the guest who can’t make it with the name of the new person you are inviting.
//Print a second set of invitation messages, one for each person who is still in your list.
let unAbletoAttend = "zaran";
console.log(`${unAbletoAttend}, can't come to the dinner`);
let newInvitee = "sarah";
dinnerinvitation[dinnerinvitation.indexOf(unAbletoAttend)] = newInvitee;
dinnerinvitation.forEach((dinnerinvitation) => {
    console.log(`Dear ${dinnerinvitation},would you like to join me for dinner?`);
});
//question no 16
//More Guests: You just found a bigger dinner table, so now more space is available. Think of three more guests to invite to dinner.
//Start with your program from Exercise 15. Add a print statement to the end of your program informing people that you found a bigger dinner table.
//Add one new guest to the beginning of your array.
//Add one new guest to the middle of your array. • Use append() to add one new guest to the end of your list.
//Print a new set of invitation messages, one for each person in your list.
console.log("Great news! We found a bigger dinner table!");
dinnerinvitation.unshift("farah");
dinnerinvitation.splice(dinnerinvitation.length / 2, 0, "maria");
dinnerinvitation.push("sophie");
dinnerinvitation.forEach((dinnerinvitation) => {
    console.log(`dear ${dinnerinvitation}, would you like to join me for dinner?`);
});
//question 17
//Shrinking Guest List: You just found out that your new dinner table won’t arrive in time for the dinner, and you have space for only two guests.
//Start with your program from Exercise 16. Add a new line that prints a message saying that you can invite only two people for dinner.
//Remove guests from your list one at a time until only two names remain in your list. Each time you pop a name from your list,
//print a message to that person letting them know you’re sorry you can’t invite them to dinner.
//Print a message to each of the two people still on your list, letting them know they’re still invited.
//Remove the last two names from your list, so you have an empty list. Print your list to make sure you actually have an empty list at the end of your program.
console.log("Unfortunately, we can only invite two people for dinner.");
while (dinnerinvitation.length > 2) {
    let removedGuest = dinnerinvitation.pop();
    console.log(`Sorry, ${removedGuest}, we can't invite you to dinner.`);
}
dinnerinvitation.forEach((dinnerinvitation) => {
    console.log(`Dear ${dinnerinvitation},you are still invited to dinner.`);
});
dinnerinvitation.splice(0, dinnerinvitation.length);
console.log(dinnerinvitation);
//question no 18
//Seeing the World: Think of at least five places in the world you’d like to visit.
//Store the locations in a array. Make sure the array is not in alphabetical order.
//Print your array in its original order.
//Print your array in alphabetical order without modifying the actual list.
//Show that your array is still in its original order by printing it.
//Print your array in reverse alphabetical order without changing the order of the original list.
//Show that your array is still in its original order by printing it again.
//Reverse the order of your list. Print the array to show that its order has changed.
//Reverse the order of your list again. Print the list to show it’s back to its original order.
//Sort your array so it’s stored in alphabetical order. Print the array to show that its order has been changed.
//Sort to change your array so it’s stored in reverse alphabetical order. Print the list to show that its order has changed.
let placesToVisit = [
    "Norway",
    "Japan",
    "Georgia",
    "Paris",
    "USA",
    "Canada",
];
console.log("Original Order:", placesToVisit);
console.log("Alphabetical Order:", [...placesToVisit].sort());
console.log("Original Order:", placesToVisit);
console.log("Reverse Alphabetical Order:", [...placesToVisit].sort().reverse());
console.log("Original Order:", placesToVisit);
placesToVisit.reverse();
console.log("Reversed Order:", placesToVisit);
placesToVisit.reverse();
console.log("Original Order:", placesToVisit);
placesToVisit.sort();
console.log("Alphabetical Order:", placesToVisit);
placesToVisit.reverse();
console.log("reverse alphabetical order:", placesToVisit);
//question no 19
//Dinner Guests: Working with one of the programs from Exercises 14 through 18,
// print a message indicating the number of people you are inviting to dinner.
console.log(`You are inviting ${dinnerinvitation.length} people to dinner.`);
//question no20
//Think of something you could store in a array. For example, you could make a list of mountains,
//rivers, countries, cities, languages, or anything else you’d like.
//Write a program that creates a list containing these items.
let programmingLanguage = [
    "Typescript",
    "Javascript",
    "Java",
    "C++",
    "Python",
];
console.log("I would like to learn :", programmingLanguage);
////question no21
//They think of something you could store in a TypeScript Object.
//Write a program that creates Objects containing these items.
let book = {
    Title: "The power of your subconcious mind",
    Author: "Dr Joseph Murphy",
    Year: 1963,
};
console.log(`Book Info: ${book.Title} by ${book.Author} , Published in ${book.Year}`);
//question no22
//Intentional Error: If you haven’t received an array index error in one of your programs yet, try to make one happen.
//Change an index in one of your programs to produce an index error.
//Make sure you correct the error before closing the program.
let myarray = ["3,4,5,6,7,8,9,10"];
//wrong value pass
let index = 11;
let element = myarray[index];
console.log("element at index", index, "is", element);
//question no23
//Conditional Tests: Write a series of conditional tests.
// Print a statement describing each test and your prediction for the results of each test.
//Look closely at your results, and make sure you understand why each line evaluates to True or False.
//Create at least 10 tests. Have at least 5 tests evaluate to True and another 5 tests evaluate to False.
let car = "subaru"; //Test01
console.log("is car =='subaru'? I predict True.");
console.log(car == "subaru"); //TRUE
console.log("is car =='toyota'? I predict False.");
console.log(car == "toyota"); //FALSE
let car2 = "ferrari"; //Test02
console.log("is car =='ferrari'? I predict True.");
console.log(car == "ferrari"); //TRUE
console.log("is car =='audi'? I predict False.");
console.log(car == "audi"); //FALSE
let car3 = "Honda"; //Test03
console.log("is car =='Honda'? I predict True.");
console.log(car == "Honda"); //TRUE
console.log("is car =='BMW'? I predict False.");
console.log(car == "BMW"); //FALSE
let car4 = "tesla"; //Test04
console.log("is car =='tesla'? I predict True.");
console.log(car == "tesla"); //TRUE
console.log("is car =='civic'? I predict False.");
console.log(car == "civic"); //FALSE
let car5 = "ford"; //Test05
console.log("is car =='ford'? I predict True.");
console.log(car == "ford"); //TRUE
console.log("is car =='vigo'? I predict False.");
console.log(car == "vigo"); //FALSE
//question no24
//Have at least one True and one False result for each of the following:
//Tests for equality and inequality with strings
//Tests using the lower case function
//Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, and less than or equal to
//Tests using "and" and "or" operators
//Test whether an item is in a array
//Test whether an item is not in a array
//Equality with string
console.log("testing equality , inequality with strings,");
console.log("apple" == "apple"); //True
//console.log('apple'=='Apple');//False
//Using the lower case function
console.log("testing with lower case");
console.log("Apple".toLowerCase() == "apple"); //TRUE
//Numerical test
console.log("numerical test");
console.log("10>5"); //TRUE
console.log("2<1"); //FALSE
//test using "and" and "or" operators
console.log("test using 'and' and 'or' operators");
console.log(true && false); //False
console.log(true || false); //True
//test whether an item is in a array
let fruits = ["apple", "banana", "cherry"];
console.log("is `apple` in fruits?");
console.log(fruits.includes("apple")); //True
//Test whether an item is not in a array
console.log("is `mango` not in fruits?");
console.log(!fruits.includes("mango")); //True
//question no25
//Alien Colors #1: Imagine an alien was just shot down in a game.
//Create a variable called alien_color and assign it a value of 'green', 'yellow', or 'red'.
//Write an if statement to test whether the alien’s color is green. If it is, print a message that the player just earned 5 points.
//Write one version of this program that passes the if test and another that fails. (The version that fails will have no output.)//
let alien_color = "green";
if (alien_color === "green") {
    console.log("Congratulations! You just earned 5 points.");
}
let alien_colour = "red";
if (alien_colour === "green") {
    console.log("Congratulations! You just earned 5 points.");
} //no output because the condition is false
//question no26
//Alien Colors #2: Choose a color for an alien as you did in Exercise 25, and write an if-else chain.
//If the alien’s color is green, print a statement that the player just earned 5 points for shooting the alien.
//If the alien’s color isn’t green, print a statement that the player just earned 10 points.
//Write one version of this program that runs the if block and another that runs the else block.
if (alien_color === "green")
    console.log("Congratulations! You just earned 5 points for shooting the green alien.");
else
    console.log("Congratulations! You just earned 10 points.");
if (alien_color === "red")
    console.log("Congratulations! You just earned 5 points for shooting the green alien.");
else
    console.log("Congratulations! You just earned 10 points.");
//question no27
//Alien Colors #3: Turn your if-else chain from Exercise 5-4 into an if-else chain.
//If the alien is green, print a message that the player earned 5 points.
//If the alien is yellow, print a message that the player earned 10 points.
//If the alien is red, print a message that the player earned 15 points.
//Write three versions of this program, making sure each message is printed for the appropriate color alien.
let alienColor = "green";
if (alienColor === "green")
    console.log("Congratulations! You just earned 5 points.");
else if (alienColor === "yellow")
    console.log("Congratulations! You just earned 10 points.");
else if (alienColor === "red")
    console.log("Congratulations! You just earned 15 points.");
//red alien version
let alienColor2 = "red";
if (alienColor2 === "green")
    console.log("Congratulations! You just earned 5 points.");
else if (alienColor2 === "yellow")
    console.log("Congratulations! You just earned 10 points.");
else if (alienColor2 === "red")
    console.log("Congratulations! You just earned 15 points.");
//yellow alien version
let alienColor3 = "yellow";
if (alienColor3 === "green")
    console.log("Congratulations! You just earned 5 points.");
else if (alienColor3 === "yellow")
    console.log("Congratulations! You just earned 10 points.");
else if (alienColor3 === "red")
    console.log("Congratulations! You just earned 15 points.");
//question no28
//Stages of Life: Write an if-else chain that determines a person’s stage of life. Set a value for the variable age, and then:
//If the person is less than 2 years old, print a message that the person is a baby.
//If the person is at least 2 years old but less than 4, print a message that the person is a toddler.
//If the person is at least 4 years old but less than 13, print a message that the person is a kid.
//If the person is at least 13 years old but less than 20, print a message that the person is a teenager.
//If the person is at least 20 years old but less than 65, print a message that the person is an adult.
//If the person is age 65 or older, print a message that the person is an elder.
let age = 25;
if (age < 2) {
    console.log("The person is a baby.");
}
else if (age < 4) {
    console.log("The person is a toddler.");
}
else if (age < 13) {
    console.log("The person is a kid.");
}
else if (age < 20) {
    console.log("The person is a teenager.");
}
else if (age < 65) {
    console.log("The person is an adult.");
}
else {
    console.log("The person is an elder.");
}
//question no29
//Favorite Fruit: Make a array of your favorite fruits, and then write a series of independent
//if statements that check for certain fruits in your array.
//Make a array of your three favorite fruits and call it favorite_fruits.
//Write five if statements. Each should check whether a certain kind of fruit is in your array.
//If the fruit is in your array, the if block should print a statement, such as You really like bananas!
let favoriteFruits = ["banana", "apple", "strawberry"];
if (favoriteFruits.includes("banana")) {
    console.log("You really like bananas!");
}
if (favoriteFruits.includes("apple")) {
    console.log("You really like apples!");
}
if (favoriteFruits.includes("strawberry")) {
    console.log("You really like strawberries!");
}
if (favoriteFruits.includes("orange")) {
    console.log("You really like oranges!");
}
else {
    console.log("Oranges are not in your list of favorite fruits.");
}
if (favoriteFruits.includes("kiwi")) {
    console.log("You really like kiwis!");
}
else {
    console.log("Kiwis are not in your list of favorite fruits.");
}
//question no30
//Hello Admin: Make a array of five or more usernames, including the name 'admin'.
//Imagine you are writing code that will print a greeting to each user after they log in to a website. Loop through the array,
//and print a greeting to each user:
//If the username is 'admin', print a special greeting, such as Hello admin, would you like to see a status report?
//Otherwise, print a generic greeting, such as Hello Eric, thank you for logging in again.
let usernames = ["admin", "zara", "rida", "sidra", "John"];
for (let username of usernames)
    if (username === "admin")
        console.log("Hello admin, would you like to see a status report?");
    else
        console.log(`Hello ${username}, thank you for logging in again.`);
//question no31
//No Users: Add an if test to Exercise 28 to make sure the list of users is not empty.
//If the list is empty, print the message We need to find some users!
//Remove all of the usernames from your array, and make sure the correct message is printed.
let usernames2 = []; // Empty user list
if (usernames2.length === 0)
    console.log("We need to find some users!");
else {
    usernames2 = [];
    console.log("list of users:", usernames);
}
//question no32
//Checking Usernames: Do the following to create a program that simulates how websites ensure that everyone has a unique username.
//Make a list of five or more usernames called current_users.Make another list of five usernames called new_users.
//Make sure one or two of the new usernames are also in the current_users list.
//Loop through the new_users list to see if each new username has already been used.
//If it has, print a message that the person will need to enter a new username. If a username has not been used,
//print a message saying that the username is available.
//Make sure your comparison is case insensitive. If 'John' has been used, 'JOHN' should not be accepted.
let current_users = ["zara", "sara", "ali", "admin"];
let new_users = ["zara", "admin", "zaini", "john", "sidra"];
new_users.forEach((newUser) => {
    if (current_users.some((current_users) => current_users.toLowerCase())) {
        console.log(`${newUser} will need to enter a new username.`);
    }
    else {
        console.log(`${newUser} is available.`);
    }
});
//question no33
//Ordinal Numbers: Ordinal numbers indicate their position in a array, such as 1st or 2nd.
//Most ordinal numbers end in th, except 1, 2, and 3.
//Store the numbers 1 through 9 in a array.Loop through the array.
//Use an if-else chain inside the loop to print the proper ordinal ending for each number.
//Your output should read "1st 2nd 3rd 4th 5th 6th 7th 8th 9th", and each result should be on a separate line.
let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
numbers.forEach((number) => {
    let suffix = "th";
    if (number === 1) {
        suffix = "st";
    }
    else if (number === 2) {
        suffix = "nd";
    }
    else if (number === 3) {
        suffix = "rd";
    }
    console.log(`${numbers} ${suffix}`);
});
//question no 34
//Pizzas: Think of at least three kinds of your favorite pizza. Store these pizza names in a array,
//and then use a for loop to print the name of each pizza.
//Modify your for loop to print a sentence using the name of the pizza instead of printing just the name of the pizza.
// For each pizza you should have one line of output containing a simple statement like I like pepperoni pizza.
//Add a line at the end of your program, outside the for loop, that states how much you like pizza.
//The output should consist of three or more lines about the kinds of pizza you like and then an additional sentence,
//such as I really love pizza!
let pizzas = ["pepperoni", "BBQ", "fajita"];
pizzas.forEach((pizza) => {
    console.log(`I like ${pizza} pizza.`);
});
console.log("I really like pizza!");
//question no35
//Animals: Think of at least three different animals that have a common characteristic.
//Store the names of these animals in a list, and then use a for loop to print out the name of each animal.
//Modify your program to print a statement about each animal, such as A dog would make a great pet.
//Add a line at the end of your program stating what these animals have in common. You could print a sentence
//such as Any of these animals would make a great pet!
let animals = ["cat", "dogs", "rabbit"];
animals.forEach((animal) => {
    console.log(`A ${animal} would make a great pet.`);
});
console.log("any of these animals would make a great pet!");
//question no 36
//T-Shirt: Write a function called make_shirt() that accepts a size and the text of a message
//that should be printed on the shirt.
//The function should print a sentence summarizing the size of the shirt and the message
//printed on it. Call the function.
function make_shirt(size, message) {
    console.log(`Creating a ${size} shirt with the message: "${message}"`);
}
// Calling the function
make_shirt("Medium", "Hello, World!");
//question no37
//Large Shirts: Modify the make_shirt() function so that shirts are large by default
// with a message that reads I love TypeScript.
// Make a large shirt and a medium shirt with the default message,
// and a shirt of any size with a different message.
function make_shirts(size = "Large", message = "I love TypeScript") {
    console.log(`Creating a ${size} shirt with the message: "${message}"`);
}
// Creating a large shirt with the default message
make_shirts();
// Creating a medium shirt with the default message
make_shirts("Medium");
// Creating a small shirt with a custom message
make_shirts("Small", "TypeScript is awesome!");
//question no38
//Cities: Write a function called describe_city() that accepts the name of a city and its country.
//The function should print a simple sentence, such as Karachi is in Pakistan.
//Give the parameter for the country a default value.
// Call your function for three different cities, at least one of which is not in the default country.
function describe_city(city, country = "Unknown") {
    console.log(`${city} is in ${country}.`);
    describe_city("karachi");
    describe_city("lahore");
    describe_city("tokyo", "japan");
}
//question no39
//City Names: Write a function called city_country() that takes in the name of a city and its country.
// The function should return a string formatted like this:
//"Lahore, Pakistan"
//Call your function with at least three city-country pairs, and print the value that’s returned.
function city_country(city, country) {
    return `${city}, ${country}`;
}
console.log(city_country("lahore", "pakistan"));
console.log(city_country("tokyo", "japan"));
console.log(city_country("paris", "france"));
function make_album(artist, title, tracks) {
    let album = {
        artist: artist,
        title: title,
    };
    if (tracks !== undefined) {
        album.tracks = tracks;
    }
    return album;
}
// Making three dictionaries representing different albums
const album1 = make_album("Artist1", "Album1");
const album2 = make_album("Artist2", "Album2", 12); // Album with 12 tracks
const album3 = make_album("Artist3", "Album3");
// Printing each return value to show that Objects are storing the album information correctly
console.log(album1);
console.log(album2);
console.log(album3);
//question no41
//Magicians: Make a array of magician’s names. Pass the array to a function called show_magicians(),
//which prints the name of each magician in the array.
function show_magicians(magicians) {
    magicians.forEach((magician) => {
        console.log(magician);
    });
}
let magician_names = ["zee", "zoe", "John", "Tom"];
show_magicians(magician_names);
//question no 42
//Write a function called make_great() that modifies the array of magicians
//by adding the phrase the Great to each magician’s name. Call show_magicians()
//to see that the list has actually been modified.
function show_magician(magicians) {
    magicians.forEach((magician) => {
        console.log(magician);
    });
}
function make_great(magicians) {
    return magicians.map((magician) => `the Great ${magician}`);
}
let magician_name = ["sara", "maria", "georgie", "john"];
magician_name = make_great(magician_name);
show_magician(magician_name);
//question no 43
//Call the function make_great() with a copy of the array of magicians’ names.
//Because the original array will be unchanged, return the new array and store it in a separate array.
//Call show_magicians() with each array to show that you have one array of the original names
// and one array with the Great added to each magician’s name.
function show_Magicians(magicians) {
    magicians.forEach((magician) => {
        console.log(magician);
    });
}
function make_Great(magicians) {
    return magicians.map((magician) => `the Great ${magician}`);
}
let original_magician_names = [
    "sara",
    "maria",
    "georgie",
    "john",
    "zara",
];
let modified_magician_names = make_Great([
    ...original_magician_names,
]);
console.log("Original Magicians:");
show_Magicians(original_magician_names);
console.log("\nModified Magicians:");
show_Magicians(modified_magician_names);
//question no44
//Sandwiches: Write a function that accepts a array of items a person wants on a sandwich.
//The function should have one parameter that collects as many items as the function call provides,
// and it should print a summary of the sandwich that is being ordered. Call the function three times,
//using a different number of arguments each time.
function makeSandwich(items) {
    console.log("Making a sandwich with the following items:");
    items.forEach((item) => {
        console.log(`- ${item}`);
    });
    console.log("Enjoy your sandwich!");
}
makeSandwich(["Ham", "Cheese", "Lettuce"]);
makeSandwich(["Turkey", "Cheese", "Tomato", "Mayonnaise"]);
makeSandwich(["Peanut Butter", "Jelly"]);
function createCar(manufacturer, model, ...options) {
    let car = {
        manufacturer: manufacturer,
        model: model,
    };
    options.forEach((option) => {
        let [key, value] = option;
        car[key] = value;
    });
    return car;
}
let myCar = createCar("Toyota", "CIVIC", ["color", "blue"], ["year", 2024]);
console.log(myCar);
export {};
