export interface IThemeProps {
    // 색상
  white: string;
  black: string;
  gray: string;
  primary: string;
  link: string;
  subPrimary: string;
  border: string;

  // 레이아웃
  headerHeight: string;
  footerHeight: string;

  // 미디어쿼리
  mobileS: string; 
  mobile: string;
  tablet: string;
  desktop: string;
  desktopL: string;
}

const theme: IThemeProps = {
  // 색상
  white: "#FFFFFF",
  black: "#212121",
  gray: "#9b99a9",
  link: "#009dff",
  primary: "#009dff",
  subPrimary: "#b5cbd3",
  border: "#eae9f1",

  // 레이아웃
  headerHeight: "3.5rem",
  footerHeight: "3.5rem",

  // 미디어쿼리
  mobileS: '(max-width: 320px)',
  mobile: '(min-width: 376px)',
  tablet: '(min-width: 768px)',
  desktop: '(min-width: 992px)',
  desktopL: '(min-width: 1200px)'
}

export default theme;