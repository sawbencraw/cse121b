/* W02-Task - Profile Home Page */

/* Step 1 - Setup type tasks - no code required */

/* Step 2 - Variables */
const fullName = 'Sawyer Crawley';
const currentYear = new Date().getFullYear();
const profilePicture = 'images/me.jpg';

/* Step 3 - Element Variables */
const nameElement = document.getElementById('name');
const foodElement = document.getElementById('food');
const yearElement = document.querySelector('#year');
const imageElement = document.querySelector('img');

/* Step 4 - Adding Content */
nameElement.innerHTML = `<strong>${fullName}</strong>`;
yearElement.textContent = currentYear;
imageElement.setAttribute('src', profilePicture);
imageElement.setAttribute('alt', `Profile image of ${fullName}`);

/* Step 5 - Array */
let favoriteFoods = ["Burritos", "Steak", "Terriyaki Chicken", "Pistachio Icecream", "Buffalo Wings", "Root Beer"];

foodElement.innerHTML = favoriteFoods.join;
let newFood = 'Pineapple';
favoriteFoods.push(newFood);
foodElement.innerHTML += `<br>${favoriteFoods}`;