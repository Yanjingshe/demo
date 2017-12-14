
$(document).ready(function() {
    //blocksit define
    $(window).load( function() {
        $('#container').BlocksIt({
            numOfCol: 5,
            offsetX: 8,
            offsetY: 8
        });
    });

    //window resize
    var currentWidth = 1100;
    $(window).resize(function() {
        var winWidth = $(window).width();
        var conWidth;
        if(winWidth < 660) {
            conWidth = 440;
            col = 2
        } else if(winWidth < 880) {
            conWidth = 660;
            col = 3
        } else if(winWidth < 1100) {
            conWidth = 880;
            col = 4;
        } else {
            conWidth = 1100;
            col = 5;
        }
        if(conWidth != currentWidth) {
            currentWidth = conWidth;
            $('#container').width(conWidth);
            $('#container').BlocksIt({
                numOfCol: col,
                offsetX: 8,
                offsetY: 8
            });
        }
    });

    //点击收藏和关注
    (function($){
        $('#container .meta').on('click',function(){
            $(this).toggleClass('removeView');
            if($(this).hasClass('removeView')){
                $(this).text('取消关注');
            }else{
                $(this).text('关注');
            }
        })
        var $img =$('#container .like>img');
        var num=0;
            $img.on('click',function(){
            if($(this).attr('src')=='img/like.PNG'){
                $(this).attr('src','img/like2.PNG');
                num=1;
            }else{
                $(this).attr('src','img/like.PNG');
                num=0;
            }
            var $nowSpan = $(this).parent().parent().find('.good>span');
            $nowSpan.text(num);
        })
    })(jQuery)

});