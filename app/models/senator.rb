class Senator
  attr_reader :name,
              :party,
              :twitter_account,
              :facebook_account,
              :youtube,
              :id

  def initialize(attributes = {})
    @id       = attributes[:id]
    @name       = attributes[:name]
    @party      = attributes[:party]
    @twitter_account = attributes[:twitter_id]
    @facebook_account = attributes[:facebook_account]
    @youtube = attributes[:youtube_id]
  end
end
