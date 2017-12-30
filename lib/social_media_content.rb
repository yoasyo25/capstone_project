module SocialMediaContent
  def self.twitter_news
    client = Twitter::REST::Client.new do |config|
      config.consumer_key        = ENV["Twitter_CONSUMER_KEY"]
      config.consumer_secret     = ENV["Twitter_CONSUMER_SECRET"]
      config.access_token        = ENV["Twitter_ACCESS_TOKEN"]
      config.access_token_secret = ENV["Twitter_ACCESS_SECRET"]
    end
    client.search("#TaxReform -rt", result_type: 'recent').take(10).collect do |tweet|
      "#{tweet.user.screen_name}: #{tweet.text}"
    end
  end
end
