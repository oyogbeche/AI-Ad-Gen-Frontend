// app/create-ad/generating/[taskId]/page.tsx

import ImageGenerationProgress from "@/domains/ads-gen/components/image-generation-progress-with-taskId";

export default function GeneratingPageWithTaskId({
  params,
}: {
  params: { taskId: string };
}) {
  // Pass the taskId from the URL to the progress component
  return <ImageGenerationProgress taskId={params.taskId} />;
}
