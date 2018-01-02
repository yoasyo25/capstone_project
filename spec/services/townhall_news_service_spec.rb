require 'rails_helper'

describe TownhallNewsService do

    context "#articles" do
      it "displays recent tax related article headlines" do
        VCR.use_cassette("services/find_townhall_tax_articles", :record => :new_episodes) do
          articles = TownhallNewsService.find_tax_articles
          article  = articles.first
          expect(article[:thread][:title_full]).to eq("Tax Reform Should Have Hit the Sharing Economy - Mytheos Holt")
          expect(article[:thread][:site]).to eq('townhall.com')
      end
    end
  end
end
