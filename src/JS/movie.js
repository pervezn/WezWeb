window.onload = function() {

    const firebaseConfig = {
        apiKey: "AIzaSyCVCGlSOSxJoz81l9I9KYyRWbqNn2w6Eaw",
        authDomain: "wezweb-deeb7.firebaseapp.com",
        databaseURL: "https://wezweb-deeb7.firebaseio.com",
        projectId: "wezweb-deeb7",
        storageBucket: "wezweb-deeb7.appspot.com",
        messagingSenderId: "656579364634",
        appId: "1:656579364634:web:f6058d0e0a72fa10780ea3",
        measurementId: "G-H62D2ZD4DY"
      };
      
    firebase.initializeApp(firebaseConfig);

    var storage = firebase.storage();
    
    const fetchMovie = async () => {
        const dl = firebase.storage().ref().child("DevilsLake.mp4");
        const seattle = firebase.storage().ref().child("Seattle2018.mp4");
        const summer = firebase.storage().ref().child("Summer2019.mp4");
        const spain = firebase.storage().ref().child("SpainHighlights!.mp4");
        await dl.getDownloadURL().then((url)  => {
            setDL(url);
        }); 
        await seattle.getDownloadURL().then((url)  => {
            setSeattle(url);
        }); 
        
        await spain.getDownloadURL().then((url)  => {
            setSpain(url);
        }); 

        await summer.getDownloadURL().then((url)  => {
            setSummer(url);
        }); 
    }
    fetchMovie();

}