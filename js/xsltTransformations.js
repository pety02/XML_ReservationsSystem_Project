// Function to load an XML or XSL file
function loadFile(filePath, callback) {
    const xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
        if (this.readyState === 4 && this.status === 200) {
            callback(this.responseXML);
        }
    };
    xhttp.open("GET", filePath, true);
    xhttp.send();
}