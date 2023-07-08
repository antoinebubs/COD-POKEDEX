import React from 'react'
import { styled } from 'styled-components'

export function PokemonCard({pokemon}) {
  console.log(pokemon)
  return (
      <Container>

    <div id="pokeOutput">
    <div class="bottom-container">

      <table>
        <tr>
          <th>Base</th>
          <th>Stats</th>
        </tr>
        <tr>
          <td>Name:</td>
          <td class="hp">{ pokemon?.name.fr}</td>
        </tr>
        <tr>
          <td>Type:</td>
          <td class="hp">{ pokemon?.category}</td>
        </tr>
        <tr>
          <td>HP:</td>
          <td class="hp">{ pokemon?.stats.hp}</td>
        </tr>
        <tr>
          <td>Attack:</td>
          <td class="attack">{ pokemon?.stats.atk}</td>
        </tr>
        <tr>
          <td>Defense:</td>
          <td class="defense">{ pokemon?.stats.def}</td>
        </tr>
        <tr>
          <td>Sp.Attack:</td>
          <td class="special-attack">{ pokemon?.stats.spe_atk}</td>
        </tr>
        <tr>
          <td>Sp.Defense:</td>
          <td class="special-defense">{ pokemon?.stats.spe_def}</td>
        </tr>
        <tr>
          <td>Speed:</td>
          <td class="speed">{ pokemon?.stats.vit}</td>
        </tr>
      </table>
    </div>
  </div>
      </Container>
  )
}


const Container = styled.div`
label {
  font-size: 1.3rem;
}
input[type="text"] {
  height: 40px;
  padding-left: 10px;
  font-family: "Iceland", cursive;
}
#pokeOutput {
  padding: 20px 50px 30px;
}
#pokeImage {
  display: block;
  margin: 20px 0;
  width: 180px;
  position: relative;
  left: -45px;
}
.base-title {
  font-size: 1.3rem;
  font-weight: 700;
}
.stat {
  font-weight: 700;
}
.poke-name-num {
  display: inline-block;
  float: left;
  margin-left: 5px;
}
.size {
  display: inline-block;
  float: right;
  margin-right: 5px;
}
.name {
  display: block;
  text-transform: capitalize;
  font-size: 1.6rem;
}
.poke-info {
  display: inline-block;
  margin-right: 2px;
}

.container {
  width: 450px;
  margin-top: 30px;
  margin-left: auto;
  margin-right: auto;
  background-color: #fff;
  color: #000;
  border-radius: 15px;
  box-shadow: 10px 10px 0px 0px rgba(0, 0, 0, 0.75);
}

.image-container {
  height: 300px;
  background-color: $pokeGrey;
  white-space: nowrap;
  border: 1px solid $pokeRed;
  color: #fff;
  font-size: 1.2rem;
}
button {
  display: inline;
  margin: 0;
  background-color: #fff;
  color: $pokeRed;
  border: 1px solid $pokeRed;
  position: relative;
  left: 0px;
  outline: none;
  cursor: pointer;
}
button:hover {
  border: 2px solid $pokeRed;
}
button:active {
  background-color: #f4f1f1;
}
.bigBtn {
  height: 40px;
  width: 120px;
  font-weight: 700;
  position: relative;
  top: -2px;
}
.changeBtn {
  height: 40px;
  width: 54px;
  font-size: 1.5rem;
}
table {
  border-collapse: collapse;
  width: 100%;
  font-size: 1.2rem;
}

td,
th {
  border: 1px solid $pokeRed;
  text-align: left;
  padding: 8px;
}

tr:nth-child(even) {
  background-color: $pokeRed;
}
.pokeType {
  padding: 5px;
  color: #fff;
  border-radius: 5px;
  text-transform: capitalize;
  margin-left: 5px;
  font-weight: 700;
}
.normal {
  background-color: #a8a878;
}
.grass {
  background-color: #78c850;
}
.ground {
  background-color: #e0c068;
}
.fighting {
  background-color: #c03028;
}
.rock {
  background-color: #b8a038;
}
.steel {
  background-color: #b8b8d0;
}
.fire {
  background-color: #f08030;
}
.electric {
  background-color: #f8d030;
}
.flying {
  background-color: #a890f0;
}
.psychic {
  background-color: #f85888;
}
.bug {
  background-color: #a8b820;
}
.dragon {
  background-color: #7038f8;
}
.water {
  background-color: #6890f0;
}
.ice {
  background-color: #98d8d8;
}
.poison {
  background-color: #a040a0;
}
.dark {
  background-color: #705848;
}
.ghost {
  background-color: #705898;
}
.fairy {
  background-color: #ffaec9;
}
footer {
  background-color: $pokeRed;
  text-align: center;
  position: fixed;
  left: 0px;
  bottom: 0px;
  height: 50px;
  width: 100%;
  color: #fff;
}

footer a {
  color: #fff;
  text-decoration: none;
}

footer a:hover {
  color: $pokeYellow;
}
`