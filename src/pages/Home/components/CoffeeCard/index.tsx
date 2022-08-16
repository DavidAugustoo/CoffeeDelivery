import { QuantityInput } from "../../../../components/QuantityInput";
import { RegularText, TitleText } from "../../../../components/Typograph";
import {
  CoffeeCardContainer,
  Tags,
  Name,
  Description,
  CardFooter,
  AddCartWrapper,
} from "./styles";
import { ShoppingCart } from "phosphor-react";

export function CoffeeCard() {

  return (
    <CoffeeCardContainer>
      <img src="https://s3-alpha-sig.figma.com/img/55b1/f9ee/64600f98b2bae456b96fdc624c4b4f47?Expires=1661731200&Signature=RVBGb52TcoTCxpF8H0jN8n2Akbq4wL6V70JeXd7rEEpZ2DD9QHLClUqykdvSZTG2jlW1iZUQFs8JsetrLh1vCsfqZZQTQcDvipXc3CKoA33cX9~vz0QFt~R0lvTgrk-oQaNCpc~IvayMDq-uJwi8Zp9qZCKYVC5J2rL0YkFCFc1k5vA1zg2rgc7c2xp3gvhQxwgpMCeuCX47-u87uVHYZmyiRrKzFUfY2M2Rryh7gPqVe50bjfc6MApE6xq7laHVbhwlEsROiUfP8PM0roXLAz-pUubMjkawLSqwzv6xp-vE~Wl3AyqVOTJST6E-fQtNc-bIIKY-zEYeNttT3ICz8w__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA"/>
      <Tags>
        <span>Chocolate</span>
      </Tags>

      <Name>Coco</Name>
      <Description>Coco</Description>

      <CardFooter>
        <div>
          <RegularText size="s">R$</RegularText>
          <TitleText size="m" color="text" as="strong">
            9.99
          </TitleText>
        </div>

        <AddCartWrapper>
          <QuantityInput />
          <button>
            <ShoppingCart weight="fill" size={22} />
          </button>
        </AddCartWrapper>
      </CardFooter>
    </CoffeeCardContainer>
  );
}