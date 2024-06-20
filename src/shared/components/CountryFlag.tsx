import { CountriesFlagConfigs } from "@/core/constants/countries-flag";
import { capitalizeEachWord } from "../utils/common.utils";
import Image from "next/image";

interface Props {
  country: string;
  width: number;
  height: number;
}
export default function CountryFlag({ country, width, height }: Props) {
    const flag = CountriesFlagConfigs.find(_ => _?.country === capitalizeEachWord(country))?.flag;
    return <Image src={flag ?? ""} width={width} height={height} alt={country} />
}
