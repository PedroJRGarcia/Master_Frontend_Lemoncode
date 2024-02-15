function biggestWord(phrase) {
    const sortedStrArray = phrase
    .split(' ')
    .sort((strA, strB) => strB.length - strA.length);
    return sortedStrArray[0];
}

console.log(biggestWord("This is a sentence that could include many words"));
console.log(biggestWord("Basic Javascript exercices"));