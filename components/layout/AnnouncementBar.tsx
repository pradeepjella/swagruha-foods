"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { MessageCircle, Truck, Gift, Sparkles } from "lucide-react";

const announcements = [
  {
    id: 1,
    text: "Freshly Made • Authentic Taste • Delivered to Your Doorstep",
    icon: Sparkles,
  },
  {
    id: 2,
    text: "Free Delivery on Orders Above ₹2000",
    icon: Truck,
  },
  {
    id: 3,
    text: "Special Festival Combos Available Now",
    icon: Gift,
  },
  {
    id: 4,
    text: "Traditional Taste • Premium Quality • Made with Love",
    icon: Sparkles,
  },
  {
    id: 5,
    text: "Order on WhatsApp: 9398389387",
    icon: MessageCircle,
    link: "https://wa.me/919398389387",
  },
];

export default function AnnouncementBar() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((previousIndex) =>
        previousIndex === announcements.length - 1
          ? 0
          : previousIndex + 1,
      );
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  const announcement = announcements[currentIndex];
  const Icon = announcement.icon;

  return (
    <div className="w-full bg-primary text-white">
      <div className="mx-auto flex min-h-[40px] w-full items-center justify-center px-4">
        <AnimatePresence mode="wait">
          <motion.div
            key={announcement.id}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{
              duration: 0.35,
              ease: "easeOut",
            }}
            className="flex items-center justify-center"
          >
            {announcement.link ? (
              <a
                href={announcement.link}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex min-h-[40px] items-center justify-center gap-2 text-center font-sans text-[12px] font-medium tracking-[0.01em] transition-opacity duration-200 hover:opacity-90 sm:text-[13px]"
              >
                <Icon
                  size={15}
                  strokeWidth={2}
                  className="shrink-0 text-gold"
                />

                <span>{announcement.text}</span>
              </a>
            ) : (
              <div className="flex min-h-[40px] items-center justify-center gap-2 text-center font-sans text-[12px] font-medium tracking-[0.01em] sm:text-[13px]">
                <Icon
                  size={15}
                  strokeWidth={2}
                  className="shrink-0 text-gold"
                />

                <span>{announcement.text}</span>
              </div>
            )}
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}