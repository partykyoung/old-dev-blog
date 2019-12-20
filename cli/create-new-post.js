const fs = require('fs');
const { DateTime } = require("luxon");

function getTitle() {
  return '';
}

function getCategory() {
  return '';
}

function getDate() {
  const location = DateTime.local();

  return {
    summaryDate: location.toFormat('yyyy-MM-dd'),
    detailDate: location.toFormat('yyyy-MM-dd HH:mm:ss ')
  };
}

function createNewPost() {
  const title = getTitle();
  const category = getCategory();
  const date = getDate();

  fs.writeFile(`${date.summaryDate}-${category}-${title}.md`, 'tt', (err) => {
    if (err) {
      console.log('error: 포스트 생성에 실패하였습니다. X_X');

      return;
    }

    console.log('포스트 생성 완료!');
  });
}

module.exports = createNewPost();