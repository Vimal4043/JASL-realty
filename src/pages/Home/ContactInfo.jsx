import { Mail, MapPin, Phone, Monitor } from "lucide-react";
import { BRAND } from "../../data/properties.js";

const contactItems = [
  {
    icon: MapPin,
    title: "Location",
    content: "Sector 17, New Panvel - 410206",
    href: "https://www.google.com/maps/search/?api=1&query=Sector+17%2C+New+Panvel%2C+410206",
  },
  {
    icon: Phone,
    title: "Mobile",
    phones: ["8446773311", "9511839356"],
  },
  {
    icon: Mail,
    title: "Email",
    content: "Sujandutta007@gmail.com",
    href: "mailto:Sujandutta007@gmail.com",
  },
  {
    icon: Monitor,
    title: "Web",
    content: BRAND.websiteDisplay,
    href: BRAND.websiteUrl,
  },
];

export default function ContactInfo() {
  return (
    <section
      id="contact-info"
      data-testid="contact-info-section"
      className="bg-[#F4F0E5] text-[#063D2E]"
    >
      <div className="mx-auto w-full max-w-7xl px-5 py-10 sm:px-6 md:py-14 lg:px-8">
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4 lg:gap-6">
          {contactItems.map((item) => {
            const Icon = item.icon;

            return (
              <div
                key={item.title}
                className="flex min-h-30 flex-col items-center justify-center rounded-2xl border border-[#C9A24A]/40 bg-white px-6 py-8 text-center shadow-[0_2px_12px_rgba(6,61,46,0.07)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_14px_36px_rgba(6,61,46,0.12)]"
              >
                <div className="flex h-14 w-14 items-center justify-center rounded-full border border-[#C9A24A]/40 bg-[#FAF8F1] text-[#063D2E]">
                  <Icon className="h-6 w-6" strokeWidth={1.7} />
                </div>

                <h4 className="mt-4 font-heading text-xl font-semibold tracking-wide text-[#063D2E]">
                  {item.title}
                </h4>
                <div className="mt-2 h-px w-10 bg-[#C9A24A]/60" />

                {item.phones ? (
                  <div className="mt-3 max-w-60 text-sm leading-relaxed">
                    {item.phones.map((phone, index) => (
                      <span key={phone}>
                        <a
                          href={`tel:${phone}`}
                          className="text-[#17352D] transition-colors duration-300 hover:text-[#C9A24A]"
                        >
                          {phone}
                        </a>
                        {index < item.phones.length - 1 && ", "}
                      </span>
                    ))}
                  </div>
                ) : item.href ? (
                  <a
                    href={item.href}
                    target={item.href.startsWith("http") ? "_blank" : undefined}
                    rel={
                      item.href.startsWith("http")
                        ? "noopener noreferrer"
                        : undefined
                    }
                    className="mt-3 max-w-60 break-all text-sm leading-relaxed text-[#17352D] transition-colors duration-300 hover:text-[#C9A24A]"
                  >
                    {item.content}
                  </a>
                ) : (
                  <p className="mt-3 max-w-60 text-sm leading-relaxed text-[#66756F]">
                    {item.content}
                  </p>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
