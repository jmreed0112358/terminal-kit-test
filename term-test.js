'use strict'


var term = require('terminal-kit').terminal;

term.fullscreen(true);
term.grabInput( { mouse: 'button' } );

term.on('key', function(key, matches, data) {
  switch ( key ) {
    case 'UP':
      term.up(1);
      break;
    case 'DOWN':
      term.down(1);
      break;
    case 'LEFT':
      term.left(1);
      break;
    case 'RIGHT':
      term.right(1);
      break;
    case 'CTRL_C':
      term.fullscreen(false);
      process.exit();
    default:
      term.noFormat(
        Buffer.isBuffer(data.code) ? data.code : String.fromCharCode(data.code));
  }
});

term.on('mouse', function(name, data) {
  term.moveTo(data.x, data.y);
});