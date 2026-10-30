"use client";
import { FormEvent, useState } from "react";
import { site } from "@/lib/data";

type Status = "idle" | "sending" | "sent" | "error";

export default function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");
  const formspreeId = process.env.NEXT_PUBLIC_FORMSPREE_ID;

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);

    // No Formspree ID configured: fall back to the visitor's mail app.
    if (!formspreeId) {
      const name = String(data.get("name"));
      const subject = encodeURIComponent(`Portfolio message from ${name}`);
      const body = encodeURIComponent(`${data.get("message")}\n\n— ${name} (${data.get("email")})`);
      window.location.href = `mailto:${site.email}?subject=${subject}&body=${body}`;
      return;
    }

    setStatus("sending");
    try {
      const res = await fetch(`https://formspree.io/f/${formspreeId}`, {
        method: "POST",
        headers: { Accept: "application/json" },
        body: data,
      });
      if (res.ok) { form.reset(); setStatus("sent"); } else setStatus("error");
    } catch {
      setStatus("error");
    }
  }

  const label =
    status === "sending" ? "Sending..." : status === "sent" ? "Message sent" : "Send Message";

  return (
    <form className="form-card" onSubmit={onSubmit}>
      <div className="beat">Leave a Message</div>
      <div className="field">
        <label htmlFor="cname">Name</label>
        <input type="text" id="cname" name="name" required />
      </div>
      <div className="field">
        <label htmlFor="cemail">Email</label>
        <input type="email" id="cemail" name="email" required />
      </div>
      <div className="field">
        <label htmlFor="cmsg">Message</label>
        <textarea id="cmsg" name="message" required />
      </div>
      <button type="submit" disabled={status === "sending"}>{label}</button>
      <p role="status" style={{ marginTop: 12, fontSize: 13, color: "var(--gray)" }}>
        {status === "sent" && "Thanks — I'll reply to your email soon."}
        {status === "error" && `Could not send. Please email ${site.email} directly.`}
      </p>
    </form>
  );
}
