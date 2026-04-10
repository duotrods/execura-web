"use client";

import { useEffect } from "react";

export default function ContactForm() {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://assets.calendly.com/assets/external/widget.js";
    script.async = true;
    document.body.appendChild(script);
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div
      className="calendly-inline-widget"
      data-url="https://calendly.com/duotrodolinor/1-on-1-feedback-session"
      style={{ minWidth: "320px", height: "700px" }}
    />
  );
}
