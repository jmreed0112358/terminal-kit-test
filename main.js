'use strict'

var term = require('terminal-kit').terminal;

term.fullscreen(true);
term.grabInput( {mouse: 'button'} );

term.on('key', function(name, matches, data) {
	console.log('key event: ', name);
	console.log('matches: ', matches);
	console.log('data: ', data);

	// Detect Ctrl-C and exit manually.
	if (name === 'CTRL_C') {
		term.fullscreen(false);
		process.exit();
	}
});

term.on('mouse', function(name, data){
	console.log('mouse event: ', name, data);
});