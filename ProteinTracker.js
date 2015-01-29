Users = new Meteor.Collection('users');
History = new Meteor.Collection('history');

if (Meteor.isClient) {
  Template.userDetails.helpers({
    user: function() {
       return Users.findOne();
    }
  });

  Template.history.helpers({
    historyItem: function() {
       return History.find();
    }
  });

  Template.userDetails.events({
     'click #addAmount' : function(e) {
        e.preventDefault();

        var amount = parseInt($('#amounts').val());

        Users.update(this._id, { $inc: { totals: amount }});
     }
  });

}

if (Meteor.isServer) {
  Meteor.startup(function () {
    // code to run on server at startup

    if (Users.find().count() === 0 ) {

        Users.insert({
            totals: 120,
            goal: 200
        });
    }

    if (History.find().count() === 0 ) {
        History.insert({
             value: 50,
             date: new Date().toTimeString()
        });
        History.insert({
             value: 30,
             date: new Date().toTimeString()
        });
        History.insert({
             value: 10,
             date: new Date().toTimeString()
        });
    }
  });


}
