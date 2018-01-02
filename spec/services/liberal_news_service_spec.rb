require 'rails_helper'

describe LiberalNewsService do

    context "#articles" do
      it "displays recent tax related article headlines" do
        VCR.use_cassette("services/find_liberal_tax_articles", :record => :new_episodes) do
          articles = LiberalNewsService.find_tax_articles
          article  = articles.first
          expect(article[:title]).to eq("Google’s ‘Dutch Sandwich’ Shielded 16 Billion Euros From Tax")
          expect(article[:source][:name]).to eq('Bloomberg')
      end
    end
  end
end
