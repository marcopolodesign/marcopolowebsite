<?php /* Template Name: Work */?>

<?php get_header();?>



<div id="project-waypoint" class="content-area work-template">
  <main id="main" class="site-main ">


    <div class="work-container">
      <div class="flex items-start inview-animate work-titles">
        <h1 class="tungsten ttu work-title marcopolo-red">You call it work, we call them travels</h1>
        <h2 class="tungsten black work-description">We deliver brand enhancement by telling the brand’s own story.  We turn brands into adventures.</h2>
      </div>


      <div class="works-container flex ">
        <div class="works-filters mv-5 flex-column absolute inview-animate">
          <a class="gt-pressura-mono pv2">BRANDING <span><sup>10</sup></span></a>
          <a class="gt-pressura-mono pv2">EDITORIAL <span><sup>6</sup></span></a>
          <a class="gt-pressura-mono pv2">WEB <span><sup>8</sup></span></a>
          <a class="gt-pressura-mono pv2">ARCHIVE <span><sup>23</sup></span></a>
        </div>

          <div class="works-projects">
                <?php
                $args = array(
                    'post_type' => 'post',
                   // 'orderby' => 'rand'
                );

                $post_query = new WP_Query($args);
                if($post_query->have_posts() ) { while($post_query->have_posts() ) {
                $post_query->the_post(); ?>

                <div class="is-project pv4-ns inview-animate">
                    <?php if (get_field('hero_image')): ?>
                    <div class="project-image" style="<?php custom_background_image('hero_image');?>"></div>
                   
                      <div class="project-text-grid">
                        <h2 class="tungsten ttu black"><?php the_title(); ?>
                        </h2>
                        <a class="gt-pressura-mono project-link"href="<?php the_permalink(); ?>">VIEW CASE STUDY</a>
                      </div>
                    </a>
                </div>    
            
                <?php endif; } } ?>
            </div>
        </div>

    </main>

    <div class="about-contact container ">
            <div class="mv6 w-50 center inview-animate">
                  <h2 class="tungsten black">Got to see our some of our work, hopefully you’ll call us. If you’re not there yet, get to know the philosophy behind the work seen above.</h2>
            </div>

            <div class="flex  flex-column w-100 h-100vh inview-animate">

              <div class="margin-auto">
                <a href="/contact.php">
                    <div class="contact-option-1 center tc">
                      <h2 class="tungsten black mv3 ">If you're convinced</h2>
                      <h1 class="contact-option-cta soft-transition transition-05s info-featured-h marcopolo-red relative top-0 left-0 convinced">Contact us</h1>
                    </div>
                </a>


                <a href="/about-us">
                    <div class="contact-option-2 mv4 center tc inview-animate">
                      <h2 class="tungsten black mv3 ">If you're not convinced (Aren't you?)</h2>
                      <h1 class="contact-option-cta soft-transition transition-05s info-featured-h marcopolo-red relative top-0 left-0 convinced not-convinced">About Us</h1>
                    </div>
                </a>
              </div>
      </div>

      </div>
   

  </main>
</div>


<?php get_footer(); ?>
