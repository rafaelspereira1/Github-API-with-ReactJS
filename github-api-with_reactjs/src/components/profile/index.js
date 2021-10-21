import React from "react";
import * as S from "./styled";

const Profile = () => {
    return (
    <S.Wrapper>
            <div>
    <img src="https://avatars.githubusercontent.com/u/90010200?v=4" alt="Avatar of User"></img>
    <h1>Rafael Pereira</h1>
    <h3>Username:</h3>
    <span>rafaelspereira1</span>
    <div>
        <div>
            <h4>Followers</h4>
            <span>5</span>
        </div>
        <div>
            <h4>Starred</h4>
            <span>5</span>
        </div>
        <div>
            <h4>Following</h4>
            <span>5</span>
        </div>
    </div>
    </div>
    </S.Wrapper>
    );
    };


export default Profile;