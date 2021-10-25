import React from 'react'
import RepositoryItem from '../repository-item/index.js';
import * as S from './styled.js';

const Repositories = () => {
    return (
        <S.WrapperTabs
            selectedTabClassName="is-selected" 
            selectedTabPanelClassName="is-selected">
                <S.WrapperTabList>
                    <S.WrapperTab>Repositories</S.WrapperTab>
                    <S.WrapperTab>Starred</S.WrapperTab>
                </S.WrapperTabList>
                <S.WrapperTabPanel>
                    <RepositoryItem
                        name="Repo 1"
                        linkToRepo="https://github.com/rafaelspereira1"
                        fullName="teste/teste"
                    />
                </S.WrapperTabPanel>
                <S.WrapperTabPanel>
                <RepositoryItem
                        name="Repo 1"
                        linkToRepo="https://github.com/rafaelspereira1-2"
                        fullName="teste/teste2"
                    />
                </S.WrapperTabPanel>
            
        </S.WrapperTabs>
    )
}

export default Repositories
