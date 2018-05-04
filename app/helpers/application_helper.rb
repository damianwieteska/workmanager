module ApplicationHelper
  def formatted_date(date)
    date.strftime("%A, %d %B %Y") if date
  end

  def formatted_birthdate(date)
    date.strftime("%d %B %Y") if date
  end

  def formatted_salary(salary)
    "$#{salary.round}"
  end

  def formatted_worker(user, redirect_path)
    text = link_to user.full_name, redirect_path
    user.positions.each_with_index do |position, index|
      text += ' (' if index == 0
      text += "#{position.name} - #{position.level.humanize} #{position.area.humanize}"
      if index == user.positions.count - 1
        text += ')'
      else
        text += ', '
      end
    end
    text
  end
end
