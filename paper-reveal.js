/* Scroll-triggered paper reveal for elements tagged with the
   `paper-reveal` class. Progressive enhancement: the hidden/offset
   overlay styles in paper-reveal.css only apply once this script adds
   `paper-reveal-js` to <html>, so the paper pieces stay in their final
   position if JS is disabled, blocked, or throws. A single
   IntersectionObserver watches every `.paper-reveal` element on the
   page and fires each one once. */
( function () {
	'use strict';

	function revealAll( sections ) {
		sections.forEach( function ( section ) {
			section.classList.add( 'is-revealed' );
		} );
	}

	function isInViewport( el ) {
		var rect = el.getBoundingClientRect();
		return rect.top < window.innerHeight && rect.bottom > 0;
	}

	function init() {
		var sections = document.querySelectorAll( '.paper-reveal' );

		if ( ! sections.length ) {
			return;
		}

		try {
			document.documentElement.classList.add( 'paper-reveal-js' );

			var reducedMotion = window.matchMedia &&
				window.matchMedia( '(prefers-reduced-motion: reduce)' ).matches;

			if ( reducedMotion || ! ( 'IntersectionObserver' in window ) ) {
				revealAll( sections );
				return;
			}

			var observer = new IntersectionObserver(
				function ( entries, obs ) {
					entries.forEach( function ( entry ) {
						if ( entry.isIntersecting ) {
							entry.target.classList.add( 'is-revealed' );
							obs.unobserve( entry.target );
						}
					} );
				},
				{ threshold: 0.2, rootMargin: '0px 0px -10% 0px' }
			);

			sections.forEach( function ( section ) {
				if ( isInViewport( section ) ) {
					section.classList.add( 'is-revealed' );
				} else {
					observer.observe( section );
				}
			} );
		} catch ( e ) {
			revealAll( sections );
		}
	}

	if ( document.readyState === 'loading' ) {
		document.addEventListener( 'DOMContentLoaded', init );
	} else {
		init();
	}
} )();
