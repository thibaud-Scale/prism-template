import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "Privacy policy and cookie information.",
  robots: { index: false, follow: false },
};

/* ─── Replace every [PLACEHOLDER] with your real information ── */
const SITE_NAME      = "Prism Agency";            // ← Your site name
const OWNER_NAME     = "[Prénom Nom / Société]";  // ← Your name or company
const EMAIL          = "hello@prism.agency";      // ← Your contact email
const LAST_UPDATED   = "January 2025";            // ← Update date when you edit this

export default function PrivacyPage() {
  return (
    <>
      <Navbar />
      <main className="px-6 md:px-16 pt-36 pb-24 max-w-3xl mx-auto">

        {/* Header */}
        <div className="mb-16" style={{ borderBottom: "1px solid var(--border)", paddingBottom: 32 }}>
          <p className="font-bold uppercase mb-4" style={{ fontSize: 10, letterSpacing: "0.25em", color: "var(--muted-2)" }}>
            — Last updated {LAST_UPDATED}
          </p>
          <h1 className="font-black" style={{ fontSize: "clamp(2.5rem, 7vw, 6rem)", lineHeight: 0.9, letterSpacing: "-0.03em", color: "var(--text)" }}>
            Privacy<br />Policy
          </h1>
        </div>

        {/* Sections */}
        <div className="space-y-12">

          <Section title="1. Who we are">
            <p>
              This website is operated by <strong>{OWNER_NAME}</strong> under the brand <strong>{SITE_NAME}</strong>.
              If you have any questions about this policy, contact us at{" "}
              <a href={`mailto:${EMAIL}`} style={{ color: "var(--accent)" }}>{EMAIL}</a>.
            </p>
          </Section>

          <Section title="2. What data we collect">
            <p>We only collect data you voluntarily provide:</p>
            <ul>
              <li><strong>Contact form</strong> — name, email address, and message content.</li>
              <li><strong>Cookies</strong> — theme preference (dark/light) and cookie consent stored in your browser&apos;s localStorage. No tracking cookies are set by default.</li>
            </ul>
            <p>
              We do <strong>not</strong> collect IP addresses, device identifiers, or behavioural
              data unless you have explicitly enabled analytics (see section 4).
            </p>
          </Section>

          <Section title="3. How we use your data">
            <p>Data collected via the contact form is used solely to:</p>
            <ul>
              <li>Respond to your enquiry.</li>
              <li>Follow up on the project or service discussed.</li>
            </ul>
            <p>
              We do not sell, rent, or share your personal information with third parties,
              except as necessary to operate the contact form (see section 5).
            </p>
          </Section>

          <Section title="4. Analytics & tracking (optional)">
            <p>
              By default, this site uses <strong>no analytics or tracking tools</strong>.
            </p>
            <p>
              If you choose to add analytics (e.g. Google Analytics, Plausible, Fathom),
              update this section to describe what is collected and under what legal basis
              (typically: legitimate interest or consent).
            </p>
            {/* ↓ Uncomment and fill in if you add Google Analytics */}
            {/* <p>
              This site uses Google Analytics 4. Data is processed by Google LLC in the USA
              under Standard Contractual Clauses. You can opt out at any time via our cookie banner.
            </p> */}
          </Section>

          <Section title="5. Third-party services">
            <p>We use the following third-party services:</p>
            <ul>
              <li>
                <strong>Formspree</strong> (formspree.io) — processes contact form submissions.
                Your name and email are transmitted to Formspree&apos;s servers to deliver the message to us.
                See their{" "}
                <a href="https://formspree.io/legal/privacy-policy" target="_blank" rel="noopener noreferrer" style={{ color: "var(--accent)" }}>
                  privacy policy
                </a>.
              </li>
              <li>
                <strong>Vercel</strong> (vercel.com) — website hosting. Vercel may collect
                access logs (IP address, browser, page viewed) for infrastructure and security purposes.
                See their{" "}
                <a href="https://vercel.com/legal/privacy-policy" target="_blank" rel="noopener noreferrer" style={{ color: "var(--accent)" }}>
                  privacy policy
                </a>.
              </li>
            </ul>
          </Section>

          <Section title="6. Cookies">
            <p>This site uses the following cookies / localStorage entries:</p>
            <table>
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Purpose</th>
                  <th>Duration</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td><code>v-theme</code></td>
                  <td>Stores your dark/light mode preference</td>
                  <td>Persistent (localStorage)</td>
                </tr>
                <tr>
                  <td><code>cookie-consent</code></td>
                  <td>Records your cookie consent choice</td>
                  <td>Persistent (localStorage)</td>
                </tr>
              </tbody>
            </table>
            <p>No cookies are used for advertising or cross-site tracking.</p>
          </Section>

          <Section title="7. Your rights (GDPR)">
            <p>If you are located in the European Union, you have the right to:</p>
            <ul>
              <li><strong>Access</strong> the personal data we hold about you.</li>
              <li><strong>Rectify</strong> inaccurate data.</li>
              <li><strong>Erase</strong> your data (&quot;right to be forgotten&quot;).</li>
              <li><strong>Object</strong> to our processing of your data.</li>
              <li><strong>Lodge a complaint</strong> with the CNIL (cnil.fr) if you believe your rights have been violated.</li>
            </ul>
            <p>
              To exercise any of these rights, contact us at{" "}
              <a href={`mailto:${EMAIL}`} style={{ color: "var(--accent)" }}>{EMAIL}</a>.
              We will respond within 30 days.
            </p>
          </Section>

          <Section title="8. Data retention">
            <p>
              Contact form messages are retained only as long as necessary to respond to your enquiry,
              and no longer than 12 months unless we have an ongoing business relationship.
            </p>
          </Section>

          <Section title="9. Changes to this policy">
            <p>
              We may update this policy from time to time. Changes will be posted on this page
              with an updated date at the top. We encourage you to review this page periodically.
            </p>
          </Section>

        </div>

        {/* Links */}
        <div className="mt-16 pt-8 flex flex-wrap gap-8" style={{ borderTop: "1px solid var(--border)" }}>
          <Link href="/legal" className="font-bold uppercase transition-colors hover:text-[var(--accent)]" style={{ fontSize: 10, letterSpacing: "0.25em", color: "var(--muted-2)" }}>
            Mentions Légales
          </Link>
          <Link href="/" className="font-bold uppercase transition-colors hover:text-[var(--accent)]" style={{ fontSize: 10, letterSpacing: "0.25em", color: "var(--muted-2)" }}>
            ← Back Home
          </Link>
        </div>
      </main>
      <Footer />
    </>
  );
}

/* ─── Section component ─────────────────────────────────────── */
function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="pt-8" style={{ borderTop: "1px solid var(--border)" }}>
      <h2 className="font-bold mb-5" style={{ fontSize: "clamp(1rem, 2vw, 1.35rem)", color: "var(--text)", letterSpacing: "-0.01em" }}>
        {title}
      </h2>
      <div
        className="space-y-4 [&_p]:leading-relaxed [&_ul]:space-y-2 [&_ul]:pl-4 [&_li]:before:content-['—'] [&_li]:before:mr-3 [&_li]:before:opacity-40 [&_table]:w-full [&_table]:text-sm [&_th]:text-left [&_th]:pb-2 [&_td]:py-2 [&_code]:px-1.5 [&_code]:py-0.5 [&_code]:rounded [&_code]:text-xs"
        style={{
          fontSize: 14,
          color: "var(--muted)",
          lineHeight: 1.75,
          ["--tw-prose-code-bg" as string]: "var(--surface)",
        }}
      >
        {children}
      </div>
    </div>
  );
}
