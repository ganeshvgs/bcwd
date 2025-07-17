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

      {/* ✅ Contact Info Box (hidden on map click) */}
      {!hideInfo && (
        <div className="relative z-10 max-w-5xl mx-auto text-center bg-black/60 p-10 rounded-xl backdrop-blur-md">
          <h2 className="text-3xl md:text-4xl font-bold text-yellow-300 mb-4">
            Contact Information
          </h2>
          <p className="text-lg text-yellow-100 mb-10 flex items-center justify-center gap-2">
            <FaRegQuestionCircle className="text-yellow-200" />
            Have questions or need more information? Reach out to us!
          </p>

          <div className="grid gap-8 md:grid-cols-3 text-left">
            <div className="flex items-start gap-4 p-6 bg-white/90 text-maroon rounded-xl hover:shadow-lg transition">
              <FaMapMarkerAlt className="text-maroon text-2xl mt-1" />
              <div>
                <h4 className="font-semibold">Address</h4>
                <p>
                  BCWD Hostel Surathkal,
                  <br />
                  Near Surathkal Police Station,
                  <br />
                  Surathkal, Karnataka
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4 p-6 bg-white/90 text-maroon rounded-xl hover:shadow-lg transition">
              <FaPhoneAlt className="text-maroon text-2xl mt-1" />
              <div>
                <h4 className="font-semibold">Phone</h4>
                <p>+91 98765 00000</p>
              </div>
            </div>

            <div className="flex items-start gap-4 p-6 bg-white/90 text-maroon rounded-xl hover:shadow-lg transition">
              <FaEnvelope className="text-maroon text-2xl mt-1" />
              <div>
                <h4 className="font-semibold">Email</h4>
                <p>bcwdhostel.surathkal@gov.in</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
