var symbols = ["fun", "bath", "medicine", "walk", "feed"];
var IMG_WIDTH = 80;
var IMG_SPACING = 30;
var IMG_MARGIN = 20;
var dragging = false;

function createNote(x, y) {
    var note = document.createElement("div");
    note.setAttribute("id", "note");
    note.style.left = x + "px";
    note.style.top = y + "px";
    var text = document.createElement("textarea");
    text.setAttribute("rows", "4");
    text.setAttribute("cols", "30");
    text.setAttribute("placeholder", "Details...");
    $("#timeline").append(note);
    $("#note").append(text);
}

function staticMouseUp() {
    dragging = false;
    var offset = symbols.indexOf(this.id);
    var canvas = document.getElementById("timelineCanvas");
    canvas.width = canvas.width;
    console.log(this.offsetLeft);
    if(!(( + this.offsetLeft + 0.5*IMG_WIDTH > $("#trashcan").position().left) && (this.offsetTop < $("#trashcan").position().top + 0.5*IMG_WIDTH))) {
        var img = document.createElement("img");
        img.src = this.src;
        img.style.height = IMG_WIDTH / 2 + "px";
        img.setAttribute("class", "staticIcon");
        img.style.left = this.offsetLeft + IMG_WIDTH / 4 + canvas.offsetLeft + "px";
        img.style.top = 315 + "px";
        $("#timeline").append(img);
        createNote(this.offsetLeft + IMG_WIDTH / 2, 345);
        $(".staticIcon").draggable({containment: 'parent'});
        $(".staticIcon").mouseup(staticMouseUp);
        $(".staticIcon").mousedown(staticMouseDown);
        $(".staticIcon").mousemove(staticMouseMove);
    }
    this.remove();
}

function staticMouseDown() {
    $("#note").remove();
    dragging = true;
    this.style.height = IMG_WIDTH + "px";
}

function staticMouseMove() {
    if(dragging) {
        var canvas = document.getElementById("timelineCanvas");
        var ctx = canvas.getContext("2d");
        canvas.width = canvas.width;
        ctx.moveTo(this.offsetLeft + canvas.offsetLeft + IMG_WIDTH/2, this.offsetTop + IMG_WIDTH/2);
        ctx.lineTo(this.offsetLeft + canvas.offsetLeft + IMG_WIDTH/2, 335);
        ctx.stroke();
    }
}

function initialize() {

    for (var i=0; i<symbols.length; i++) {
        var icon = symbols[i];
        var offset = 0;
        var img = document.createElement("img");
        img.src = "img/" + icon + "-icon.jpg";
        img.setAttribute("id", icon);
        img.setAttribute("class", "icon");
        img.style.height = IMG_WIDTH + "px";
        img.style.left = IMG_MARGIN + i*(IMG_WIDTH + IMG_SPACING) + "px";
        img.style.top = IMG_MARGIN + "px";
        img.style.zIndex = "1";
        $("#timeline").append(img);
        $("#" + icon).draggable({containment: 'parent'});

        var onMouseup = function() {
            dragging = false;
            this.style.zIndex = "1";
            var offset = symbols.indexOf(this.id);
            var canvas = document.getElementById("timelineCanvas");
            canvas.width = canvas.width;

            if(!((this.offsetLeft + 0.5*IMG_WIDTH > $("#trashcan").position().left) && (this.offsetTop < $("#trashcan").position().top + 0.5*IMG_WIDTH))) {
                var img = document.createElement("img");
                img.src = this.src;
                img.style.height = IMG_WIDTH / 2 + "px";
                img.setAttribute("class", "staticIcon");
                img.style.left = this.offsetLeft + IMG_WIDTH / 4 + canvas.offsetLeft + "px";
                img.style.top = 315 + "px";
                $("#timeline").append(img);
                createNote(this.offsetLeft + IMG_WIDTH / 2, 345);
                $(".staticIcon").draggable({containment: 'parent'});
                $(".staticIcon").mouseup(staticMouseUp);
                $(".staticIcon").mousedown(staticMouseDown);
                $(".staticIcon").mousemove(staticMouseMove);
            }


            this.style.top = IMG_MARGIN + "px";
            this.style.left = IMG_MARGIN + offset*(IMG_WIDTH + IMG_SPACING) + "px";

        }

        $("#" + icon).mouseup(onMouseup);


        var onMousedown = function() {
            dragging = true;
            this.style.zIndex = "12";
            var canvas = document.getElementById("timelineCanvas");
            var ctx = canvas.getContext("2d");
            $("#note").remove();
        }
        $("#" + icon).mousedown(onMousedown);

        $("#" + icon).mousemove(function(e) {
            if(dragging) {
                var canvas = document.getElementById("timelineCanvas");
                var ctx = canvas.getContext("2d");
                canvas.width = canvas.width;
                ctx.moveTo(this.offsetLeft + canvas.offsetLeft + IMG_WIDTH/2, this.offsetTop + IMG_WIDTH/2);
                ctx.lineTo(this.offsetLeft + canvas.offsetLeft + IMG_WIDTH/2, 335);
                ctx.stroke();
            }
        });

        var staticImg = document.createElement("img");
        staticImg.src = "img/" + icon + "-icon.jpg";
        staticImg.setAttribute("class", "icon");
        staticImg.style.height = IMG_WIDTH + "px";
        staticImg.style.left = IMG_MARGIN + i*(IMG_WIDTH + IMG_SPACING) + "px";
        staticImg.style.top = IMG_MARGIN + "px";
        $("#timeline").append(staticImg);

    }

    // Create trashcan
    var trashcan = document.createElement("img");
    trashcan.src = "img/trashcan.png";
    trashcan.style.height = IMG_WIDTH + "px";
    trashcan.setAttribute("id", "trashcan");
    trashcan.style.right = IMG_MARGIN + "px";
    trashcan.style.top = IMG_MARGIN + "px";
    $("#timeline").append(trashcan);

}


$(document).ready(function() {
    initialize();
    $("#timelineCanvas").click(function() {
        $("#note").remove();
    });
});
