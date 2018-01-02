class FoxNewsArticle
  attr_reader :headline, :url, :article_snippet, :site

  def initialize(attributes = {})
    @headline = attributes[:title]
    @url = attributes[:url]
    @article_snippet = attributes[:text]
    @site = attributes[:thread][:site]
  end

  def self.find_tax_articles
    results = FoxNewsService.find_tax_articles

    results.map do |result|
      new(result)
    end
  end

end
