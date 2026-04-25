import { FAQ } from "@/components/FAQ";
import { Features } from "@/components/Features";
import { Hero } from "@/components/Hero";
import { Pricing } from "@/components/Pricing";
import { Preview } from "@/components/Preview";
import { RegisterForm } from "@/components/RegisterForm";
import { SocialProof } from "@/components/SocialProof";

export default function Home() {
  return (
    <>
      <Hero />
      <Features />
      <Preview />
      <SocialProof />
      <Pricing />
      <FAQ />
      <RegisterForm />
    </>
  );
}
