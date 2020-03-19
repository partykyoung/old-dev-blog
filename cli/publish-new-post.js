const fs = require('fs');
const inquirer = require('inquirer');

async function getPost() {
  const { post } = await inquirer.prompt([
    {
      type: 'input',
      name: 'post',
      message: '발행할 포스트를 입력해주세요.',
    }
  ]);

  return post;
}

async function publishNewPost() {
  const cwd = process.cwd();
  const post = await getPost();

  const draftPost = `${cwd}/draft/${post}.md`;
  const publishPost = `${cwd}/src/posts/${post}.md`;

  fs.rename(draftPost, publishPost, (error) => {
    if (error) {
      console.log('발행 실패. 파일명에 오타가 있는지 확인해주세요 X_X.');

      return;
    }

    console.log('발행 완료!');
  });
}

module.exports = publishNewPost();