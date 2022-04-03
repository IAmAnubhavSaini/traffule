import allSigns, {SignT} from "../public/data/allSigns";
import allSigns_hi from "../public/data/allSigns_hi";
import styled from 'styled-components';
import {useState} from "react";
import Toggle from 'react-toggle';

const StyledSignsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  grid-gap: 50px 100px;
  text-align: center;
  min-height: 100vh;
  margin: 100px;
  
  div.sign {
    min-height: 400px;
  }
  
  img {
    height: 200px;
  }

`;

const StyledCaption = styled.div`
  margin-top: 10px;
  padding: 20px 0;
  width: 100%;
  font-size: 20px;
  background-color: var(--black);
  color: var(--white);
  text-shadow: 1px 1px 1px #000;
  font-weight: bold;
  border-radius: 8px;
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