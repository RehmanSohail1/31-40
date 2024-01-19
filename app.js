// chapter 30 to 34


// var dObj = new Date();
// console.log(dObj);

// var dStr = new Date().toString();
// console.log(dStr)

// var d = new Date();
// var day = d.getDay();
// console.log(day)

// var d = 3;
// var dayNames = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
// alert("Today is " + dayNames[d]);



// var currentDate = new Date();

// var year = currentDate.getFullYear();
// var month = currentDate.getMonth() + 1; 
// var day = currentDate.getDate();
// var hours = currentDate.getHours();
// var minutes = currentDate.getMinutes();
// var seconds = currentDate.getSeconds();

// console.log("Year: " + year);
// console.log("Month: " + month);
// console.log("Day: " + day);
// console.log("Hours: " + hours);
// console.log("Minutes: " + minutes);
// console.log("Seconds: " + seconds);


// var later = new Date(2020, 11, 31);
// console.log(later)


// var myDate = new Date(1992, 1, 2);
// console.log(myDate)

// alert(new Date(1980, 0, 1).getTime());



// var myDate = new Date();
// myDate.setFullYear(2022);
// console.log(myDate);



// function changeToJanuary(inputDate) {
   
//     if (!(inputDate instanceof Date)) {
//         console.error("Invalid input. Please provide a Date object.");
//         return;
//     }
//     inputDate.setMonth(0);
//     return inputDate;
// }
// var originalDate = new Date(2022, 6, 15); 
// var updatedDate = changeToJanuary(originalDate);

// console.log("Original Date:", originalDate);
// console.log("Updated Date:", updatedDate);


// var myDate = new Date(2022, 0, 15); 
// console.log("Original Day:", myDate.toLocaleString('en-US', { weekday: 'long' }));
// var newDate = new Date(2022, 0, 20);
// console.log("New Day:", newDate.toLocaleString('en-US', { weekday: 'long' }));




// function changeMinutes(inputTime) {
 
//     if (!(inputTime instanceof Date)) {
//         console.error("Invalid input. Please provide a Date object.");
//         return;
//     }
//     var newMinutes = prompt("Enter the new minutes value:");
//     newMinutes = parseInt(newMinutes, 10);
//     if (isNaN(newMinutes) || newMinutes < 0 || newMinutes >= 60) {
//         console.error("Invalid minutes value. Please enter a valid number between 0 and 59.");
//         return;
//     }
//     inputTime.setMinutes(newMinutes);

//     return inputTime;
// }
// var originalTime = new Date();
// console.log("Original Time:", originalTime);

// var updatedTime = changeMinutes(originalTime);
// console.log("Updated Time:", updatedTime);



// function addHours(inputTime, hoursToAdd) {
   
//     if (!(inputTime instanceof Date)) {
//         console.error("Invalid input. Please provide a Date object.");
//         return;
//     }

//     hoursToAdd = parseFloat(hoursToAdd);
//     if (isNaN(hoursToAdd)) {
//         console.error("Invalid hours value. Please enter a valid number.");
//         return;
//     }

//     inputTime.setHours(inputTime.getHours() + hoursToAdd);

//     return inputTime;
// }
// var originalTime = new Date();
// console.log("Original Time:", originalTime);

// var hoursToAdd = prompt("Enter the number of hours to add:");
// var updatedTime = addHours(originalTime, hoursToAdd);
// console.log("Updated Time:", updatedTime);


// function calculateAge() {

//     var birthYear = prompt("Enter your birth year:");
//     birthYear = parseInt(birthYear, 10);
//     if (isNaN(birthYear) || birthYear <= 0) {
//         console.error("Invalid input. Please enter a valid positive year.");
//         return;
//     }
//     var currentYear = new Date().getFullYear();
//     var age = currentYear - birthYear;
//     alert("Your age is: " + age);
// }
// calculateAge();



