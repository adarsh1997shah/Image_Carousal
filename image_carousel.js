$( document ).ready( function() {

	// For automatice carousal.
	var interval = setInterval( slideInterval, 4000 );

	function slideInterval() {

		var item = $( '.active' );
		var indicator_item = $( '.indicator-active' );
		item.children().addClass( 'next' );

		setTimeout( function() {

			$( '.image-carousel-items-wrap' ).removeClass( 'active' );
			$( '.image-carousel-indicator' ).removeClass( 'indicator-active' );
			item.children().removeClass( 'next' );

			if( item.next().length != 0 ) {

				item.next().addClass( 'active' );
				indicator_item.next().addClass( 'indicator-active' );
			} else {

				$( '.image-carousel-items-wrap:first-child' ).addClass( 'active' );
				$( '.image-carousel-indicator:first-child' ).addClass( 'indicator-active' );
			}
		}, 600 );
	}

	// For previous click card.
	$( '.image-carousel-control-prev' ).on( 'click', function() {

		var item = $( '.active' );
		var indicator_item = $( '.indicator-active' );
		item.children().addClass( 'prev' );

		// clearing time ineterval.
		clearInterval( interval );

		// Starting time interval again.
		interval = setInterval( slideInterval, 4000 );

		setTimeout( function() {

			$( '.image-carousel-items-wrap' ).removeClass( 'active' );
			item.children().removeClass( 'prev' );
			$( '.image-carousel-indicator' ).removeClass( 'indicator-active' );
			$( '.image-carousel-items-wrap' ).removeClass( 'active' );

			$( this ).addClass( 'indicator-active' );

			if( item.prev().length != 0 ) {

				item.prev().addClass( 'active' );
				indicator_item.prev().addClass( 'indicator-active' );
			} else {

				$( '.image-carousel-items-wrap:last-child' ).addClass( 'active' );
				$( '.image-carousel-indicator:last-child' ).addClass( 'indicator-active' );
			}
		}, 600 );
	} );

	// For next click card.
	$( '.image-carousel-control-next' ).on( 'click', function() {

		var item = $( '.active' );
		var indicator_item = $( '.indicator-active' );
		item.children().addClass( 'next' );

		// clearing time ineterval.
		clearInterval( interval );

		// Starting time interval again.
		interval = setInterval( slideInterval, 4000 );

		setTimeout( function() {

			$( '.image-carousel-items-wrap' ).removeClass( 'active' );
			item.children().removeClass( 'next' );
			$( '.image-carousel-indicator' ).removeClass( 'indicator-active' );
			$( '.image-carousel-items-wrap' ).removeClass( 'active' );

			if( item.next().length != 0 ) {

				item.next().addClass( 'active' );
				indicator_item.next().addClass( 'indicator-active' );
			} else {

				$( '.image-carousel-items-wrap:first-child' ).addClass( 'active' );
				$( '.image-carousel-indicator:first-child' ).addClass( 'indicator-active' );
			}
		}, 600 );
	} );

	// For particular indicator click.
	$( '.image-carousel-indicator' ).on( 'click', function() {

		var id = $( this ).attr( 'id' );

		$( '.image-carousel-indicator' ).removeClass( 'indicator-active' );
		$( '.image-carousel-items-wrap' ).removeClass( 'active' );

		$( this ).addClass( 'indicator-active' );
		$( `.items-wrap${id}` ).addClass( 'active' );
	} );
} );