import React from "react";
import "./Contact.css";

export default function Contact() {
  return (
    <>
      <section class="section section-contact">
        <div class="container">
          <h2 class="common-heading">Contact Us</h2>
        </div>

        <div class="section-contact-main contact-container">
          <form action="#">
            <div class=" grid grid-two-column">
              <div>
                <label for="username"></label>
                <input
                  type="text"
                  name="username"
                  placeholder="Username"
                  id="username"
                />
              </div>
              <div>
                <label for="email"></label>
                <input
                  type="email"
                  name="email"
                  placeholder="indian@gmail.com"
                  id="email"
                />
              </div>
            </div>
            <div>
              <label for="phone"></label>
              <input
                type="tel"
                name="phone"
                placeholder="Contact No."
                id="phone"
              />
            </div>
            <div>
              <label for="subject"></label>
              <input
                type="text"
                name="subject"
                placeholder="Subject"
                id="subject"
              />
            </div>
            <div>
              <label for="textarea"></label>
              <textarea
                name="textarea"
                id="textarea"
                cols="30"
                rows="7"
                placeholder="Enter your message here"
              ></textarea>
            </div>

            {/* <div>
              <input
                type="submit"
                name="submit"
                id="submit"
                class="btn"
                value="send message"
              />
            </div> */}
          </form>
        </div>
      </section>
    </>
  );
}
