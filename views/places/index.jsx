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
            <div className="col-sm-6">
                <h2>{places.name}</h2>
                <p className="text-center">
                    {places.cuisines}
                </p>
                <img src={places.pic} alt={places.name}></img>
                <p className="text-center">
                    Located in {places.city}, {places.state}
                </p>
            </div>
        )
    })
    return (
        <Def>
            <main>
                <h1>Places to Rant or Rave About</h1>
                <div className="row">
                {placesFormatted}
                </div>
                
            </main>
        </Def>
    )
  }
  

// // module.exports = {
//     error404,
//     index,
// }

module.exports = index

