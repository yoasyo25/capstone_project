class PagesController < ApplicationController
  def home
    @NYT_articles = NewYorkTimesArticle.find_tax_articles
    @liberal_news_articles = LiberalNewsArticle.find_tax_articles
    @fox_news_articles = FoxNewsArticle.find_tax_articles
    @townhall_news_articles = TownhallNewsArticle.find_tax_articles
    @wsj_news_articles = WallStreetJournalArticle.find_tax_articles
    @washington_times_articles = WashingtonTimesArticle.find_tax_articles
  end

  #
  # def social_media
  #   @tax_reform_tweets = SocialMediaContent.twitter_news
  # end
  #
  # def tax_twitter_accounts
  # end
end

# http://webhose.io/filterWebContent?token=91ca819e-d775-438e-8de6-db06b63cb2a0&format=json&sort=crawled&q=language%3Aenglish%20is_first%3Atrue%20published%3A%3E1506837600000%20site_type%3Anews%20site%3Afoxnews.com%20thread.country%3AUS%20thread.title%3Atax
