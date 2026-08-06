/* Drives the hero-origami paper-flap opening animation (see
   hero-origami.css). Progressive enhancement: the flaps render in
   their plain resting layout if this script is disabled, blocked, or
   throws -- it only adds the closed starting position and the
   transition out of it. Runs once on page load rather than on
   scroll/IntersectionObserver like paper-reveal.js, since the hero is
   always above the fold. */
( function () {
	'use strict';

	var OPEN_DELAY = 300;

	function openAll( heroes ) {
		heroes.forEach( function ( hero ) {
			hero.classList.add( 'is-open' );
		} );
	}

	function init() {
		var heroes = document.querySelectorAll( '.hero-origami' );

		if ( ! heroes.length ) {
			return;
		}

		try {
			heroes.forEach( function ( hero ) {
				var bottomFlap = document.createElement( 'div' );
				bottomFlap.className = 'hero-origami-flap-bottom';
				hero.appendChild( bottomFlap );
			} );

			document.documentElement.classList.add( 'hero-origami-js' );

			var reducedMotion = window.matchMedia &&
				window.matchMedia( '(prefers-reduced-motion: reduce)' ).matches;

			if ( reducedMotion ) {
				openAll( heroes );
				return;
			}

			window.setTimeout( function () {
				openAll( heroes );
			}, OPEN_DELAY );
		} catch ( e ) {
			openAll( heroes );
		}
	}

	if ( document.readyState === 'loading' ) {
		document.addEventListener( 'DOMContentLoaded', init );
	} else {
		init();
	}
} )();
