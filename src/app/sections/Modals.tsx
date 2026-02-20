import type { Service } from "../data/services";
import type { PortfolioItem } from "../data/portfolio";
import { Modal } from "../components/Modal";
import { ContactForm } from "../components/ContactForm";

type Props = {
  contactModalOpen: boolean;
  setContactModalOpen: (v: boolean) => void;

  selectedService: string | null;
  setSelectedService: (v: string | null) => void;
  selectedServiceData?: Service;

  selectedPortfolio: number | null;
  setSelectedPortfolio: (v: number | null) => void;
  selectedPortfolioData?: PortfolioItem;

  privacyModalOpen: boolean;
  setPrivacyModalOpen: (v: boolean) => void;

  termsModalOpen: boolean;
  setTermsModalOpen: (v: boolean) => void;
};

export default function Modals({
  contactModalOpen,
  setContactModalOpen,
  selectedService,
  setSelectedService,
  selectedServiceData,
  selectedPortfolio,
  setSelectedPortfolio,
  selectedPortfolioData,
  privacyModalOpen,
  setPrivacyModalOpen,
  termsModalOpen,
  setTermsModalOpen,
}: Props) {
  return (
    <>
      {/* Contact Modal */}
      <Modal isOpen={contactModalOpen} onClose={() => setContactModalOpen(false)} title="Get Started">
        <ContactForm onSuccess={() => setContactModalOpen(false)} />
      </Modal>

      {/* Service Details Modal */}
      <Modal isOpen={selectedService !== null} onClose={() => setSelectedService(null)} title={selectedServiceData?.title}>
        {selectedServiceData && (
          <div className="space-y-6">
            <div className="w-16 h-16 bg-gradient-to-br from-purple-600 via-pink-500 to-orange-500 rounded-lg flex items-center justify-center shadow-lg">
              <selectedServiceData.icon className="w-8 h-8 text-white" />
            </div>
            <p className="text-slate-700 leading-relaxed text-lg">{selectedServiceData.details}</p>
            <button
              onClick={() => {
                setSelectedService(null);
                setContactModalOpen(true);
              }}
              className="w-full px-8 py-4 bg-gradient-to-r from-purple-600 via-pink-500 to-orange-500 hover:from-purple-700 hover:via-pink-600 hover:to-orange-600 text-white rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl font-medium"
            >
              Contact Us About This Service
            </button>
          </div>
        )}
      </Modal>

      {/* Portfolio Modal */}
      <Modal isOpen={selectedPortfolio !== null} onClose={() => setSelectedPortfolio(null)} title={selectedPortfolioData?.title}>
        {selectedPortfolioData && (
          <div className="space-y-6">
            <img
              src={selectedPortfolioData.image}
              alt={selectedPortfolioData.title}
              className="w-full h-64 object-cover rounded-lg"
            />
            <div className="inline-block px-3 py-1 bg-gradient-to-r from-orange-500 to-red-500 text-white text-sm rounded-full shadow-lg font-medium">
              {selectedPortfolioData.category}
            </div>
            <p className="text-slate-700 leading-relaxed text-lg">{selectedPortfolioData.fullDescription}</p>
          </div>
        )}
      </Modal>

      {/* Privacy Policy */}
      <Modal isOpen={privacyModalOpen} onClose={() => setPrivacyModalOpen(false)} title="Privacy Policy">
        <div className="space-y-4 text-slate-700">
          <p className="text-sm text-slate-500">Last updated: January 23, 2026</p>

          <h3 className="text-lg text-slate-900 mt-6 font-semibold">1. Information We Collect</h3>
          <p>
            KrishnaTech Innovations collects information that you provide directly to us, including when you fill out contact
            forms, request consultations, or communicate with us. This may include your name, email address, phone number, and
            project details.
          </p>

          <h3 className="text-lg text-slate-900 mt-6 font-semibold">2. How We Use Your Information</h3>
          <p>We use the information we collect to:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Respond to your inquiries and provide customer service</li>
            <li>Send you technical notices and support messages</li>
            <li>Communicate with you about services, projects, and promotional offers</li>
            <li>Improve our website and services</li>
          </ul>

          <h3 className="text-lg text-slate-900 mt-6 font-semibold">3. Information Sharing</h3>
          <p>
            We do not sell, trade, or rent your personal information to third parties. We may share your information with
            trusted service providers who assist us in operating our website and conducting our business, as long as those
            parties agree to keep this information confidential.
          </p>

          <h3 className="text-lg text-slate-900 mt-6 font-semibold">4. Data Security</h3>
          <p>
            We implement appropriate technical and organizational measures to protect your personal information against
            unauthorized access, alteration, disclosure, or destruction.
          </p>

          <h3 className="text-lg text-slate-900 mt-6 font-semibold">5. Your Rights</h3>
          <p>
            You have the right to access, correct, or delete your personal information. To exercise these rights, please
            contact us at contact@krishnatechinnovations.com.
          </p>

          <h3 className="text-lg text-slate-900 mt-6 font-semibold">6. Contact Us</h3>
          <p>If you have any questions about this Privacy Policy, please contact us at:</p>
          <p className="text-purple-600 font-medium">contact@krishnatechinnovations.com</p>
        </div>
      </Modal>

      {/* Terms */}
      <Modal isOpen={termsModalOpen} onClose={() => setTermsModalOpen(false)} title="Terms of Service">
        <div className="space-y-4 text-slate-700">
          <p className="text-sm text-slate-500">Last updated: January 23, 2026</p>

          <h3 className="text-lg text-slate-900 mt-6 font-semibold">1. Acceptance of Terms</h3>
          <p>
            By accessing and using KrishnaTech Innovations' website and services, you accept and agree to be bound by these
            Terms of Service. If you do not agree to these terms, please do not use our services.
          </p>

          <h3 className="text-lg text-slate-900 mt-6 font-semibold">2. Services Description</h3>
          <p>
            KrishnaTech Innovations provides software development, web and mobile application development, digital marketing,
            and related technology services. The specific scope, deliverables, and timeline for each project will be defined
            in a separate agreement.
          </p>

          <h3 className="text-lg text-slate-900 mt-6 font-semibold">3. User Responsibilities</h3>
          <p>You agree to:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Provide accurate and complete information when using our services</li>
            <li>Maintain the confidentiality of any account credentials</li>
            <li>Comply with all applicable laws and regulations</li>
            <li>Not use our services for any unlawful or prohibited purpose</li>
          </ul>

          <h3 className="text-lg text-slate-900 mt-6 font-semibold">4. Intellectual Property</h3>
          <p>
            All content on this website, including text, graphics, logos, and software, is the property of KrishnaTech
            Innovations or its content suppliers and is protected by intellectual property laws. Project deliverables and
            intellectual property rights will be defined in individual project agreements.
          </p>

          <h3 className="text-lg text-slate-900 mt-6 font-semibold">5. Limitation of Liability</h3>
          <p>
            KrishnaTech Innovations shall not be liable for any indirect, incidental, special, consequential, or punitive
            damages resulting from your use of or inability to use our services.
          </p>

          <h3 className="text-lg text-slate-900 mt-6 font-semibold">6. Payment Terms</h3>
          <p>
            Payment terms, project costs, and billing schedules will be outlined in project-specific agreements. Late payments
            may result in project delays or suspension of services.
          </p>

          <h3 className="text-lg text-slate-900 mt-6 font-semibold">7. Modifications to Terms</h3>
          <p>
            We reserve the right to modify these Terms of Service at any time. Continued use of our services following any
            changes constitutes acceptance of those changes.
          </p>

          <h3 className="text-lg text-slate-900 mt-6 font-semibold">8. Contact Information</h3>
          <p>For questions about these Terms of Service, please contact us at:</p>
          <p className="text-purple-600 font-medium">contact@krishnatechinnovations.com</p>
          <p className="text-slate-600">+91 9784903092</p>
        </div>
      </Modal>
    </>
  );
}
