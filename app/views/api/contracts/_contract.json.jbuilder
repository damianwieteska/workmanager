json.extract! contract, :id
json.salary formatted_salary(contract.salary_percentage/100.00 * contract.position.salary)
json.start formatted_date(contract.start)
json.end formatted_date(contract.end)
json.position_name contract.position.name
json.position_level contract.position.level.humanize
json.position_area contract.position.area.humanize
json.position_description contract.position.description
