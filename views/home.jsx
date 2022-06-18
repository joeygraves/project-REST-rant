const React = require('react')

const Def = require('./default')

function home () {
    return (
      <Def>
          <main>
              <h1>HOME</h1>
          </main>
          <div>
            <img src="/images/man.jpg" alt="Man On Water"/>
            <div>
              Photo by <a href="https://unsplash.com/@coopery">Mohamed Nohassi</a> on <a href="https://unsplash.com/photos/odxB5oIG_iA">Unsplash</a>
            </div>
          </div>

          <a href="/places">
              <button className="btn-primary">Places Page</button>
          </a>
      </Def>
    )
  }

  
module.exports = home
