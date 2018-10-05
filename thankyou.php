<?php /* Template Name: Contact */?>

<?php get_header();?>

<div id="project-waypoint" class="content-area contact-template">
  <main id="main" class="site-main ">

    <div class="bg-black w-100 h-100vh">
      <div class="work-container  flex align-ends">
        <div class="flex justify-between flex-column items-start inview-animate work-titles w-50">
          <h1 class="tungsten ttu contact-title white">Your adventure starts here:</h1>
          <div class="contact-page-info-container flex items-start justify-between">
            <div class="contact-buenos-aires w-50 mt4 flex flex-column">
              <h2 class="tungsten work-description white ttu">Buenos Aires</h2>
              <a class="ttu gt-pressura-mono white">HOLA@MARCOPOLO.AGENCY</a>
              <a class="gt-pressura-mono white">+ 54 9 11 69742032</a>          <a class="gt-pressura-mono white">AV.DEL LIBERTADOR 7766,<br>
              CABA. ARGENTINA</a> 

            </div>
            <div class="contact-miami w-50 flex flex-column mt4">
               <h2 class="tungsten work-description white ttu">Miami</h2>
               <a class="ttu gt-pressura-mono white">Hi@MARCOPOLO.AGENCY</a>
              <a class="gt-pressura-mono white">+1 (305) 389-7885</a>          <a class="gt-pressura-mono white">AV.DEL LIBERTADOR 7766,<br>
              CABA. ARGENTINA</a> 
            </div>
          </div>
        </div>
        <div class="form-container flex flex-column w-50">

        <?php
        // Checks if form has been submitted
        if ($_SERVER['REQUEST_METHOD'] == 'POST') {
            
                  $to = "hi@marcopoloca.com"; // Mail al que le va a llegar
                  $from = $_POST['email']; // Mail del usuario
                  $nombre = $_POST['name']; //Nombre
                  $subject = "Contacto por web Marco Polo Creative Agency";
                  $message = $nombre . " " . " dejo el siguiente mensaje:" . "\n\n" . $_POST['message'] . "\n\n" . $from;
                  $headers = "From:" . $from;

                  mail($to, $subject, $message, $headers);
                  
              
                  // echo "Mensaje enviado. Gracias!" . $nombre . ", Nos pondremos en contacto.";
                  header('Location: thankyou.php'); 
                }
          
        ?>

          <h1>Congratulations on your first step towards changing your business. We'll be in touch shortly.<br><br>
          <a href="/"><h2 class=" lh-solid marcopolo-red">Go Back Home</h2></a>

        </div>

      </div>
    </div>


  </main>
</div>


<?php get_footer(); ?>

