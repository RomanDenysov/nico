import { MailIcon, MapPinIcon, PhoneIcon } from "lucide-react";

export const CONFIG = {
  phone: "+421723456789",
  email: "hello@nico.example",
  address: "123 Bistro Street, Praha",
  socials: [
    { label: "Instagram", href: "#" },
    { label: "Facebook", href: "#" },
  ],
  addressInfo: {
    title: "KDE NÁS NÁJDETE?",
    description:
      "17. novembra 8288/106, Prešov 080 01 - Medzi pekárňou Kromka a talianským bistrom CIAO!",
  },
};

export const contactData = [
  {
    label: "Volat",
    icon: PhoneIcon,
    href: "tel:+421905830548",
  },
  {
    label: "Poslat email",
    icon: MailIcon,
    href: "mailto:hello@nico.example",
  },
  {
    label: "Navigovat",
    icon: MapPinIcon,
    href: "https://maps.app.goo.gl/1234567890",
  },
];
