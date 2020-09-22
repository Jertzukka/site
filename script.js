function findString(string) {
}

function Search() {
    var searchterm = document.getElementById("searchbox").value
    

    file = fopen(getScriptPath("./monni.log"), 0);
    file_length = flength(file);
    content = fread(file, file_length);

    document.getElementById("logbox").value = content

    //let foundItems = arr.filter(callback(element[, index, [array]])[, thisArg])
}

function upgradeImage(object) {
    var id = object.id;
    var target = "html"

    document.getElementById(target).style.backgroundImage = "url(" + object.src + ")";
}

function is_cached(src) {
    var image = new Image();
    image.src = src;

    return image.complete;
}