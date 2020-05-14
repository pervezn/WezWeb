window.onload = function(){ 
    const factflow = document.getElementById("FactFlow")
    const tropetracker = document.getElementById("TropeTracker")
    const internships = document.getElementById("Internships")
    // const projects = document.getElementById("Projects")
    // const resume = document.getElementById("Resume")

    // console.log("home is: " + home )
    console.log("HEREEEEE2")

    factflow.onclick = function () {
        console.log("FF clicked" )
        location.href = "../HTML/factflow.html"
        
    }   
  
    // projects.onclick = function () {
    //     location.href = "../HTML/projects.html"
    // }
    tropetracker.onclick = function () {
        console.log("TT clicked" )
        location.href = "../HTML/tropetracker.html"
        
    }
    internships.onclick = function () {
        console.log("internships clicked" )
        location.href = "../HTML/internships.html"
        
    }
    
      
    // resume.onclick = function () {
    //     location.href = "../HTML/resume.html"
    // }  


};

