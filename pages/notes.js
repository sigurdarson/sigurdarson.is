import styled from 'styled-components';
import { NextSeo } from 'next-seo';
import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import Link from 'next/link';
import { sortByDate } from '../utils';

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
`;

const Note = styled.div`
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
    font-size: 20px;
    color: ${({ theme }) => theme.colors.white};
    font-weight: 400;
    margin-bottom: 12px;
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
`;

const SEO = {
  title: 'Notes - Sigurdarson — Brand & Product Designer (UI/UX)',
  canonical: 'https://sigurdarson.is/notes',

  openGraph: {
    url: 'https://sigurdarson.is/notes',
    title: 'Notes - Sigurdarson — Brand & Product Designer (UI/UX)',
  },
};

export default function NotesPage({ notes }) {
  console.log(notes);
  //const showImage = notes.cover_image === 'no' ? false : true;

  return (
    <>
      <NextSeo {...SEO} />
      <Wrapper>
        <NotesSection>
          {notes.map((note, index) => (
            <Link href={`/notes/${note.slug}`}>
              <a>
                <Note>
                  {note.frontmatter.cover_image === 'no'
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
  const files = fs.readdirSync(path.join('notes'));

  // Get slug and frontmatter from notes
  const notes = files.map((filename) => {
    // Create slug
    const slug = filename.replace('.md', '');

    // Get frontmatter
    const markdownWithMeta = fs.readFileSync(
      path.join('notes', filename),
      'utf-8'
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
