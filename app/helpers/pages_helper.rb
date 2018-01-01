module PagesHelper
  def twitter_parser(twitter_obj)
    regex = %r{
      \b
      (
        (?: [a-z][\w-]+:
         (?: /{1,3} | [a-z0-9%] ) |
          www\d{0,3}[.] |
          [a-z0-9.\-]+[.][a-z]{2,4}/
        )
        (?:
         [^\s()<>]+ | \(([^\s()<>]+|(\([^\s()<>]+\)))*\)
        )+
        (?:
          \(([^\s()<>]+|(\([^\s()<>]+\)))*\) |
          [^\s`!()\[\]{};:'".,<>?«»“”‘’]
        )
      )
    }ix
    format_twitter_object = twitter_obj.split(" ")[2..-1].join(", ")

    format_twitter_object.gsub(regex) do |url|
      "<a href='#{url}' target='_blank'>#{url}</a>"
    end.html_safe
  end

  def user_name_parser(twitter_obj)
    format_twitter_object = twitter_obj.split(" ")[1]
  end

  def image_parser(twitter_obj)
    format_twitter_object = twitter_obj.split(" ")[0]
  end
end
