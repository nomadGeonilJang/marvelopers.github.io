import * as React from "react"
import { graphql } from 'gatsby'
import { GlobalStyle } from "../styles/GlobalStyle"
import styled from "styled-components";
import Footer from "../components/footer/Footer"
import Header from "../components/header/Header"
import PostTag from "./PostTag";
import PostToc from "./PostToc.tsx";


export const BlogPostTemplate = ({ data, pageContext }) => {
  const { site, markdownRemark, series } = data
  const { previous, next } = pageContext
  return (
    <>
      <GlobalStyle />
      <Header />
      <div itemScope itemType="http://schema.org/BlogPosting">
        <StyledBlogLayout>
          <article className="content">
            <div className="title">{markdownRemark.frontmatter.title}</div>
            <div className="publishedDate">{markdownRemark.fields.dateStr}</div>
            {/* 아티클 */}
            <StyledPostContent
              id="post-content"
              itemProp="articleBody"
              dangerouslySetInnerHTML={{ __html: markdownRemark.html }}
            />
            <div>
              {(markdownRemark.frontmatter.tags || []).length > 0 && (
                <PostTag tags={markdownRemark.frontmatter.tags} />
              )}
              {/* <PostShare
              markdownRemark={markdownRemark}
              siteMetadata={data.site.siteMetadata}
            /> */}
            </div>
          </article>
          <div className="aside">
            {markdownRemark.tableOfContents && (
              <PostToc tableOfContents={markdownRemark.tableOfContents} />)}

            {/* {series && (
              <SeriesNav
                lite
                series={series}
                nodeId={markdownRemark.id}
                posts={data.allMarkdownRemark.nodes}
              /> */}
          </div>
        </StyledBlogLayout>
      </div>
      <Footer />
    </>
  )
};

export default BlogPostTemplate

const StyledBlogLayout = styled.main`
  margin: 0px auto;
  max-width: calc(1020px - (20px * 2));
  display: flex;
  justify-content: space-between;
  padding-top: 80px;
  .title{
    font-size: 34px;
    font-weight: 900;
  }
  .publishedDate{
    /* margin-top: 8px; */
    font-size: 14px;
    color: #494949;
  }
  .content{
    font-size: 16px;
    line-height: 1.8;
    width : 720px;
  }
  .aside{
    margin-left : 20px;
    margin-top : 110px;
  }
  .goToMain{
    margin-top: 40px;
    width: 100%;
    height: 48px;
    font-size: 14px;
    font-weight: 600;
    background: #F3F3F3;
    border-radius: 8px;
    color: #4A154B;
  }
`;

const StyledPostContent = styled.div`
  margin-top: 20px;
  padding-bottom : 40px;
  font-size: 16px;
  width : 720px;
  border-bottom: 2px solid #F3F3F3;
  h1 {
    font-size: 32px;
    line-height: 1.8;
    font-weight: 700;
  }
  h2 {
    font-size: 24px;
    margin-top: 18px;
    font-weight: 700;
  }
  h3 {
    font-size: 18px;
    font-weight: 700;
    margin-block-start: 1em;
    margin-block-end: 1em;
  }
  h4 {
    font-size: 18px;
    font-weight: 700;
    margin-top: 14px;
  }
  h5 {
    font-size: 120%;
    margin-top: 12px;
  }
  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    line-height: 1.8;
  }
  img {
    border-radius: 3px;
    display: block;
    max-width: 100%;
  }
  p {
    margin-block-start: 1em;
    margin-block-end: 1em;
  }
  blockquote {
    position: relative;
    &::before {
      content: "“";
      position: absolute;
      font-size: 40px;
    }
  }
  .gatsby-highlight {
    pre {
      overflow: auto;
      word-wrap: normal;
      white-space: pre;
    }
  }
`;

export const pageQuery = graphql`
  query BlogPostBySlug($slug: String!) {
    site {
      siteMetadata {
        title
        siteUrl
      }
    }
    markdownRemark(fields: { slug: { eq: $slug } }) {
      id
      excerpt(pruneLength: 160)
      html
      fields {
        dateStr: date(formatString: "YYYY.MM.DD")
        date
        slug
      }
      frontmatter {
        title
        tags
      }
      tableOfContents(absolute: false, maxDepth: 6, heading: null)
    }
  }
`;