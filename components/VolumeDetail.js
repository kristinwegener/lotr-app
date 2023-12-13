import Link from "next/link";
import Image from "next/image";
import styled from "styled-components";
import { Lora } from "next/font/google";

export default function VolumeDetail({ volume }) {
  return (
    <>
      <Link href="../../volumes">Back to Volumes</Link>
      <h1>{volume.title}</h1>
      <p>{volume.description}</p>
      <StyledHighlightBox $color={volume.color}>
        <ul>
          {volume.books.map((book) => (
            <li key={book.ordinal}>
              {book.ordinal}: {book.title}
            </li>
          ))}
        </ul>
        <Image
          src={volume.cover}
          height={230}
          width={140}
          alt="Cover image of the volume"
        />
      </StyledHighlightBox>
    </>
  );
}

const StyledHighlightBox = styled.div`
  background-color: ${({ $color }) => $color};
  display: flex;
  padding: 20px;
  justify-content: space-between;
  align-items: center;
`;
