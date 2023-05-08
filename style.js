var binary;
var bit;
var i;

function draw(binary) {
  if (!bit) {
    bit = 0;
  }
  var i_end = binary.length;
  var i_inc = 1;
  if (1 > i_end) {
    i_inc = -i_inc;
  }
  for (i = 1;
       i_inc >= 0 ? i <= i_end : i >= i_end;
       i += i_inc) {
      if (binary.charAt(i - 1) == 1) {
      draw_bit();
    }
    jumpForward(50);
    bit = bit + 1;
    if (bit > 7) {
      jumpBackward(400);
      turnRight(90);
      jumpForward(50);
      turnLeft(90);
      bit = 0;
    }
  }
}

function draw_bit() {
  penColour('#ffffff');
  penWidth(25);
  for (var count = 0; count < 4; count++) {
      moveForward(25);
    turnRight(90);
  }
}

draw('00000000');
draw('01100110');
draw('01100110');
draw('00000000');
draw('10000001');
draw('01000010');
draw('00111100');
draw('00000000');