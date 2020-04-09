import config from "../../config"

export const createLocalLink = (url: string) => {
  if (`#` === url) {
    return null
  }
  return url ? url.replace(config.wordPressUrl, ``) : url
}


const size = {
  mobileS: '320px',
  mobileM: '375px',
  mobileL: '425px',
  tablet: '768px',
  laptop: '1024px',
  laptopL: '1440px',
  desktop: '2560px'
}

export const device = {
  mobileS: `(min-width: ${size.mobileS})`,
  mobileM: `(min-width: ${size.mobileM})`,
  mobileL: `(min-width: ${size.mobileL})`,
  tablet: `(min-width: ${size.tablet})`,
  laptop: `(min-width: ${size.laptop})`,
  laptopL: `(min-width: ${size.laptopL})`,
  desktop: `(min-width: ${size.desktop})`,
	desktopL: `(min-width: ${size.desktop})`,
	

  upToMobileS: `(max-width: ${size.mobileS})`,
  upToMobileM: `(max-width: ${size.mobileM})`,
  upToMobileL: `(max-width: ${size.mobileL})`,
  upToTablet: `(max-width: ${size.tablet})`,
  upToLaptop: `(max-width: ${size.laptop})`,
  upToLaptopL: `(max-width: ${size.laptopL})`,
  upToDesktop: `(max-width: ${size.desktop})`,
  upToDesktopL: `(max-width: ${size.desktop})`,


  upFromMobileS: `(min-width: ${size.mobileS})`,
  upFromMobileM: `(min-width: ${size.mobileM})`,
  upFromMobileL: `(min-width: ${size.mobileL})`,
  upFromTablet: `(min-width: ${size.tablet})`,
  upFromLaptop: `(min-width: ${size.laptop})`,
  upFromLaptopL: `(min-width: ${size.laptopL})`,
  upFromDesktop: `(min-width: ${size.desktop})`,
	upFromDesktopL: `(min-width: ${size.desktop})`,

};