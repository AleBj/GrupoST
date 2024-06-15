<?php
	add_theme_support( 'post-thumbnails' );
	function disable_plugin_updates( $value ) {
		unset( $value->response['advanced-custom-fields-pro/acf.php'] );
		return $value;
	}
	add_filter( 'site_transient_update_plugins', 'disable_plugin_updates' );

	/* borrar barra de admin */ 
    add_action('after_setup_theme', 'remove_admin_bar');
 
	function remove_admin_bar() {
	if (!current_user_can('administrator') && !is_admin()) {
	  show_admin_bar(true);
	}
	}
	/* establecer el limitador de caché a 'private' */
	session_cache_limiter('private');
	$cache_limiter = session_cache_limiter();

	/* establecer la caducidad de la caché a 30 minutos */
	session_cache_expire(30);
	$cache_expire = session_cache_expire();

	// upload_max_filesize
	function filter_site_upload_size_limit( $size ) {
    // Set the upload size limit to 60 MB for users lacking the 'manage_options' capability.
    if ( ! current_user_can( 'manage_options' ) ) {
	        // 60 MB.
	        $size = 50 * 1024 * 1024;
	    }
	    return $size;
	}
	add_filter( 'upload_size_limit', 'filter_site_upload_size_limit', 50 );	

	# Post types
	# ----------------------------------
	$menu_position = 5;
	function add_post_type($name, $plural, $singular, $icon, $supports, $taxonomies) {
		global $menu_position;
		add_action('init', function() use ($name, $plural, $singular, $icon, $supports, $taxonomies) {
			global $menu_position;
			$plural_lowercase = strtolower($plural);
			$singular_lowercase = strtolower($singular);
			// Register taxonomy
			if (array_search('category', $taxonomies) !== false) {
				register_taxonomy(
					$name.'_categories',
					$name,
				array(
					'hierarchical' => true,
					'label' => 'Categorías de '.$plural,
					'query_var' => true,
					'rewrite' => true
				));
				// Inherit actions
				add_action($name.'_categories_add_form_fields', function() {
					do_action('category_add_form_fields');
				});
				add_action($name.'_categories_edit_form_fields', function($term) {
					do_action('category_edit_form_fields', $term);
				});
				add_action('create_'.$name.'_categories', function($term_id) {
					do_action('edited_category', $term_id);
				}, 10, 2);
				add_action('edited_'.$name.'_categories', function($term_id) {
					do_action('edited_category', $term_id);
				}, 10, 2);
				// Remove category from taxonomy
				if(($key = array_search('category', $taxonomies)) !== false)
					unset($taxonomies[$key]);
			}
			// Register post type
			$labels = array(
				'name' => _x($plural, 'post type general name'),
				'singular_name' => _x($singular, 'post type singular name'),
				'add_new' => _x('Add new', $singular_lowercase),
				'add_new_item' => __('Add new '.$singular_lowercase),
				'edit_item' => __('Edit '.$singular_lowercase),
				'new_item' => __('New '.$singular_lowercase),
				'all_items' => __('All '.$plural_lowercase),
				'view_item' => __('See '.$singular_lowercase),
				'search_items' => __('Search '.$plural_lowercase),
				'not_found' => __('Not found '.$plural_lowercase),
				'not_found_in_trash' => __('There are '.$plural_lowercase.' in trash'),
				'parent_item_colon' => '',
				'menu_name' => $plural
			);
			if (substr($singular_lowercase, -3) != 'ima')
			if (substr($singular_lowercase, -1) == 'a' || $singular_lowercase == 'novedad' || substr($singular_lowercase, -3) == 'rse') {
				$labels['new_item'] = __('New '.$singular_lowercase);
				$labels['add_new'] = _x('Add new', $singular_lowercase);
				$labels['add_new_item'] = __('Add new '.$singular_lowercase);
				$labels['all_items'] = __('All '.$plural_lowercase);
			}
			$args = array(
				'labels' => $labels,
				'description' => 'Contiene '.$plural_lowercase.' y datos específicos de los mismos',
				'public' => true,
				'menu_position' => $menu_position,
				'supports' => $supports,
				'taxonomies' => $taxonomies,
				'has_archive' => true,
				'menu_icon'	=> $icon,
				'rewrite' => array('slug' => $singular_lowercase, 'with_front'=>false),
				// 'show_in_rest'          => true,
			 //    'rest_base'             => $singular_lowercase,
			 //    'rest_controller_class' => 'WP_REST_Terms_Controller',
			);
			register_post_type($name, $args);
		});
	}

	add_post_type('news', 'News', 'News', 'dashicons-format-aside', array('title', 'editor', 'thumbnail', 'revisions'), array('category', 'post_tag'));

	#'supports' => array( 'title', 'editor', 'excerpt', 'author', 'thumbnail', 'trackbacks', 'custom-fields', 'comments', 'revisions', 'page-attributes' ),
	#'taxonomies' => array( 'category', 'post_tag', 'page-category' )

	
	# Admin
	# ----------------------------------
    if (is_admin()) {
        // acf_add_options_page(array(
        //     'page_title' => 'Bloques Home',
        //     'menu_title' => 'Slides Home',
        //     'menu_slug' => 'bloques-home',
        //     'icon_url' => 'dashicons-tickets-alt',
        //     'position' => 9
        // ));
        // acf_add_options_page(array(
        //     'page_title' => 'Destacados Home',
        //     'menu_title' => 'Destacados Home',
        //     'menu_slug' => 'Destacados-home',
        //     'icon_url' => 'dashicons-images-alt',
        //     'position' => 8
        // ));        
       // acf_add_options_page(array(
       //      'page_title' => 'Banners',
       //      'menu_title' => 'Banners',
       //      'menu_slug' => 'banners',
       //      'icon_url' => 'dashicons-media-document',
       //      'position' => 9
       //  ));       
        // acf_add_options_page(array(
        //     'page_title' => 'Footer',
        //     'menu_title' => 'Footer',
        //     'menu_slug' => 'footer',
        //     'icon_url' => 'dashicons-editor-ol',
        //     'position' => 9
        // ));
       //  acf_add_options_page(array(
       //      'page_title' => 'Submenú',
       //      'menu_title' => 'Submenú',
       //      'menu_slug' => 'submenu',
       //      'icon_url' => 'dashicons-tagcloud',
       //      'position' => 9
       //  ));
       //  acf_add_options_page(array(
       //      'page_title' => 'Banners Hero',
       //      'menu_title' => 'Banners Hero',
       //      'menu_slug' => 'bannershero',
       //      'icon_url' => 'dashicons-editor-insertmore',
       //      'position' => 9
       //  )); 

    }

?>
