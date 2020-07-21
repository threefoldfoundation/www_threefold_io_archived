
(function() {

	var className = "navbar-ontop";
    var classNameHeader = "header-fixed-me";
    var sswidth = screen.width;
    
	// we start hidden, to avoid flickering
	document.write("<style id='temp-navbar-ontop'>.navbar {opacity:0; transition: none !important}</style>")

	function update() {
		// toggle className based on the scrollTop property of document
		var nav = document.querySelector(".navbar")
        
		if (window.scrollY > 15)
			nav.classList.remove(className);
		else
			nav.classList.add(className);
        
          if (window.scrollY > 5) {
            nav.classList.add(classNameHeader);  
          } else {
              /*
              if(sswidth < 1025 && sswidth >= 768){
                nav.classList.add(classNameHeader);
                }else{
                    nav.classList.remove(classNameHeader);
                }
                */
              nav.classList.remove(classNameHeader);
          }
	   }

	document.addEventListener("DOMContentLoaded", function(event) {
		$(window).on('show.bs.collapse', function (e) {
			$(e.target).closest("." + className).removeClass(className);
		})

		$(window).on('hidden.bs.collapse', function (e) {
			update()
		})
		update()
		// still hacking to avoid flickering
		setTimeout(function() {
			document.querySelector("#temp-navbar-ontop").remove()
		})
        
        var swidth = screen.width;
        var nav2 = document.querySelector(".navbar-expand-md");
        var classNameHeader = "header-fixed-me";

        document.getElementById("show-hidden-menu").addEventListener("click", function() {
            nav2.classList.add(classNameHeader);
        });
        document.getElementById("hidden-menu").addEventListener("click", function() {
            nav2.classList.remove(classNameHeader);
        });
        /*
        var swidth = screen.width;
        var nav2 = document.querySelector(".navbar");
        //alert(swidth);
        if(swidth < 1025 && swidth >= 768){
        nav2.classList.add(classNameHeader);
        } else{
        nav2.classList.remove(classNameHeader);
        }
        */
    });

	window.addEventListener("scroll", function() {
		update()			
	});
    
    

})();