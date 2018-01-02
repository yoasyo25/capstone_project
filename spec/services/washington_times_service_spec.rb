require 'rails_helper'

describe WashingtonTimesService do

    context "#articles" do
      it "displays recent tax related article headlines" do
        VCR.use_cassette("services/find_washington_times_tax_articles", :record => :new_episodes) do
          articles = WashingtonTimesService.find_tax_articles
          article  = articles.first
          expect(article[:thread][:title_full]).to eq("Montgomery County Council OKs property tax prepayment in emergency vote")
          expect(article[:thread][:site]).to eq('washingtontimes.com')
      end
    end
  end
end
