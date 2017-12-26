class PagesController < ApplicationController
  def home
    @conn = Faraday.new(url: "https://api.nytimes.com") do |faraday|
      faraday.headers["api-key"] = ENV["NYT_api_key"]
      faraday.adapter Faraday.default_adapter
    end

    response = @conn.get("/svc/search/v2/articlesearch.json?q=taxbill")

    @articles = JSON.parse(response.body, symbolize_names: true)[:response][:docs]
  end
end
