class WashingtonTimesService
  def self.find_tax_articles
    connection = Faraday.get("http://webhose.io/filterWebContent?token=#{ENV["Webhose_token"]}&format=json&ts=1514414209298&sort=crawled&q=tax%20cuts%20language%3Aenglish%20is_first%3Atrue%20published%3A%3E1506837600000%20site_type%3Anews%20thread.country%3AUS%20site%3Awashingtontimes.com%20thread.title%3Atax")
    articles = JSON.parse(connection.body, symbolize_names: true)[:posts]
  end
end
