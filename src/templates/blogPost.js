import React, {useEffect} from 'react';
import { graphql } from 'gatsby';
import styled from 'styled-components';
import Layout from 'layout/layout';
import SEO from 'components/seo';
import Comment from 'components/comment';
import { rhythm } from 'styles/typography';
import Category from 'styles/category';
import DateTime from 'styles/dateTime';
import Markdown from 'styles/markdown';
import '@fontsource/fira-sans-condensed/300.css';
import '@fontsource/inter/900.css';
import {BlogDate} from '../components/postGrid/card';

const BlogPost = ({ data }) => {
  const {
    markdownRemark: {
      frontmatter: { title, desc, thumbnail, date, category },
      html,
    },
  } = data;

  const ogImagePath = thumbnail && thumbnail.childImageSharp.fixed.src;

  useEffect(() => {
    let blogContent = document.querySelector('.blog-post-content');
    blogContent.querySelectorAll('pre.grvsc-container').forEach(item => {
      let html = item.outerHTML;
  
      item.outerHTML = `
          <div class= 'lang-tabbed_container'>
            <div class='lang-tabbed-item'>
              ${item.dataset.language.toUpperCase()}
            </div>
            ${html}
          </div>
        `;
    });
  }, []);

  return (
    <Layout>
      <SEO title={title} description={desc} image={ogImagePath} />
      <main>
        <article>
          <OuterWrapper>
            <InnerWrapper>
              <div>
                <header>
                  <Title>{title}</Title>
                  <Info>
                    {/* <PostCategory>{category}</PostCategory> */}
                    <BlogDate date={date} />
                  </Info>
                  <Desc>{desc}</Desc>
                </header>
                <Divider />
                <Markdown
                  className="blog-post-content"
                  dangerouslySetInnerHTML={{ __html: html }}
                  rhythm={rhythm}
                />
              </div>
            </InnerWrapper>
          </OuterWrapper>
        </article>
        <CommentWrap>
          <Comment />
        </CommentWrap>
      </main>
    </Layout>
  );
};

const OuterWrapper = styled.div`
  margin-top: 100px;

  @media (max-width: ${({ theme }) => theme.device.sm}) {
    margin-top: var(--sizing-lg);
  }
`;

const InnerWrapper = styled.div`
  width: var(--post-width);
  margin: 0 auto;
  padding-bottom: var(--sizing-lg);

  @media (max-width: ${({ theme }) => theme.device.sm}) {
    width: 87.5%;
  }
`;

const CommentWrap = styled.section`
  width: 100%;
  padding: 0 var(--padding-sm);
  margin: 0 auto;
  margin-bottom: var(--sizing-xl);

  @media (max-width: ${({ theme }) => theme.device.sm}) {
    width: auto;
  }
`;

const PostCategory = styled(Category)`
  font-size: 0.875rem;
  font-weight: var(--font-weight-semi-bold);
`;

const Info = styled.div`
  margin-top: 1rem;
  margin-bottom: var(--sizing-md);
`;

const Time = styled(DateTime)`
  display: block;
  margin-top: var(--sizing-base);
`;

const Desc = styled.p`
  margin-top: var(--sizing-lg);
  line-height: 1.5;
  font-size: 1.2rem;
  font-family: 'Fira Sans Condensed', sans-serif;

  @media (max-width: ${({ theme }) => theme.device.sm}) {
    line-height: 1.31579;
    font-size: 1.1875rem;
  }
`;

const Divider = styled.div`
  width: 100%;
  height: 1px;
  background-color: var(--color-gray-3);
  margin-top: var(--sizing-lg);
  margin-bottom: var(--sizing-lg);
`;

const Title = styled.h1`
  font-weight: var(--font-weight-bold);
  line-height: 1.1875;
  font-size: var(--text-xl);
  font-family: 'Inter';

  @media (max-width: ${({ theme }) => theme.device.md}) {
    line-height: 1.21875;
    font-size: 2.5rem;
  }

  @media (max-width: ${({ theme }) => theme.device.sm}) {
    line-height: 1.21875;
    font-size: 2rem;
  }
`;

export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
        desc
        thumbnail {
          childImageSharp {
            fixed {
              src
            }
          }
        }
        date(formatString: "DD MMMM, YYYY", locale:"vi")
        category
      }
    }
  }
`;

export default BlogPost;
