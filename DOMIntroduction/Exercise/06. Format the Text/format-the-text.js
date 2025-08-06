function solve() {
  const textareaEl=document.getElementById('input');
  const outputEl=document.getElementById('output');

  const text=textareaEl.value.trim();
  const sentences=text.split('.').filter(sentence=>sentence.length>0);

  let currentParagraph='';
  for (let i=0;i<sentences.length;i++) {
    const sentence=sentences[i].trim();
    currentParagraph+=sentence+'.';

    if ((i+1)%3===0|| i===sentences.length-1) {
      const paragraphEl=`<p>${currentParagraph}</p>`;
      outputEl.innerHTML+=paragraphEl;
      currentParagraph='';
      
    }
  }

}