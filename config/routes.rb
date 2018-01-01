Rails.application.routes.draw do
  get 'home', to: 'pages#home'
  get 'social', to: 'pages#social_media'
  get 'tax-twitter-accounts', to: 'pages#tax_twitter_accounts'

end
