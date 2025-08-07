function attachGradientEvents() {
    const gradientDivEl=document.getElementById('gradient');
    const resultDivEl=document.getElementById('result');

    gradientDivEl.addEventListener('mousemove',calculateXPercentage);

    function calculateXPercentage(e) {
        const percentage=Math.floor(e.offsetX/e.target.clientWidth*100);
        resultDivEl.textContent=`${percentage}%`;

    }
}
