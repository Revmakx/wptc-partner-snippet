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

	custom_prefix_add_wptc_upsell_buttons();
});



function custom_prefix_add_wptc_upsell_buttons(){
	//Change your plugin/theme slug here.
	var plugin_slug    = ''; // Eg wp-time-capsule
	var theme_slug     = ''; // Eg twentyseventeen
	var partnerLink    = 'https://wptimecapsule.com/updates/?partner=your_id';//Replace full link that you got from the WPTC team.
	var link           = ' <a href="' + partnerLink + '" target="_blank" >Backup and update<span class="custom-prefix-update-recommandation-link-icon-fix"></span></a>';
	var linkWithPrefix = ' or ' + link;
	var current_path   = window.location.href;

	if (current_path.toLowerCase().indexOf('update-core') !== -1) {
		jQuery('#update-plugins-table .plugin-title p a[href*="' + plugin_slug + '"]').after(link);
		jQuery('#update-themes-table .plugin-title p img[src*="' + theme_slug + '"]').parent('p').append(link);
	} else if(current_path.toLowerCase().indexOf('plugin') !== -1 || current_path.toLowerCase().indexOf('plugins.php') !== -1){
		window.onload = function() {
			parent.custom_prefix_upsell_plugin_view_iframe_listener(partnerLink, linkWithPrefix, plugin_slug);
		}
	} else if(current_path.toLowerCase().indexOf('themes.php') !== -1){
		window.onload = function() {
			parent.custom_prefix_upsell_theme_page_listener(linkWithPrefix, theme_slug);
		}

		//Add link after detailed theme page.
		jQuery( '.theme-overlay' ).contentChange( function( e ) {
			jQuery('#update-theme[data-slug="' + theme_slug + '"]').after(linkWithPrefix);
		} );
	}
}

function custom_prefix_upsell_plugin_view_iframe_listener(partnerLink, linkWithPrefix, plugin_slug) {
	jQuery('.plugin-update-tr[data-slug="' + plugin_slug + '"]').find('.update-message p').append(linkWithPrefix);
    jQuery("#TB_iframeContent").contents().find('#plugin-information-footer a[data-slug="' + plugin_slug + '"]').after('<a class="button button-primary right" href="' + partnerLink + '" target="_blank" style=" margin-right: 10px;">Backup and update<span class="dashicons dashicons-external custom-prefix-update-recommandation-btn-icon-fix"></span></a>');
}

function custom_prefix_upsell_theme_page_listener(linkWithPrefix, theme_slug){
	jQuery('.theme-browser .theme[data-slug="' + theme_slug + '"]').find(".button-link[type=button]").after(linkWithPrefix);

	//Both theme and plugins are like the same in multisite.
	jQuery('.plugin-update-tr[data-slug="' + theme_slug + '"]').find('.update-message p').append(linkWithPrefix);
}