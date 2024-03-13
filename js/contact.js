const firebaseConfig = {
  apiKey: "AIzaSyAl6JnMvoAytz67k7GK7AmvDo8NG0SL5dk",
  authDomain: "contact-53d5a.firebaseapp.com",
  databaseURL: "https://contact-53d5a-default-rtdb.firebaseio.com",
  projectId: "contact-53d5a",
  storageBucket: "contact-53d5a.appspot.com",
  messagingSenderId: "1035908263128",
  appId: "1:1035908263128:web:a1c8b3c17343a512017bad"
};


// initialize firebase
firebase.initializeApp(firebaseConfig);

// reference your database
var contactFormDB = firebase.database().ref("contactForm");

document.getElementById("contactForm").addEventListener("submit", submitForm);

function submitForm(e) {
  e.preventDefault();

  var name = getElementVal("name");
  var emailid = getElementVal("emailid");
  var msgContent = getElementVal("msgContent");

  saveMessages(name, emailid, msgContent);

  //   enable alert
  document.querySelector(".alert").style.display = "block";

  //   remove the alert
  setTimeout(() => {
    document.querySelector(".alert").style.display = "none";
  }, 3000);

  //   reset the form
  document.getElementById("contactForm").reset();
}

const saveMessages = (name, emailid, msgContent) => {
  var newContactForm = contactFormDB.push();

  newContactForm.set({
    name: name,
    emailid: emailid,
    msgContent: msgContent,
  });
};

const getElementVal = (id) => {
  return document.getElementById(id).value;
};