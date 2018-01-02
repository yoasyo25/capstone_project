require 'rails_helper'

describe WallStreetJournalService do

    context "#articles" do
      it "displays recent tax related article headlines" do
        VCR.use_cassette("services/find_wsj_tax_articles", :record => :new_episodes) do
          articles = WallStreetJournalService.find_tax_articles
          article  = articles.first
          expect(article[:thread][:title_full]).to eq("Charities See Surge of Giving Ahead of Change in Tax Law - WSJ")
          expect(article[:thread][:site]).to eq('wsj.com')
      end
    end
  end
end
