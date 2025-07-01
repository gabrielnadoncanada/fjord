import React from "react";
import { SocialLinks } from "./partials/social-links";
import { FooterMain } from "./partials/footer-main";
import { NewsletterSignup } from "./partials/newsletter-signup";

export function Footer() {
  return (
    <footer className="w-full flex flex-col gap-3 mt-3">
      <SocialLinks />

      <div className="flex flex-col-reverse lg:flex-row gap-3">
        <FooterMain />
        <NewsletterSignup />
      </div>
    </footer>
  );
}
