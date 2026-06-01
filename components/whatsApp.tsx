"use client";

import { WhatsappIcon } from "@/components/icons/customIcons";

const WhatsAppButton = () => {
  const handleWhatsApp = () => {
    const message = `
Hello,
I am interested in:
- Interior Design
- Architecture
- Renovation

Please contact me.
`;

    const url = `https://wa.me/9667675127?text=${encodeURIComponent(message)}`;

    window.open(url, "_blank");
  };

  return (
    <div className="fixed right-2 bottom-5 z-50 rounded-md bg-white p-2">
      <button
        onClick={handleWhatsApp}
        className="flex h-8 w-8 items-center justify-center cursor-pointer rounded-md bg-[#25D366] shadow-lg transition-transform duration-300 hover:scale-110"
      >
        <WhatsappIcon className="h-6 w-6 fill-current text-white" />
      </button>
    </div>
  );
};

export default WhatsAppButton;