window.onload = function(){

    $.get("data/tweets.json").then(function(tweets){
        console.log(tweets);

        return $.get("data/friends.json");
    }).then(function(friends){
        console.log(friends);

        return $.get("data/videos.json");
    }).then(function(videos){
        console.log(videos);
    });
}



// window.onload = function(){

//     function get(url){
//         return new Promise(function(resolve, reject){
//             // XMLHttpRequest() creates new constructor
//             var xhttp = new XMLHttpRequest();
//             xhttp.open("GET", url, true);
//             xhttp.onload = function(){
//                 if(xhttp.status == 200){
//                     resolve(JSON.parse(xhttp.response));
//                 }else{
//                     reject(xhttp.statusText);
//                 }
//             };
//             xhttp.onerror = function(){
//                 reject(xhttp.statusText);
//             };
//             xhttp.send();
//         });
//     }




//     var promise = get("data/tweets.json");
//     promise.then(function(tweets){
//         console.log(tweets);

//         return get("data/friends.json");
//     }).then(function(friends){
//         console.log(friends);

//         return get("data/videos.json");
//     }).then(function(videos){
//         console.log(videos);

//     }).catch(function(error){
//         console.log(error);
//     });
// };




// // window.onload = function(){

// //     function handleError(jqXHR, textStatus, error){
// //         console.log(error);
// //     };

// //     $.ajax({
// //         type: "GET",
// //         url: "data/tweets.json",
// //         success: cbTweets,
// //         error: handleError
// //     });

// //     function cbTweets(data){
// //         console.log(data);
    
// //         $.ajax({
// //             type: "GET",
// //             url: "data/friends.json",
// //             success: cbFriends,
// //             error: handleError
// //         });

// //       }      
      
// //     function cbFriends(data){
// //         console.log(data);

// //         $.ajax({
// //             type: "GET",
// //             url: "data/videos.json",
// //             success: function(data){
// //                 console.log(data);
// //             },
// //             error: handleError
// //         });
// //     }
        
// // };




// // // window.onload = function(){

// // //     function callback(fruit){
// // //         console.log(fruit);
// // //     }

// // //     var fruits = ["banana", "apple", "pear"];

// // //     fruits.forEach(callback);

// // //     console.log("test");

    

// // //     // var http = new XMLHttpRequest();

// // //     // http.onreadystatechange = function(){
// // //     //     if(http.readyState == 4 && http.status == 200){
// // //     //         // console.log(JSON.parse(http.response));
// // //     //     }
// // //     // }

// // //     // http.open("GET", "data/tweets.json", true);
// // //     // http.send();
// // //     // // console.log("test");

// // //     // // jquery method
// // //     // $.get("data/tweets.json", function(data){
// // //     //     console.log(data);
// // //     // });
// // //     // console.log("test");
// // // };

// // // /* Ready States

// // // 0 - request not initialized
// // // 1 - request has been set up
// // // 2 - request has been sent
// // // 3 - request is in process
// // // 4 - request is complete

// // //  */