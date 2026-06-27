import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { services, serviceHref } from "@/data/services";
import { ServiceDetail } from "@/components/sections/ServiceDetail";

export function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }));
}

export function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Metadata {
  const service = services.find((s) => s.slug === params.slug);
  if (!service) return {};
  return {
    title: `${service.name} in Dubai`,
    description: service.overview.slice(0, 155),
    alternates: { canonical: serviceHref(service.slug) },
    openGraph: {
      title: `${service.name} in Dubai`,
      description: service.tagline,
    },
  };
}

export default function ServicePage({ params }: { params: { slug: string } }) {
  const service = services.find((s) => s.slug === params.slug);
  if (!service) notFound();
  return <ServiceDetail service={service} />;
}
