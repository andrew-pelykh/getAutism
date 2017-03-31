source 'https://rubygems.org'

git_source(:github) do |repo_name|
  repo_name = "#{repo_name}/#{repo_name}" unless repo_name.include?("/")
  "https://github.com/#{repo_name}.git"
end

gem 'rails', '~> 5.0.2'
gem 'pg', '~> 0.18'
gem 'puma', '~> 3.0'
gem 'bcrypt'
gem 'carrierwave', '~> 1.0'
gem 'kaminari'

group :development do
  gem 'spring'
  gem 'spring-watcher-listen', '~> 2.0.0'
end
