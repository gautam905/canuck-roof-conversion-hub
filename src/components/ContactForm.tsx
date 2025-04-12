
import React from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Phone, Mail, MapPin, Clock } from "lucide-react";

const ContactForm = () => {
  return (
    <section id="contact" className="section-container bg-white">
      <h2 className="section-title">Get Your Free Estimate</h2>
      <p className="section-subtitle">
        Contact us today to learn more about our premium metal roofing solutions
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
                  <p className="text-roof-gray">(555) 123-4567</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <Mail className="text-roof-blue mr-4 mt-1 shrink-0" />
                <div>
                  <p className="font-medium">Email</p>
                  <p className="text-roof-gray">info@canuckroof.ca</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <MapPin className="text-roof-blue mr-4 mt-1 shrink-0" />
                <div>
                  <p className="font-medium">Service Area</p>
                  <p className="text-roof-gray">All across Canada</p>
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
        
        {/* Contact Form */}
        <div className="lg:col-span-2 bg-roof-light p-8 rounded-lg">
          <h3 className="text-xl font-bold mb-6">Send Us a Message</h3>
          
          <form className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label htmlFor="firstName" className="font-medium">
                  First Name*
                </label>
                <Input
                  id="firstName"
                  placeholder="Enter your first name"
                  className="bg-white"
                  required
                />
              </div>
              
              <div className="space-y-2">
                <label htmlFor="lastName" className="font-medium">
                  Last Name*
                </label>
                <Input
                  id="lastName"
                  placeholder="Enter your last name"
                  className="bg-white"
                  required
                />
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label htmlFor="email" className="font-medium">
                  Email*
                </label>
                <Input
                  id="email"
                  type="email"
                  placeholder="Enter your email"
                  className="bg-white"
                  required
                />
              </div>
              
              <div className="space-y-2">
                <label htmlFor="phone" className="font-medium">
                  Phone*
                </label>
                <Input
                  id="phone"
                  placeholder="Enter your phone number"
                  className="bg-white"
                  required
                />
              </div>
            </div>
            
            <div className="space-y-2">
              <label htmlFor="address" className="font-medium">
                Address
              </label>
              <Input
                id="address"
                placeholder="Enter your address"
                className="bg-white"
              />
            </div>
            
            <div className="space-y-2">
              <label htmlFor="message" className="font-medium">
                Message
              </label>
              <Textarea
                id="message"
                placeholder="Tell us about your roofing needs"
                className="bg-white"
                rows={5}
              />
            </div>
            
            <div className="text-sm text-roof-gray">
              By submitting this form, you agree to our privacy policy. Your information will never be shared with third parties.
            </div>
            
            <Button type="submit" className="btn-primary w-full md:w-auto">
              Get Free Estimate
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
