<?php
/**
 * The main template file
 *
 * This is the most generic template file in a WordPress theme
 * and one of the two required files for a theme (the other being style.css).
 * It is used to display a page when nothing more specific matches a query.
 * E.g., it puts together the home page when no home.php file exists.
 *
 * @link https://developer.wordpress.org/themes/basics/template-hierarchy/
 *
 * @package marcopolo
 */
get_header();
?>


<div id="primary" class="content-area home">
		<main id="main" class="site-main"></main>
			<div class="slideshow-featured-container mw-100 h-100vh relative">

				<?php query_posts('category_name=featured&orderby=rand');?>
				<?php if ( have_posts() ) :	while ( have_posts() ) :	the_post();
					get_template_part( 'template-parts/content-hero');
					endwhile;
					endif;
				?>
			</div>

			<div class="contact-info-home white absolute di left-0 bottom-0 container z-9 gt-pressura-mono" id="main-slider-loader">

					<svg class="main-slider-circle" viewBox="0 0 28 28" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
							<defs></defs>
							<g id="Page-1" stroke="none" stroke-width="2" fill="none" fill-rule="evenodd">
									<path d="M26.8,13.9 C26.8,21.025 21.025,26.8 13.9,26.8 C6.776,26.8 1,21.025 1,13.9 C1,6.775 6.776,1 13.9,1 C21.025,1 26.8,6.775 26.8,13.9 Z" id="Stroke-2" stroke="#FFFFFF"></path>
							</g>
					</svg>

			</div>

			
			
		</main><!-- #main -->
	</div><!-- #primary -->


<?php get_footer(); ?>
