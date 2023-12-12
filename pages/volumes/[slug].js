import { volumes } from "../../lib/data.js";
import VolumeDetail from "@/components/VolumeDetail.js";
import { useRouter } from "next/router";
import Link from "next/link";

export default function Volume() {
  const router = useRouter();
  const { query } = router;
  const volume = volumes.find(({ slug }) => slug === query.slug);
  const volumeIndex = volumes.indexOf(volume);
  console.log(volumeIndex);
  return (
    <>
      <VolumeDetail volume={volume} />
      {volumeIndex !== 0 ? (
        <Link href={`${volumes[volumeIndex - 1].slug}`}>Previous</Link>
      ) : null}
      {volumeIndex !== 2 ? (
        <Link href={`${volumes[volumeIndex + 1].slug}`}>Next</Link>
      ) : null}
    </>
  );
}
