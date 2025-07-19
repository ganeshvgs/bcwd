import { useState } from "react";
import {
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope,
  FaRegQuestionCircle,
} from "react-icons/fa";

export default function Contact() {
  const [hideInfo, setHideInfo] = useState(false);

  return (
    <section
      id="contact"
      className="relative py-20 px-6 md:px-10 text-white overflow-hidden"
    >
      {/* ✅ Google Map Background */}
      <div className="absolute inset-0 z-0">
        <iframe
          title="Hostel Location"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d136950.91866915018!2d74.86118204295316!3d13.010157870390824!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba351ed3b843127%3A0x337976f31d40f04c!2sBCM%20Hostel!5e1!3m2!1sen!2sin!4v1752759451150!5m2!1sen!2sin"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          className="w-full h-full"
          onClick={() => setHideInfo(true)}
        ></iframe>
      </div>

      {/* ✅ Contact Info Box (shown until map clicked) */}
      {!hideInfo && (
        <div className="relative z-10 max-w-5xl mx-auto text-center bg-black/60 p-6 sm:p-10 rounded-xl backdrop-blur-md fade-in-up">
          <h2 className="text-3xl md:text-4xl font-bold text-yellow-300 mb-4">
            Contact Information
          </h2>
          <p className="text-lg text-yellow-100 mb-10 flex items-center justify-center gap-2">
            <FaRegQuestionCircle className="text-yellow-200" />
            Have questions or need more information? Reach out to us!
          </p>

          {/* Responsive Grid */}
          <div className="grid gap-6 md:gap-8 sm:grid-cols-2 md:grid-cols-3">
            {/* Address */}
            <div className="flex flex-col items-center text-center sm:text-left sm:items-start gap-3 p-6 bg-white/90 text-maroon rounded-xl hover:shadow-lg transition zoom-in">
              <FaMapMarkerAlt className="text-maroon text-3xl" />
              <div>
                <h4 className="font-semibold">Address</h4>
                <p className="text-sm mt-1">
                  BCWD Hostel Surathkal,<br />
                  Near Surathkal Police Station,<br />
                  Surathkal, Karnataka
                </p>
              </div>
            </div>

            {/* Phone */}
            <div className="flex flex-col items-center text-center sm:text-left sm:items-start gap-3 p-6 bg-white/90 text-maroon rounded-xl hover:shadow-lg transition zoom-in">
              <FaPhoneAlt className="text-maroon text-3xl" />
              <div>
                <h4 className="font-semibold">Phone</h4>
                <a href="tel:+919876500000" className="hover:underline text-sm mt-1">
                  +91 98765 00000
                </a>
              </div>
            </div>

            {/* Email */}
            <div className="flex flex-col items-center text-center sm:text-left sm:items-start gap-3 p-6 bg-white/90 text-maroon rounded-xl hover:shadow-lg transition zoom-in">
              <FaEnvelope className="text-maroon text-3xl" />
              <div>
                <h4 className="font-semibold">Email</h4>
                <a
                  href="mailto:bcwdhostel.surathkal@gov.in"
                  className="hover:underline break-all text-sm mt-1"
                >
                  bcwdhostel.surathkal@gov.in
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
