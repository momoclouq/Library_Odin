  // Set the configuration for your app
  // TODO: Replace with your project's config object
  var firebaseConfig = {
    apiKey: "AIzaSyCSZ21i6GtD8n8rMsGPlYPvVxHDRfaxITE",
    authDomain: "library-odin-f6f29.firebaseapp.com",
    databaseURL: "https://library-odin-f6f29-default-rtdb.firebaseio.com",
    projectId: "library-odin-f6f29",
    storageBucket: "library-odin-f6f29.appspot.com",
    messagingSenderId: "473658519757",
    appId: "1:473658519757:web:ef649c81187e243d95f984",
    measurementId: "G-RQM6XZ7JZX"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  // Get a reference to the database service
  const preObject = document.getElementById("object");

  //create reference
  const dbRefObject = firebase.database().ref().child('object');

  //sync object changes
  dbRefObject.on('value', snap => console.log(snap.val()));