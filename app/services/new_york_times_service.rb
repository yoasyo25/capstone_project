class NewYorkTimesService

  def self.find_tax_articles
    @conn = Faraday.new(url: "https://api.nytimes.com") do |faraday|
      faraday.headers["api-key"] = ENV["NYT_api_key"]
      faraday.adapter Faraday.default_adapter
    end
    response = @conn.get("/svc/search/v2/articlesearch.json?q=Tax%20Cuts%20and%20Jobs%20Act&begin_date=20171001&sort=newest")
    articles = JSON.parse(response.body, symbolize_names: true)[:response][:docs]
  end

end
