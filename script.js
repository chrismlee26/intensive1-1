let button = document.getElementById("clicker"),
    count = 39;
button.onclick = function() {
        count -= 1;
    button.innerHTML = "<pre>Limited Run Pre-Order:          " + count + "/50</pre>";
}