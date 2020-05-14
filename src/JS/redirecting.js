window.onload = function(){ 
    const home = document.getElementById("Home")
    const projects = document.getElementById("Projects")
    const movies = document.getElementById("Movies")
    const photos = document.getElementById("Photos")
    const writing = document.getElementById("Writing")
    const travel = document.getElementById("Travel")
    const about = document.getElementById("About")
    // const resume = document.getElementById("Resume")

    console.log("HEREEEEE")
    

    home.onclick = function () {
        console.log("home clicked" )
        location.href = "../HTML/home.html"
        
    }   
    projects.onclick = function () {
        console.log("projects clicked")
        location.href = "../HTML/projects.html"
        
    }
    movies.onclick = function () {
        console.log("movies clicked" )
        location.href = "../HTML/movies.html"
        
    }  
    photos.onclick = function () {
        console.log("photos clicked" )
        location.href = "../HTML/photos.html"
        
    }  
    travel.onclick = function () {
        console.log("travel clicked" )
        location.href = "../HTML/travel.html"
    }  
    writing.onclick = function () {
        console.log("writing clicked")
        location.href = "../HTML/writing.html"
    }  
    about.onclick = function () {
        console.log("about clicked" )
        location.href = "../HTML/about.html"
        
    }  
    // resume.onclick = function () {
    //     location.href = "../HTML/resume.html"
    // }  


};

