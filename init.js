$(document).ready(function() {

    var textArray = ["penguin1", "penguin2", "penguin3", "penguin4", "penguin5", "penguin6", "penguin7", "penguin8", "yeti"];

    function addMounds() {
        var randomNumber = Math.floor(Math.random() * textArray.length);
        var div = document.createElement('div');
        div.className = textArray[randomNumber];
        $('#items').append(div);
        textArray.splice(randomNumber, 1);
    }

    for (var i = 0; i < textArray.length; i++) {
        addMounds();
        i--;
    }
    //This code will run after your page loads
    $(".yeti").mousedown(function() {
        document.getElementById('growl').play()
        // alert("Oh no!");
    })
});
