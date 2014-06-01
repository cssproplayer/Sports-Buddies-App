Template.nav.rendered = function() {
  $(function(){ 
    $('input[type="time"]').timepicker({ 'dateformat' : 'Hi' }).change(
      function(){
        $('p.output').text( 'Time: ' + $(this).val() + ' hrs' ); 
      });	
  });
}



