// function newYorkTimesApi() {
//   var url = "https://api.nytimes.com/svc/search/v2/articlesearch.json";
//   url += '?' + $.param({
//     'api-key': "c1420f2db69c444bbc9fe4bba7c8e891",
//     'q': "tax bill",
//     'begin_date': "20171001",
//     'sort': "newest"
//   });
//
//   $.ajax({
//     url: url,
//     method: 'GET',
//   }).done(function(result) {
//     $('.nyt-headlines').append(`<p>${result[0]}</p>`)
//     console.log(result);
//   }).fail(function(err) {
//     throw err;
//   });
// }
