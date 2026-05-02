import { FAQ } from "@/components/FAQ";
import { Features } from "@/components/Features";
import { Hero } from "@/components/Hero";
import { Pricing } from "@/components/Pricing";
import { Preview } from "@/components/Preview";
import { RegisterForm } from "@/components/RegisterForm";
import { ScrollToTop } from "@/components/ScrollToTop";
import { SiteFooter } from "@/components/SiteFooter";
import { SiteHeader } from "@/components/SiteHeader";
import { SocialProof } from "@/components/SocialProof";

export default function Home() {
  return (
    <>
      <SiteHeader />
      <Hero />
      <Features />
      <Preview />
      <SocialProof />
      <Pricing />
      <FAQ />
      <RegisterForm />
      <SiteFooter />
      <ScrollToTop />
    </>
  );
}
