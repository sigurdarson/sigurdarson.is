import styled, { keyframes } from "styled-components";
import { NextSeo } from "next-seo";
import fs from "fs";
import path from "path";
import matter from "gray-matter";
import Link from "next/link";
import { sortByDate } from "../utils";

const appear = keyframes`
  from {
    transform: translateY(24px);
    opacity: 0;
  }

  to {
    transform: translateY(0);
    opacity: 1;
  }
`;

//Styled Components
const Wrapper = styled.main`
  padding: 0 24px;
`;

const NotesSection = styled.section`
  max-width: 662px;
  margin: 148px auto 0 auto;

  p {
    font-size: 16px;
    color: ${({ theme }) => theme.colors.paragraph};
  }

  a {
    transition: color 0.2s ease;
    -webkit-transition: color 0.3s ease;
    -moz-transition: color 0.3s ease;

    &:hover {
      color: ${({ theme }) => theme.colors.white};
    }
  }

  @media (max-width: 992px) {
    margin: 96px auto 0 auto;
  }
`;

const Note = styled.div`
  transform: translateY(24px);
  opacity: 0;
  animation: ${appear} 0.4s ease forwards;
  padding: 24px;
  margin-bottom: 24px;
  border-radius: 12px;
  background: ${({ theme }) => theme.colors.panel};
  border: 1px solid ${({ theme }) => theme.colors.border};
  transition: background 0.2s ease;
  -webkit-transition: background 0.2s ease;
  -moz-transition: background 0.2s ease;

  &:hover {
    background: ${({ theme }) => theme.colors.panelHover};
  }

  img {
    width: 100%;
    height: 248px;
    object-fit: cover;
    margin-bottom: 24px;
    border-radius: 6px;
  }

  h3 {
    font-size: 24px;
    color: ${({ theme }) => theme.colors.white};
    font-weight: 400;
    margin-bottom: 12px;
    line-height: 1.4;
  }

  p {
    font-size: 16px;
    color: ${({ theme }) => theme.colors.paragraph};
    font-weight: 400;
    margin-bottom: 12px;
  }

  span {
    font-size: 16px;
    color: ${({ theme }) => theme.colors.white};
    font-weight: 400;
  }

  @media (max-width: 992px) {
    img {
      height: 196px;
    }
  }
`;

const SEO = {
  title: "Notes - Sigurdarson — Brand & Product Designer (UI/UX)",
  canonical: "https://sigurdarson.is/notes",

  openGraph: {
    url: "https://sigurdarson.is/notes",
    title: "Notes - Sigurdarson — Brand & Product Designer (UI/UX)",
  },
};

export default function NotesPage({ notes }) {
  return (
    <>
      <NextSeo {...SEO} />
      <Wrapper>
        <NotesSection>
          {notes.map((note, index) => (
            <Link href={`/notes/${note.slug}`}>
              <a>
                <Note>
                  {note.frontmatter.cover_image === "no"
                    ? false
                    : true && <img src={note.frontmatter.cover_image} />}
                  <h3>{note.frontmatter.title}</h3>
                  <p>{note.frontmatter.excerpt}</p>
                  <span>{note.frontmatter.date}</span>
                </Note>
              </a>
            </Link>
          ))}
        </NotesSection>
      </Wrapper>
    </>
  );
}

export async function getStaticProps() {
  // Get files from notes directory
  const files = fs.readdirSync(path.join("notes"));

  // Get slug and frontmatter from notes
  const notes = files.map((filename) => {
    // Create slug
    const slug = filename.replace(".md", "");

    // Get frontmatter
    const markdownWithMeta = fs.readFileSync(
      path.join("notes", filename),
      "utf-8"
    );

    const { data: frontmatter } = matter(markdownWithMeta);

    return {
      slug,
      frontmatter,
    };
  });

  return {
    props: {
      notes: notes.sort(sortByDate),
    },
  };
}
