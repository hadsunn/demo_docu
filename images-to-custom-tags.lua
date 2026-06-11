-- images-to-custom-tags.lua

local function get_base_dir()
  local vars = PANDOC_WRITER_OPTIONS.variables or {}
  local dir = vars.extract_media_dir
  if dir and #dir > 0 then
    return dir
  end
  return "docs/assets/images/install"
end

local function is_markdown(writer_formats)
  if writer_formats then
    return writer_formats:find("markdown") or writer_formats:find("mmd")
  end
  return false
end

local function Image(img)
  if not is_markdown(PANDOC_WRITER_OPTIONS.formats) then
    return img
  end

  local base_dir = get_base_dir()

  local src = img.src
  local src_str = tostring(src)

  -- Ищем имя файла в конце пути (что после последнего / или \)
  local filename = src_str:match("[^/\\]+$")
  if not filename then
    return img
  end

  -- Формируем путь для require: '/docs/assets/images/install/image1.png'
  local require_path = "/" .. base_dir .. "/" .. filename

  -- Формируем alt
  local alt_text
  if img.alt and #img.alt > 0 then
    local parts = {}
    for i, el in ipairs(img.alt) do
      table.insert(parts, tostring(el))
    end
    alt_text = table.concat(parts, "")
  else
    alt_text = filename
  end

  local html_tag = "<img src={require('" .. require_path .. "').default} alt='" .. alt_text:gsub("'", "'''") .. "' />"

  return pandoc.Str(html_tag)
end

return {
  { Image = Image }
}