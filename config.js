const firebaseConfig = {
    apiKey: "AIzaSyD7LLwvlpJORmoJSiTTPiFxv69e0SbKR_M",
    authDomain: "software-dbcbe.firebaseapp.com",
    databaseURL: "https://software-dbcbe-default-rtdb.firebaseio.com",
    projectId: "software-dbcbe",
    storageBucket: "software-dbcbe.appspot.com",
    messagingSenderId: "630385049836",
    appId: "1:630385049836:web:b1c77c2d7f803ccdbae5c9"
  };

  firebase.initializeApp(firebaseConfig);

  var contactformDB=firebase.database().ref("software");

  document.getElementById('contact').addEventListener("submit",submitform);

  function submitform(e){
    e.preventDefault();

    var name = getElementVal("name");
    var email = getElementVal("email");
    var feedback = getElementVal("feedback");

    saveMessage(name,email,feedback);


//  enable alert 
    document.querySelector(".alertmessage").style.display = "block";

    // remove alert 
    setTimeout(()=>{
        document.querySelector(".alertmessage").style.display="none";
    },3000);

    // reset form 
    document.getElementById('contact').reset();
  }



  const saveMessage=(name,email,feedback)=>{
    var newcontactform=contactformDB.push();
    newcontactform.set({
        name:name,
        emailid:email,
        message:feedback,
    });
  };

  const getElementVal=(id) =>{
    return document.getElementById(id).value; 
};



















