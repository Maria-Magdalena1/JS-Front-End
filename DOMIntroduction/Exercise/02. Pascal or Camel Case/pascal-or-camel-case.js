function solve() {
  const textInputEl=document.getElementById('text');
  const namingConventionEl=document.getElementById('naming-convention');

  const resultSpanEl=document.getElementById('result');

  const textToConvert=textInputEl.value.trim().toLowerCase();
  const words=textToConvert.split(' ');
  const namingConvention=namingConventionEl.value.trim();

  if (namingConvention==='Camel Case') {
    resultSpanEl.textContent=words[0]+words.slice(1).map(word=>word[0].toUpperCase()+word.slice(1)).join('');
  } else if (namingConvention==='Pascal Case') {
    resultSpanEl.textContent=words.map(word=>word[0].toUpperCase()+word.slice(1)).join('');
  } else {
    resultSpanEl.textContent='Error!';
  }
}
