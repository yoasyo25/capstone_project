require 'rails_helper'

describe FoxNewsService do

    context "#articles" do
      it "displays recent tax related article headlines" do
        VCR.use_cassette("services/find_fox_tax_articles", :record => :new_episodes) do
          articles = FoxNewsService.find_tax_articles
          article  = articles.first
          expect(article[:thread][:title_full]).to eq("Kirk: If Obama Introduced Tax Law, Dems Would've Supported It | Fox News Insider")
          expect(article[:thread][:site]).to eq('foxnews.com')
      end
    end
  end
end
