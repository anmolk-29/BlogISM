let firebaseConfig = {
    // Enter your firebase credentials
    apiKey: "AIzaSyAAw36cdiuGwFIv2qdVPqFzGZGOx0j_8qs",
    authDomain: "blogism-ce82d.firebaseapp.com",
    projectId: "blogism-ce82d",
    storageBucket: "blogism-ce82d.appspot.com",
    messagingSenderId: "772367546370",
    appId: "1:772367546370:web:485715355eb115d5dc4f1b"
};

firebase.initializeApp(firebaseConfig);

let db = firebase.firestore();
let auth = firebase.auth();

const logoutUser = () => {
    auth.signOut();
    location.reload();
}