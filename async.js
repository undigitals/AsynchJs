window.onload = function(){

    function callback(fruit){
        console.log(fruit);
    }

    var fruits = ["banana", "apple", "pear"];

    fruits.forEach(callback);

    console.log("test");
    

    // var http = new XMLHttpRequest();

    // http.onreadystatechange = function(){
    //     if(http.readyState == 4 && http.status == 200){
    //         // console.log(JSON.parse(http.response));
    //     }
    // }

    // http.open("GET", "data/tweets.json", true);
    // http.send();
    // // console.log("test");

    // // jquery method
    // $.get("data/tweets.json", function(data){
    //     console.log(data);
    // });
    // console.log("test");
};

/* Ready States

0 - request not initialized
1 - request has been set up
2 - request has been sent
3 - request is in process
4 - request is complete

 */