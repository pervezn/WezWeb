window.onload = function(){ 
    const home = document.getElementById("Home")
    const projects = document.getElementById("Projects")
    const movies = document.getElementById("Movies")
    const photos = document.getElementById("Photos")
    const writing = document.getElementById("Writing")
    const travel = document.getElementById("Travel")
    const about = document.getElementById("About")
    // const resume = document.getElementById("Resume")

    console.log("home is: " + home )

    home.onclick = function () {
        location.href = "../HTML/home.html"
    }   
    projects.onclick = function () {
        location.href = "../HTML/projects.html"
    }
    movies.onclick = function () {
        location.href = "../HTML/movies.html"
    }  
    photos.onclick = function () {
        location.href = "../HTML/photos.html"
    }  
    travel.onclick = function () {
        location.href = "../HTML/travel.html"
    }  
    writing.onclick = function () {
        location.href = "../HTML/writing.html"
    }  
    about.onclick = function () {
        location.href = "../HTML/about.html"
    }  
    // resume.onclick = function () {
    //     location.href = "../HTML/resume.html"
    // }  


};

