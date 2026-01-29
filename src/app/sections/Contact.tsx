import { Mail, Phone, MapPin } from "lucide-react";
import { ContactForm } from "../components/ContactForm";

export default function Contact() {
  return (
    <section
      id="contact"
      className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-blue-100/50 via-indigo-100/50 to-purple-100/50"
    >
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-4 font-bold">
            Contact Us
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          <div className="space-y-8">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-lg flex items-center justify-center flex-shrink-0 shadow-lg">
                <Mail className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="text-xl text-slate-800 mb-1 font-semibold">Email</h3>
                <a
                  href="mailto:krishnatechinnovations@gmail.com"
                  className="text-slate-600 hover:text-purple-600 transition-colors"
                >
                  krishnatechinnovations@gmail.com
                </a>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-teal-600 rounded-lg flex items-center justify-center flex-shrink-0 shadow-lg">
                <Phone className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="text-xl text-slate-800 mb-1 font-semibold">Phone</h3>
                <a href="tel:+919460403092" className="text-slate-600 hover:text-purple-600 transition-colors">
                  +91 9460403092
                </a>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-red-600 rounded-lg flex items-center justify-center flex-shrink-0 shadow-lg">
                <MapPin className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="text-xl text-slate-800 mb-1 font-semibold">Location</h3>
                <p className="text-slate-600">Ganganagar ,Raj-INDIA</p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl p-8 shadow-xl border border-purple-200">
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  );
}
