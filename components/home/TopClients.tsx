"use client";
import Image from "next/image";
import clientData from "@/data/data1.json";
import type { Client } from "@/data/types";
import { Building2, Sofa, Stethoscope } from "lucide-react";

export default function TopClients() {


  const clients = clientData.clients;
  const repeated = [...clients]; 

  return (
    <div className="w-full py-14">
      <div className="text-center mb-10 px-4">
        <h2 className="">Trusted by 500+ Fast-Growing Businesses & Founders</h2>
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
          .ticker-track:hover {
          animation-play-state: paused;
        }

        @keyframes scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-33.3333%); } /* ⭐ move exactly 1 block of 3 */
        }
      `}</style>
    </div>
  );
}

function ClientItem({ client }: { client: Client }) {
  const hasLogo = client.logo && client.logo.length > 0;
  const clientIconMap: Record<string, React.ElementType> = {
    "Sofa": Sofa,
    "Stethoscope": Stethoscope,
    default: Building2,
  };
  const Icon =
  clientIconMap[client.icon ?? "default"] ?? clientIconMap.default;
  return (
    <div className="inline-flex flex-col items-center justify-center w-40 shrink-0">
      <div className="relative w-full h-20 flex items-center justify-center rounded-lg transition-transform duration-300 hover:scale-105"
        style={{
          backgroundColor: client.bgColor.length <= 1 ? "transparent" : client.bgColor // ✅ selective bg
        }}>
        {hasLogo ? (
          <Image
            src={`/img/clients/${client.logo}`}
            alt={client.name}
            fill
            className="object-contain w-auto"
            title={client.name}
          />
        ) : (
          <div className="flex flex-col items-center justify-center text-muted-foreground">
            <Icon
              size={40}
              className="opacity-70 group-hover:opacity-100 transition-opacity"
              aria-hidden
            />
            <span className="sr-only">{client.name}</span>
          </div>
        )}
      </div>
      <div className="mt-2 h-10 text-center leading-tight line-clamp-2">
        <span className="relative">
          {client.brandName}
        </span>
      </div>
    </div>
  );
}
