import elasticsearch from 'elasticsearch'
const host = process.env.ES_URI || 'localhost:9200'
console.log(host)
export default new elasticsearch.Client({
  log: 'trace',
  host
});
