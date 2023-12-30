import {
  Poppins,
  Big_Shoulders_Text,
  Inter,
  Montserrat,
  Roboto,
  Lato,
  Open_Sans,
} from "next/font/google";

const poppins = Poppins({ subsets: ["latin"], weight: ["400"] });
const bigShoulderText = Big_Shoulders_Text({
  subsets: ["latin"],
  weight: ["700"],
});
const inter = Inter({ subsets: ["latin"], weight: ["500"] });
const montserrat = Montserrat({ subsets: ["latin"], weight: ["500"] });
const roboto = Roboto({ subsets: ["latin"], weight: ["500"] });
const lato = Lato({ subsets: ["latin"], weight: ["700"] });
const openSan = Open_Sans({ subsets: ["latin"], weight: ["700"] });

export { poppins, bigShoulderText, inter, montserrat, roboto, lato, openSan };
