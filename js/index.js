$(document).on("scroll", function() {
	if ($(document).scrollTop() > 120) {
		$("nav").addClass("small");
	} else {
		$("nav").removeClass("small");
	}
});// 頁面下拉的時候主選單高度縮小

// $(document).on("scroll",function(){
// if(document.body.clientWidth>1199){
// 	// alert(document.body.clientWidth);
// 	if ($(document).scrollTop() > 280) {
// 		$("#intro").fadeIn(1000);
// 	}else{
// 		$("#intro").hide();
// 	}if ($(document).scrollTop() > 280) {
// 		$("#clerk").fadeIn(0);
// 	}else{
// 		$("#clerk").hide();
// 	}if ($(document).scrollTop() > 680) {
// 		$("#feature").fadeIn(1000);
// 	}else{
// 		$("#feature").hide();
// 	}if ($(document).scrollTop() > 1350) {
// 		$("#place").fadeIn(1000);
// 	}else{
// 		$("#place").hide();
// 	}if ($(document).scrollTop() > 1500) {
// 		$("#placeintro").fadeIn(1000);
// 	}else{
// 		$("#placeintro").hide();
// 	}if ($(document).scrollTop() > 1700) {
// 		$("#placeArticle").fadeIn(1000);
// 	}else{
// 		$("#placeArticle").hide();
// 	}
// 	}
// });


$(document).ready(function(){
	$('#placeArticle .artiItem .img').mouseenter(function(){
		$(this).children('img').css('filter','brightness(0.5)');
		$(this).children('.act').css('opacity','1');
		$(this).children('.act').children('a').css('color','#fff');
	});
	$('#placeArticle .artiItem .img').mouseleave(function(){
		$(this).children('.act').css('opacity','0');
		$(this).children('img').css('filter','brightness(1)');
		$(this).children('.act').children('a').css('color','#000');
	});
});


$(document).ready(function(){
	$('#feature #arti .img').mouseenter(function(){
		$(this).children('img').css('filter','brightness(0.3)');
		$(this).children('a').css('filter','brightness(0.3)');
		$(this).children('.viewmore').css('opacity','1').css('top','25%');
	});
	$('#feature .img').mouseleave(function(){
		$(this).children('img').css('filter','brightness(1)');
		$(this).children('a').css('filter','brightness(1)');
		$(this).children('.viewmore').css('opacity','0').css('top','-30%');
		
	});
});

$(document).ready(function(){
	$('.fb').mouseenter(function(){
		$(this).children('.thru1').css('left','130px').css('opacity','1');
		$(this).children('.thru2').css('left','170px').css('opacity','1');
		$(this).children('.thru3').css('left','210px').css('opacity','1');
	});$('.fb').mouseleave(function(){
		$(this).children('.thru').css('left','50px').css('opacity','0');
	});
});

$(document).ready(function(){
	$('.fb').mouseenter(function(){
		$(this).children('.played').text('已體驗的朋友');
	});$('.fb').mouseleave(function(){
		$(this).children('.play1').text('77k played');
		$(this).children('.play2').text('5k played');
		$(this).children('.play3').text('582 played');
		$(this).children('.play4').text('1k played');
		$(this).children('.play5').text('36k played');
		$(this).children('.play6').text('2.5k played');
	});
});


// function $id(id){
//   return document.getElementById(id);
// };

// window.onload=function (){
//     var jcarousel = $id("imgContainer");
//     var bannerImgs = document.getElementsByClassName("bannerImg");
//     //==========toLeft.onClick
// $id("toLeft").onclick=function (){
//       var first = bannerImgs[0];
//       var last = bannerImgs[bannerImgs.length-1];
//       imgContainer.insertBefore( last, first);
//     }
//     //==========toRight.onclick 
// $id("toRight").onclick=function (){
//     var first = bannerImgs[0];
//     imgContainer.appendChild( first);
//     bannerImgs.style.opacity = "0.5";
//     }   
// }