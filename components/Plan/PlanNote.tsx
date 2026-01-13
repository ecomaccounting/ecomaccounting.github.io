import data from "@/data/data1.json"
import { ServicePackage } from "@/data/types";
import Link from "next/link"
export default function PlanNote({ pkg }: { pkg: ServicePackage }) {
    return (
        <div>
            {pkg.note1 && (
                <p className="bg-yellow-100 text-black my-2 p-2 rounded-xl">
                    {(() => {
                        const parts = pkg.note1.split(':');

                        // Logic Check: If no colon exists, just render the whole text
                        if (parts.length < 2) return pkg.note1;

                        // Extract the first part and join the rest (in case there are colons in the message)
                        const firstPart = parts[0];
                        const secondPart = parts.slice(1).join(':');

                        return (
                            <>
                                <strong>{firstPart}:</strong>{secondPart}
                            </>
                        );
                    })()}
                </p>
            )}

            {pkg.note2 && (
                <p className="bg-red-100 text-red-900 my-2 p-2 rounded-xl">
                    {(() => {
                        const parts = pkg.note2.split(':');

                        // Logic Check: If no colon exists, just render the whole text
                        if (parts.length < 2) return pkg.note1;

                        // Extract the first part and join the rest (in case there are colons in the message)
                        const firstPart = parts[0];
                        const secondPart = parts.slice(1).join(':');

                        return (
                            <>
                                <strong>{firstPart}:</strong>{secondPart}
                            </>
                        );
                    })()}
                </p>
            )}
        </div>
    );
}