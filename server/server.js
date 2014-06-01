// CalEvents = new Meteor.Collection('calevents');
// Meteor.methods({
// 	'removeAll':function(){
// 		CalEvents.remove({});
// 	}
// })

 Markers = new Meteor.Collection('markers');
 Meteor.publish("markers", function () {
   return Markers.find();
 });
CalEvents =new Meteor.Collection('calevents');

if (Meteor.isClient) {
 Session.setDefault('editing.calevent', null);
 Session.setDefault('showEditEvent', false);
 Session.setDefault('lastMod', null)
}