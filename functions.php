<?php
add_action( 'wp_enqueue_scripts', 'divi_child_enqueue_styles' );
function divi_child_enqueue_styles() {
	wp_enqueue_style( 'divi-google-fonts', 'https://fonts.googleapis.com/css2?family=Jost:ital,wght@0,100..900;1,100..900&family=Epilogue:ital,wght@0,100..900;1,100..900&display=swap', array(), null );
	wp_enqueue_style( 'divi-parent-style', get_template_directory_uri() . '/style.css' );
	wp_enqueue_style( 'divi-child-style', get_stylesheet_directory_uri() . '/style.css', array( 'divi-parent-style' ), wp_get_theme()->get('Version') );
	wp_enqueue_style( 'divi-child-nav', get_stylesheet_directory_uri() . '/nav.css', array( 'divi-child-style' ), wp_get_theme()->get('Version') );
}
