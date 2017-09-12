/*

Use a trie to store urls

Solved by: Andrea Law
Date: 22 Aug 2017

*/
function Trie() {
  this.rootNode = {};
}

Trie.prototype.checkPresentAndAdd = function (link) {
  
  var currentNode = this.rootNode;
  var isNewWord = false;

  for (var i = 0; i < link.length; i++) {

    var char = link.charAt(i);

    if (!currentNode.hasOwnProperty(char)) {
      isNewWord = true;
      currentNode[char] = {};
    }
  
    currentNode = currentNode[char];
  
  }

  if (!currentNode.hasOwnProperty("End of word")) {
    isNewWord = true;
    currentNode["End of word"] = {};
  }

  return isNewWord;
}

var visitedUrls = new Trie();
console.log(visitedUrls.checkPresentAndAdd("www.face.com")); // true
console.log(visitedUrls.checkPresentAndAdd("www.face.com")); // false
console.log(visitedUrls.checkPresentAndAdd("www.facebook.com")); // true
console.log(visitedUrls.rootNode);
