import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

export const metadata: Metadata = {
  title: "Mentions Légales",
  description: "Mentions légales du site.",
  robots: { index: false, follow: false },
};

/* ─── Replace every [PLACEHOLDER] with your real information ── */
const SITE_NAME    = "Prism Agency";             // ← Your site/company name
const OWNER_NAME   = "[Prénom Nom]";             // ← Your full name or company name
const OWNER_STATUS = "[Auto-entrepreneur / SAS / SASU / etc.]";
const SIRET        = "[123 456 789 00010]";      // ← Your SIRET number
const ADDRESS      = "[Votre adresse complète]";
const EMAIL        = "hello@prism.agency";       // ← Your email
const PHONE        = "[+33 6 00 00 00 00]";      // ← Optional, delete if not used
const HOST_NAME    = "Vercel Inc.";
const HOST_ADDRESS = "440 N Barranca Ave #4133, Covina, CA 91723, USA";
const HOST_SITE    = "https://vercel.com";

export default function LegalPage() {
  return (
    <>
      <Navbar />
      <main className="px-6 md:px-16 pt-36 pb-24 max-w-3xl mx-auto">

        {/* Header */}
        <div className="mb-16" style={{ borderBottom: "1px solid var(--border)", paddingBottom: 32 }}>
          <p className="font-bold uppercase mb-4" style={{ fontSize: 10, letterSpacing: "0.25em", color: "var(--muted-2)" }}>
            — Informations légales
          </p>
          <h1 className="font-black" style={{ fontSize: "clamp(2.5rem, 7vw, 6rem)", lineHeight: 0.9, letterSpacing: "-0.03em", color: "var(--text)" }}>
            Mentions<br />Légales
          </h1>
        </div>

        {/* Sections */}
        <div className="space-y-12">

          <Section title="1. Éditeur du site">
            <p>Le site <strong>{SITE_NAME}</strong> est édité par :</p>
            <ul>
              <li><strong>Nom :</strong> {OWNER_NAME}</li>
              <li><strong>Statut :</strong> {OWNER_STATUS}</li>
              <li><strong>SIRET :</strong> {SIRET}</li>
              <li><strong>Adresse :</strong> {ADDRESS}</li>
              <li><strong>Email :</strong> <a href={`mailto:${EMAIL}`} style={{ color: "var(--accent)" }}>{EMAIL}</a></li>
              {PHONE !== "[+33 6 00 00 00 00]" && <li><strong>Téléphone :</strong> {PHONE}</li>}
            </ul>
          </Section>

          <Section title="2. Hébergement">
            <p>Le site est hébergé par :</p>
            <ul>
              <li><strong>Société :</strong> {HOST_NAME}</li>
              <li><strong>Adresse :</strong> {HOST_ADDRESS}</li>
              <li>
                <strong>Site :</strong>{" "}
                <a href={HOST_SITE} target="_blank" rel="noopener noreferrer" style={{ color: "var(--accent)" }}>
                  {HOST_SITE}
                </a>
              </li>
            </ul>
          </Section>

          <Section title="3. Propriété intellectuelle">
            <p>
              L&apos;ensemble du contenu de ce site (textes, images, graphismes, logo, icônes, sons, logiciels…)
              est la propriété exclusive de <strong>{OWNER_NAME}</strong>, sauf mention contraire.
            </p>
            <p>
              Toute reproduction, distribution, modification, adaptation, retransmission ou publication,
              même partielle, de ces différents éléments est strictement interdite sans l&apos;accord exprès
              par écrit de <strong>{OWNER_NAME}</strong>.
            </p>
          </Section>

          <Section title="4. Données personnelles">
            <p>
              Les informations collectées via le formulaire de contact (nom, adresse email, message)
              sont utilisées exclusivement pour répondre à vos demandes.
              Elles ne sont ni cédées, ni vendues à des tiers.
            </p>
            <p>
              Conformément au Règlement Général sur la Protection des Données (RGPD),
              vous disposez d&apos;un droit d&apos;accès, de rectification et de suppression
              de vos données. Pour exercer ce droit, contactez-nous à{" "}
              <a href={`mailto:${EMAIL}`} style={{ color: "var(--accent)" }}>{EMAIL}</a>.
            </p>
            <p>
              Pour en savoir plus, consultez notre{" "}
              <Link href="/privacy" style={{ color: "var(--accent)" }}>
                Politique de Confidentialité
              </Link>.
            </p>
          </Section>

          <Section title="5. Cookies">
            <p>
              Ce site utilise des cookies techniques nécessaires à son bon fonctionnement
              (mémorisation de vos préférences de thème et de consentement cookies).
              Aucun cookie publicitaire ou de tracking n&apos;est utilisé par défaut.
            </p>
            <p>
              Si vous intégrez des outils d&apos;analyse (Google Analytics, etc.),
              mettez à jour cette section en conséquence.
            </p>
          </Section>

          <Section title="6. Liens hypertextes">
            <p>
              Le site peut contenir des liens vers des sites externes.
              <strong> {OWNER_NAME}</strong> ne peut être tenu responsable du contenu
              de ces sites tiers ni des pratiques de confidentialité qu&apos;ils appliquent.
            </p>
          </Section>

          <Section title="7. Droit applicable">
            <p>
              Les présentes mentions légales sont soumises au droit français.
              En cas de litige, les tribunaux français seront seuls compétents.
            </p>
          </Section>

        </div>

        {/* Back link */}
        <div className="mt-16 pt-8" style={{ borderTop: "1px solid var(--border)" }}>
          <Link
            href="/"
            className="font-bold uppercase transition-colors hover:text-[var(--accent)]"
            style={{ fontSize: 10, letterSpacing: "0.25em", color: "var(--muted-2)" }}
          >
            ← Retour à l&apos;accueil
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
        className="space-y-4 [&_p]:leading-relaxed [&_ul]:space-y-2 [&_ul]:pl-4 [&_li]:before:content-['—'] [&_li]:before:mr-3 [&_li]:before:opacity-40"
        style={{ fontSize: 14, color: "var(--muted)", lineHeight: 1.75 }}
      >
        {children}
      </div>
    </div>
  );
}
