<?php
 // Checks if form has been submitted
        if ($_SERVER['REQUEST_METHOD'] == 'POST') {
              
                  $to = "hi@marcopoloca.com"; // Mail al que le va a llegar
                  $from = $_POST['email']; // Mail del usuario
                  $nombre = $_POST['name']; //Nombre
                  $company = $_POST['companyname'];
                  $phone = $_POST['phone'];
                  $budget = $_POST['budget'];
                  $subject = "Contacto por web Marco Polo Creative Agency";
                  $message = $nombre . " " . " dejo el siguiente mensaje:" . "\n\n" . $_POST['message'] . "\n\n" . $from;
                  $headers = "From: " . $from;

                  mail($to, $subject, $message, $headers);

              
                  // echo "Mensaje enviado. Gracias!" . $nombre . ", Nos pondremos en contacto.";
                }
        ?>
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
              <a class="gt-pressura-mono white">+1 (305) 389-7885</a>
              <a class="gt-pressura-mono white">AV.DEL LIBERTADOR 7766,<br>
              CABA. ARGENTINA</a> 
            </div>
          </div>
        </div>
        <div class="form-container flex flex-column w-50">

        

          <form action="" method="POST" id="subForm" class="sign-up form-inner justify-start no-smoothState">
            <div class="flex justify-between ">
                <input placeholder="Name*" id="fieldName" name="name" type="text" class="mail-input w-45 " >
                <input placeholder="Company Name" id="companyName" name="companyname" type="text" class="mail-input w-45">
            </div>
              <div class="flex justify-between mt5">
                <input placeholder="Email*" id="fieldEmail" name="email" type="mail" class="mail-input w-45" required="">
                <input placeholder="Phone*" id="phone" name="phone" type="text" class="mail-input w-45"  >
              </div>
              <input placeholder="Budget Range" id="budget" name="budget" type="numbers" class="mail-input w-45 mt5" >
              <textarea placeholder="Tell us about your project"  id="fieldMessage" name="message" type="text" class="mail-input message-input w-100 mt5"></textarea>
             
              <div class="w-100 button-container flex mt5">
                <button class="no-smoothState"type="submit" class="ttu submit align-end " name="submit">Send</button>
              </div>
          </form>

        </div>

      </div>
    </div>


  </main>

</div>


<?php get_footer(); ?>

