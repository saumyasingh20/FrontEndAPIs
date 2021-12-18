function fetchRandomDogImage(){

    // creating a request object
    var xhrRequest = new XMLHttpRequest();


    

    //initialise the request
    xhrRequest.open('get','https://dog.ceo/api/breeds/image/random',true);

    // 1. method 
    // 2. the link we want to hit 
    // 3. asynchronous or not ( true for asynchronous , false for synchronous)

//************ */

    //make a request to the server using send 
    xhrRequest.send();
    xhrRequest.onload = function(){
        //creating a JSON object so that we can access the message as key value-pair
        console.log(xhrRequest.response);

        //to convert a string into JSON objet use json.parse
        var responseJSON = JSON.parse(xhrRequest.response);
        var imageURl = responseJSON.message;
        $('#dog-image').attr('src',imageURl);

    }

}

//handling the click event at fetch button by using fetchRandomDogImage
$('#fetch').click(fetchRandomDogImage);