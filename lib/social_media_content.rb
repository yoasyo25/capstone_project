module SocialMediaContent
  def self.twitter_news
    client = Twitter::REST::Client.new do |config|
      config.consumer_key        = ENV["Twitter_CONSUMER_KEY"]
      config.consumer_secret     = ENV["Twitter_CONSUMER_SECRET"]
      config.access_token        = ENV["Twitter_ACCESS_TOKEN"]
      config.access_token_secret = ENV["Twitter_ACCESS_SECRET"]
    end
    client.search("#taxreform -rt", result_type: "recent", exclude_replies: true).take(40).collect do |tweet|
      "#{tweet.user.profile_image_url} #{tweet.user.screen_name} #{tweet.text}"
    end
  end
end
