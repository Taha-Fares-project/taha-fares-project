var arr = ["2.jpg","3.jpg","1.jpg"];



$(function(){
	var i = 0;
setInterval(function() {
      $(".allPage").css("background-image", "url(" + arr[i] + ")")
      i = i + 1;
      if (i === arr.length) {
        i =  0;
      }
}, 3000);




})