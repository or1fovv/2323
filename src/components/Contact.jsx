
import React from 'react'
import "../App.css"
import Button from './Button'

const Contact = () => {
  return (
    <section className="contact-section">
      <div className="contact-main">
        <div className="contact-form">
          <h2>Get in touch</h2>
          <form>
            <div className="row two-cols">
              <div className="field">
                <label htmlFor="firstName">First Name</label>
                <input id="firstName" name="firstName" />
              </div>
              <div className="field">
                <label htmlFor="lastName">Last Name</label>
                <input id="lastName" name="lastName" />
              </div>
            </div>

            <div className="row two-cols">
              <div className="field">
                <label htmlFor="email">Email</label>
                <input id="email" name="email" />
              </div>
              <div className="field">
                <label htmlFor="phone">Phone</label>
                <input id="phone" name="phone" />
              </div>
            </div>

            <div className="row">
              <div className="field">
                <label htmlFor="subject">Subject</label>
                <input id="subject" name="subject" />
              </div>
            </div>

            <div className="row">
              <div className="field">
                <label htmlFor="message">Message</label>
                <textarea id="message" name="message"></textarea>
              </div>
            </div>

            <div>
              <div className="row center">
                <button type="button" className="send-btn">Send Your Message</button>
              </div>
            </div>

          </form>
        </div>

        <div className="contact-info">
          <div className="info-card">
            <div className="icon">✉️</div>
            <div className="info">support@skillbridge.com</div>
          </div>
          <div className="info-card">
            <div className="icon">📞</div>
            <div className="info">+91 00000 00000</div>
          </div>
          <div className="info-card">
            <div className="icon">📍</div>
            <div className="info">Some Where in the World</div>
          </div>
          <div className="info-card">
            <div className="icons-row">
              <div className="social">f</div>
              <div className="social">t</div>
              <div className="social">in</div>
            </div>
            <div className="info">Social Profiles</div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact
