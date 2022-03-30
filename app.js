const http = new easyHTTP

// //GET posts
// http.get('https://jsonplaceholder.typicode.com/posts', function (error, posts) {
//     if (error) {
//         console.log(error);
//     }
//     else {
//         console.log(posts);
//     }
// })

// //GET post
// http.get('https://jsonplaceholder.typicode.com/posts/1', function(error, post){
//     if (error){
//         console.log(error);
//     }
//     else{
//         console.log(post);
//     }
// })

// Create data to be posted
const data = {
    title: 'Master',
    actor: 'Vijay',
    music: 'Anirudh',
};

// //POST data
// http.post('https://jsonplaceholder.typicode.com/posts', data, function (error, post) {
//     if (error) {
//         console.log(error);
//     }
//     else {
//         console.log(post);
//     }
// });

// PUT data
// http.put('https://jsonplaceholder.typicode.com/posts/1', data, function (error, post) {
//     if (error) {
//         console.log(error);
//     }
//     else {
//         console.log(post);
//     }
// })

// DELETE post
http.delete('https://jsonplaceholder.typicode.com/posts/1', function (error, response) {
    if (error) {
        console.log(error);
    }
    else {
        console.log(response);
    }
})