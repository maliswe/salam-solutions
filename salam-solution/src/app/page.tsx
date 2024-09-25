import { Container } from "@/components/Container";
import { Hero } from "@/components/Hero";
import { SectionTitle } from "@/components/SectionTitle";
import { Benefits } from "@/components/Benefits";
import { Video } from "@/components/Video";
import { Testimonials } from "@/components/Testimonials";
import { Faq } from "@/components/Faq";
import { Cta } from "@/components/Cta";

import { benefitOne, benefitTwo } from "@/components/data";

export default function Home() {
  return (
    <Container>
      <Hero />
      <SectionTitle
        preTitle="Our Services"
        title="Empowering Your Digital Journey"
      >
        Discover how Salam Solutions can transform your business with cutting-edge software solutions.
      </SectionTitle>

      <Benefits data={benefitOne} />
      <Benefits imgPos="right" data={benefitTwo} />

      <SectionTitle
        preTitle="Our Process"
        title="How We Bring Your Ideas to Life"
      >
        Watch our video to understand how we collaborate with you to turn your vision into reality, 
        from initial concept to final implementation.
      </SectionTitle>

      <Video videoId="fZ0D0cnR88E" />

      <SectionTitle
        preTitle="Client Success Stories"
        title="What Our Clients Say About Us"
      >
        Don&apos;t just take our word for it. Here&apos;s what some of our satisfied clients have to say about 
        their experience working with Salam Solutions.
      </SectionTitle>

      <Testimonials />

      <SectionTitle preTitle="FAQ" title="Frequently Asked Questions">
        Got questions? We&apos;ve got answers. Check out our FAQ section to learn more about our services, 
        process, and how we can help your business succeed.
      </SectionTitle>

      <Faq />
      <Cta />
    </Container>
  );
}