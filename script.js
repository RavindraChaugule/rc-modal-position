$(document).ready(function() {


        var $window = $(window);
        var $winHeight = $window.height();


        $('.clickme').on('click', function(e) {

            $(this).next('.modal').removeAttr('style');

            var $windowScroll = $window.scrollTop();
            var $box = $(this).next('.modal');
            var $boxHeight = $box.outerHeight();
            var $boxOffset = $box.offset().top;
            var $math = ($boxHeight + $boxOffset) - $windowScroll;

            console.log('wins : ' + $windowScroll);
            console.log('boxOffset : ' + $boxOffset);
            console.log('boxh : ' + $boxHeight);
            console.log('winh : ' + $winHeight);
            console.log('math : ' + $math);


            if ($math >= $winHeight) {
                $box.css({ top: 'auto', bottom: 0 });
            } else {
                $box.css({ top: 0, bottom: 'auto' });
            }

            $(this).next('.modal').css({visibility:'visible', opacity:1});

        });

        $('.closethis').on('click', function() {
            $('.modal').css('visibility', 'hidden');
        });

    });