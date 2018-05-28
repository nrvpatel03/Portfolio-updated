$(document).ready(function(){
    //global variables
    //Scroll magic controller here
    //functions for populating content
    function populateIntro(){
        var introTitle = $("<p><span class='red-text'>Hi</span>!</p>");
        var introContent = $("<p>My name is <span class='red-text'>Nirav</span>. <br>I'm a <span class='red-text'>full stack web developer</span>. <br>Welcome to my portfolio site!</p>");
        $(".content").append(introTitle).append(introContent);
    }
    populateIntro();
})