
import { Features } from "./home/features";
import { Hero } from "./home/hero";
import { Partners } from "./home/partners";
import { Purpose } from "./home/purpose";
import { routing } from "../../i18n/routing";

export function generateStaticParams() {
  return routing.locales.map((locale) => ({locale}));
}

export default function Home() {
  return (
    <div className="bg-primary">
      <Hero />
      <Features />
      <Purpose />
      <Partners />
    </div>
  );
}
