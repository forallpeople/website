
        document.write('<link href="css/hover-min.css" rel="stylesheet">');
        document.write('<link href="css/animate.css" rel="stylesheet">');

        /////////////////////////////////////////////     PARALLAXE

        $(document).ready(function(){

            function applyParallaxe(element, inertia) {
                //.parallax(xPosition, speedFactor, outerHeight) options:
                //xPosition - Horizontal position of the element
                //inertia - speed to move relative to vertical scroll. Example: 0.1 is one tenth the speed of scrolling, 2 is twice the speed of scrolling
                //outerHeight (true/false) - Whether or not jQuery should use it's outerHeight option to determine when a section is in the viewport
                var xPosition = $(element).position().left + 'px';
                xPosition = '0';

                $(element).parallax(xPosition, inertia, false);
            }
            // move parallaxe-bg elements to the background
            $('.parallaxe-bg').each(function () {
              var oldPos = $(this).offset();
              // take children out of the element
              $(this).children('.editable-style').each(function () {
                var oldPos = $(this).offset();

                $(this).appendTo(this.parentNode.parentNode);
                $(this).offset(oldPos);
              });
              // move to the bg
              $(this).appendTo($('body'));
              // keep initial Y position
              oldPos.left = 0;
              $(this).offset(oldPos);
            });

            // parallaxe-slow-up, parallaxe-normal-up, paralax-quick, paralax-very-quick
            $('.parallaxe-slow-up').each(function () {
                applyParallaxe(this, 0.3);
            });
            $('.parallaxe-slow-down').each(function () {
                applyParallaxe(this, -0.3);
            });
            $('.parallaxe-normal-down').each(function () {
                applyParallaxe(this, -0.7);
            });
            $('.parallaxe-normal-up').each(function () {
                applyParallaxe(this, 0);
            });
            $('.parallaxe-quick-up').each(function () {
                applyParallaxe(this, 3);
            });
            $('.parallaxe-quick-down').each(function () {
                applyParallaxe(this, -3);
            });
            $('.parallaxe-hyper-up').each(function () {
                applyParallaxe(this, 5);
            });
            $('.parallaxe-hyper-down').each(function () {
                applyParallaxe(this, -5);
            });
        })
        // load paralaxe scripts
        document.write('<sc'+'ript type="text/javascript" src="js/jquery.parallax-1.1.3.js"></sc'+'ript>');
        document.write('<sc'+'ript type="text/javascript" src="js/jquery.localscroll-1.2.7-min.js"></sc'+'ript>');
        document.write('<sc'+'ript type="text/javascript" src="js/jquery.scrollTo-1.4.2-min.js"></sc'+'ript>');


        //////////////////////////////////////////////////////////////////////////////////////////////////////////////////
        // ANCHORS AND SCROLLING

        function newAnchorLink(link, pos){
            $('a[href="http:#'+link+'"]').click(function(){
                $('html, body').animate({
                    scrollTop: pos - 60
                }, 1800);
                return false;
            });
        }
        ////////////////////////////////////
        var initialMenuPos = 0;
        document.onscroll = function(e){
            //console.log($(document).scrollTop(), $(".fixed-menu-when-hidden").offset().top);
            if ($(document).scrollTop() > $(".fixed-menu-when-hidden").offset().top + 0){
                initialMenuPos = $(".fixed-menu-when-hidden").offset().top;
                $(".fixed-menu-when-hidden").addClass("fixed-menu");
                console.log('yes');
            }
            else if ($(document).scrollTop() < initialMenuPos -10){
                $(".fixed-menu-when-hidden").removeClass("fixed-menu");
                console.log('no');
            }
        }



        ////////////////////////////////////  BOUTON HAUT DE PAGE
            $(function(){
                $('.btn_accueil').click(function() {
                  $('html,body').animate({scrollTop: 0}, 1800);
                });
            });
                $(function(){
                $('.btn_01').click(function() {
                  $('html,body').animate({scrollTop: 1080}, 1800);
                });
            });
                    $(function(){
                $('.btn_02').click(function() {
                  $('html,body').animate({scrollTop: 2160}, 1800);
                });
            });
                    $(function(){
                $('.btn_03').click(function() {
                  $('html,body').animate({scrollTop: 3240}, 1800);
                });
            });
                    $(function(){
                $('.btn_04').click(function() {
                  $('html,body').animate({scrollTop: 4320}, 1800);
                });
            });
                    $(function(){
                $('.btn_05').click(function() {
                  $('html,body').animate({scrollTop: 5400}, 1800);
                });
            });
    