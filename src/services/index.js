import _ from 'lodash'

const WIKI_SEARCH_URL = `https://en.wikipedia.org/w/api.php?action=opensearch&origin=*&search=`

// format wikipedia json output in consumable format
// [
//   {title: '', info: '', url: ''}, {}, {},...
// ]
export const getSearchResults = keyword => {
  return new Promise(async (resolve, reject) => {
    const res = await fetch(WIKI_SEARCH_URL + keyword)
    const json = await res.json()

    const data = _.zip(json[1], json[2], json[3]).map(item => {
      return _.zipObject(['title', 'info', 'url'], item)
    })

    resolve(data)
  })
}