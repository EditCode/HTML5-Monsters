/**
 * Created by Roger on 5/7/2014.
 */

/**
 * DRAW THE BODY
 */
function drawBody (value)
{
    var canvas = document.getElementById('canvas1');
    context = canvas.getContext('2d');

    playAudio('audio1');

    switch(value) {
        case 1:
            context.clearRect(0, 0, canvas.width, canvas.height);
            bodyImg = new Image();
            bodyImg.src = 'img/body/body_ball.png';
            bodyImg.onload = function()
            {
                context.drawImage(bodyImg, 1,1);
            }
            break;
        case 2:
            context.clearRect(0, 0, canvas.width, canvas.height);
            bodyImg = new Image();
            bodyImg.src = 'img/body/body_alien.png';
            bodyImg.onload = function()
            {
                context.drawImage(bodyImg, 1,1);
            }

            break;
        case 3:
            context.clearRect(0, 0, canvas.width, canvas.height);
            bodyImg = new Image();
            bodyImg.src = 'img/body/body_blocky.png';
            bodyImg.onload = function()
            {
                context.drawImage(bodyImg, 1,1);
            }
            break;
        case 4:
            context.clearRect(0, 0, canvas.width, canvas.height);
            bodyImg = new Image();
            bodyImg.src = 'img/body/body_cool.png';
            bodyImg.onload = function()
            {
                context.drawImage(bodyImg, 1,1);
            }
            break;
        case 5:
            context.clearRect(0, 0, canvas.width, canvas.height);
            bodyImg = new Image();
            bodyImg.src = 'img/body/body_guy.png';
            bodyImg.onload = function()
            {
                context.drawImage(bodyImg, 1,1);
            }
            break;
        case 6:
            context.clearRect(0, 0, canvas.width, canvas.height);
            bodyImg = new Image();
            bodyImg.src = 'img/body/body_blob.png';
            bodyImg.onload = function()
            {
                context.drawImage(bodyImg, 1,1);
            }
            break;
        default:
            break;

    }
}
/**
 * DRAW THE HEAD
 */
function drawHead (value)
{
    var canvas = document.getElementById('canvas2');
    context = canvas.getContext('2d');

    playAudio('audio2');

    switch(value) {
        case 1:
            context.clearRect(0, 0, canvas.width, canvas.height);
            bodyImg = new Image();
            bodyImg.src = 'img/head/head_blackhair.png';
            bodyImg.onload = function()
            {
                context.drawImage(bodyImg, 100,60);
            }
            break;
        case 2:
            context.clearRect(0, 0, canvas.width, canvas.height);
            bodyImg = new Image();
            bodyImg.src = 'img/head/head_blonde.png';
            bodyImg.onload = function()
            {
                context.drawImage(bodyImg, 100,60);
            }

            break;
        case 3:
            context.clearRect(0, 0, canvas.width, canvas.height);
            bodyImg = new Image();
            bodyImg.src = 'img/head/head_hat.png';
            bodyImg.onload = function()
            {
                context.drawImage(bodyImg, 100,60);
            }
            break;
        case 4:
            context.clearRect(0, 0, canvas.width, canvas.height);
            bodyImg = new Image();
            bodyImg.src = 'img/head/head_headphones.png';
            bodyImg.onload = function()
            {
                context.drawImage(bodyImg, 100,60);
            }
            break;
        case 5:
            context.clearRect(0, 0, canvas.width, canvas.height);
            bodyImg = new Image();
            bodyImg.src = 'img/head/head_horns.png';
            bodyImg.onload = function()
            {
                context.drawImage(bodyImg, 100,60);
            }
            break;
        case 6:
            context.clearRect(0, 0, canvas.width, canvas.height);
            bodyImg = new Image();
            bodyImg.src = 'img/head/head_ribbon.png';
            bodyImg.onload = function()
            {
                context.drawImage(bodyImg, 100,60);
            }
            break;
        default:
            break;

    }
}
/**
 * DRAW THE EYES
 */
