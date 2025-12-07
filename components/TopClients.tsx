"use client";
import Image from "next/image";
import clientData from "@/data/data.json";

export default function TopClients() {
  const clients = clientData.clients.slice(0, 6);

  const repeated = [...clients, ...clients, ...clients]; // ⭐ triple repeat

  return (
    <div className="w-full py-14">
      <div className="text-center mb-10 px-4">
        <h2 className="text-4xl">Trusted by 500+ Fast-Growing Businesses & Founders</h2>
        <p className="mt-2 text-base md:text-lg">
          Helping businesses stay compliant, organized, and ready to scale
        </p>
      </div>

      <div className="overflow-hidden">
        <div className="ticker-track">
          {repeated.map((client, i) => (
            <ClientItem key={i} client={client} />
          ))}
        </div>
      </div>

      <style jsx>{`
        .ticker-track {
          display: inline-flex;
          gap: 3rem;
          white-space: nowrap;

          /* ⭐ Because we now have 3× width, this works perfectly */
          animation: scroll 40s linear infinite;
        }

        @keyframes scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-33.3333%); } /* ⭐ move exactly 1 block of 3 */
        }
      `}</style>
    </div>
  );
}

function ClientItem({ client }) {
  return (
    <div className="inline-flex flex-col items-center justify-center w-40">
      <div className="relative w-28 h-20">
        <Image
          src={client.logo}
          alt={client.name}
          fill
          className="object-contain transition-transform duration-300 hover:scale-110"
        />
      </div>
      <div className="mt-2 text-sm text-center">{client.name}</div>
    </div>
  );
}
