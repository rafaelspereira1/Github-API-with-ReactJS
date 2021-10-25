import React from "react";
import * as S from "./styled";

const Header = () => {
  return (
    <header>
      <S.Wrapper>
        <input type="text"></input>
        <button type="submit">Search</button>
      </S.Wrapper>
    </header>
  );
};

export default Header;
