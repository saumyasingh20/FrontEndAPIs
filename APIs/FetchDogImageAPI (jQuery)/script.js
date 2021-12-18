function fetchRandomDogImage(){

//ajax() method is used to send asynchronous HTTP requests to the server
// $.ajax({
//     url:'https://dog.ceo/api/breeds/image/random',
//     method:'GET',
//     success: function(responseData){
//         //already in JSON so no need to convert
//         var imageURl = responseData.message;
//         $('#dog-image').attr('src',imageURl);

//     }
// });
//alternatively you can use get method

$.get('https://dog.ceo/api/breeds/image/random',function(responseData){
    //already in JSON so no need to convert
    var imageURl = responseData.message;
    $('#dog-image').attr('src',imageURl);

});

}


//handling the click event at fetch button by using fetchRandomDogImage
$('#fetch').click(fetchRandomDogImage);