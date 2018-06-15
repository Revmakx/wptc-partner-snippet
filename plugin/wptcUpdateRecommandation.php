<?php

//add this line on your plugin main file.
add_action('admin_enqueue_scripts', 'your_plugin_prefix_add_wptc_upsell_buttons');

function your_plugin_prefix_add_wptc_upsell_buttons(){
    include_once( ABSPATH . 'wp-admin/includes/plugin.php' );

    if (is_plugin_active('wp-time-capsule/wp-time-capsule.php')) {
		return;
    }

    $your_plugin_prefix = '';

    //If you already included jQuery in your plugin/theme comment below line
    wp_enqueue_script($your_plugin_prefix .'-jquery', false, array());

    wp_enqueue_script($your_plugin_prefix .'wptc-update-recommendation-js', plugins_url('/path/to/wptc-update-recommendation.js', __FILE__), array());

    wp_enqueue_style($your_plugin_prefix .'wptc-update-recommendation-css', plugins_url('/path/to/wptc-update-recommendation.css', __FILE__));
}