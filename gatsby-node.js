const path = require(`path`);
const fs = require('fs');

const { createFilePath } = require('gatsby-source-filesystem');

// 페이징에 필요한 폴더 및 json 파일을 만든다. 
function createJSON(pageData) {
  const pathSuffix = pageData.path.substring(1);
  const dir = 'public/page/';
  const filePath = `${dir}page${pathSuffix}.json`;

  if (!fs.existsSync(dir)){
    fs.mkdirSync(dir);
  }

  const dataToSave = JSON.stringify(pageData.context);

  fs.writeFile(filePath, dataToSave, function(err) {
    if(err) {
      return console.log(err);
    }
  }); 
}

exports.createPages = ({ actions, graphql }) => {
  const { createPage } = actions

  const blogPostTemplate = path.resolve('src/templates/blogTemplate.tsx');
  const blogListTemplate = path.resolve('src/templates/blogListTemplate.tsx');

  return graphql(`
    {
      allMarkdownRemark(
        sort: { order: DESC, fields: [frontmatter___date] }
        limit: 1000
      ) {
        edges {
          node {
            excerpt
            fields {
              slug
            }
            frontmatter {
              tags,
              title,
              date
            }
          }
        }
      }
    }
  `).then(result => {
    if (result.errors) {
      return Promise.reject(result.errors)
    }
    
    const test = [];

    const { edges } = result.data.allMarkdownRemark

    edges.forEach(({ node }) => {
      createPage({
        path: node.fields.slug,
        component: blogPostTemplate,
        context: {
          slug: node.fields.slug
        }, // additional data can be passed via context
      });

      test.push({
        slug: node.fields.slug,
        excerpt: node.excerpt,
        title: node.frontmatter.title,
        date: node.frontmatter.date
      });
    });

    const postsPerPage = 10;
    const numPages = Math.ceil(edges.length / postsPerPage);

    Array.from({ length: numPages }).forEach((_, i) => {
      createPage({
        path: i === 0 ? '/' : `/${i + 1}`,
        component: blogListTemplate,
        context: {
          limit: postsPerPage,
          skip: i * postsPerPage,
          numPages,
          currentPage: i + 1
        }
      });

      createJSON({
        path: i === 0 ? '/' : `/${i + 1}`,
        component: blogListTemplate,
        context: {
          limit: postsPerPage,
          skip: i * postsPerPage,
          numPages,
          currentPage: i + 1,
          test: test
        }
      });
    });
  })
}

exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions

  if (node.internal.type === `MarkdownRemark`) {
    const value = createFilePath({ node, getNode });

    createNodeField({
      name: `slug`,
      node,
      value,
    });
  }
}