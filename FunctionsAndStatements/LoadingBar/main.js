function solve(number) {
    const totalBlocks=10;
    const filledBlocks=number/10;
    const emptyBlocks=totalBlocks-filledBlocks;
    const bar='%'.repeat(filledBlocks)+'.'.repeat(emptyBlocks);

    if (number===100) {
        console.log("100% Complete!");
        console.log(`[${bar}]`);
        
    } else {
        console.log(`${number}% [${bar}]`);
        console.log("Still loading...");
    }
}

solve(30);