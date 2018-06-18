jQuery(document).ready(function($) {
	/**
	 * Content Change DOM Event Listenter
	 *
	 * @see: http://stackoverflow.com/questions/3233991/jquery-watch-div/3234646#3234646
	 * @param callback
	 * @returns {*}
	 */
	jQuery.fn.contentChange = function( callback ) {
		var elms = jQuery( this );
		elms.each(
			function( i ) {
				var elm = jQuery( this );
				elm.data( 'lastContents', elm.html() );
				window.watchContentChange = window.watchContentChange ? window.watchContentChange : [];
				window.watchContentChange.push( { 'element': elm, 'callback': callback } );
			}
		);
		return elms;
	};

	setInterval( function() {
		if ( window.watchContentChange ) {
			for ( i in window.watchContentChange ) {
				if ( window.watchContentChange[ i ].element.data( 'lastContents' ) != window.watchContentChange[ i ].element.html() ) {
					window.watchContentChange[ i ].callback.apply( window.watchContentChange[ i ].element );
					window.watchContentChange[ i ].element.data( 'lastContents', window.watchContentChange[ i ].element.html() );
				}

			}
		}
	}, 150 );

	your_theme_prefix_add_wptc_upsell_buttons();
});



function your_theme_prefix_add_wptc_upsell_buttons(){
	//Change your theme slug .
	var theme_slug     = ''; // Eg twentyseventeen
	var partnerLink    = 'https://wptimecapsule.com/updates/?partner=your_id';//Replace full link that you got from the WPTC team.
	var link           = ' <a href="' + partnerLink + '" target="_blank" >Backup and update<span class="your-theme-prefix-update-recommandation-link-icon-fix"></span></a>';
	var linkWithPrefix = ' or ' + link;
	var current_path   = window.location.href;

	if (current_path.toLowerCase().indexOf('update-core') !== -1) {
		jQuery('#update-themes-table .plugin-title p img[src*="' + theme_slug + '"]').parent('p').append(link);
	} else if(current_path.toLowerCase().indexOf('themes.php') !== -1){
		window.onload = function() {
			parent.your_theme_prefix_upsell_theme_page_listener(linkWithPrefix, theme_slug);
		}

		//Add link after detailed theme page.
		jQuery( '.theme-overlay' ).contentChange( function( e ) {
			jQuery('#update-theme[data-slug="' + theme_slug + '"]').after(linkWithPrefix);
		} );
	}
}

function your_theme_prefix_upsell_theme_page_listener(linkWithPrefix, theme_slug){
	jQuery('.theme-browser .theme[data-slug="' + theme_slug + '"]').find(".button-link[type=button]").after(linkWithPrefix);

	//For themes updates in multisite.
	jQuery('.plugin-update-tr[data-slug="' + theme_slug + '"]').find('.update-message p').append(linkWithPrefix);
}