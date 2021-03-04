import firebase from "firebase";

var firebaseConfig = {
  apiKey: "AIzaSyAz_5e9Ci3oLBpMT_nkZlJelPbxkCiyT6M",
  authDomain: "spherical-being-304114.firebaseapp.com",
  databaseURL: "https://spherical-being-304114-default-rtdb.firebaseio.com",
  projectId: "spherical-being-304114",
  storageBucket: "spherical-being-304114.appspot.com",
  messagingSenderId: "359502729759",
  appId: "1:359502729759:web:4ae54e757d540d483a3b2a",
  measurementId: "G-35FWNQGNXF"
};
const fire = firebase.initializeApp(firebaseConfig);

export default fire;
