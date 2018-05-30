
function duplicate(word){
  var new_word = word.concat(word);
  var myChildren = word.concat(word);
  return new_word;
}
console.log(duplicate(['let', 'the', 'suicide', 'doors', 'up']));
// ❯ ['let', 'the', 'suicide', 'doors', 'up', 'let', 'the', 'suicide', 'doors', 'up']
