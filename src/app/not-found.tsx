import { Section } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";

export default function NotFound() {
  return (
    <Section variant="mist" padY="lg">
      <div className="mx-auto max-w-xl text-center">
        <p className="font-display text-[clamp(4rem,12vw,8rem)] font-semibold leading-none text-brand tnum">
          404
        </p>
        <h1 className="mt-4 text-h2">This page could not be found.</h1>
        <p className="mt-4 text-body text-steel">
          The page you&apos;re looking for doesn&apos;t exist or has moved.
        </p>
        <div className="mt-8 flex justify-center gap-4">
          <Button href="/">Back home</Button>
          <Button href="/services" variant="secondary" magnetic={false}>
            Browse services
          </Button>
        </div>
      </div>
    </Section>
  );
}
