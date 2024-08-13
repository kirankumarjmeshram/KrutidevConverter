function check () {
    throw new Error("Required parameter")
}

function abc(a= check()){
    return a;
}

console.log(abc())