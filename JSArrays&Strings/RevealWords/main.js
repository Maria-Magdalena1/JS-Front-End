function reveal(str,template){
    let arr=str.split(', ');
    let templates=template.split(' ');
    let count=1;
    for (let i=0;i<templates.length;i++) {
        if (templates[i].includes('*')) {
            let templateLength=templates[i].length;

            for (let j=0;j<arr.length;j++) {
                if (arr[j].length===templateLength) {
                    templates[i]=arr[j];
                    break;
                }
            }
        }
    }
    console.log(templates.join(' '));
}

reveal('great','softuni is ***** place for learning new programming languages');