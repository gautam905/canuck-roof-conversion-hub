
import React, { useEffect } from "react";
import { Phone, Mail, MapPin, Clock } from "lucide-react";

const ContactForm = () => {
  // Load the external script for the form integration
  useEffect(() => {
    if (!document.getElementById("msgsndr-form-embed")) {
      const script = document.createElement("script");
      script.id = "msgsndr-form-embed";
      script.src = "https://link.msgsndr.com/js/form_embed.js";
      script.async = true;
      document.body.appendChild(script);
    }
  }, []);

  return (
    <section id="contact" className="section-container bg-white">
      <h2 className="section-title">Get Your Free Estimate</h2>
      <p className="section-subtitle">
        Contact us today to learn more about our premium Solaris Roofs metal roofing solutions
        and schedule your free digital consultation.
      </p>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mt-12">
        {/* Contact Info */}
        <div className="lg:col-span-1 space-y-8">
          <div className="bg-roof-light p-8 rounded-lg">
            <h3 className="text-xl font-bold mb-6">Contact Information</h3>
            
            <div className="space-y-6">
              <div className="flex items-start">
                <Phone className="text-roof-blue mr-4 mt-1 shrink-0" />
                <div>
                  <p className="font-medium">Phone</p>
                  <p className="text-roof-gray"><a href="tel:(289) 210-9421">(289) 210-9421</a></p>
                </div>
              </div>
              
              <div className="flex items-start">
                <Mail className="text-roof-blue mr-4 mt-1 shrink-0" />
                <div>
                  <p className="font-medium">Email</p>
                  <p className="text-roof-gray">solomon@solarisroofs.com</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <MapPin className="text-roof-blue mr-4 mt-1 shrink-0" />
                <div>
                  <p className="font-medium">Service Area</p>
                  <p className="text-roof-gray">All across Ontario</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <Clock className="text-roof-blue mr-4 mt-1 shrink-0" />
                <div>
                  <p className="font-medium">Hours</p>
                  <p className="text-roof-gray">Monday - Friday: 8am - 6pm</p>
                  <p className="text-roof-gray">Saturday: 9am - 4pm</p>
                  <p className="text-roof-gray">Sunday: Closed</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="bg-roof-blue text-white p-8 rounded-lg">
            <h3 className="text-xl font-bold mb-4 text-white">Why Contact Us?</h3>
            <ul className="space-y-2">
              <li className="flex items-center">
                <span className="mr-2">✓</span>
                <span>Free digital home consultation</span>
              </li>
              <li className="flex items-center">
                <span className="mr-2">✓</span>
                <span>Free satellite roof measurements</span>
              </li>
              <li className="flex items-center">
                <span className="mr-2">✓</span>
                <span>No obligation estimates</span>
              </li>
              <li className="flex items-center">
                <span className="mr-2">✓</span>
                <span>50-year warranty information</span>
              </li>
              <li className="flex items-center">
                <span className="mr-2">✓</span>
                <span>Financing options</span>
              </li>
            </ul>
          </div>
        </div>
        
        {/* Custom Contact Form Embed */}
        <div className="lg:col-span-2 bg-roof-light p-8 rounded-lg">
          <h3 className="text-xl font-bold mb-6">Send Us a Message</h3>
          <div className="w-full min-h-[500px]">
           <iframe
            src="https://api.leadconnectorhq.com/widget/form/nsRujMTOZPe3bcevzeYi"
            style={{
                width: "100%",
                height: "800px",
                border: "none",
                borderRadius: "4px"
              }}
            id="inline-nsRujMTOZPe3bcevzeYi" 
            data-layout="{'id':'INLINE'}"
            data-trigger-type="alwaysShow"
            data-trigger-value=""
            data-activation-type="alwaysActivated"
            data-activation-value=""
            data-deactivation-type="neverDeactivate"
            data-deactivation-value=""
            data-form-name="Google Ads Form"
            data-height="783"
            data-layout-iframe-id="inline-nsRujMTOZPe3bcevzeYi"
            data-form-id="nsRujMTOZPe3bcevzeYi"
            title="Google Ads Form"
                >
          </iframe>
          <script src="https://link.msgsndr.com/js/form_embed.js"></script>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
