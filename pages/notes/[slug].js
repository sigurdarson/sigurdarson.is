import styled from "styled-components";
import { NextSeo } from "next-seo";
import fs from "fs";
import path from "path";
import matter from "gray-matter";
import marked from "marked";
import Link from "next/link";

const Wrapper = styled.main`
  padding: 0 24px;
`;

const NotesSection = styled.section`
  max-width: 662px;
  margin: 148px auto 0 auto;
  color: #fff;

  h1 {
    font-size: 32px;
    font-weight: 400;
    color: ${({ theme }) => theme.colors.white};
    margin-bottom: 48px;
    line-height: 1.4;
  }

  p {
    font-size: 16px;
    color: ${({ theme }) => theme.colors.paragraph};
    margin-bottom: 12px;
  }

  a {
    font-size: 16px;
    display: block;
    color: ${({ theme }) => theme.colors.white};
    margin-bottom: 48px;
    transition: opacity 0.2s ease;
    -webkit-transition: opacity 0.3s ease;
    -moz-transition: opacity 0.3s ease;

    &:hover {
      opacity: 0.72;
    }
  }
`;

const Content = styled.div`
  width: 100%;

  h2 {
    font-size: 24px;
    font-weight: 400;
    color: ${({ theme }) => theme.colors.white};
    margin-bottom: 24px;
    line-height: 1.4;
    margin-top: 48px;
  }

  h3 {
    font-size: 20px;
    font-weight: 400;
    color: ${({ theme }) => theme.colors.white};
    margin-bottom: 24px;
    margin-top: 48px;
    line-height: 1.4;
  }

  p {
    font-size: 16px;
    color: ${({ theme }) => theme.colors.paragraph};
    margin-bottom: 12px;
    line-height: 1.8;
  }

  a {
    display: inline;
    color: ${({ theme }) => theme.colors.primary};
  }

  ol {
    font-size: 16px;
    color: ${({ theme }) => theme.colors.paragraph};
    margin-bottom: 24px;
    margin-top: 24px;
    padding-left: 48px;
  }

  ul {
    color: ${({ theme }) => theme.colors.paragraph};
    margin-bottom: 24px;
    margin-top: 24px;
    padding-left: 48px;
  }

  li {
    font-size: 16px;
    color: ${({ theme }) => theme.colors.paragraph};
    margin-bottom: 8px;
    line-height: 1.6;
  }

  pre {
    border-radius: 12px;
    padding: 24px;
    margin-bottom: 24px;
    margin-top: 24px;
    font-size: 16px;
    line-height: 1.6;
    color: ${({ theme }) => theme.colors.paragraph};
    border: 1px solid ${({ theme }) => theme.colors.border};
    background: ${({ theme }) => theme.colors.panel};
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

export default function NotePage({
  frontmatter: { title, excerpt, date, cover_image },
  slug,
  content,
}) {
  return (
    <>
      <NextSeo
        {...SEO}
        title={`${title} — Notes - Sigurdarson`}
        description={excerpt}
        canonical={"https://sigurdarson.is/notes/" + `${slug}`}
        openGraph={{
          title: `${title} — Notes - Sigurdarson`,
          url: "https://sigurdarson.is/notes/" + `${slug}`,
          description: `${excerpt}`,
          images: [
            {
              url: "https://sigurdarson.is/notes" + `${cover_image}`,
              alt: `${title}`,
            },
          ],
          site_name: "Notes",
        }}
        twitter={{
          cardType: "summary_large_image",
        }}
      />
      <Wrapper>
        <NotesSection>
          <Link href="/notes">
            <a>&larr; Notes</a>
          </Link>
          <p>{date}</p>
          <h1>{title}</h1>
          <Content
            dangerouslySetInnerHTML={{ __html: marked(content) }}
          ></Content>
        </NotesSection>
      </Wrapper>
    </>
  );
}

export async function getStaticPaths() {
  const files = fs.readdirSync(path.join("notes"));

  const paths = files.map((filename) => ({
    params: {
      slug: filename.replace(".md", ""),
    },
  }));

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params: { slug } }) {
  const markdownWithMeta = fs.readFileSync(
    path.join("notes", slug + ".md"),
    "utf-8"
  );

  const { data: frontmatter, content } = matter(markdownWithMeta);

  return {
    props: {
      frontmatter,
      slug,
      content,
    },
  };
}
