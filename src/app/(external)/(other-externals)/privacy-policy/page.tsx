import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Privacy Policy | Genz.ad",
  description: "Privacy Policy for Genz.ad - Learn how we collect and use your information",
}

export default function PrivacyPolicy() {
  return (
    <main className="max-w-6xl mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold text-center mb-6">Privacy Policy</h1>

      <p className="mb-8">
        At <span className="font-medium">Genz.ad</span>, we respect your privacy and are committed to protecting your
        personal data. This Privacy Policy explains what information we collect and how we use it.
      </p>

      <section className="mb-8">
        <h2 className="text-xl font-bold mb-3">1. What Information We Collect</h2>
        <ul className="list-disc pl-8 space-y-2">
          <li>
            <span className="font-medium">Account Information:</span> Your Google login details.
          </li>
          <li>
            <span className="font-medium">Ad Content:</span> The text, images, and settings you provide for generating
            ads.
          </li>
          <li>
            <span className="font-medium">Usage Data:</span> How you interact with our platform (e.g., pages visited,
            time spent).
          </li>
          <li>
            <span className="font-medium">Payment Information:</span> If you purchase paid features, payment details
            will be securely processed by our third-party provider.
          </li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-bold mb-3">2. How We Use Your Information</h2>
        <ul className="list-disc pl-8 space-y-2">
          <li>To provide and improve our ad generation service.</li>
          <li>For marketing promotions.</li>
          <li>To personalize your experience and recommend relevant ad templates.</li>
          <li>To process payments.</li>
          <li>To comply with legal obligations and prevent fraud.</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-bold mb-3">3. How We Protect Your Data</h2>
        <ul className="list-disc pl-8 space-y-2">
          <li>We use encryption and secure servers to store your data safely.</li>
          <li>We do not sell or share your personal information with third parties for marketing purposes.</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-bold mb-3">4. Cookies & Tracking</h2>
        <ul className="list-disc pl-8 space-y-2">
          <li>We use cookies to enhance your experience and analyze how you use our site.</li>
          <li>You can disable cookies in your browser settings, but some features may not work properly.</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-bold mb-3">5. Your Rights</h2>
        <ul className="list-disc pl-8 space-y-2">
          <li>You can request access, updates, or deletion of your personal data.</li>
          <li>You can opt out of marketing emails anytime.</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-bold mb-3">6. Changes to This Policy</h2>
        <ul className="list-disc pl-8 space-y-2">
          <li>
            We may update this Privacy Policy occasionally. Any major changes will be communicated on our website.
          </li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-bold mb-3">7. Contact Us</h2>
        <ul className="list-disc pl-8 space-y-2">
          <li>For questions or data-related requests, email us at genzadshmg12@gmail.com</li>
        </ul>
      </section>

      <div className="border-t border-gray-300 mt-10 pt-4"></div>
    </main>
  )
}

