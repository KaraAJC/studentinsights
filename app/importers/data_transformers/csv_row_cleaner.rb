class CsvRowCleaner < Struct.new :row

  def dirty_data?
    !clean_date? || !clean_booleans?
  end

  def transform_row
    row[date_header] = DateTime.parse(row[date_header]) if has_dates?
    row
  end

  def clean_date?
    return true if date_header.blank?
    return false if row[date_header].blank?
    (row[date_header].is_a?(DateTime) || Date.parse(row[date_header]))
  rescue ArgumentError
    false
  end

  def clean_booleans?
    return true if boolean_headers.blank?
    boolean_headers.all? do |header|
      row[header].in? [true, false, '1', '0', 1, 0, 'true', 'false']
    end
  end

  private

  def headers
    row.headers
  end

  def date_headers
    [:event_date, :date_taken, :assessment_date]
  end

  def date_header
    headers.detect { |header| header.in? date_headers }
  end

  def has_dates?
    headers.any? { |header| header.in? date_headers }
  end

  def boolean_header_names
    [:absence, :tardy, :has_exact_time]
  end

  def boolean_headers
    headers.select { |header| header.in? boolean_header_names }
  end

end
