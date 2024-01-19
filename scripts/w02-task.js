/* W02-Task - Profile Home Page */

/* Step 1 - Setup type tasks - no code required */

/* Step 2 - Variables */
let fullName = 'Sawyer Crawley';
let currentYear = '2024';
let profilePicture = 'images/me.jpg';

/* Step 3 - Element Variables */
const nameElement = document.getElementById('name');
const foodElement = document.getElementById('food');
const yearElement = document.querySelector('#year');
const imageElement = profilePicture;

/* Step 4 - Adding Content */
nameElement.innerHTML = `<strong>${fullName}</strong>`;
yearElement.textContent = currentYear;
imageElement.setAttribute('src', 'profilePicture');
imageElement.setAttribute('alt', `Profile image of ${fullName}`);

/* Step 5 - Array */
let favoriteFoods = ['Sushi', 'Mangoes', 'Everything Bagels', 'Steak', 'Shrimp']
favoriteFoods.forEach(food => {
    const foodItem = document.createElement('div');
    foodItem.textContent = food;
    foodElement.appendChild(foodItem);
  });
let newFavoriteFood = 'BLTs';
favoriteFoods.push(newFavoriteFood);
foodElement.innerHTML += `<br>${favoriteFoods}`;
favoriteFoods.shift();
favoriteFoods.forEach(food => {
    const foodItem = document.createElement('div');
    foodItem.textContent = food;
    foodElement.appendChild(foodItem);
    foodElement.innerHTML += '<br>';
  });
favoriteFoods.pop();
favoriteFoods.forEach(food => {
    const foodItem = document.createElement('div');
    foodItem.textContent = food;
    foodElement.appendChild(foodItem);
    foodElement.innerHTML += '<br>';
  });
