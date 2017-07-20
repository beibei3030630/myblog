$(function(){
	var sidebar=$("#sidebar");
	var mask=$(".mask");
	var sidebar_trigger=$("#siderbar_trigger");
	var backButton=$(".back-to-top");
  	function showSideBar(){
	  	mask.fadeIn();
		sidebar.animate({"right":0});
  	}
  	function hideSideBar(){
  		mask.fadeOut();
  		sidebar.css("right",-sidebar.width());
  	}
  sidebar_trigger.on("click",showSideBar);
  sidebar.on('click', hideSideBar);
  mask.on('click', hideSideBar);
  backButton.on("click",function(){
  		$("html,body").animate({
  			scrollTop:0
  		},800);
  });
  $(window).on("scroll",function(){
  	if($(window).scrollTop()>$(window).height())
  		backButton.fadeIn();
  	else
  		backButton.fadeOut();
  });
  $(window).trigger("scroll");
});