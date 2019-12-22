const fs = require('fs');
const { DateTime } = require("luxon");
const inquirer = require('inquirer');

async function getTitle() {
  const { title } = await inquirer.prompt([
    {
      type: 'input',
      name: 'title',
      message: '포스트 타이틀을 입력해주세요.',
    }
  ])

  return title;
}

function getCategory() {
  return '';
}

function getDate() {
  const location = DateTime.local();

  return {
    summaryDate: location.toFormat('yyyy-MM-dd'),
    detailDate: location.toFormat('yyyy-MM-dd HH:mm:ss')
  };
}

function getContent(title, date, category) {
  return `---\ntitle: ${title}\ndate: ${date}\ncategory: ${category}\ndescription:\ntags:\n---`;
}

async function createNewPost() {
  const cwd = process.cwd();
  const title = await getTitle();
  const category = getCategory();
  const date = getDate();
  const content = getContent(title, date.detailDate, category);

  fs.writeFile(`${cwd}/src/posts/${date.summaryDate}-${category}-${title}.md`, content, (err) => {
    if (err) {
      console.log(err, 'error: 포스트 생성에 실패하였습니다. X_X');

      return;
    }

    console.log('포스트 생성 완료!');
  });
}

module.exports = createNewPost();