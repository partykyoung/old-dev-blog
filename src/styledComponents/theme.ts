export interface IThemeProps {
  // 색상
  whiteColor: string,
  blackColor: string,
  redColor: string,
  orangeColor: string,
  yellowColor: string,
  greenColor: string
  blueColor: string,
  grayColor: string,
  blackgreyColor: string,

  borderColor: string,
  primaryColor: string,
  textColor: string, 

 // 폰트 크기
 font16: string,
 font14: string,
 font13: string,
 font12: string,

  // 레이아웃
  headerHeight: string,
  footerHeight: string,

  // media query
  xSmall: string,
  small: string,
  medium: string,
  large: string,
  xLarge: string,

  breakPoints: {
   mobileS: string, 
   mobile: string,
   tablet: string,
   desktop: string,
   desktopL: string
  }
}

const xSmall: string = "320px";
const small: string = "376px";
const medium: string = "768px";
const large: string = "992px";
const xLarge: string = "1200px";

const theme: IThemeProps = {
 // 색상
 whiteColor: "#FFFFFF",
 blackColor: "#212121",
 redColor: "#dc3545",
 orangeColor: "#f68b1f",
 yellowColor: "#ffdd45",
 greenColor: "#64bb46",
 blueColor: "#3399ff",
 grayColor: "#979797",
 blackgreyColor: "#656565",

 borderColor: "#d1d2d3",
 primaryColor: "#3399ff",
 textColor: "#212529",

 // 폰트 크기
 font16: "1rem",
 font14: "0.875rem",
 font13: "0.8125rem",
 font12: "0.75rem",

 // 레이아웃
 headerHeight: "50px",
 footerHeight: "50px",

 // media query
 xSmall,
 small,
 medium,
 large,
 xLarge,

 breakPoints: {
   mobileS: `(max-width: ${xSmall})`,
   mobile: `(min-width: ${small})`,
   tablet: `(min-width: ${medium})`,
   desktop: `(min-width: ${large})`,
   desktopL: `(min-width: ${xLarge})`
 }
}

export default theme;