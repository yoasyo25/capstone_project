class LiberalNewsService
  def self.find_tax_articles
    connection = Faraday.get("https://newsapi.org/v2/top-headlines?language=en&country=us&q=tax&from=2017-10-01&to=2018-01-01&apiKey=#{ENV["News_api_key"]}")
    articles = JSON.parse(connection.body, symbolize_names: true)[:articles]
  end
end
