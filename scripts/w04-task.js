/* LESSON 3 - Programming Tasks */

/* Profile Object  */
let myProfile = {
    
/* Populate Profile Object with placesLive objects */
    placesLived: [],

/* Name */
    name: "Sawyer Crawley",

/* Photo with attributes */
photo: "images/me.jpg",

/* Favorite Foods List*/
favoriteFoods: [
    'BBQ',
    'Fried Rice',
    'Steak',
    'Mangoes',
    'Coconut Cream Pie'
],

/* Hobbies List */
    hobbies: [
        'Painting',
        'Reading',
        'Gardening',
        'Hiking',
        'Board Games'
    ],
};

/* Places Lived DataList */
myProfile.placesLived.push(
    {
        place: 'Los Angeles, CA',
        length: '18 years'
    },
    {
        place: 'Rexburg, ID',
        length: '4 years'
    }
);

/* DOM Manipulation - Output */
document.querySelector('#name').textContent = myProfile.name;

let photoElement = document.querySelector('#photo');
photoElement.src = myProfile.photo;
photoElement.alt = myProfile.name;

myProfile.favoriteFoods.forEach(food => {
    let li = document.createElement('li');
    li.textContent = food;
    document.querySelector('#favorite-foods').appendChild(li);
});

myProfile.hobbies.forEach(hobby => {
    let li = document.createElement('li');
    li.textContent = hobby;
    document.querySelector('#hobbies').appendChild(li);
});

let placesLivedList = document.querySelector('#places-lived');
myProfile.placesLived.forEach(placeObj => {
    let dtElement = document.createElement('dt');
    dtElement.textContent = placeObj.place;
    let ddElement = document.createElement('dd');
    ddElement.textContent = placeObj.length;
    placesLivedList.appendChild(dtElement);
    placesLivedList.appendChild(ddElement);
});