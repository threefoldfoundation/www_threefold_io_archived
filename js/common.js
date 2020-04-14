/*
    $(window).scroll(function() {
		var sswidth = screen.width;
      if ($(this).scrollTop() > 5) {
        $(".navbar-expand-md").addClass("header-fixed-me");
      } else {
		  if(sswidth < 1025 && sswidth >= 768){
			$(".navbar-expand-md").addClass("header-fixed-me");
			}else{
				$(".navbar-expand-md").removeClass("header-fixed-me");
			}
      }
    });
    */

/*
    $(document).ready(function() {
      $("#show-hidden-menu").click(function() {
        $(".navbar-expand-md").addClass("header-fixed-me");
      });
    });
    
    $(document).ready(function() {
      $("#hidden-menu").click(function() {
        $(".navbar-expand-md").removeClass("header-fixed-me");
      });
    });
*/
/*
	$(document).ready(function() {
		var swidth = screen.width;
		//alert(swidth);
		if(swidth < 1025 && swidth >= 768){
			$(".navbar-expand-md").addClass("header-fixed-me");
		}else{
			$(".navbar-expand-md").removeClass("header-fixed-me");
		}
    });
    */

const second = 1000,
    minute = second * 60,
    hour = minute * 60,
    day = hour * 24;
let countDown = new Date('Jan 15, 2020 23:59:00').getTime(),
    x = setInterval(function() {
        let now = new Date().getTime(),
            distance = countDown - now;
        hour2 = Math.floor((distance % (day)) / (hour));
        if (hour2 < 10) {
            hour2 = '0' + hour2;
        }
        minute2 = Math.floor((distance % (hour)) / (minute));
        if (minute2 < 10) {
            minute2 = '0' + minute2;
        }
        $('.days').html(Math.floor(distance / (day))),
            $('.hours').html(hour2),
            $('.minutes').html(minute2);
        // document.getElementById('days').innerText = Math.floor(distance / (day)),
        //     document.getElementById('hours').innerText = Math.floor((distance % (day)) / (hour)),
        //     document.getElementById('minutes').innerText = Math.floor((distance % (hour)) / (minute)),
        //     document.getElementById('seconds').innerText = Math.floor((distance % (minute)) / second);
    }, second)