document.addEventListener('DOMContentLoaded', solve);

function solve() {
    const senderTextareaEl=document.querySelector('#encode textarea');
    const receiverTextareaEl=document.querySelector('#decode textarea');

    const  encodeBtnEl=document.querySelector('#encode button');
    const  decodeBtnEl=document.querySelector('#decode button');


    encodeBtnEl.addEventListener('click',handleEncodeMessage);
    decodeBtnEl.addEventListener('click',handleDecodeMessage);
    function handleEncodeMessage(e) {
        e.preventDefault();

        const originalMessage=senderTextareaEl.value.trim();
        let encodeMessage='';
        for(const char of originalMessage) {
            const originalAscii=char.charCodeAt();
            const newAscii=originalAscii+1;
            const newChar=String.fromCharCode(newAscii);
            encodeMessage+=newChar;
        }

        senderTextareaEl.value='';
        receiverTextareaEl.value=encodeMessage;
    } 

    function handleDecodeMessage(e) {
        e.preventDefault();

        const encodeMessage=receiverTextareaEl.value.trim();
        let decodedMessage='';

        for (const char of encodeMessage) {
           const originalAscii=char.charCodeAt();
            const newAscii=originalAscii-1;
            const newChar=String.fromCharCode(newAscii);
            decodedMessage+=newChar;
        }

        receiverTextareaEl.value=decodedMessage;
    }
}