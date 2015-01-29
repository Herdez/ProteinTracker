Users = new Meteor.Collection('users');


if (Meteor.isClient) {
  Template.userDetails.helpers({
    user: function() {
       return Users.findOne();
    }
  });

  Template.history.helpers({
    historyItem: function() {
      var historyItems =
       [
          { date: '10/31/2013 5:00 AM', value: 20 },
          { date: '10/31/2013 6:00 AM', value: 25 },
          { date: '10/31/2013 7:00 AM', value: 10 },
          { date: '10/31/2013 8:00 AM', value: 5 },
          { date: '10/31/2013 9:00 AM', value: 20 }
          
       ];
       return historyItems;
    }
  });
}

if (Meteor.isServer) {
  Meteor.startup(function () {
    // code to run on server at startup

    if (Users.find().count() === 0 ) {

        Users.insert({
            total: 120,
            goal: 200
        });
    }
  });
}
