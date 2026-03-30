"use client"

import { useState } from "react"
import { Mail, MessageCircle, Phone, Send } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useLanguage } from "@/lib/i18n/language-context"

interface ContactInfo {
  icon: React.ReactNode
  title: string
  value: string
  action: string
}

export function ContactSection() {
  const { dictionary, isRtl } = useLanguage()
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  })
  const [isLoading, setIsLoading] = useState(false)

  // معلومات الاتصال المحدثة - WhatsApp و Phone و Email فقط
  const contactInfo: ContactInfo[] = [
    {
      icon: <MessageCircle className="w-6 h-6" />,
      title: "WhatsApp",
      value: "+1 (555) 123-4567",
      action: "https://wa.me/15551234567",
    },
    {
      icon: <Phone className="w-6 h-6" />,
      title: "Phone",
      value: "+1 (555) 123-4567",
      action: "tel:+15551234567",
    },
    {
      icon: <Mail className="w-6 h-6" />,
      title: "Email",
      value: "info@mrrooster.farm",
      action: "mailto:info@mrrooster.farm",
    },
  ]

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)

    try {
      // أضف هنا منطق إرسال الرسالة
      console.log("Form submitted:", formData)
      // Reset form
      setFormData({
        name: "",
        email: "",
        phone: "",
        message: "",
      })
    } catch (error) {
      console.error("Error submitting form:", error)
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <section
      id="contact"
      className="py-20 px-6 sm:px-8 lg:px-12 bg-gradient-to-b from-background to-accent/5"
    >
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-accent font-semibold text-sm tracking-widest uppercase mb-4">
            GET IN TOUCH
          </p>
          <h2 className="text-4xl sm:text-5xl font-bold mb-6">
            Contact <span className="text-accent">Us</span>
          </h2>
          <p className="text-foreground/70 max-w-2xl mx-auto text-lg">
            Ready to start your poultry journey? Reach out to us and our team will be happy to assist you with your requirements.
          </p>
        </div>

        <div className={`grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-6 mb-12 ${isRtl ? "rtl" : ""}`}>
          {/* Contact Info Cards - 3 Cards فقط */}
          {contactInfo.map((info, index) => (
            <a
              key={index}
              href={info.action}
              target={info.action.startsWith("http") ? "_blank" : undefined}
              rel={info.action.startsWith("http") ? "noopener noreferrer" : undefined}
              className="group bg-card rounded-2xl p-8 border border-border hover:border-accent hover:shadow-xl hover:scale-105 transition-all duration-300 cursor-pointer text-center"
            >
              <div className="flex flex-col items-center gap-4">
                {/* Icon Background */}
                <div className="w-16 h-16 bg-gradient-to-br from-accent to-accent/70 rounded-xl flex items-center justify-center text-white group-hover:scale-110 transition-transform duration-300">
                  {info.icon}
                </div>

                {/* Title */}
                <h3 className="text-lg font-semibold text-foreground group-hover:text-accent transition-colors">
                  {info.title}
                </h3>

                {/* Value */}
                <p className="text-sm text-foreground/70 group-hover:text-foreground transition-colors font-medium">
                  {info.value}
                </p>
              </div>
            </a>
          ))}
        </div>

        {/* Contact Form */}
        <div className="max-w-2xl mx-auto bg-card rounded-2xl p-8 border border-border shadow-lg">
          <div className="flex items-center gap-3 mb-8 pb-6 border-b border-border">
            <Send className="w-6 h-6 text-accent" />
            <h3 className="text-2xl font-bold text-foreground">Send us a Message</h3>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Name and Email Row */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-semibold text-foreground mb-2">
                  Your Name
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  placeholder="John Doe"
                  className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground placeholder-foreground/50 focus:outline-none focus:border-accent focus:ring-2 focus:ring-accent/20 transition-all"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-foreground mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder="john@example.com"
                  className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground placeholder-foreground/50 focus:outline-none focus:border-accent focus:ring-2 focus:ring-accent/20 transition-all"
                  required
                />
              </div>
            </div>

            {/* Phone Number */}
            <div>
              <label className="block text-sm font-semibold text-foreground mb-2">
                Phone Number
              </label>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleInputChange}
                placeholder="+1 (555) 123-4567"
                className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground placeholder-foreground/50 focus:outline-none focus:border-accent focus:ring-2 focus:ring-accent/20 transition-all"
              />
            </div>

            {/* Message */}
            <div>
              <label className="block text-sm font-semibold text-foreground mb-2">
                Your Message
              </label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                placeholder="Tell us about your requirements..."
                rows={6}
                className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground placeholder-foreground/50 focus:outline-none focus:border-accent focus:ring-2 focus:ring-accent/20 transition-all resize-none"
                required
              />
            </div>

            {/* Submit Button */}
            <Button
              type="submit"
              disabled={isLoading}
              className="gradient-button text-white border-0 w-full md:w-auto px-8 py-3 h-auto font-semibold hover:opacity-90 transition-opacity flex items-center justify-center gap-2"
            >
              <Send className="w-5 h-5" />
              {isLoading ? "Sending..." : "Send Message"}
            </Button>
          </form>
        </div>
      </div>
    </section>
  )
}