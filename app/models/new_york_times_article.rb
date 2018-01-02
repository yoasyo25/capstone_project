class NewYorkTimesArticle
  attr_reader :headline, :url, :article_snippet

  def initialize(attributes = {})
    @headline = attributes[:headline][:main]
    @url = attributes[:web_url]
    @article_snippet = attributes[:snippet]
  end

  def self.find_tax_articles
    results = NewYorkTimesService.find_tax_articles

    results.map do |result|
      new(result)
    end
  end

end
