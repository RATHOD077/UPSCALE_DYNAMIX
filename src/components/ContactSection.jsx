import React, { useState } from 'react';
import { Phone, Mail, MapPin, Share2, Download, Check, FileText } from 'lucide-react';
import WhatsAppLogo from './WhatsAppLogo';
import steveVaz from '../assets/steve-vaz.png';
import logo from '../assets/logo.jpg';
import './ContactSection.css';

export default function ContactSection() {
  const [copied, setCopied] = useState(false);
  const [contactSaved, setContactSaved] = useState(false);

  // Generate and download VCF contact card
  const handleSaveContact = () => {
    const vcard = `BEGIN:VCARD
VERSION:3.0
N:Vaz;Steve;;;
FN:Steve Vaz
ORG:Upscale Dynamix (Division of Itech Direct)
TITLE:Founder & CEO
TEL;TYPE=WORK,VOICE:+919821622152
TEL;TYPE=CELL,VOICE:+919833282855
EMAIL;TYPE=WORK:info@upscaledynamix.com
EMAIL;TYPE=HOME:stevevaz@upscaledynamix.com
ADR;TYPE=WORK:;;Hoshang Complex, A Wing-501, Vakola;Santacruz (E);Mumbai;Maharashtra;India
NOTE:Upscale Dynamix - Empowering Entrepreneurs Since 2013
END:VCARD`;

    const blob = new Blob([vcard], { type: 'text/vcard;charset=utf-8;' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.setAttribute('download', 'Steve_Vaz_Upscale_Dynamix.vcf');
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);

    setContactSaved(true);
    setTimeout(() => setContactSaved(false), 3000);
  };

  // Share profile
  const handleShare = async () => {
    const shareData = {
      title: 'Steve Vaz - Upscale Dynamix Company Profile',
      text: 'Upscale Dynamix - Empowering Entrepreneurs in their journey of growth. Connect with Steve Vaz.',
      url: window.location.href,
    };

    if (navigator.share) {
      try {
        await navigator.share(shareData);
      } catch (err) {
        console.log('Error sharing:', err);
      }
    } else {
      navigator.clipboard.writeText(window.location.href);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    }
  };

  return (
    <section className="contact-sec section" id="contact">
      <div className="container">
        
        {/* Section Header */}
        <div className="contact-sec__header reveal visible">
          <span className="eyebrow">Direct Connect</span>
          <h2 className="display-title">Connect with Steve Vaz</h2>
          <span className="gold-line" />
          <p className="section-sub">
            Reach out directly for strategic consultations, media sales retainer engagements, 
            technology platforms, or partnership opportunities.
          </p>
        </div>

        {/* Digital Contact Card */}
        <div className="contact-card-wrapper">
          <div className="contact-card">
            
            {/* Header / Avatar area */}
            <div className="contact-card__top">
              <div className="contact-card__avatar-wrap">
                <img src={steveVaz} alt="Steve Vaz" className="contact-card__avatar" />
                <span className="contact-card__online-badge" title="Available for business" />
              </div>
              <div className="contact-card__profile-info">
                <h3 className="contact-card__name">STEVE VAZ</h3>
                <p className="contact-card__role">Founder &amp; CEO · Upscale Dynamix</p>
                <p className="contact-card__subrole">Division of Itech Direct</p>
              </div>
              <img src={logo} alt="Upscale Dynamix Logo" className="contact-card__logo" />
            </div>

            {/* Action Buttons List */}
            <div className="contact-card__actions">
              
              {/* Phone 1 */}
              <a href="tel:9821622152" className="contact-btn contact-btn--phone">
                <div className="contact-btn__icon">
                  <Phone size={18} />
                </div>
                <span className="contact-btn__text">9821622152</span>
                <span className="contact-btn__tag">Primary</span>
              </a>

              {/* Phone 2 */}
              <a href="tel:9833282855" className="contact-btn contact-btn--phone">
                <div className="contact-btn__icon">
                  <Phone size={18} />
                </div>
                <span className="contact-btn__text">9833282855</span>
                <span className="contact-btn__tag">Secondary</span>
              </a>

              {/* WhatsApp Us (Highlight) */}
              <a
                href="https://wa.me/919821622152?text=Hello%20Steve%20Vaz,%20I%20would%20like%20to%20discuss%20Upscale%20Dynamix%20business%20opportunities."
                target="_blank"
                rel="noreferrer"
                className="contact-btn contact-btn--whatsapp"
              >
                <div className="contact-btn__icon contact-btn__icon--wa">
                  <WhatsAppLogo size={22} color="#ffffff" />
                </div>
                <span className="contact-btn__text">Whatsapp Us</span>
                <span className="contact-btn__status">Online Chat</span>
              </a>

              {/* Corporate Email */}
              <a href="mailto:info@upscaledynamix.com" className="contact-btn contact-btn--email">
                <div className="contact-btn__icon">
                  <Mail size={18} />
                </div>
                <span className="contact-btn__text">E Mail Us (Corporate)</span>
                <span className="contact-btn__subtext">info@upscaledynamix.com</span>
              </a>

              {/* Personal Email */}
              <a href="mailto:stevevaz@upscaledynamix.com" className="contact-btn contact-btn--email">
                <div className="contact-btn__icon">
                  <Mail size={18} />
                </div>
                <span className="contact-btn__text">E Mail Us (Personal)</span>
                <span className="contact-btn__subtext">stevevaz@upscaledynamix.com</span>
              </a>

              {/* Address with Map Link */}
              <a
                href="https://maps.google.com/?q=Hoshang+Complex,+A+Wing-501,+Vakola+Santacruz(E),+Mumbai"
                target="_blank"
                rel="noreferrer"
                className="contact-btn contact-btn--address"
              >
                <div className="contact-btn__icon">
                  <MapPin size={18} />
                </div>
                <div className="contact-btn__address-wrap">
                  <span className="contact-btn__label">Address :</span>
                  <span className="contact-btn__address-val">
                    Hoshang Complex, A Wing-501, Vakola Santacruz(E), Mumbai
                  </span>
                </div>
              </a>

              {/* Company Profile Quick Scroll */}
              <a href="#hero" className="contact-btn contact-btn--profile">
                <div className="contact-btn__icon">
                  <FileText size={18} />
                </div>
                <span className="contact-btn__text">Company Profile (Back to Top)</span>
              </a>
            </div>

            {/* Bottom Dual Buttons: Share & Save Contact */}
            <div className="contact-card__footer">
              <button
                type="button"
                className="contact-card__btn-action"
                onClick={handleShare}
              >
                <Share2 size={16} />
                <span>{copied ? 'Link Copied!' : 'Share'}</span>
              </button>

              <button
                type="button"
                className="contact-card__btn-action contact-card__btn-action--primary"
                onClick={handleSaveContact}
              >
                {contactSaved ? <Check size={16} /> : <Download size={16} />}
                <span>{contactSaved ? 'Contact Saved!' : 'Save Contact'}</span>
              </button>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
