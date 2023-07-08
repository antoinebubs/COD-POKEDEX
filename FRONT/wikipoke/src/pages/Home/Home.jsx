import React, {useEffect, useState} from 'react'
import { useAuthContext } from '../../contexts/useAuthContext';
import {useNavigate} from 'react-router-dom';
import styled from 'styled-components';
import { Input, Button } from 'antd';
import { useDebounceValue } from '../../hooks/useDebounceValue';
import axios from 'axios';
import { PokemonCard } from '../../components';

export function Home() {
  const { token, logout } = useAuthContext();
  const navigate = useNavigate();
  const [userInput, setUserInput] = useState('');
  const [debounced] = useDebounceValue(userInput, 500);
  const [pokemon, setPokemon] = useState()
  const [pokemonNotFound, setPokemonNotFound] = useState(false);

  useEffect(() => {
    if (!token) { 
      navigate('/');
    }
  }, [navigate, token])

  useEffect(() => {
    async function refreshPokemonList() {
      await axios.get(`https://api-pokemon-fr.vercel.app/api/v1/pokemon/${debounced}`).then(res => {
        if (res.data.status === 404) {
          setPokemonNotFound(true);
          setPokemon(null);
        }
        else 
        {
          setPokemon(res.data);
          setPokemonNotFound(false);
        }
      }).catch(err => {
        console.error(err)
      });
    }

    refreshPokemonList();
  }, [debounced])

  return (
    <Container>
      <Header>
        <h1>Wikipoke</h1>
        <Button  type="primary" danger onClick={() => {
          logout();
        }}>Logout</Button>
      </Header>
      <Main>
        <InputContainer>
          <StyledInput placeholder="Search..." onChange={e => setUserInput(e.target.value)}/>
        </InputContainer>
        <CardHolder>

          {
            pokemonNotFound ? <h1>Pokemon not found</h1> :
              <PokemonCard pokemon={pokemon}/>
          }
        </CardHolder>
      </Main>
    </Container>
  )
}

const Container = styled.div`
  width: 100%;
  height: 100vh;

  display: flex;
  flex-direction: column;


  background: linear-gradient(149deg, rgba(253, 0, 0, 0.20) 0%, rgba(250, 255, 14, 0.20) 100%), #FFF;
`

const Header = styled.div`
  height: 10vh;

  display: flex;
  justify-content: space-between;
  align-items: center;
  
  background: white;

  padding: 0 2rem;  
`
const Main = styled.div`
width: 100%;
height: 100%;
`

const CardHolder = styled.div`
width: 100%;
height: 100%;

/* overflow-y: scroll; */
`

const StyledInput = styled(Input)`
  width: 50%;
`

const InputContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  padding: 2rem 0;
`