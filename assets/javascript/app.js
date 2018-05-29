$(document).ready(function(){
    //global variables
    //Scroll magic controller here
    //functions for materialize
    $(".dropdown-trigger").dropdown({
        hover: true,
        belowOrigin: true,
        alignment: 'left',
        coverTrigger: false,
        inDuration: 200,
        outDuration: 400,
        closeOnClick: false
    });
    //functions for populating content
    function populateIntro(){
        var introTitle = $("<p class='head-text'><span class='red-text'>Hi</span>!</p>");
        var introContent = $("<p id='intro-text'>My name is <span class='red-text'>Nirav</span>. <br>I'm a <span class='red-text'>full stack web developer</span>. <br>Welcome to my portfolio site!</p>");
        $(".content").append(introTitle).append(introContent);
    }
    populateIntro();
})