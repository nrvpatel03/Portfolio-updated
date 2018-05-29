$(document).ready(function(){
    //global variables
    //Scroll magic controller here
    //functions for materialize
    $(".dropdown-trigger").dropdown({
        alignment: 'left',
        coverTrigger: false,
        inDuration: 200,
        outDuration: 400
    });
    //populating content
    var introTitle = $("<p class='currentTitle' id='intro-headText'><span class='red-text'>Hi</span>!</p>");
    var introContent = $("<p class='currentContent' id='intro-text'>My name is <span class='red-text'>Nirav</span>. <br>I'm a <span class='red-text'>full stack web developer</span>. <br>Welcome to my portfolio site!</p>");
    var introDiv =$("<div class='content'></div>");

    var aboutTitle = $("<p class='currentTitle' id='about-headText'><span class='red-text'>About Me</span>:</p>");
    var aboutContent = $("<p id='about-text' class='currentContent'>SampleText SampleText SampleText SampleText SampleText SampleText SampleText SampleText SampleText SampleText SampleText</p>")
    var aboutDiv =$("<div class='content'></div>");

    
    introDiv.append(introTitle).append(introContent);
    aboutDiv.append(aboutTitle).append(aboutContent);
    $("#attachDiv").append(introDiv).append(aboutDiv);
    introDiv.show();
    aboutDiv.hide();
//click functions
    $("#aboutPage").click(function(){
        introDiv.fadeOut(1000,function(){
            aboutDiv.fadeIn(1000);
        });
    })
    $("#homePage").click(function(){
        aboutDiv.fadeOut(1000,function(){
            introDiv.fadeIn(1000);
        });
    })
})