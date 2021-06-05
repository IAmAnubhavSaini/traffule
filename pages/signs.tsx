import allSigns, {SignT} from "../public/data/allSigns";
import allSigns_hi from "../public/data/allSigns_hi";
import styled from 'styled-components';
import {useState} from "react";
import Toggle from 'react-toggle';

const StyledSignsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(15vw, 1fr));
  grid-gap: 2vw;
  text-align: center;

  @media (max-width: 1200px) {
    grid-template-columns: 1fr 1fr 1fr;
  }
  @media (max-width: 800px) {
    grid-template-columns: 1fr 1fr;
  }

  div.sign {
    text-align: center;
    border: thin solid var(--black);
    padding: .2vh .2vw;
    counter-increment: signs;
    position: relative;

    &::before {
      content: counter(signs);
      background-color: black;
      color: white;
      width: 2vw;
      display: inline-block;
      top: -1vh;
      position: relative;
      border: thin solid black;
      border-radius: 0 0 50% 50%;
      padding: 1vh 0;
      z-index: 100;
    }
  }

  img {
    display: block;
    min-height: 200px;
    height: 20vh;
    margin: 3vh 1vw;
    padding: 1vh 1vw;
  }

  p.description {
    text-align: left;
  }
`;

const StyledCaption = styled.div`
  padding: 1vh 0;
  width: 100%;
  font-size: 1rem;
  background-color: var(--black);
  color: var(--white);
  font-weight: bold;
`;

const StyledLanguageControl = styled.div`
  margin: 3vh 0;
`;

function getSignsByLanguage(language: 'EN' | 'HI') {
    switch (language) {
        case "EN":
            return allSigns;
        case "HI":
            return allSigns_hi;
        default:
            return allSigns;
    }
}

export default function Signs() {
    const [useEnglish, setUseEnglish] = useState(true);

    return (
        <>
            {/*<div className="search-bar">*/}
            {/*    <input type="text" placeholder="search..." className="search-input"/>*/}
            {/*</div>*/}
            <StyledLanguageControl className="language-control control">
                Hindi
                <Toggle defaultChecked={useEnglish}
                        onChange={() => setUseEnglish(!useEnglish)}/>
                English
            </StyledLanguageControl>
            <StyledSignsContainer>

                {
                    getSignsByLanguage(useEnglish ? 'EN' : 'HI')
                        .signs
                        .map((sign: SignT, index: number) => {
                            return <div className={"sign"} key={`sign-${index}-${sign.signName}`}>
                                <img
                                    src={`img/${index + 1}.png`}
                                    alt={sign.signDescription}
                                    title={sign.signDescription}/>
                                {sign.signCaption.length > 0 && <StyledCaption>{sign.signCaption}</StyledCaption>}
                                {sign.signDescription.length > 0 &&
                                <p className="description">{sign.signDescription}</p>}
                            </div>;
                        })
                }

            </StyledSignsContainer>
        </>
    );

}