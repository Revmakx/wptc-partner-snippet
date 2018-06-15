jQuery(document).ready(function($) {
	your_plugin_prefix_add_wptc_upsell_buttons();
});


function your_plugin_prefix_add_wptc_upsell_buttons(){

	var plugin_slug    = 'your_plugin_slug'; // Eg: wp-time-capsule
	var partnerLink    = 'https://wptimecapsule.com/updates/?partner=your_id';//Replace full link that you got from the WPTC team.
	var link           = ' <a href="' + partnerLink + '" target="_blank" >Backup and update<span class="your-plugin-prefix-update-recommandation-link-icon-fix"></span></a>';
	var linkWithPrefix = ' or ' + link;
	var current_path   = window.location.href;

	if (current_path.toLowerCase().indexOf('update-core') !== -1) {
		jQuery('#update-plugins-table .plugin-title p a[href*="' + plugin_slug + '"]').after(link);
	} else if(current_path.toLowerCase().indexOf('plugin') !== -1 || current_path.toLowerCase().indexOf('plugins.php') !== -1){
		window.onload = function() {
			parent.your_plugin_prefix_upsell_plugin_view_iframe_listener(partnerLink, linkWithPrefix, plugin_slug);
		}
	}
}

function your_plugin_prefix_upsell_plugin_view_iframe_listener(partnerLink, linkWithPrefix, plugin_slug) {
	jQuery('.plugin-update-tr[data-slug="' + plugin_slug + '"]').find('.update-message p').append(linkWithPrefix);
    jQuery("#TB_iframeContent").contents().find('#plugin-information-footer a[data-slug="' + plugin_slug + '"]').after('<a class="button button-primary right" href="' + partnerLink + '" target="_blank" style=" margin-right: 10px;">Backup and update<span class="dashicons dashicons-external your-plugin-prefix-update-recommandation-btn-icon-fix"></span></a>');
}