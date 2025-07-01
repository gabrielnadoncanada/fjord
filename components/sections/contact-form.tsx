"use client";

import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

export function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log("Form submitted:", formData);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  return (
    <Card className="bg-gray-100 border-0 rounded-xl p-16">
      <div className="flex flex-col justify-between h-full min-h-[400px]">
        <h2 className="text-4xl font-normal text-black mb-32">Let's Talk</h2>

        <form onSubmit={handleSubmit} className="flex flex-col gap-3">
          <div className="grid grid-cols-2 gap-3">
            <Input
              type="text"
              name="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
              variant="default"
              className="bg-white border border-gray-200 rounded-md px-6 py-4 text-[15px] leading-[1.6] placeholder:text-gray-900/60"
              required
            />
            <Input
              type="email"
              name="email"
              placeholder="Your Email"
              value={formData.email}
              onChange={handleChange}
              variant="default"
              className="bg-white border border-gray-200 rounded-md px-6 py-4 text-[15px] leading-[1.6] placeholder:text-gray-900/60"
              required
            />
          </div>

          <Textarea
            name="message"
            placeholder="Your Message"
            value={formData.message}
            onChange={handleChange}
            className="bg-white border border-gray-200 rounded-md px-6 py-4 text-[15px] leading-[1.6] placeholder:text-gray-900/60 min-h-[200px] resize-none"
            required
          />

          <Button
            type="submit"
            className="bg-black text-white rounded-md px-4 py-3 text-sm font-normal hover:bg-black/90 transition-colors"
          >
            Send Message
          </Button>
        </form>
      </div>
    </Card>
  );
}
