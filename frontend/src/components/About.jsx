import React from "react";
import "./Login/About.css";

// function About() {
//   return (
//     <div className="about">
//       <div class="container">
//         <div class="row align-items-center my-5">
//           <div class="col-lg-7">
//             <img
//               class="img-fluid rounded mb-4 mb-lg-0"
//               src="http://placehold.it/900x400"
//               alt=""
//             />
//           </div>
//           <div class="col-lg-5">
//             <h1 class="font-weight-light">About</h1>
//             <p>
//              Hello Everyone !!<br/>
//              My team purpose is to build a site that connects people online thats why the project name is konect.
//             This is prince from MNNIT Allahabad Talking about my teammates there is prashant from Information Technology and sachin from ECE deparatment.
//             </p>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default About;

function About(){
  return(
      <div>
<section id="contact" className="contact section-bg">
      <div className="container-fluid">

        <div className="section-title">
          <h2 style={{fontSize:"30px"}}>Contact</h2>
          <h3>Get In Touch With <span>Us</span></h3>
          <p>Ut possimus qui ut temporibus culpa velit eveniet modi omnis est adipisci expedita at voluptas atque vitae autem.</p>
        </div>

        <div className="row justify-content-center">
          <div className="col-xl-10">
            <div className="row">

              <div className="col-lg-6">

                <div className="row justify-content-center">

                  <div className="col-md-6 info d-flex flex-column align-items-stretch">
                    <i className="bx bx-map"></i>
                    <h4>Address</h4>
                    <p>MNNIT Boys Hostel,<br/>Prayagraj,Uttar Pradesh</p>
                  </div>
                  <div className="col-md-6 info d-flex flex-column align-items-stretch">
                    <i className="bx bx-phone"></i>
                    <h4>Call Us</h4>
                    <p>+919125106389<br/>+919482394384</p>
                  </div>
                  <div className="col-md-6 info d-flex flex-column align-items-stretch">
                    <i className="bx bx-envelope"></i>
                    <h4>Email Us</h4>
                    <p>princekumar@gmail.com<br/>prashant@gmail.com<br/>sachin@gmail.com</p>
                  </div>
                  {/* <div class="col-md-6 info d-flex flex-column align-items-stretch">
                    <i class="bx bx-time-five"></i>
                    <h4>Working Hours</h4>
                    <p>Mon - Fri: 9AM to 5PM<br/>Sunday: 9AM to 1PM</p>
                  </div> */}

                </div>

              </div>

              <div class="col-lg-6">
                <form action="forms/contact.php" method="post" role="form" class="php-email-form">
                  <div class="row">
                    <div class="col-md-6 form-group">
                      <label for="name">Your Name</label>
                      <input type="text" name="name" class="form-control" id="name" required/>
                    </div>
                    <div class="col-md-6 form-group mt-3 mt-md-0">
                      <label for="email">Your Email</label>
                      <input type="email" class="form-control" name="email" id="email" required/>
                    </div>
                  </div>
                  <div class="form-group mt-3">
                    <label for="subject">Subject</label>
                    <input type="text" class="form-control" name="subject" id="subject" required/>
                  </div>
                  <div class="form-group mt-3">
                    <label for="message">Message</label>
                    <textarea class="form-control" name="message" rows="8" required></textarea>
                  </div>
                  <div class="my-3">
                    <div class="loading">Loading</div>
                    <div class="error-message"></div>
                    <div class="sent-message">Your message has been sent. Thank you!</div>
                  </div>
                  <div class="text-center"><button type="submit">Send Message</button></div>
                </form>
              </div>

            </div>
          </div>
        </div>

      </div>
    </section>
    </div>
  );
}

export default About;