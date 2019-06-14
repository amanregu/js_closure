// 1.
function nonsense(string) {
  var blab = function(){
      alert(string);
    };
    setTimeout(blab,2000);

    return blab;
}
// 2.
var blabLater = nonsense('test string1');

var blabAgainLater = nonsense('test string2');

// 3.
var lastName = function (lName) {
  return function firstName(fName) {
    console.log(lName + " " + fName);
  };
  };
  var newLast = lastName('Regu');
  newLast('Aman');
  var firstNameFarmer = lastName('Farmer'); 
  firstNameFarmer('Brown');  
  var farmLoveStory = storyWriter();
farmLoveStory.addWords('There was once a lonely cow.'); // 'There was once a lonely cow.'
farmLoveStory.addWords('It saw a friendly face.'); //'There was once a lonely cow. It saw a friendly face.'

var storyOfMyLife = storyWriter();
storyOfMyLife.addWords('My code broke.'); // 'My code broke.'
storyOfMyLife.addWords('I ate some ice cream.'); //'My code broke. I ate some ice cream.'
storyOfMyLife.erase(); // ''
  
