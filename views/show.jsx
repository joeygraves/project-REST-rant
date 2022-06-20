const React = require('react')
const Def = require('../default')

const show = (data) => {
    return (
        <Def>
          <main>
            <h1>{ data.place.name }</h1>
          </main>
        </Def>
    )
}

module.exports = show
