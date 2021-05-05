import allSigns, {SignT} from "../public/data/allSigns";
import styled from "styled-components";

const StyledSigns = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-gap: 5vw;

  @media (max-width: 1200px) {
    grid-template-columns: 1fr 1fr 1fr;
  }
  @media (max-width: 800px) {
    grid-template-columns: 1fr 1fr;
  }

  div.sign {
    text-align: center;
    border: thin solid var(--black);
    padding: .2em;
    counter-increment: signs;
  }

  div.sign::before {
    content: counter(signs);
  }

  img {
    height: 180px;
  }
`;

const StyledCaption = styled.div`
  margin: .2em;
  padding: .2em;
  font-size: 2em;
  background-color: var(--black);
  color: var(--white);
  font-weight: bold;
`;

export default function Signs() {
    return (
        <StyledSigns>
            {
                allSigns.signs.map((sign: SignT, index: number) => {
                    return <div className={"sign"} key={`sign-${index}-${sign.signName}`}>
                        <StyledCaption>{sign.signCaption}</StyledCaption>
                        <img src={`img/${index + 1}.png`} alt={sign.signDescription} title={sign.signDescription}/>
                        <p>{sign.signDescription}</p>
                    </div>;
                })
            }

        </StyledSigns>
    );

}