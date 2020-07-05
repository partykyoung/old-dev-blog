const fs = require('fs');
const { DateTime } = require("luxon");
const inquirer = require('inquirer');

/**
 * 파일명을 입력받아 return 해주는 함수
 */
async function getFileName() {
  const { fileName } = await inquirer.prompt([{
    type: 'input',
    name: 'fileName',
    message: '파일명을 입력해주세요.'
  }]);

  return fileName;
}

/**
 * 포스트 제목을 입력받아 return 해주는 함수.
 */
async function getTitle() {
  const { title } = await inquirer.prompt([
    {
      type: 'input',
      name: 'title',
      message: '포스트 타이틀을 입력해주세요.',
    }
  ]);

  return title;
}

/**
 * 포스트 카테고리를 입력받는 함수. 최대 3개까지의 카테고리를 입력할 수 있으므로 최대 3번 재귀호출을 한다.
 * @param {*} categories 입력한 카테고리 값을 담을 배열
 */
async function setCategory(categories) {
  if (categories.length >= 3) {
    console.log('카테고리는 최대 3개까지 입력할 수 있습니다.');

    return;
  };

  await inquirer.prompt([
    {
      type: 'input',
      name: 'category',
      message: '카테고리를 입력해주세요. (n을 입력하면 종료합니다.)',
    }
  ]).then(async ({ category }) => {
    if (!category || category === 'n' || category === 'N') {
      return;
    }

    categories.push(category);

    await setCategory(categories);
  });
}

/**
 * 카테고리를 입력받아 return 해주는 함수.
 */
async function getCategories() {
  const categories = [];

  await setCategory(categories);

  return categories;
}

function getDate() {
  const location = DateTime.local();

  return {
    summaryDate: location.toFormat('yyyy-MM-dd'),
    detailDate: location.toFormat('yyyy-MM-dd HH:mm:ss')
  };
}

/**
 * 
 * @param {*} title 
 * @param {*} date 
 * @param {*} categories 
 */
function getContent(title, date, categories) {
  const customCategories = categories.map((category) => {
    return `- ${category}`
  });

  return `---\ntitle: ${title}\ndate: ${date}\ncategories:\n${customCategories.join('\n')}\ndescription:\ntags:\n---`;
}

async function createNewPost() {
  const cwd = process.cwd();
  const fileName = await getFileName();
  const title = await getTitle();
  const categories = await getCategories();
  const date = getDate();
  const content = getContent(title, date.detailDate, categories);
  
  const lastCategory = categories.length - 1 >= 0 ? categories[categories.length - 1]: 'no-category';
  const customCategory = lastCategory.replace(/\./, '').toLowerCase();

  fs.writeFile(`${cwd}/draft/${date.summaryDate}-${customCategory}-${fileName}.md`, content, (err) => {
    if (err) {
      console.log(err, 'error: 포스트 생성에 실패하였습니다. X_X');

      return;
    }

    console.log('포스트 생성 완료!');
  });
}

module.exports = createNewPost();