const React = require('react')
const Def = require('../default')

function error404 () {
    return (
      <Def>
          <main>
              <h1>404: PAGE NOT FOUND</h1>
              <p>Oops, sorry, we can't find this page!</p>
          </main>
      </Def>
    )
  }  

  function index (data) {
    let placesFormatted = data.places.map((places) => {
        return (
            <div>
                <h2>{places.name}</h2>
                <img src={places.pic} alt={places.name}></img>
            </div>
        )
    })
    return (
        <Def>
            <main>
                <h1>PLACES INDEX PAGE</h1>
                {placesFormatted}
            </main>
        </Def>
    )
  }
  

// // module.exports = {
//     error404,
//     index,
// }

module.exports = index

