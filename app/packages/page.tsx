import Link from "next/link";
import { CTABand } from "@/components/home/HiringOptions";
import { IconCheck } from "@/components/ui/icons";
import { packageIncludes, packageQuoteHref, packages } from "@/data/packages";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Packages and Starting Prices",
  description:
    "Starting prices for websites, landing pages, brand kits, social content, short video and data reports. Final quote based on your scope.",
  path: "/packages",
});

export default function PackagesPage() {
  return (
    <main className="page-shell">
      <section className="page-hero">
        <div className="container">
          <p className="eyebrow">Packages</p>
          <h1>Packages</h1>
          <p>
            Starting prices. Your final quote depends on scope, contractor level (Rising, Pro or
            Expert) and timeline.
          </p>
        </div>
      </section>

      <section className="section-tight">
        <div className="container">
          <div className="packages-table-wrap">
            <table className="packages-table">
              <thead>
                <tr>
                  <th scope="col">Package</th>
                  <th scope="col">What is included</th>
                  <th scope="col">Starting from</th>
                  <th scope="col">
                    <span className="sr-only-status">Request</span>
                  </th>
                </tr>
              </thead>
              <tbody>
                {packages.map((p) => (
                  <tr key={p.slug}>
                    <th scope="row">{p.name}</th>
                    <td>
                      <p>{p.description}</p>
                      <ul className="plan-features">
                        {packageIncludes.map((item) => (
                          <li key={item}>
                            <span className="check">
                              <IconCheck />
                            </span>
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </td>
                    <td className="packages-price" data-label="Starting from">
                      from {p.startingFrom}
                    </td>
                    <td>
                      <Link href={packageQuoteHref(p.slug)} className="btn btn-outline">
                        Request this package
                      </Link>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="plans-note">
            Prices in USD, invoiced in KES. Starting prices only. You receive a written quote for
            your exact scope before any work begins.
          </p>
        </div>
      </section>

      <CTABand />
    </main>
  );
}
