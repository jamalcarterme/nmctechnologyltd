import type { ReactNode } from "react";
import Footer from "./Footer";
import Header from "./Header";
import PageHero from "./PageHero";
import { Container } from "./ui";

function renderBlock(block: string, i: number): ReactNode {
  const lines = block.split("\n");
  if (block.startsWith("# ")) {
    return (
      <h2 key={i} className="mt-10 font-display text-xl font-semibold text-paper sm:text-2xl">
        {block.slice(2)}
      </h2>
    );
  }
  if (lines.every((l) => l.startsWith("- "))) {
    return (
      <ul key={i} className="mt-4 list-disc space-y-1.5 pl-6 marker:text-gold">
        {lines.map((l, j) => <li key={j}>{l.slice(2)}</li>)}
      </ul>
    );
  }
  if (lines.every((l) => /^\d+\. /.test(l))) {
    return (
      <ol key={i} className="mt-4 list-decimal space-y-1.5 pl-6 marker:text-gold">
        {lines.map((l, j) => <li key={j}>{l.replace(/^\d+\. /, "")}</li>)}
      </ol>
    );
  }
  return (
    <p key={i} className="mt-4 whitespace-pre-line">
      {block.split(/(nmctechnologi@gmail\.com)/).map((part, j) =>
        part === "nmctechnologi@gmail.com" ? (
          <a key={j} href={`mailto:${part}`} className="text-gold hover:underline">{part}</a>
        ) : part
      )}
    </p>
  );
}

export default function LegalPage({
  title,
  updated,
  content,
}: {
  title: string;
  updated: string;
  content: string;
}) {
  return (
    <>
      <Header />
      <main>
        <PageHero
          image="/images/team-photo.jpg"
          eyebrow="NMC Technology"
          title={title}
          subtitle={`Last Updated: ${updated}`}
        />
        <section className="bg-charcoal py-16 md:py-20">
          <Container className="max-w-3xl text-[16px] leading-relaxed text-paper/75">
            {content.trim().split(/\n\s*\n/).map(renderBlock)}
          </Container>
        </section>
      </main>
      <Footer />
    </>
  );
}
