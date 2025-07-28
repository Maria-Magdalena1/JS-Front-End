function login(array) {
    let username=array[0];
    let correctPassword='';
    for (let i=username.length-1;i>=0;i--) {
        correctPassword+=username[i];
    }
    let count=0;
    for (let i=1;i<array.length;i++) {
        if (count==4) {
            console.log("User " +username+" blocked!");
            return;
        }
        let password=array[i];
        if (password===correctPassword) {
            console.log(`User ${username} logged in.`);
            return;
        } else {
            console.log("Incorrect password. Try again.");
            count++;
        }
    }

}

login(['Acer','login','go','let me in','recA']);