function receivesAFunction(callback){
    callback();
}

//take no arguments
//return a named function


function returnsANamedFunction(){
    return function fn(){
        "Returns an anonymous function"
    }
}
//take no arguments
//return an anonymous function


function returnsAnAnonymousFunction(){
    return function(){
        "Returns an anonymous function"
    }
}