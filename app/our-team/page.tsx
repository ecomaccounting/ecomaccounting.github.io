import Image from "next/image";
import data from "@/app/data.json";

interface TeamMember {
  memberName: string;
  description: string;
  image: string;
}

export const metadata = {
  title: "Our Team | GPMJ & Associates",
  description:
    "Meet the experienced Chartered Accountants and professionals at GPMJ & Associates — experts in audit, taxation, and financial consulting.",
};

export default function OurTeamPage() {
  const team: TeamMember[] = data.OurTeam;

  return (
    <section
      id="our-team"
      className="bg-gray-50 py-20"
      aria-label="Meet our Chartered Accountants and team members"
    >
      <div className="container mx-auto px-6 md:px-12">
        {/* --- Page Header --- */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-blue-700 mb-4">
            Our Team
          </h1>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Experienced professionals committed to simplifying finance, taxation,
            and compliance for businesses across India.
          </p>
        </div>

        {/* --- Team Grid --- */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {team.map((member) => (
            <article
              key={member.memberName}
              className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow flex flex-col overflow-hidden"
              itemScope
              itemType="https://schema.org/Person"
            >
              {/* --- Image --- */}
              <div className="relative w-full h-72">
                <Image
                  src={member.image}
                  alt={`Photo of ${member.memberName}`}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 33vw"
                  priority
                />
              </div>

              {/* --- Content --- */}
              <div className="flex flex-col flex-grow p-6 text-center md:text-left">
                <h2
                  className="text-2xl font-semibold text-blue-700 mb-3"
                  itemProp="name"
                >
                  {member.memberName}
                </h2>
                <p
                  className="text-gray-700 text-base leading-relaxed"
                  itemProp="description"
                >
                  {member.description.length > 400
                    ? member.description.slice(0, 400) + "..."
                    : member.description}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
