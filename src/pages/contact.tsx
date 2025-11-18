import { useEffect, useRef, useState } from "react";
import brandSign from "@/assets/contact/Brand-Sign.webp";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Button } from "@/components/ui/button";

export function ContactPage() {
  const [isVisible, setIsVisible] = useState(false);
  const [isFormVisible, setIsFormVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);
  const formRef = useRef<HTMLDivElement>(null);

  // Form state
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    interest: "",
    message: "",
  });

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsFormVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (formRef.current) {
      observer.observe(formRef.current);
    }

    return () => {
      if (formRef.current) {
        observer.unobserve(formRef.current);
      }
    };
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Integrate with EmailJS
    console.log("Form submitted:", formData);
  };

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSelectChange = (value: string) => {
    setFormData({
      ...formData,
      interest: value,
    });
  };

  return (
    <div className="bg-black min-h-screen">
      {/* First Half - Hero Section with Brand Sign */}
      <section
        ref={sectionRef}
        className="min-h-screen flex items-center justify-center px-4 lg:px-8 py-20"
      >
        <div
          className={`relative max-w-xl w-full transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
          }`}
        >
          {/* Brand Sign Image with Contact Heading Overlay */}
          <div className="relative">
            <img
              src={brandSign}
              alt="Brand & Sign"
              className="w-full h-[70vh] lg:h-[80vh] object-cover object-center"
            />

            {/* Dimming Overlay */}
            <div className="absolute inset-0 bg-black/50"></div>

            {/* Contact Heading Overlapping Bottom */}
            <div className="absolute bottom-0 left-0 right-0 pb-8 lg:pb-12 px-6 lg:px-8 z-10">
              <h1 className="text-6xl lg:text-8xl xl:text-9xl font-light text-white lowercase tracking-tight">
                contact
              </h1>
            </div>
          </div>
        </div>
      </section>

      {/* Second Half - Contact Form Section */}
      <section
        ref={formRef}
        className="min-h-screen px-4 lg:px-8 py-20 lg:py-32"
      >
        <div
          className={`max-w-7xl mx-auto transition-all duration-1000 ${
            isFormVisible
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-12"
          }`}
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
            {/* Left Column - Heading and Contact Info */}
            <div className="space-y-16 lg:space-y-32">
              <h2 className="text-4xl lg:text-5xl xl:text-6xl font-light text-white leading-tight">
                Interested in
                <br />
                collaborating?
              </h2>

              {/* Contact Information */}
              <div className="space-y-4 text-white text-lg lg:text-xl">
                <p>Rue du Liban, Ashrafieh Beirut Lebanon</p>
                <p>m: +961 3 667160</p>
                <p>e: lama@brandandand.group</p>
              </div>
            </div>

            {/* Right Column - Form */}
            <div>
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Name Fields */}
                <div className="space-y-2">
                  <label className="text-white text-base lg:text-lg">
                    Name
                  </label>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Input
                        type="text"
                        name="firstName"
                        placeholder="First Name"
                        value={formData.firstName}
                        onChange={handleInputChange}
                        className="bg-[#3a3a3a] border-none text-white placeholder:text-gray-500 h-12 rounded-none"
                      />
                    </div>
                    <div className="space-y-2">
                      <Input
                        type="text"
                        name="lastName"
                        placeholder="Last Name"
                        value={formData.lastName}
                        onChange={handleInputChange}
                        className="bg-[#3a3a3a] border-none text-white placeholder:text-gray-500 h-12 rounded-none"
                      />
                    </div>
                  </div>
                </div>

                {/* Email Field */}
                <div className="space-y-2">
                  <label className="text-white text-base lg:text-lg">
                    Email <span className="text-gray-400">(required)</span>
                  </label>
                  <Input
                    type="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleInputChange}
                    className="bg-[#3a3a3a] border-none text-white placeholder:text-gray-500 h-12 rounded-none w-full"
                  />
                </div>

                {/* Interest Dropdown */}
                <div className="space-y-2">
                  <label className="text-white text-base lg:text-lg">
                    I'm interested in
                  </label>
                  <Select
                    value={formData.interest}
                    onValueChange={handleSelectChange}
                  >
                    <SelectTrigger className="bg-[#3a3a3a] border-none text-white h-12 rounded-none w-full">
                      <SelectValue placeholder="Select an option" />
                    </SelectTrigger>
                    <SelectContent className="bg-[#3a3a3a] border-zinc-700 text-white rounded-none">
                      <SelectItem value="brand-strategy">
                        Brand Strategy
                      </SelectItem>
                      <SelectItem value="brand-identity">
                        Brand Identity & Design
                      </SelectItem>
                      <SelectItem value="digital-experience">
                        Digital & Experience
                      </SelectItem>
                      <SelectItem value="consultation">
                        Consultation
                      </SelectItem>
                      <SelectItem value="other">Other</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                {/* Message Field */}
                <div className="space-y-2">
                  <label className="text-white text-base lg:text-lg">
                    Message
                  </label>
                  <Textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    className="bg-[#3a3a3a] border-none text-white placeholder:text-gray-500 min-h-[200px] resize-none rounded-none"
                  />
                </div>

                {/* Submit Button */}
                <Button
                  type="submit"
                  variant="outline"
                  className="bg-transparent border-white text-white hover:bg-white/10 px-12 py-6 text-lg rounded-none"
                >
                  Send
                </Button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
