window.addEventListener('mousemove', function(event){

    document.getElementById('xVal').textContent = event.x;
    document.getElementById('yVal').textContent = event.y;


    var recCon= $('div#rectangle');
    var recOpj= $('div#recOpj');
    var moveX = (($(window).width() / 2) - event.x) * 0.1;
    var moveY = (($(window).height() / 2) - event.y) * 0.17;
    var rotX = (event.x - ($(window).width() / 2)) * (0.01);
    var rotY = (event.y - ($(window).height() / 2)) * (-0.017);


    var blurX = 50;
    // if (moveX < (($(window).width)/2)) 
    // { blurX = moveX * 0.2 }
    // else { blur = moveX * (-0.2); }
    
    $(recOpj).css('margin-left', moveX +'px');
    $(recOpj).css('margin-top', moveY +'px');
    $(recOpj).css('box-shadow', moveX +'px ' + moveY +'px ' + blurX +'px ' + '-15px #2DB285'); // shadow 
    $(recOpj).css('transform', 'rotateY(' + rotX + 'deg) '+'rotateX('+rotY+'deg)');

    
    function mouseIn() {
        $(recOpj).css('background-image', 'url("me.jpg")');
        $(recOpj).css('background-position', 'center');
        $(recOpj).css('background-size', '100%');
    }

    function mouseOut() {
        $(recOpj).css('background-image', '')
    }

    $(recOpj).mouseenter(mouseIn);
    $(recOpj).mouseout(mouseOut);

    


    // if (event.x < 0 || event.y < 0 || event.x > window.innerWidth || event.y > window.innerHeight){
    //     $(recOpj).css('margin-left', '0px');
    //     $(recOpj).css('margin-top', '0px');
    // }
})

