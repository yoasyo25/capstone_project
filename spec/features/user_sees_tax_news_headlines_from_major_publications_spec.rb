require 'rails_helper'

feature "user visits home page" do
  it "can see tax related news headlines" do

  visit '/home'

  expect(page).to have_content("New York Times Coverage")

  end
end
