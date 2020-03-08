export interface IThemeProps {
  // 메인 색상
  primary: string;
  primary2: string;

  // 색상
  white: string;
  black: string;
  gray: string;
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
  // 메인 색상
  primary: "#44b3f8",
  primary2: "adc2cb",
  border: "#f8f8f9",

  // 색상
  white: "#FFFFFF",
  black: "#1e1d29",
  gray: "#9b99a9",

  // 레이아웃
  headerHeight: "50px",
  footerHeight: "50px",

  // 미디어쿼리
  mobileS: '(max-width: 320px)',
  mobile: '(min-width: 376px)',
  tablet: '(min-width: 768px)',
  desktop: '(min-width: 992px)',
  desktopL: '(min-width: 1200px)'
}

export default theme;