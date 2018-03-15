
(function(i,s,o,g,r,a,m){
  i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
    (i[r].q=i[r].q||[]).push(arguments)
  },
  i[r].l=1*new Date();
  a=s.createElement(o),
  m=s.getElementsByTagName(o)[0];
  a.async=1;
  a.src=g;
  m.parentNode.insertBefore(a,m)
})(window,document,'script','//www.google-analytics.com/analytics.js','ga');

  ga('create', 'UA-68449817-1', 'auto');
  ga('send', 'pageview');

  $(function() {
  	var array = [
  	   "img/7.png",
       "img/3.png",
       "img/2.png",
       "img/21.png"
  	];
  	var l = array.length;
  	var r = Math.floor(Math.random()*l);
  	var imgurl = array[r];
  	$("img#randomimg").attr({"src":imgurl});
  });


$(function(){
   $('a[href^=#]').click(function() {
      var speed = 1000; // ミリ秒
      var href= $(this).attr("href");
      // 移動先を取得
      var target = $(href == "#" || href == "" ? 'html' : href);
      // 移動先を数値で取得
      var position = target.offset().top;
      // スムーススクロール
      $('body,html').animate({scrollTop:position}, speed, 'swing');
      return false;
   });
});
if (window.matchMedia('screen and (min-width:769px)').matches) {
// PCレイアウト
$(function() {
    $(window).scroll(function () {
        if ($(this).scrollTop() > 410) {
            $('header').fadeIn();
            $('.top').css("color","#434343");
            $('.top').hover(
              function(){
                $(this).css("color","#b3b3b3");
              },
              function(){
                $(this).css("color","#434343");
              }
            )
        } else {
            $('header').fadeOut();
            $('.top').css("color","");
            $('.top').hover(
              function(){
                $(this).css("color","")
              }
            )
        }
    });
});
$(function() {
    $(window).scroll(function () {
        if ($(this).scrollTop() > 750) {
            $('.up').css("border-color","white");
        } else {
            $('.up').css("border-color","#434343");
        }
    });
});
} else {
  // スマホレイアウト

  $(function(){
    $('#main .navmo nav ul li a').click(function(){
      $("input:checkbox[name='check']").prop({
        'checked':false
      });
    });
  });

  $(function() {
      $(window).scroll(function () {
          if ($(this).scrollTop() > 600) {
            $('label').css("border-color","white");
            $('.up').css("border-color","white");
          } else {
            $('label').css("border-color","#434343");
            $('.up').css("border-color","#434343");
          }
      });
  });

}
