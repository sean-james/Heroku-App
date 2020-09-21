class ApplicationController < ActionController::Base
  before_filter :check_redirect_key

  def check_redirect_key
    if request[:access_key] != 'random_string' && cookies[:access_key] != 'random_string'
      redirect_to "/404.html" 
    elsif request[:access_key] == 'random_string'
      cookies.permanent[:access_key] = 'random_string'
    end
  end

end

'use strict';

// Load .env
require('dotenv').config({
  silent: true
});

// Start server
require('./server/server')();
