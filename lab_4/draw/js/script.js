var canvas = document.getElementById('canvas');
var ctx = canvas.getContext('2d');
var startPoint;
var points = [];
var drawing = false;

function getMousePos(canvas, event){
  var rect = canvas.getBoundingClientRect();

  return{
    x: event.clientX - rect.left,
    y: event.clientY - rect.top
  }
}

function mouseDown(e){
  drawing = true;
  startPoint = getMousePos(canvas, e);
}

function drawLines(){
  points.forEach(function(item,i){
    ctx.moveTo(item.start.x, item.start.y);
    ctx.lineTo(item.end.x, item.end.y);
  });
}

function mouseMove(e){
  var mousePos = getMousePos(canvas, e);
  if (drawing){
    ctx.clearRect(0,0,canvas.width,canvas.height);
    ctx.beginPath();
    drawLines();
    ctx.moveTo(startPoint.x, startPoint.y);
    ctx.lineTo(mousePos.x, mousePos.y);
    ctx.stroke();
  }
}

function mouseUp(e){
  drawing = false;
  var mousePos = getMousePos(canvas, e);
  points.push({
    start: startPoint,
    end: {
      x: mousePos.x,
      y: mousePos.y
    }
  });
  drawLines();
}

canvas.addEventListener("mousedown", mouseDown, false);
canvas.addEventListener("mousemove", mouseMove, false);
canvas.addEventListener("mouseup", mouseUp, false);
