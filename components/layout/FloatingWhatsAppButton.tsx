"use client";

import { FaWhatsapp } from "react-icons/fa";

export default function FloatingWhatsAppButton() {
  const MY_PHONE_NUMBER = process.env.NEXT_PUBLIC_WHATSAPP;
  const whatsappUrl = `https://wa.me/${MY_PHONE_NUMBER}?text=Hello!%20I%20have%20a%20question%20about%20your%20service.`;

  const handleClick = () => {
    window.open(whatsappUrl, "_blank");
  };

  return (
    <div className="fixed bottom-10 right-4 z-50 ">
      <button
  className="w-14 h-14 flex items-center justify-center rounded-full! shadow-2xl 
  cursor-pointer
  transition-all duration-300 transform hover:scale-105 active:scale-95 
  bg-green-500 hover:bg-green-600 text-white"
  title={`Chat on WhatsApp: +${MY_PHONE_NUMBER}`}
  onClick={handleClick}
>
  <FaWhatsapp size={40} />
</button>
    </div>
  );
}
