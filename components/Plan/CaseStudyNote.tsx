import data from "@/data/data1.json"
import { ServicePackage } from "@/data/types";
import Link from "next/link"
export default function CaseStudyNote({ pkg }: { pkg: ServicePackage }) {
    return (
        <div>
            {pkg.caseStudy && pkg.caseStudy.split(',').map((slug) => {
                const cleanSlug = slug.trim(); // Remove any accidental spaces
                const study = data.caseStudies.find(c => c.slug === cleanSlug);

                // Only render if a matching case study is actually found
                return study ? (
                    <p key={cleanSlug} className="bg-green-200 text-black p-2 my-4 rounded-2xl">
                        <b>Case Study:</b><br/>
                        {study.description}
                        <br />
                        <Link href={`/case-studies/${cleanSlug}/`}>
                            Read full case study →
                        </Link>
                    </p>
                ) : null;
            })}
        </div>
    );
}