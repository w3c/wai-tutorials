###
# Compass
###

# Change Compass configuration
# compass_config do |config|
#   config.output_style = :compact
# end

###
# Page options, layouts, aliases and proxies
###

# Per-page layout changes:
#
# With no layout
# page "/path/to/file.html", :layout => false
#
# With alternative layout
# page "/path/to/file.html", :layout => :otherlayout
#
# A path which all have the same layout
# with_layout :admin do
#   page "/admin/*"
# end

# Proxy pages (http://middlemanapp.com/basics/dynamic-pages/)
# proxy "/this-page-has-no-template.html", "/template-file.html", :locals => {
#  :which_fake_page => "Rendering a fake page with a local variable" }

###
# Helpers
###

# Automatic image dimensions on image_tag helper
# activate :automatic_image_sizes

# Reload the browser automatically whenever files change
activate :livereload

# Methods defined in the helpers block are available in templates
helpers do
  def x_link_to(link_text, url, options = {})
    options[:class] ||= ""
    if url == '/' + current_page.path
      options[:class] << " current"
      '<span class="current-a">' + link_text + '</span>'
    else
      link_to(link_text, url, options)
    end
  end

  def nav_link(link_text, url, options = {})
    options[:class] ||= ""
    if url == '/' + current_page.path
      options[:class] << " current"
      '<span class="current-a"><span class="count"></span><span class="txt"><span class="visuallyhidden">Current: </span>' + link_text + '</span></span>'
    else
      link_to('<span class="count"></span><span class="txt">' + link_text + '</span>', url, options)
    end
  end

  def topic_link(link_text, url, options = {})
    if current_page.data.order == 1
      if url == '/' + current_page.path
        '<span class="current-a"><span class="count"></span><span class="txt"><span class="visuallyhidden">Current: </span>' + link_text + '</span></span>'
      else
        link_to('<span class="count"></span><span class="txt">' + link_text + '</span>', url, options)
      end
    else
      if url == '/' + current_page.parent.path
        '<span class="current-a"><span class="count"></span><span class="txt"><span class="visuallyhidden">Current: </span>' + link_text + '</span></span>'
      else
        link_to('<span class="count"></span><span class="txt">'+link_text+'</span>', url, options)
      end
    end
  end

  def code_start(status = "", title = "")
    if title
    '<figure class="code '+ status +'">
  <figcaption>Code snippet: ' + title + '</figcaption>'
    else
'<figure class="code '+ status +'">
  <figcaption>Code snippet</figcaption>'
    end
  end

  def code_end
    '</figure>'
  end

  def sample_start(status = "")
    '
  <figure class="sample '+ status +'">
  <figcaption>Example</figcaption>
  <div class="box-content">'
  end

  def sample_end
    '
  </div></figure>
'
  end

  def notes_start(status = "")
    '<div class="notes '+ status +'">'
  end

  def notes_end
    '</div>'
  end

end

set :markdown_engine, :kramdown
activate :syntax
activate :autoprefixer, browsers: ['last 2 versions', 'ie 8', 'ie 9']

set :css_dir, 'stylesheets'

set :js_dir, 'javascripts'

set :images_dir, 'img'

set :relative_links, true
activate :relative_assets

activate :directory_indexes

# set :http_prefix, '/WAI/EO/Drafts/tutorials/'

# Build-specific configuration
configure :build do
  # For example, change the Compass output style for deployment
  activate :minify_css

  # Minify Javascript on build
  activate :minify_javascript

  # Enable cache buster
  activate :asset_hash

  # Use relative URLs
  # activate :relative_assets

  # Or use a different image path
  # set :http_prefix, "/Content/images/"
end
