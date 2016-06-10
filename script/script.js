   $(document).ready(function() {
   	
    $('.menubutton').click(function() {
       $('nav').slideToggle('slow');
    });

    $('#contentSummary').popup();

    $('#contentSummary').popup({
        background:true
    });

    $('.btn').click(function(){
    	$('#contentSummary').popup('show');
    }); 

    $('.my_popup_close').click(function(){
    	$('#contentSummary').popup('hide');
    });
   });
