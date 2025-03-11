// src/app/(external)/(adgen)/create-ad/(formGroup)/generating/[taskId]/page.tsx

import ImageGenerationProgress from "@/domains/ads-gen/components/image-generation-progress-with-taskId";

type PageProps = {
  params: Promise<{ taskId: string }>;
};

export default async function GeneratingPage({ params }: PageProps) {
  const resolvedParams = await params;

  return <ImageGenerationProgress taskId={resolvedParams.taskId} />;
}
