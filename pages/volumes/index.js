import Link from "next/link";
import { introduction } from "../../lib/data.js";
import { volumes } from "../../lib/data.js";
import { useRouter } from "next/router";

export default function VolumesPage() {
  const router = useRouter();
  function getRandomElement(array) {
    return array[Math.floor(Math.random() * array.length)];
  }
  function handleSubmit() {
    const randomSlug = getRandomElement(volumes);
    router.push(`/volumes/${randomSlug.slug}`);
  }

  return (
    <>
      <h1>Lord of the Rings</h1>
      <p>{introduction}</p>
      <h2>All Volumes</h2>
      <ul>
        {volumes.map((volume) => (
          <li key={volume.slug}>
            <Link href={`/volumes/${volume.slug}`}>{volume.title}</Link>
          </li>
        ))}
      </ul>
      <button onClick={handleSubmit}>Show random volume</button>
    </>
  );
}
