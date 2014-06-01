Template.aiko.events = {
    'click input' : function () {
      // this will enable Aloha Editor for all HTML elements with the class "editable"
      $(".editable").aloha();
      if (typeof console !== 'undefined')
        console.log("You activated Aloha Editor!");
      }
  };