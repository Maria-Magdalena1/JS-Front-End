function splitter(text) {
    const words=text.match(/[A-Z][a-z]*/g);
    console.log(words.join(', '));
}

splitter('SplitMeIfYouCanHaHaYouCantOrYouCan');