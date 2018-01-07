class PagesController < ApplicationController
  # def home
  #   @NYT_articles = NewYorkTimesArticle.find_tax_articles
  #   @liberal_news_articles = LiberalNewsArticle.find_tax_articles
  #   @fox_news_articles = FoxNewsArticle.find_tax_articles
  #   @townhall_news_articles = TownhallNewsArticle.find_tax_articles
  #   @wsj_news_articles = WallStreetJournalArticle.find_tax_articles
  #   @washington_times_articles = WashingtonTimesArticle.find_tax_articles
  # end
  #
  # def social_media
  #   @tax_reform_tweets = SocialMediaContent.twitter_news
  # end
  #
  # def tax_twitter_accounts
  # end

  def tax_calculator
  end

  def congressional_voting
  end

  def show
    state = params[:state].upcase
    @conn = Faraday.new(url: "https://api.propublica.org") do |faraday|
      faraday.headers["X-API-Key"] = "yPZmj3qtMYKgno5fFMrOqovonFWXjAVbwWLZ2kzg"
      faraday.adapter Faraday.default_adapter
    end

    senators_list = @conn.get("/congress/v1/members/senate/#{state}/current.json")

    results = JSON.parse(senators_list.body, symbolize_names: true)[:results]

    @senators  = results.map do |result|
        Senator.new(result)
     end

  end
end
