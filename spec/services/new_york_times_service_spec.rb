require 'rails_helper'

describe NewYorkTimesService do

    context "#articles" do
      it "displays recent tax related article headlines" do
        VCR.use_cassette("services/find_nyt_tax_articles", :record => :new_episodes) do
          articles = NewYorkTimesService.find_tax_articles
          article  = articles.first
          expect(article[:headline][:main]).to eq("Toasts to the Deals (and Other Winners) of 2017")
          expect(article[:web_url]).to eq("https://www.nytimes.com/2018/01/01/business/dealbook/biggest-deals-2017.html")
      end
    end
  end
end
