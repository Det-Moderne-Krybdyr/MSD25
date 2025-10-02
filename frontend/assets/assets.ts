const audiImage = require("../assets/audi.png")
const hyundaiImage = require("../assets/hyundai.png")
const vwImage = require("../assets/vw.png")
const splash = require("../assets/splash-icon.png")


export const carImages= (name: string) => {
    switch (name) {
        case "audi.png":
            return audiImage
        case "hyundai.png":
            return hyundaiImage
        case "vw.png":
            return vwImage
        default:
            return splash
    }
}