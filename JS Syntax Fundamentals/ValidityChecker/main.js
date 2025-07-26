function  checkDistanceValidity(x1,y1,x2,y2) {
     function distance(xa, ya, xb, yb) {
        return Math.sqrt((xb - xa) ** 2 + (yb - ya) ** 2);
    }

    function isValidDistance(dist) {
        return Number.isInteger(dist);
    }

    let dist1 = distance(x1, y1, 0, 0);
    console.log(`{${x1}, ${y1}} to {0, 0} is ${isValidDistance(dist1) ? 'valid' : 'invalid'}`);

    let dist2 = distance(x2, y2, 0, 0);
    console.log(`{${x2}, ${y2}} to {0, 0} is ${isValidDistance(dist2) ? 'valid' : 'invalid'}`);

    let dist3 = distance(x1, y1, x2, y2);
    console.log(`{${x1}, ${y1}} to {${x2}, ${y2}} is ${isValidDistance(dist3) ? 'valid' : 'invalid'}`);
}

checkDistanceValidity(3, 0, 0, 4);
checkDistanceValidity(2, 1, 1, 1);