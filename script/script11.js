window.onload = function () {

//var clickMeButton = document.getElementById('clickMe');
//clickMeButton.onclick = runTheExample;
document.getElementById('clickMe').onclick = runTheExample;
}
/*
function runTheExample() {
  alert('Running the example');
}
*/


function runTheExample() {
  /*
  var myElement = document.getElementById('second');

  var myNodeName = myElement.nodeName;
  //alert(myNodeName);

  if (myElement != null) {
    alert(myElement.innerHTML);
  }
  

  document.getElementById('second').innerHTML = "See how I set the text here?";
*/
 /*
  var listOfParagraphs = document.getElementsByTagName('p');

  //console.log(listOfParagraphs.length);

  var secondParagraph = listOfParagraphs[1];
  console.log(secondParagraph.innerHTML);
*/
/*
myElement = document.getElementById('second');
console.log(myElement.parentNode.nodeName);
*/

/*
myElement.childNodes[0];
myElement.firstChild;
myElement.lastChild;

myElement.nextSibling;
myElement.previousSibling;
*/

var anchor = document.getElementById('myAnchor');
//var anchorDestination = anchor.href;
//console.log(anchorDestination);

anchor.href = "https://www.freecodecamp.org/alexdanicic";
}