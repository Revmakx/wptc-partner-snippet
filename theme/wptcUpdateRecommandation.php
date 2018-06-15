<?php

//Invoke this function on your theme main file.
function your_theme_prefix_add_wptc_upsell_buttons(){
    include_once( ABSPATH . 'wp-admin/includes/plugin.php' );

    if (is_plugin_active('wp-time-capsule/wp-time-capsule.php')) {
		return;
    }

    $your_theme_prefix = '';
    //If you already included jQuery in your plugin/theme comment below line
    wp_enqueue_script($your_theme_prefix .'-jquery', false, array());

    wp_enqueue_script($your_theme_prefix .'wptc-update-recommendation-js', '/path/to/wptc-update-recommendation.js', array());

    wp_enqueue_style($your_theme_prefix .'wptc-update-recommendation-css', get_template_directory_uri() . '/path/to/wptc-update-recommendation.css', array());
}