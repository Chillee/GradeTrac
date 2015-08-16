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
      

      var grade_accordion = $(htmlCode).find(".hub_general");

      //alert(grade_accordion.text());

      var assignment = $(grade_accordion).find(".float_l.padding_t5");

      console.log($(".float_l.padding_t5"));
      //$(".float_l.padding_t5").each(function() {
        //console.log($(this).text());
      //});
      //var place = htmlCode.search('<title>');
      //var startPlace = place + 7;
      //var endPlace = htmlCode.search("'s Portal");

      //var name = htmlCode.substring(startPlace, endPlace);

      //console.log(assignment.html());
      //var jsonString = '{"gradebook":['+ '{"studentName":"' + name +'"}';
      //console.log(assignment);

      //console.log(name);
      // Clear form 
      event.target.text.value = "";
    }
  });
}