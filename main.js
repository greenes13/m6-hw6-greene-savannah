var button = document.getElementsByTagName ('button')[0]

var ourRandomRestaurantItem = document.createElement('p');
var restaurantItemWrapper = document.getElementById('generator-results');
restaurantItemWrapper.appendChild(ourRandomRestaurantItem);

var placeholderText = document.createTextNode('');
ourRandomRestaurantItem.appendChild(placeholderText);

var restaurantItems = ['Hivolt', 'Steins Market and Deli', 'District Donuts', 'Turkey and the Wolf', 'Saba', 'La Boulangerie', 'Cochon', 'Pizza Domenica', 'Mais Arepas', 'Parkway Poboys' , 'Dat Dog', 'Peche']

var myFunction = function() {
  restaurantItems.sort(function(a, b){return 0.5 - Math.random()});
  var ourRandomRestaurantItemFiller = document.createTextNode(restaurantItems[0]);
  ourRandomRestaurantItem.appendChild(ourRandomRestaurantItemFiller);
  var ourButton = document.getElementById('generator-button');
  ourButton.removeChild(button);
  ourRandomRestaurantItem.classList.add('grow:hover');
};

button.onclick = myFunction;
