Tasks = new Mongo.Collection("tasks");

console.log("hi");
if (Meteor.isClient) {
  // This code only runs on the client
  Template.body.helpers({
    tasks: function () {
      return Tasks.find({});
    }
  });

  Template.body.events({
    "submit .new-task": function (event) {
      // Prevent default browser form submit
      event.preventDefault();
 
      // Get value from form element
      var htmlCode = event.target.text.value;
      var htmlCode = "<div>" + htmlCode + "</div>";

      var gradeBook = {}
      gradeBook["ajax_accordion"] = $(htmlCode).find(".nav_employee").text();
      alert($(htmlCode).find(".nav_employee").text());
      //var place = htmlCode.search('<title>');
      //var startPlace = place + 7;
      //var endPlace = htmlCode.search("'s Portal");

      //var name = htmlCode.substring(startPlace, endPlace);


      //var jsonString = '{"gradebook":['+ '{"studentName":"' + name +'"}';
      console.log(gradeBook);

      //console.log(name);
      // Clear form
      event.target.text.value = "";
    }
  });
}