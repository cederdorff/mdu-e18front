"use strict";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCMyBxTqrwDePj6kSVgD5rVsEQ-66FCoCk",
  authDomain: "mdu-e18front.firebaseapp.com",
  databaseURL: "https://mdu-e18front.firebaseio.com",
  projectId: "mdu-e18front",
  storageBucket: "mdu-e18front.appspot.com",
  messagingSenderId: "1065294705229",
  appId: "1:1065294705229:web:81f00c89d44d800c75e204"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();
const userRef = db.collection("users");

let selectedUserID = "";

// ========== READ ==========
// watch the database ref for changes
userRef.onSnapshot(function(snapshotData) {
  let users = snapshotData.docs;
  appendUsers(users);
});

// append users to the DOM
function appendUsers(users) {
  let htmlTemplate = "";
  for (let user of users) {
    console.log(user.id);
    console.log(user.data().name);
    htmlTemplate += `
    <article>
      <h2>${user.data().name}</h2>
      <p><a href="mailto:${user.data().mail}">${user.data().mail}</a></p>
      <button onclick="deleteUser('${user.id}')">DELETE</button>
      <button onclick="selectUser('${user.id}', '${user.data().name}', '${user.data().mail}')">UPDATE</button>
    </article>
    `;
  }
  document.querySelector('#content').innerHTML = htmlTemplate;
}

// ========== CREATE ==========
// add a new user to firestore (database)
function createUser() {
  // references to the input fields
  let nameInput = document.querySelector('#name');
  let mailInput = document.querySelector('#mail');
  console.log(nameInput.value);
  console.log(mailInput.value);

  let newUser = {
    name: nameInput.value,
    mail: mailInput.value
  };

  userRef.add(newUser);
}

// ========== UPDATE ==========

function selectUser(id, name, mail) {
  console.log(id);
  selectedUserID = id;
  let nameInput = document.querySelector('#name-update');
  let mailInput = document.querySelector('#mail-update');
  nameInput.value = name;
  mailInput.value = mail;

}

function updateUser() {
  let nameInput = document.querySelector('#name-update');
  let mailInput = document.querySelector('#mail-update');

  let userToUpdate = {
    name: nameInput.value,
    mail: mailInput.value
  };
  userRef.doc(selectedUserID).set(userToUpdate);
}

// ========== DELETE ==========
function deleteUser(id) {
  userRef.doc(id).delete();
}