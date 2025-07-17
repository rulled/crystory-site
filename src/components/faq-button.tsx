 "use client";

import { Button } from "@/components/ui/button";

export function FAQButton() {
  const faqUrl = "https://telegra.ph/Znakomstvo-s-serverom-Kristory-07-17";

  return (
    <Button asChild size="lg" className="h-12 rounded-[18px] text-base glow-on-hover" variant="secondary">
      <a href={faqUrl} target="_blank" rel="noopener noreferrer">
        FAQ
      </a>
    </Button>
  );
}
