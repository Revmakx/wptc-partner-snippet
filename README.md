# wptc-partner-snippet
Code Snippet to add WPTC partner link to your WP Theme / Plugins


<h2>How to integurate</h2>

1. Clone the repo into your plugin/theme.

2. Replace all <code>custom-prefix</code> and <code>custom_prefix</code> names to your plugin/theme prefix in all 3 files.

3. Comment out anyone of the <code>wp_register_style</code> line in <b>wptcUpdateRecommandation.php</b> as per your need.

4. Replace partnerLink in <code>custom_prefix_add_wptc_upset_buttons()</code> from <b>wptc-update-recommandation.js</b>, that you get from the WPTC team also change <code>plugin_slug</code>, <code>theme_slug</code>

5. that's it.
