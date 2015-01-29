if (Meteor.isClient) {
  Template.userDetails.helpers({
    user: function() {
       var user = {
         total: 123,
         goal: 251
       };
       return user;
    }
  });
}

if (Meteor.isServer) {
  Meteor.startup(function () {
    // code to run on server at startup
  });
}
