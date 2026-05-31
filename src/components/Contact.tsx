"use client";

import { motion } from "motion/react";
import { useState } from "react";
import { ArrowUpRight } from "lucide-react";

const inputClass =
  "w-full border-b border-[#1B1A16]/25 bg-transparent pb-3 text-[#1B1A16] placeholder-[#9A9686] outline-none transition-colors focus:border-[#1B1A16]";

export default function Contact() {
  const [agreed, setAgreed] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Wire to Formspree, Resend, or a Next.js route handler before launch.
    setSubmitted(true);
  };

  return (
    <section
      id="contact"
      className="w-full bg-[#F2F0E9] py-20 text-[#1B1A16] sm:py-28"
    >
      <div className="mx-auto max-w-[1400px] px-5 sm:px-8 lg:px-12">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Left: company info */}
          <div className="flex flex-col justify-between">
            <div>
              <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4 }}
                className="tech-mono mb-5 flex items-center gap-3 text-[11px] uppercase tracking-[0.22em] text-[#6F6B5E]"
              >
              </motion.p>
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4 }}
                className="max-w-md text-2xl font-medium leading-tight tracking-[-0.01em] sm:text-3xl"
              >
                Tell us about the survey, the site, and the timeline. We respond
                with scope, method, and the team for the job.
              </motion.h2>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.1 }}
              className="mt-16 space-y-8 lg:mt-0"
            >
              <div className="space-y-4 text-sm text-[#6F6B5E]">
                
              </div>
            </motion.div>
          </div>

          {/* Right: form */}
          <div>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4 }}
              className="mb-12 text-5xl font-medium tracking-[-0.02em] sm:text-6xl lg:mb-16"
            >
              Request a consultation
            </motion.h2>

            {submitted ? (
              <motion.div
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4 }}
                className="rounded-2xl border border-[#1B1A16]/15 bg-[#ECE8DE] p-8"
              >
                <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-full bg-[#EBA10C] text-[#1B1A16]">
                  <svg
                    className="h-5 w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={3}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                </div>
                <p className="text-lg font-medium">Thank you for your enquiry.</p>
                <p className="mt-2 max-w-sm text-sm text-[#6F6B5E]">
                  Connect this form to your email service to start receiving
                  messages. Your interest is logged locally for now.
                </p>
              </motion.div>
            ) : (
              <motion.form
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.1 }}
                onSubmit={handleSubmit}
                className="space-y-8"
              >
                <div className="grid gap-8 sm:grid-cols-2">
                  <input type="text" placeholder="First name" required className={inputClass} />
                  <input type="text" placeholder="Last name" required className={inputClass} />
                </div>
                <input type="email" placeholder="Email" required className={inputClass} />
                <input type="text" placeholder="Company" className={inputClass} />
                <input type="text" placeholder="Project type" className={inputClass} />
                <textarea
                  placeholder="Tell us about the survey and the site"
                  rows={2}
                  required
                  className={`${inputClass} resize-none`}
                />

                <div className="flex items-center gap-3">
                  <button
                    type="button"
                    onClick={() => setAgreed(!agreed)}
                    className={`flex h-5 w-5 shrink-0 items-center justify-center rounded-full border transition-colors ${
                      agreed
                        ? "border-[#1B1A16] bg-[#1B1A16]"
                        : "border-[#9A9686] bg-transparent"
                    }`}
                    aria-pressed={agreed}
                    aria-label="Agree to privacy statement"
                  >
                    {agreed && (
                      <svg
                        className="h-3 w-3 text-[#F2F0E9]"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={3}
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                      </svg>
                    )}
                  </button>
                  <label className="text-sm text-[#6F6B5E]">
                    I have read and understood the{" "}
                    <a href="#" className="underline transition-colors hover:text-[#1B1A16]">
                      privacy statement
                    </a>
                  </label>
                </div>

                <button
                  type="submit"
                  className="inline-flex items-center gap-2 rounded-xl bg-[#1B1A16] px-10 py-4 text-base font-medium text-[#F2F0E9] transition-transform hover:scale-[1.03]"
                >
                  Send enquiry
                  <ArrowUpRight className="h-4 w-4" />
                </button>
              </motion.form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
