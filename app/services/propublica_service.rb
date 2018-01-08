class PropublicaService

  def initialize(state)
    @state = state
    @conn = Faraday.new(url: "https://api.propublica.org") do |faraday|
      faraday.headers["X-API-Key"] = "yPZmj3qtMYKgno5fFMrOqovonFWXjAVbwWLZ2kzg"
      faraday.adapter Faraday.default_adapter
    end
  end


  def find_senators(state)
    senators_list = @conn.get("/congress/v1/members/senate/#{@state}/current.json")
    results = JSON.parse(senators_list.body, symbolize_names: true)[:results]
  end

  def self.find_senators(state)
    new(state).find_senators(state)
  end
end
