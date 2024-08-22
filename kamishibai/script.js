var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");

var bgImage = new Image();
bgImage.src = "image/bg.png";

bgImage.addEventListener("load", function() {
    ctx.drawImage(bgImage, 0, 0, canvas.width, canvas.height);
});

var personImage = new Image();
personImage.src = "image/chara1.png";

personImage.addEventListener("load", function() {
    var aspect = personImage.width / personImage.height;
    ctx.drawImage(personImage, canvas.width / 10, 0, canvas.height * aspect, canvas.height);
});

var boxImage = new Image();
boxImage.src = "image/message.png";

boxImage.addEventListener("load", function() {
    var aspect = boxImage.width / boxImage.height;
    ctx.drawImage(boxImage, 0, 0, canvas.height * aspect, canvas.height);
});

function loop() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    if (bgImage.complete) {
        ctx.drawImage(bgImage, 0, 0, canvas.width, canvas.height);
    }
    if (personImage.complete) {
        var aspect = personImage.width / personImage.height;
        ctx.drawImage(personImage, canvas.width / 10, 0, canvas.height * aspect, canvas.height);
    }
    if (boxImage.complete) {
        var aspect = boxImage.width / boxImage.height;
        ctx.drawImage(boxImage, 0, 0, canvas.height * aspect, canvas.height);
    }
    requestAnimationFrame(loop);

    ctx.font = "20px serif";
    ctx.fillT
}

loop();
