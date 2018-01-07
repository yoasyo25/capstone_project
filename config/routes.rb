Rails.application.routes.draw do
  mount ActionCable.server => '/cable'
  devise_for :users
  root 'pages#home'
  resources :chat_rooms, only: [:new, :create, :show, :index]
  get 'home', to: 'pages#home'
  get 'social', to: 'pages#social_media'
  get 'tax-twitter-accounts', to: 'pages#tax_twitter_accounts'
  get 'tax-calculator', to: 'pages#tax_calculator'
  get 'map', to: 'pages#congressional_voting'
  get '/senate/:state', to: 'pages#show'
end
