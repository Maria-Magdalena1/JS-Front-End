function editElement(htmlEl,match,replacer) {
    let htmlContent=htmlEl.textContent;
    htmlContent=htmlContent.replaceAll(match,replacer);

    htmlEl.textContent=htmlContent;
}

