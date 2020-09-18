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