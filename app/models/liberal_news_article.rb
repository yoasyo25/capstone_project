class LiberalNewsArticle
  attr_reader :headline, :url, :article_snippet, :source

  def initialize(attributes = {})
    @headline = attributes[:title]
    @url = attributes[:url]
    @article_snippet = attributes[:description]
    @source = attributes[:source][:name]
  end

  def self.find_tax_articles
    results = LiberalNewsService.find_tax_articles

    results.map do |result|
      new(result)
    end
  end

end
