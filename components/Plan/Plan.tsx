import { ServicePackage } from "@/data/types";
import CaseStudyNote from "./CaseStudyNote";
import PlanNote from "./PlanNote";

export default function Plan({ pkg }: { pkg: ServicePackage }) {
    const hasHighlight = pkg.highlight && pkg.highlight.trim().length > 0;

    return (
        <div
            key={pkg.packageName}
            className={[
                "relative bg border rounded-2xl p-6 shadow-sm transition",
                "hover:shadow-md",
                hasHighlight
                    ? "border-highlight ring-1 ring-accent/20"
                    : "border-default"
            ].join(" ")}
        >
            {/* 🔖 Highlight badge */}
            {hasHighlight && (
                <div className="absolute -top-3 right-4">
                    <span className="font-semibold px-3 py-1 rounded-full bg-accent  shadow">
                        {pkg.highlight}
                    </span>
                </div>
            )}

            <div className="mb-4">
                <h3 className="text-xl font-semibold">{pkg.packageName}</h3>
                {pkg.subtitle && (
                    <p className="text-light py-2">{pkg.subtitle}</p>
                )}
            </div>

            {/* <div className="mb-6">
                {(pkg.pricingType === "Monthly" || pkg.pricingType === "One Time") && (
                    <p className="text-4xl font-semibold text-highlight">
                        ₹{Number(pkg.price).toLocaleString('en-IN')}
                        <span className="text-sm font-normal text-light ml-1">
                            {pkg.pricingType === "Monthly" ? "/ month" : "(One Time)"}
                        </span>
                    </p>
                )}

                {pkg.pricingType === "Range" && (
                    <p className="text-4xl text-highlight font-semibold">{pkg.price}</p>
                )}
            </div> */}

            <ul className="space-y-2 mb-6">
                {pkg.features.map((f, idx) => (
                    <li key={idx} className="flex gap-2 py-2">
                        <span className="text-green-700">✓</span>
                        <span>{f}</span>
                    </li>
                ))}
            </ul>

            {pkg.bestFor && (
                <p className="text-sm text-light mb-4">
                    <strong>Best for:</strong> {pkg.bestFor}
                </p>
            )}

            <a
                href={`/contact-us/?plan=${pkg.packageName}`}
                className={`block text-center rounded-xl py-3 font-semibold transition ${hasHighlight ? "button ok pulse" : "button success"
                    }`}
            >
                {pkg.cta || "Get a Custom Quote"}
            </a>
            <PlanNote pkg={pkg} key={`Note-${pkg.id}`} />
            <CaseStudyNote pkg={pkg} key={`Case-${pkg.id}`} />
        </div>
    );
}