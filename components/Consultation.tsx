"use client";

import { useEffect, useState } from "react";



export default function BookConsultationPage() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  // Captcha
  const [a, setA] = useState(0);
  const [b, setB] = useState(0);
  const [captcha, setCaptcha] = useState("");

  const [errors, setErrors] = useState<Record<string, string>>({});

  useEffect(() => {
    generateCaptcha();
  }, []);

  const generateCaptcha = () => {
    const x = Math.floor(Math.random() * 9) + 1;
    const y = Math.floor(Math.random() * 9) + 1;
    setA(x);
    setB(y);
    setCaptcha("");
  };

  const validate = () => {
    const newErrors: Record<string, string> = {};

    if (!name.trim()) newErrors.name = "Full name is required";
    if (!phone.trim()) newErrors.phone = "Phone number is required";
    if (!/^[0-9]{10}$/.test(phone))
      newErrors.phone = "Enter a valid 10-digit phone number";
    if (!message.trim())
      newErrors.message = "Please describe your requirement";
    if (parseInt(captcha) !== a + b)
      newErrors.captcha = "Incorrect captcha answer";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    const whatsappMessage = `
Hello, my name is ${name}.

Phone: ${phone}
Email: ${email || "Not provided"}

Requirement:
${message}
    `.trim();

    const url = `https://wa.me/${process.env.NEXT_PUBLIC_WHATSAPP}?text=${encodeURIComponent(
      whatsappMessage
    )}`;

    window.open(url, "_blank");
  };

  return (
    <section className="">
      <div className="">
        {/* Hero */}
        <header className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold">
            Book a Free Consultation
          </h2>
          <p className="mt-4 text-muted-foreground">
            Talk directly with a finance & compliance expert on WhatsApp.
            <br />
            Fields marked <span className="text-red-500">*</span> are mandatory.
          </p>
        </header>

        {/* Form */}
        <div className="bg-card  p-6 md:p-8">
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Name */}
            <div>
              <label className="text-sm font-medium">
                Full Name <span className="text-red-500">*</span>
              </label>
              <input
                className="mt-1 w-full rounded-lg border px-4 py-2"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
              {errors.name && (
                <p className="text-sm text-red-500 mt-1">{errors.name}</p>
              )}
            </div>

            {/* Phone */}
            <div>
              <label className="text-sm font-medium">
                Phone Number <span className="text-red-500">*</span>
              </label>
              <input
                type="tel"
                className="mt-1 w-full rounded-lg border px-4 py-2"
                placeholder="10-digit WhatsApp number"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
              />
              {errors.phone && (
                <p className="text-sm text-red-500 mt-1">{errors.phone}</p>
              )}
            </div>

            {/* Email */}
            <div>
              <label className="text-sm font-medium">
                Email <span className="text-muted-foreground">(optional)</span>
              </label>
              <input
                type="email"
                className="mt-1 w-full rounded-lg border px-4 py-2"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>

            {/* Message */}
            <div>
              <label className="text-sm font-medium">
                Your Requirement <span className="text-red-500">*</span>
              </label>
              <textarea
                rows={4}
                className="mt-1 w-full rounded-lg border px-4 py-2"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
              />
              {errors.message && (
                <p className="text-sm text-red-500 mt-1">{errors.message}</p>
              )}
            </div>

            {/* Captcha */}
            <div>
              <label className="text-sm font-medium">
                What is {a} + {b}? <span className="text-red-500">*</span>
              </label>
              <input
                className="mt-1 w-full rounded-lg border px-4 py-2"
                value={captcha}
                onChange={(e) => setCaptcha(e.target.value)}
              />
              {errors.captcha && (
                <p className="text-sm text-red-500 mt-1">{errors.captcha}</p>
              )}
            </div>

            {/* CTA */}
            <button
              type="submit"
              className="button success w-full  text-accent-foreground rounded-lg px-6 py-3 font-semibold hover:opacity-90 transition"
            >
              Start WhatsApp Consultation
            </button>

            <p className="text-xs text-center text-muted-foreground">
              You’ll be redirected to WhatsApp with your details pre-filled.
            </p>
          </form>
        </div>
      </div>
    </section>
  );
}
