"use strict";
// ========== GLOBAL VARIABLES ========== //
const _db = firebase.firestore();
const _dataRef = _db.collection("sustainabilityData");
let _sustainabilityData;

// listen for changes on _dataRef
_dataRef.orderBy("year").onSnapshot(function(snapshotData) {
  _sustainabilityData = []; // reset _sustainabilityData
  for (let doc of snapshotData.docs) { // loop trough the docs
    let docData = doc.data(); // save the doc data in the variable docData
    docData.id = doc.id; // add the doc id to the docData object
    _sustainabilityData.push(docData); // push docData to the global variable _sustainabilityData
  }
  appendCows(_sustainabilityData); // call appendCows with _sustainabilityData as function argument
  appendCarbonFootprint(_sustainabilityData); //call appendCarbonFootprint with _sustainabilityData as function argument
});

function appendCows(sustainabilityData) {
  console.log(sustainabilityData);
  // TODO: prepare data for the chart
  // TODO: create the chart with options
}

function appendCarbonFootprint(sustainabilityData) {
  console.log(sustainabilityData);
  // TODO: prepare data for the chart
  // TODO: create the chart with options
}