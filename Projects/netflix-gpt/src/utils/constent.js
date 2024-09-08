export const BG_IMG = "https://assets.nflxext.com/ffe/siteui/vlv3/031c42b9-0c81-4db5-b980-0160765188e9/27f1b15d-79ed-43ca-8982-7faa9e4aa388/IN-en-20240819-TRIFECTA-perspective_WEB_3c576fa6-cd23-46b6-ac3f-1ad2bb0f66fb_large.jpg"

export const FORGOT_PASSWORD_IMG_URL = "https://assets.nflxext.com/ffe/siteui/acquisition/login/login-the-crown_2-1500x1000.jpg"

export const IMAGE_CDN_URL = "https://image.tmdb.org/t/p/w780/"

export const IMAGE_NOT_FOUND_URL = "https://m.media-amazon.com/images/I/61s8vyZLSzL._AC_UF894,1000_QL80_.jpg"

export const OPENAI_API_KEY = process.env.REACT_APP_OPENAI_API_KEY

export const GOOGLE_AI_KEY = process.env.REACT_APP_GOOGLE_AI_KEY

export const API_OPTIONS = {
    method: 'GET',
    headers: {
        accept: 'application/json',
        Authorization: `Bearer ${process.env.REACT_APP_TMDB_KEY}`
    }
};

export const prefarredLangauges = [{
    identifier: 'en', name: 'English'
}, {
    identifier: 'hi', name: 'Hindi'
}, {
    identifier: 'es', name: 'Spanish'
}]
