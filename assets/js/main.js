var count = 0;
var btn = document.getElementById("btn");
var view = document.getElementById("loop");

btn.onclick = function () {
    count++;
    view.innerHTML = "vous avez cliqué une: "+ count + "fois";
}
