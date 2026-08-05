<?php
require_once get_stylesheet_directory() . '/testimonials.php';

add_action( 'wp_enqueue_scripts', 'divi_child_enqueue_styles' );
function divi_child_enqueue_styles() {
	wp_enqueue_style( 'divi-google-fonts', 'https://fonts.googleapis.com/css2?family=Jost:ital,wght@0,100..900;1,100..900&family=Epilogue:ital,wght@0,100..900;1,100..900&display=swap', array(), null );
	wp_enqueue_style( 'divi-parent-style', get_template_directory_uri() . '/style.css' );
	wp_enqueue_style( 'divi-child-style', get_stylesheet_directory_uri() . '/style.css', array( 'divi-parent-style' ), wp_get_theme()->get('Version') );
	wp_enqueue_style( 'divi-child-nav', get_stylesheet_directory_uri() . '/nav.css', array( 'divi-child-style' ), wp_get_theme()->get('Version') );
	wp_enqueue_style( 'divi-child-buttons', get_stylesheet_directory_uri() . '/buttons.css', array( 'divi-child-style' ), wp_get_theme()->get('Version') );
	wp_enqueue_style( 'divi-child-card-reveal', get_stylesheet_directory_uri() . '/card-reveal.css', array( 'divi-child-style' ), wp_get_theme()->get('Version') );
	wp_enqueue_style( 'divi-child-image-reveal', get_stylesheet_directory_uri() . '/image-reveal.css', array( 'divi-child-style' ), wp_get_theme()->get('Version') );
	wp_enqueue_style( 'divi-child-testimonials', get_stylesheet_directory_uri() . '/testimonials.css', array( 'divi-child-style' ), wp_get_theme()->get('Version') );
}

add_action( 'wp_enqueue_scripts', 'divi_child_enqueue_scripts' );
function divi_child_enqueue_scripts() {
	wp_enqueue_script( 'divi-child-card-reveal', get_stylesheet_directory_uri() . '/card-reveal.js', array(), wp_get_theme()->get('Version'), true );
	wp_enqueue_script( 'divi-child-image-reveal', get_stylesheet_directory_uri() . '/image-reveal.js', array(), wp_get_theme()->get('Version'), true );
	wp_enqueue_script( 'divi-child-testimonials', get_stylesheet_directory_uri() . '/testimonials.js', array(), wp_get_theme()->get('Version'), true );
}
