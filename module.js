/*
//-------======Example of exporting ====------
function avatar(){
    console.log("Avatar : 2013");
}

function SanAndrace(){
    console.log("San andres : 2015");
}

module.exports.ava = avatar;
*/

//-----====Example of Exporting(2)====-----
module.exports = {
  printAvatar : function(){
      console.log("Avatar");
  },

  printPrestige : function(){
      console.log("Prestige");
  },

  printDarkNight : function(){
      console.log("Dark Night Rises");
  },

  printConjuring : "Conjuring"

};