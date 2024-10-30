// colors for the app based on theme

export const colors = {
  primary: "#FF6F61",
  secondary: "#6B5B95",
  white: "#fff",
  black: "#000",
  grey: "#ccc",
  lightGrey: "#f2f2f2",
  darkGrey: "#333",
  error: "#ff0033",
  success: "#00cc00",
  warning: "#ffcc00",
  info: "#0099ff",
  transparent: "transparent",
};

export const lightTheme = {
  background: colors.white,
  text: colors.black,
  link: colors.primary,
  button: {
    background: colors.primary,
    color: colors.white,
  },
};

export const darkTheme = {
  background: colors.black,
  text: colors.white,
  link: colors.primary,
  button: {
    background: colors.primary,
    color: colors.white,
  },
};

export type ColorType = keyof typeof colors;
