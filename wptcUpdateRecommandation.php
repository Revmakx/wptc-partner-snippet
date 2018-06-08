<?php

function astra_add_wptc_upsell_buttons(){
    include_once( ABSPATH . 'wp-admin/includes/plugin.php' );

    if (is_plugin_active('wp-time-capsule/wp-time-capsule.php')) {
		return;
    }

    $custom_prefix = '';
    //If you already included jQuery in your plugin/theme comment below line
    wp_enqueue_script($custom_prefix .'-jquery', false, array());

    wp_enqueue_script($custom_prefix .'wptc-update-recommendation-js', '/path/to/wptc-update-recommendation.js', array());

    //this is for plugin
    wp_register_style($custom_prefix .'wptc-update-recommendation-css', plugins_url('/path/to/wptc-update-recommendation.css', __FILE__));

    //this is for theme
    wp_register_style($custom_prefix .'wptc-update-recommendation-css', get_template_directory_uri() . '/path/to/wptc-update-recommendation.css', array());
}