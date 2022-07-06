const React = require('react')

const Def = require('./default')

const error404 = () => {
    return (
      <Def>
          <main>
              <h1>404: PAGE NOT FOUND</h1>
              <p>Oops, sorry, we can't find this page!</p>
          </main>
          <img src="https://placekitten.com/200/300" alt="kitty"/>
          
      </Def>
    )
  }
  

module.exports = error404

