const whatsappLink =
  "https://wa.me/351913012661?text=Ol%C3%A1%20Prime%20Cut%2C%20quero%20agendar%20um%20hor%C3%A1rio!";

const FloatingWhatsapp = () => {
  return (
    <a
      href={whatsappLink}
      target="_blank"
      rel="noreferrer"
      aria-label="Fale conosco pelo WhatsApp"
      className="fixed bottom-6 right-6 z-50 inline-flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-2xl shadow-green-900/40 transition hover:scale-105 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/80 focus-visible:ring-offset-2 focus-visible:ring-offset-[#25D366]"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 32 32"
        className="h-12 w-12"
        aria-hidden="true"
      >
        <path
          fill="currentColor"
          d="M16.027 6c-4.411 0-8 3.516-8 7.838 0 1.54.465 2.979 1.26 4.188l-1.656 4.861 5.008-1.59a8.14 8.14 0 0 0 3.388.731c4.411 0 8-3.515 8-7.837C24.027 9.516 20.438 6 16.027 6Zm0 14.29c-1.072 0-2.109-.286-3.022-.825l-.217-.128-2.977.946.984-2.888-.14-.222a6.557 6.557 0 0 1-1.035-3.543c0-3.625 3.012-6.574 6.707-6.574s6.707 2.949 6.707 6.574-3.012 6.66-6.707 6.66Zm3.609-4.934c-.197-.1-1.164-.573-1.345-.638-.181-.074-.313-.1-.444.1-.132.199-.516.638-.633.765-.116.128-.232.147-.429.05-.197-.1-.836-.306-1.59-.977-.588-.5-.984-1.115-1.1-1.313-.116-.199-.013-.306.087-.405.09-.09.207-.232.313-.347.103-.116.136-.199.207-.331.066-.132.037-.248-.006-.347-.044-.1-.444-1.072-.608-1.47-.16-.381-.323-.331-.444-.331-.116 0-.248-.019-.38-.019-.132 0-.347.05-.528.248-.181.199-.693.677-.693 1.65s.711 1.915.81 2.047c.1.132 1.394 2.125 3.383 2.977 1.988.853 1.988.569 2.344.533.356-.037 1.163-.468 1.326-.92.163-.455.163-.846.116-.92-.05-.075-.181-.128-.378-.228Z"
        />
      </svg>
    </a>
  );
};

export default FloatingWhatsapp;
