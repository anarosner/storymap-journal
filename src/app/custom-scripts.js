define(["dojo/topic"], function(topic) {
  /*
   * Custom Javascript to be executed while the application is initializing goes here
   */

  // The application is ready
  topic.subscribe("tpl-ready", function(){
    /*
     * Custom Javascript to be executed when the application is ready goes here
     */
	 
	// custom slideshow
	
	var slideIndex = 0;
	var x = document.getElementsByClassName("mainMediaContainer");

	var i = 0;

	function carousel() {
		
		//for testing, set to cycle through slideshow only 1000x
		if ( i> 1000 ) {
			console.log(i);
			setTimeout(carousel, 9000);
			//setTimeout(carousel, 2000); //shorten for testing
			i=i+1;
		}
		slideNext = slideIndex+1;
		if (slideNext > x.length-1) {slideNext = 0}

		app.ui.mainStage.beforeMainMediaUpdate(slideNext);
		app.ui.mainStage.updateMainMediaWithStoryMainMedia(slideNext);
		//x[slideIndex].className = "mainMediaContainer";
		//x[slideNext].className = "mainMediaContainer active";

		slideIndex = slideNext;

	}//end carousel function
	
	console.log("begin slideshow");
	carousel();
	
	//end slideshow custom code
	
	
  }); //end topic.subscribe call
});
