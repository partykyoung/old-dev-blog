const path = require(`path`);
const fs = require('fs');

const { createFilePath } = require('gatsby-source-filesystem');

// 페이징에 필요한 폴더 및 json 파일을 만든다. 
function createJSON(pageData) {
  const pathSuffix = pageData.path;
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

  return graphql(`
    {
      allMarkdownRemark(
        sort: { order: DESC, fields: [frontmatter___date] }
        limit: 1000
      ) {
        edges {
          node {
            id
            excerpt
            fields {
              slug
            }
            frontmatter {
              tags,
              title,
              date(formatString: "YYYY년 MM월 DD일")
            }
          }
        }
      }
    }
  `).then(result => {
    if (result.errors) {
      return Promise.reject(result.errors)
    }
    
    const { edges } = result.data.allMarkdownRemark;
    const posts = [];

    edges.forEach(({ node }) => {
      posts.push({
        id:  node.id,
        slug: node.fields.slug,
        excerpt: node.excerpt,
        title: node.frontmatter.title,
        date: node.frontmatter.date
      });
      
      createPage({
        path: node.fields.slug,
        component: blogPostTemplate,
        context: {
          slug: node.fields.slug
        }, // additional data can be passed via context
      });

    });

    const postsPerPage = 10;
    const numPages = Math.ceil(edges.length / postsPerPage);

    Array.from({ length: numPages }).forEach((_, i) => {
      const skip = i * postsPerPage;
      const pagePosts = posts.filter((_, j) => {
        return j >= skip && j < skip + 10;
      });

      createJSON({
        path: `${i + 1}`,
        context: {
          limit: postsPerPage,
          skip,
          numPages,
          currentPage: i + 1,
          posts: pagePosts
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