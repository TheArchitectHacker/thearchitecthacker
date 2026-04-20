import React from 'react';

export default function TermsAndConditions() {
  return (
    <div className="max-w-4xl mx-auto px-6 py-12 text-gray-800 leading-relaxed">
      <h1 className="text-3xl font-bold mb-8">Terms and Conditions</h1>
      <p className="mb-4 text-sm text-gray-500">Last updated: April 20, 2024</p>

      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-4">1. Introduction</h2>
        <p>
          Welcome to The Architect Hacker. By accessing our website and purchasing our digital products, 
          you agree to be bound by these Terms and Conditions. Our products are designed to provide 
          educational frameworks and digital guides.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-4">2. Digital Products & Pricing</h2>
        <p>
          All products sold on this website (specifically &quot;The Paradox Shift&quot;) are digital E-books or PDF guides. 
          The price for The Paradox Shift is a one-time payment of €27. Prices are subject to change, 
          but changes will not affect purchases already completed.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-4">3. No Masterclasses or Live Services</h2>
        <p>
          The Architect Hacker does not offer online masterclasses, live coaching, or synchronous 
          video sessions at this time. All purchases are for asynchronous, downloadable digital content only.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-4">4. Refund Policy</h2>
        <p>
          Due to the nature of digital products, which are accessible immediately upon purchase, 
          we generally do not offer refunds once the download link has been accessed or the product 
          delivery has been initiated. However, customer satisfaction is our priority; if you encounter 
          technical issues, please contact us.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-4">5. Intellectual Property</h2>
        <p>
          All content included in our digital products is the property of The Architect Hacker. 
          Your purchase grants you a personal, non-exclusive license for personal use only. 
          Redistribution, resale, or reproduction of the content is strictly prohibited.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-4">6. Contact Information</h2>
        <p>
          If you have any questions regarding these terms, you can contact us at: 
          architect@thearchitecthacker.com
        </p>
      </section>

      <div className="mt-12 border-t pt-8">
        <a href="/" className="text-blue-600 hover:underline">← Back to Home</a>
      </div>
    </div>
  );
}