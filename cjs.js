  function  updateoutput() 
  {

	$("iframe").contents().find("html").html("<html><head><style type='text/css'>" + $("#csspanel").val()
	 +"</style></head> <body>" + $("#htmlpanel").val()+"</body></html>" );
     
      document.getElementById("outputpanel").contentWindow.eval($("#jspanel").val());

      
}
	
	$(".togglebutton").hover(function()
   	{
   		$(this).addClass("highlightedbutton");
         
   	},function()
   	{
   		$(this).removeClass("highlightedbutton");
   	});



   	$(".togglebutton").click(function()
   	{
   		$(this).toggleClass("active");
   		$(this).toggleClass("highlightedbutton");
   		 var panelid= $(this).attr("id")+"panel";
          $("#"+panelid).toggleClass("hidden");
           var numberofactivepanels =4-$('.hidden').length
          $(".panel").width(($(window).width()/numberofactivepanels)-5);

   	})

   	$(".panel").height($(window).height()-$("#header").height()-15);
   	$(".panel").width(($(window).width()/2)-5);
   	


    updateoutput();

$("textarea").on('change keyup paste', function() {


	updateoutput();
});


