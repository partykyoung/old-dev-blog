const path = require(`path`);
const { createFilePath } = require('gatsby-source-filesystem');


function createJSON(pageData) {
  const pathSuffix = pageData.path.substring(1)
  const dir = "public/paginationJson/"
  if (!fs.existsSync(dir)){
    fs.mkdirSync(dir);
  }
  const filePath = dir+"index"+pathSuffix+".json";
  const dataToSave = JSON.stringify(pageData.context.pageImages);
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
            fields {
              slug
            }
            frontmatter {
              tags
            }
          }
        }
      }
    }
  `).then(result => {
    if (result.errors) {
      return Promise.reject(result.errors)
    }

    const { edges } = result.data.allMarkdownRemark

    edges.forEach(({ node }) => {
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
      createPage({
        path: i === 0 ? '/' : `/${i + 1}`,
        component: blogListTemplate,
        context: {
          limit: postsPerPage,
          skip: i * postsPerPage,
          numPages,
          currentPage: i + 1
        }
      })

      createJSON({
        path: i === 0 ? '/' : `/${i + 1}`,
        component: blogListTemplate,
        context: {
          limit: postsPerPage,
          skip: i * postsPerPage,
          numPages,
          currentPage: i + 1
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
