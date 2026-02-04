"use client";

import { Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export function NewsletterCTA() {
  return (
    <div className="bg-muted border border-border rounded-xl p-6 sticky top-24">
      <div className="flex items-center gap-2 mb-4 text-brand-blue">
        <Mail className="w-5 h-5" />
        <span className="font-bold uppercase tracking-wider text-xs">Newsletter</span>
      </div>
      
      <h3 className="font-bold text-heading text-lg mb-2">
        Get the best marketing tips delivered.
      </h3>
      <p className="text-body text-sm mb-6 leading-relaxed">
        Join 5,000+ marketers and get our latest articles, guides, and case studies.
      </p>

      <form className="space-y-3" onSubmit={(e) => e.preventDefault()}>
        <Input 
          type="email" 
          placeholder="Enter your email" 
          className="bg-white border-border focus-visible:ring-brand-blue"
        />
        <Button className="w-full bg-brand-orange hover:bg-orange-600 text-white font-bold rounded-md transition-colors shadow-md group">
          Subscribe
          <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
        </Button>
        <p className="text-xs text-muted-foreground text-center">
          No spam. Unsubscribe anytime.
        </p>
      </form>
    </div>
  );
}
