"use client";

import { useState } from "react";
import FadeContent from "./reactbits/FadeContent";
import SpotlightCard from "./reactbits/SpotlightCard";
import GradientText from "./reactbits/GradientText";

export default function Contact() {
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Wire this to Formspree, Resend, or a Next.js route handler before launch.
    setSent(true);
  };

  return (
    <section id="contact" className="mx-auto max-w-content px-6 py-28">
      <div className="grid gap-14 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
        <div>
          <FadeContent>
            <p className="mb-4 text-sm uppercase tracking-[0.28em] text-accent">
              Contact
            </p>
          </FadeContent>
          <FadeContent delay={80}>
            <h2 className="text-3xl font-semibold leading-tight text-white sm:text-4xl">
              Let us talk about <GradientText>your project</GradientText>.
            </h2>
          </FadeContent>
          <FadeContent delay={160}>
            <p className="mt-6 max-w-md text-base leading-relaxed text-slatey-300">
              Tell us about the survey, the site, and the timeline. We will respond
              with a clear view of scope, method, and the team for the job.
            </p>
          </FadeContent>

          <FadeContent delay={220}>
            <div className="mt-10 space-y-6">
              <div>
                <p className="text-xs uppercase tracking-[0.2em] text-slatey-400">
                  United Kingdom registered office
                </p>
                <a
                  href="mailto:info@landsurvey-intl.com"
                  className="mt-1.5 block text-base text-white transition-colors hover:text-accent"
                >
                  info@landsurvey-intl.com
                </a>
              </div>
              <div>
                <p className="text-xs uppercase tracking-[0.2em] text-slatey-400">
                  Regional delivery
                </p>
                <p className="mt-1.5 text-base text-slatey-200">
                  Operational delivery across Egypt, Libya, South Sudan, and the
                  wider Middle East and North Africa region.
                </p>
              </div>
            </div>
          </FadeContent>
        </div>

        <FadeContent delay={200}>
          <SpotlightCard className="p-8">
            {sent ? (
              <div className="flex min-h-[18rem] flex-col items-center justify-center text-center">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full border border-accent/40 bg-accent/10 text-accent">
                  ✓
                </div>
                <p className="text-lg font-semibold text-white">
                  Thank you for your enquiry.
                </p>
                <p className="mt-2 max-w-xs text-sm text-slatey-300">
                  Connect this form to your email service to start receiving
                  messages. We have logged your interest locally for now.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid gap-5 sm:grid-cols-2">
                  <Field label="Name" name="name" />
                  <Field label="Company" name="company" />
                </div>
                <Field label="Email" name="email" type="email" />
                <Field label="Project type" name="project" />
                <div>
                  <label className="mb-2 block text-xs uppercase tracking-[0.2em] text-slatey-400">
                    Message
                  </label>
                  <textarea
                    name="message"
                    rows={4}
                    required
                    className="w-full rounded-lg border border-white/12 bg-ink-950/60 px-4 py-3 text-sm text-white outline-none transition-colors placeholder:text-slatey-400 focus:border-accent/60"
                    placeholder="Briefly describe the survey and the site."
                  />
                </div>
                <button
                  type="submit"
                  className="w-full rounded-full bg-accent px-7 py-3.5 text-sm font-semibold text-ink-950 transition-transform hover:scale-[1.02]"
                >
                  Send enquiry
                </button>
              </form>
            )}
          </SpotlightCard>
        </FadeContent>
      </div>
    </section>
  );
}

function Field({
  label,
  name,
  type = "text",
}: {
  label: string;
  name: string;
  type?: string;
}) {
  return (
    <div>
      <label className="mb-2 block text-xs uppercase tracking-[0.2em] text-slatey-400">
        {label}
      </label>
      <input
        type={type}
        name={name}
        required
        className="w-full rounded-lg border border-white/12 bg-ink-950/60 px-4 py-3 text-sm text-white outline-none transition-colors placeholder:text-slatey-400 focus:border-accent/60"
      />
    </div>
  );
}
