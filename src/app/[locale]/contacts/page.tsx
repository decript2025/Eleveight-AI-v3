"use client";

import { useState } from "react";
import { Button } from "ui/components/ui/button";

const GPU_NEEDS = ["1-8 GPUs", "9-32 GPUs", "33-128 GPUs", "128+ GPUs", "Not sure yet"];
const TIMELINES = [
  "Within the next 3 months",
  "3-6 months",
  "6-12 months",
  "More than a year",
  "Just exploring",
];
const WORKLOADS = [
  "Model training",
  "Model inference",
  "Fine-tuning",
  "Data processing",
  "Research / experimentation",
  "Other",
];
const COUNTRY_CODES = [
  { code: "US", dial: "+1" },
  { code: "GB", dial: "+44" },
  { code: "DE", dial: "+49" },
  { code: "FR", dial: "+33" },
  { code: "AM", dial: "+374" },
  { code: "KZ", dial: "+7" },
  { code: "AE", dial: "+971" },
  { code: "SG", dial: "+65" },
];

function Field({
  label,
  required,
  children,
}: {
  label: string;
  required?: boolean;
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-col gap-1.5">
      <label className="text-[13px] text-foreground font-normal">
        {label}
        {required && " *"}
      </label>
      {children}
    </div>
  );
}

const inputCls =
  "w-full h-10 px-3 rounded-lg border border-foreground/20 bg-white text-foreground text-[14px] placeholder:text-foreground/30 focus:outline-none focus:border-foreground/50 transition-colors";

const selectCls =
  "w-full h-10 px-3 rounded-lg border border-foreground/20 bg-white text-foreground text-[14px] focus:outline-none focus:border-foreground/50 transition-colors appearance-none cursor-pointer";

export default function Contacts() {
  const [country, setCountry] = useState("US");
  const [agreed, setAgreed] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    // TODO: wire up to API
    setSubmitted(true);
  }

  return (
    <div className="min-h-screen bg-[#edf1f8] flex flex-col items-center px-4 py-16">
      {/* Header */}
      <div className="text-center mb-8">
        <h1 className="text-[28px]/[36px] sm:text-[32px]/[42px] font-bold text-foreground mb-2">
          Contact Eleveight AI
        </h1>
        <p className="text-foreground/60 text-[15px]/[24px]">
          Contact us to reserve the latest NVIDIA B300 GPU
        </p>
      </div>

      {/* Card */}
      <div className="w-full max-w-2xl bg-white rounded-2xl shadow-sm px-8 py-10">
        {submitted ? (
          <div className="text-center py-12">
            <p className="text-[18px] font-semibold text-foreground mb-2">Thank you!</p>
            <p className="text-foreground/60 text-[14px]">
              We&apos;ve received your message and will be in touch shortly.
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="flex flex-col gap-5">
            {/* Row 1: First / Last name */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <Field label="First Name" required>
                <input className={inputCls} type="text" placeholder="|" required />
              </Field>
              <Field label="Last Name" required>
                <input className={inputCls} type="text" placeholder="|" required />
              </Field>
            </div>

            {/* Row 2: Email / Phone */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <Field label="Email" required>
                <input className={inputCls} type="email" placeholder="|" required />
              </Field>
              <Field label="Phone" required>
                <div className="flex gap-0">
                  <select
                    value={country}
                    onChange={(e) => setCountry(e.target.value)}
                    className="h-10 px-2 rounded-l-lg border border-r-0 border-foreground/20 bg-white text-foreground text-[13px] focus:outline-none focus:border-foreground/50 transition-colors cursor-pointer"
                  >
                    {COUNTRY_CODES.map((c) => (
                      <option key={c.code} value={c.code}>
                        {c.code}
                      </option>
                    ))}
                  </select>
                  <input
                    className="flex-1 h-10 px-3 rounded-r-lg border border-foreground/20 bg-white text-foreground text-[14px] placeholder:text-foreground/30 focus:outline-none focus:border-foreground/50 transition-colors"
                    type="tel"
                    placeholder={
                      COUNTRY_CODES.find((c) => c.code === country)?.dial + " (555) 987-6543"
                    }
                    required
                  />
                </div>
              </Field>
            </div>

            {/* Row 3: Company / Job title */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <Field label="Company Name" required>
                <input className={inputCls} type="text" placeholder="|" required />
              </Field>
              <Field label="Job Title" required>
                <input className={inputCls} type="text" placeholder="|" required />
              </Field>
            </div>

            {/* Row 4: GPU needs / Timeline */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <Field label="What are your compute needs?" required>
                <div className="relative">
                  <select className={selectCls} defaultValue={GPU_NEEDS[0]} required>
                    {GPU_NEEDS.map((v) => (
                      <option key={v}>{v}</option>
                    ))}
                  </select>
                  <ChevronDown />
                </div>
              </Field>
              <Field label="How soon do you need this?" required>
                <div className="relative">
                  <select className={selectCls} defaultValue={TIMELINES[0]} required>
                    {TIMELINES.map((v) => (
                      <option key={v}>{v}</option>
                    ))}
                  </select>
                  <ChevronDown />
                </div>
              </Field>
            </div>

            {/* Row 5: Workloads */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <Field label="What is your main workload?" required>
                <div className="relative">
                  <select className={selectCls} defaultValue={WORKLOADS[0]} required>
                    {WORKLOADS.map((v) => (
                      <option key={v}>{v}</option>
                    ))}
                  </select>
                  <ChevronDown />
                </div>
              </Field>
              <Field label="What is your deployment environment?" required>
                <div className="relative">
                  <select className={selectCls} defaultValue={WORKLOADS[0]} required>
                    {WORKLOADS.map((v) => (
                      <option key={v}>{v}</option>
                    ))}
                  </select>
                  <ChevronDown />
                </div>
              </Field>
            </div>

            {/* Row 6: Additional info */}
            <Field label="Additional information">
              <textarea
                className="w-full px-3 py-2.5 rounded-lg border border-foreground/20 bg-white text-foreground text-[14px] placeholder:text-foreground/30 focus:outline-none focus:border-foreground/50 transition-colors resize-y min-h-[96px]"
                placeholder=""
              />
            </Field>

            {/* Checkbox */}
            <label className="flex items-start gap-2.5 cursor-pointer">
              <input
                type="checkbox"
                checked={agreed}
                onChange={(e) => setAgreed(e.target.checked)}
                className="mt-0.5 w-4 h-4 accent-foreground cursor-pointer"
              />
              <span className="text-[13px] text-foreground/70">
                I agree to receive other communications from Eleveight.AI
              </span>
            </label>

            {/* Submit + disclaimer */}
            <div className="flex flex-col items-end gap-3 pt-1">
              <Button variant="secondary" type="submit" size="lg" className="px-10">
                Submit
              </Button>
              <p className="text-[11px]/[17px] text-foreground/40 text-center max-w-sm">
                *By clicking submit below, you consent to allow Eleveight.AI to store and process
                the personal information submitted above to provide you the content requested.
              </p>
            </div>
          </form>
        )}
      </div>
    </div>
  );
}

function ChevronDown() {
  return (
    <div className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-foreground/40">
      <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
        <polyline
          points="2,4 7,10 12,4"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </div>
  );
}
