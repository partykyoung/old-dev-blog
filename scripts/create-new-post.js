const fs = require('fs-extra')
const inquirer = require('inquirer')
const matter = require('gray-matter')
const dayjs = require('dayjs')

const cwd = process.cwd()
const Posts_Directory = `${cwd}/posts`

inquirer.registerPrompt('autocomplete', require('inquirer-autocomplete-prompt'))

/** 태그 목록을 만들어 리턴한다. */
function getTags() {
  const nextTags = []

  fs.readdirSync(`${Posts_Directory}`, {
    withFileTypes: true
  }).forEach((dirent) => {
    if (!dirent) return

    const {
      data: { tags }
    } = matter.read(`${Posts_Directory}/${dirent.name}`)

    nextTags.push(...tags)
  })

  return Array.from(new Set(tags))
}

function getFileName({ title }) {
  const today = dayjs().format('yyyy-MM-dd')
  const nextTitle = title.split(' ').join('-').toLowerCase()

  return `${date}-${nextTitle}`
}

function getPost({ title, tags }) {
  const date = dayjs().format('yyyy-MM-dd HH:mm:ss')
  const content = {
    title,
    date,
    category,
    draft: false
  }
}
