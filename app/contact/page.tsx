"use client";

import Image from "next/image";
import { useState, useRef } from "react";
import Turnstile from "@marsidev/react-turnstile";

export default function ContactPage() {
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    type: "",
    message: "",
  });
  const [turnstileToken, setTurnstileToken] = useState<string | null>(null);
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMsg, setErrorMsg] = useState("");

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!turnstileToken) {
      setErrorMsg("Please complete the CAPTCHA.");
      return;
    }
    setStatus("loading");
    setErrorMsg("");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...form, turnstileToken }),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || "Something went wrong.");
      setStatus("success");
    } catch (err: unknown) {
      setStatus("error");
      setErrorMsg(err instanceof Error ? err.message : "Something went wrong.");
    }
  }

  return (
    <>
      {/* Hero */}
      <section className="pt-36 pb-20 px-6 relative overflow-hidden">
        <Image
          src="/coral-tank.jpg"
          alt="Marine aquarium"
          fill
          className="object-cover object-center"
        />
        <div className="absolute inset-0 bg-ocean/85" />
        <div className="relative z-10 max-w-3xl mx-auto text-center">
          <p className="text-teal text-sm font-semibold tracking-[0.2em] uppercase mb-4">Contact</p>
          <h1 className="text-5xl md:text-6xl font-black leading-tight mb-6">
            Let&apos;s build<br />
            <span className="text-teal">resilient marine life.</span>
          </h1>
          <p className="text-white/50 text-lg leading-relaxed">
            Whether you&apos;re a reef hobbyist, an aquaculture operator, or exploring a research partnership —
            we want to hear from you.
          </p>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-20 px-6 bg-ocean-mid">
        <div className="max-w-2xl mx-auto">
          {status === "success" ? (
            <div className="text-center py-16">
              <div className="w-12 h-12 rounded-full bg-teal/10 border border-teal/30 flex items-center justify-center mx-auto mb-6">
                <svg className="w-5 h-5 text-teal" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h2 className="text-2xl font-black mb-3">Message sent.</h2>
              <p className="text-white/50">We&apos;ll be in touch soon.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col gap-5">
              <div className="grid sm:grid-cols-2 gap-5">
                <div className="flex flex-col gap-2">
                  <label className="text-white/50 text-xs font-semibold uppercase tracking-widest">
                    First Name
                  </label>
                  <input
                    type="text"
                    name="firstName"
                    placeholder="Jane"
                    value={form.firstName}
                    onChange={handleChange}
                    required
                    className="bg-ocean border border-white/10 rounded-xl px-4 py-3 text-white placeholder-white/20 focus:outline-none focus:border-teal/50 transition-colors text-sm"
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <label className="text-white/50 text-xs font-semibold uppercase tracking-widest">
                    Last Name
                  </label>
                  <input
                    type="text"
                    name="lastName"
                    placeholder="Smith"
                    value={form.lastName}
                    onChange={handleChange}
                    required
                    className="bg-ocean border border-white/10 rounded-xl px-4 py-3 text-white placeholder-white/20 focus:outline-none focus:border-teal/50 transition-colors text-sm"
                  />
                </div>
              </div>

              <div className="flex flex-col gap-2">
                <label className="text-white/50 text-xs font-semibold uppercase tracking-widest">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  placeholder="jane@example.com"
                  value={form.email}
                  onChange={handleChange}
                  required
                  className="bg-ocean border border-white/10 rounded-xl px-4 py-3 text-white placeholder-white/20 focus:outline-none focus:border-teal/50 transition-colors text-sm"
                />
              </div>

              <div className="flex flex-col gap-2">
                <label className="text-white/50 text-xs font-semibold uppercase tracking-widest">
                  I am a...
                </label>
                <select
                  name="type"
                  value={form.type}
                  onChange={handleChange}
                  className="bg-ocean border border-white/10 rounded-xl px-4 py-3 text-white/70 focus:outline-none focus:border-teal/50 transition-colors text-sm appearance-none"
                >
                  <option value="">Select one</option>
                  <option value="hobbyist">Aquarium Hobbyist</option>
                  <option value="aquaculture">Aquaculture Operator</option>
                  <option value="researcher">Researcher / Academic</option>
                  <option value="distributor">Retailer / Distributor</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <div className="flex flex-col gap-2">
                <label className="text-white/50 text-xs font-semibold uppercase tracking-widest">
                  Message
                </label>
                <textarea
                  name="message"
                  rows={5}
                  placeholder="Tell us about your system, your questions, or how we can help..."
                  value={form.message}
                  onChange={handleChange}
                  required
                  className="bg-ocean border border-white/10 rounded-xl px-4 py-3 text-white placeholder-white/20 focus:outline-none focus:border-teal/50 transition-colors text-sm resize-none"
                />
              </div>

              <Turnstile
                siteKey={process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY!}
                onSuccess={setTurnstileToken}
                options={{ theme: "dark" }}
              />

              {errorMsg && (
                <p className="text-red-400 text-sm">{errorMsg}</p>
              )}

              <button
                type="submit"
                disabled={status === "loading"}
                className="bg-teal text-ocean font-bold px-8 py-4 rounded-full hover:bg-teal-light transition-colors text-sm mt-2 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {status === "loading" ? "Sending..." : "Send Message"}
              </button>
            </form>
          )}
        </div>
      </section>
    </>
  );
}
