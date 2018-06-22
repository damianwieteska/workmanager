json.extract! user, :id, :email, :first_name, :last_name, :city, :country, :birthdate, :birth_country, :phone, :facebook_url, :linkedin_url
json.skills user.skills.map(&:name).to_sentence
json.positions user.positions do |position|
  json.name "#{position.name} - #{position.level.humanize} #{position.area.humanize}"
end

