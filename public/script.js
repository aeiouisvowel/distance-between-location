let calculateDistance = () => {
    let origins = document.getElementById("fromLocation").value;
    let destinations = document.getElementById("toLocation").value;
    console.log(origins);
    console.log(destinations);

    var xhttp = new XMLHttpRequest();

    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            console.log(this.responseText);
        }
    };

    xhttp.open("POST", "/calc-distance", true);
    xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    xhttp.send("origins=" + origins + "&destinations=" + destinations);
}