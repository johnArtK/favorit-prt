export const colors = {
  primary: '#035aa4',
  primaryDark: '#002954',
  ink: '#0f2438',
  ink2: '#202f45',
  ink3: '#343f5c',
  muted: '#9097a2',
  line: '#cddeed',
  surface: '#eff1fa',
  danger: '#e66e60',
}

export const antdTheme = {
  token: {
    colorPrimary: colors.primary,
    colorLink: colors.primary,
    colorError: colors.danger,
    colorText: colors.ink2,
    colorTextSecondary: colors.muted,
    colorBorder: colors.line,
    colorBorderSecondary: colors.line,
    fontFamily: "'Roboto', system-ui, -apple-system, 'Segoe UI', sans-serif",
    borderRadius: 2,
    borderRadiusLG: 4,
  },
  components: {
    Input: { controlHeightLG: 56, fontSizeLG: 16 },
    Button: { controlHeightLG: 56, primaryShadow: 'none', fontWeight: 500 },
    Table: { headerBg: colors.surface, headerColor: colors.muted, headerSplitColor: 'transparent' },
  },
}
