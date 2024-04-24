import { FullPageImageView } from "~/common/full-image-page-view";

export default function PhotoPage({
  params: { id: photoId },
}: {
  params: { id: string };
}) {
  return (
    <div>
      <FullPageImageView photoId={photoId} />
    </div>
  );
}