function drawEyes (value)
{
    var canvas = document.getElementById('canvas3');
    context = canvas.getContext('2d');

    playAudio('audio3');

    switch(value) {
        case 1:
            context.clearRect(0, 0, canvas.width, canvas.height);
            bodyImg = new Image();
            bodyImg.src = 'img/eyes/eyes_angry.png';
            bodyImg.onload = function()
            {
                context.drawImage(bodyImg, 150,150);
            }
            break;
        case 2:
            context.clearRect(0, 0, canvas.width, canvas.height);
            bodyImg = new Image();
            bodyImg.src = 'img/eyes/eyes_beady.png';
            bodyImg.onload = function()
            {
                context.drawImage(bodyImg, 150,150);
            }

            break;
        case 3:
            context.clearRect(0, 0, canvas.width, canvas.height);
            bodyImg = new Image();
            bodyImg.src = 'img/eyes/eyes_blank.png';
            bodyImg.onload = function()
            {
                context.drawImage(bodyImg, 150,150);
            }
            break;
        case 4:
            context.clearRect(0, 0, canvas.width, canvas.height);
            bodyImg = new Image();
            bodyImg.src = 'img/eyes/eyes_blue.png';
            bodyImg.onload = function()
            {
                context.drawImage(bodyImg, 150,150);
            }
            break;
        case 5:
            context.clearRect(0, 0, canvas.width, canvas.height);
            bodyImg = new Image();
            bodyImg.src = 'img/eyes/eyes_closed.png';
            bodyImg.onload = function()
            {
                context.drawImage(bodyImg, 150,150);
            }
            break;
        case 6:
            context.clearRect(0, 0, canvas.width, canvas.height);
            bodyImg = new Image();
            bodyImg.src = 'img/eyes/eyes_crossed.png';
            bodyImg.onload = function()
            {
                context.drawImage(bodyImg, 150,150);
            }
            break;
        case 7:
            context.clearRect(0, 0, canvas.width, canvas.height);
            bodyImg = new Image();
            bodyImg.src = 'img/eyes/eyes_dots.png';
            bodyImg.onload = function()
            {
                context.drawImage(bodyImg, 150,150);
            }
            break;
        case 8:
            context.clearRect(0, 0, canvas.width, canvas.height);
            bodyImg = new Image();
            bodyImg.src = 'img/eyes/eyes_dunce.png';
            bodyImg.onload = function()
            {
                context.drawImage(bodyImg, 150,150);
            }
            break;
        case 9:
            context.clearRect(0, 0, canvas.width, canvas.height);
            bodyImg = new Image();
            bodyImg.src = 'img/eyes/eyes_sad.png';
            bodyImg.onload = function()
            {
                context.drawImage(bodyImg, 150,150);
            }
            break;
        case 10:
            context.clearRect(0, 0, canvas.width, canvas.height);
            bodyImg = new Image();
            bodyImg.src = 'img/eyes/eyes_wide.png';
            bodyImg.onload = function()
            {
                context.drawImage(bodyImg, 150,150);
            }
            break;
        case 11:
            context.clearRect(0, 0, canvas.width, canvas.height);
            bodyImg = new Image();
            bodyImg.src = 'img/eyes/eyes_wink.png';
            bodyImg.onload = function()
            {
                context.drawImage(bodyImg, 150,150);
            }
            break;
        default:
            break;
    }
}
/**
 * DRAW THE MOUTH
 */
function drawMouth (value)
{
    var canvas = document.getElementById('canvas4');
    context = canvas.getContext('2d');

    playAudio('audio4');

    switch(value) {
        case 1:
            context.clearRect(0, 0, canvas.width, canvas.height);
            bodyImg = new Image();
            bodyImg.src = 'img/mouth/mouth_awe.png';
            bodyImg.onload = function()
            {
                context.drawImage(bodyImg, 175,300);
            }
            break;
        case 2:
            context.clearRect(0, 0, canvas.width, canvas.height);
            bodyImg = new Image();
            bodyImg.src = 'img/mouth/mouth_goober.png';
            bodyImg.onload = function()
            {
                context.drawImage(bodyImg, 175,300);
            }

            break;
        case 3:
            context.clearRect(0, 0, canvas.width, canvas.height);
            bodyImg = new Image();
            bodyImg.src = 'img/mouth/mouth_goof.png';
            bodyImg.onload = function()
            {
                context.drawImage(bodyImg, 175,300);
            }
            break;
        case 4:
            context.clearRect(0, 0, canvas.width, canvas.height);
            bodyImg = new Image();
            bodyImg.src = 'img/mouth/mouth_line.png';
            bodyImg.onload = function()
            {
                context.drawImage(bodyImg, 175,300);
            }
            break;
        case 5:
            context.clearRect(0, 0, canvas.width, canvas.height);
            bodyImg = new Image();
            bodyImg.src = 'img/mouth/mouth_nice.png';
            bodyImg.onload = function()
            {
                context.drawImage(bodyImg, 175,300);
            }
            break;
        case 6:
            context.clearRect(0, 0, canvas.width, canvas.height);
            bodyImg = new Image();
            bodyImg.src = 'img/mouth/mouth_plain.png';
            bodyImg.onload = function()
            {
                context.drawImage(bodyImg, 175,300);
            }
            break;
        case 7:
            context.clearRect(0, 0, canvas.width, canvas.height);
            bodyImg = new Image();
            bodyImg.src = 'img/mouth/mouth_shock.png';
            bodyImg.onload = function()
            {
                context.drawImage(bodyImg, 175,300);
            }
            break;
        case 8:
            context.clearRect(0, 0, canvas.width, canvas.height);
            bodyImg = new Image();
            bodyImg.src = 'img/mouth/mouth_smirk.png';
            bodyImg.onload = function()
            {
                context.drawImage(bodyImg, 175,300);
            }
            break;
        case 9:
            context.clearRect(0, 0, canvas.width, canvas.height);
            bodyImg = new Image();
            bodyImg.src = 'img/mouth/mouth_tongue.png';
            bodyImg.onload = function()
            {
                context.drawImage(bodyImg, 175,300);
            }
            break;
        case 10:
            context.clearRect(0, 0, canvas.width, canvas.height);
            bodyImg = new Image();
            bodyImg.src = 'img/mouth/mouth_tooth.png';
            bodyImg.onload = function()
            {
                context.drawImage(bodyImg, 175,300);
            }
            break;
        case 11:
            context.clearRect(0, 0, canvas.width, canvas.height);
            bodyImg = new Image();
            bodyImg.src = 'img/mouth/mouth_vampire.png';
            bodyImg.onload = function()
            {
                context.drawImage(bodyImg, 175,300);
            }
            break;
        default:
            break;

    }
}

function playAudio(value2)
{
    document.getElementById(value2).play();
}

