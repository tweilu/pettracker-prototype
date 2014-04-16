function initialize() {
    var symbols = ["play", "bath", "medicine", "walk", "feed"];
    var IMG_WIDTH = 80;
    var IMG_SPACING = 30;
    var IMG_MARGIN = 20;
    var dragging = false;

    for (var i=0; i<symbols.length; i++) {
        var icon = symbols[i];
        var offset = 0;
        var img = document.createElement("img");
        img.src = "img/play-icon.jpg";
        img.setAttribute("id", icon);
        img.setAttribute("class", "icon");
        img.style.height = IMG_WIDTH + "px";
        img.style.left = IMG_MARGIN + i*(IMG_WIDTH + IMG_SPACING) + "px";
        img.style.top = IMG_MARGIN + "px";
        img.style.zIndex = "1";
        $("#timeline").append(img);
        $("#" + icon).draggable({containment: 'parent'});

        var cb = function(){alert(i);};

        $("#" + icon).mouseup(function() {
            dragging = false;
            this.style.zIndex = "1";
            var offset = symbols.indexOf(this.id);
            var canvas = document.getElementById("timelineCanvas");
            canvas.width = canvas.width;

            var img = document.createElement("img");
            img.src = this.src;
            img.style.height = IMG_WIDTH / 2 + "px";
            img.setAttribute("class", "staticIcon");
            img.style.left = this.offsetLeft + canvas.offsetLeft + "px";
            img.style.top = 290 + "px";
            $("#timeline").append(img);

            this.style.top = IMG_MARGIN + "px";
            this.style.left = IMG_MARGIN + offset*(IMG_WIDTH + IMG_SPACING) + "px";

        });

        $("#" + icon).mousedown(function() {
            dragging = true;
            this.style.zIndex = "2";
            var canvas = document.getElementById("timelineCanvas");
            var ctx = canvas.getContext("2d");
        });

        $("#" + icon).mousemove(function(e) {
            if(dragging) {
                var canvas = document.getElementById("timelineCanvas");
                var ctx = canvas.getContext("2d");
                canvas.width = canvas.width;
                ctx.moveTo(this.offsetLeft + canvas.offsetLeft + IMG_WIDTH/2, this.offsetTop + IMG_WIDTH/2);
                ctx.lineTo(this.offsetLeft + canvas.offsetLeft + IMG_WIDTH/2, 310);
                ctx.stroke();
            }
        });

        var staticImg = document.createElement("img");
        staticImg.src = "img/play-icon.jpg";
        staticImg.setAttribute("class", "icon");
        staticImg.style.height = IMG_WIDTH + "px";
        staticImg.style.left = IMG_MARGIN + i*(IMG_WIDTH + IMG_SPACING) + "px";
        staticImg.style.top = IMG_MARGIN + "px";
        $("#timeline").append(staticImg);

    }
}

$(document).ready(function() {
    initialize();

});
