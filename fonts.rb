$fonts = ''
def roboto_font(name, style, weight, condensed = '')
  $fonts += <<~EOS
  @font-face
    font-family Roboto
    font-style #{style}
    font-weight #{weight}
    src url(fonts/roboto/Roboto#{condensed}-#{name}.ttf)

  EOS
end

roboto_font('Thin', 'normal', 100)
roboto_font('ThinItalic', 'italic', 100)
roboto_font('Light', 'normal', 300)
roboto_font('LightItalic', 'italic', 300)
roboto_font('Regular', 'normal', 400)
roboto_font('RegularItalic', 'italic', 400)
roboto_font('Medium', 'normal', 500)
roboto_font('MediumItalic', 'italic', 500)
roboto_font('Bold', 'normal', 700)
roboto_font('BoldItalic', 'italic', 700)
roboto_font('Black', 'normal', 900)
roboto_font('Blacktalic', 'italic', 900)

roboto_font('Light', 'normal', 300, 'Condensed')
roboto_font('LightItalic', 'italic', 300, 'Condensed')
roboto_font('Regular', 'normal', 400, 'Condensed')
roboto_font('Italic', 'italic', 400, 'Condensed')
roboto_font('Bold', 'normal', 700, 'Condensed')
roboto_font('BoldItalic', 'italic', 700, 'Condensed')

File.write('template/styles/fonts.styl', $fonts)

