const React = require('react')
const Def = require('../default')

const show = (data) => {
    return (
        <Def>
          <main>
            <h1>{ data.place.name }</h1>
          </main>
          <section>
            <h3>Rating</h3>
            <p>Unrated</p>
          </section>
          <div>
          <footer>Comments</footer>
          <p>No comments yet!</p>
          </div>
{/* Need Help in how to use bootstrap. Part 5, number 2 */}
          <a href={`/places/${data.id}/edit`} className="btn btn-warning">
            Edit
          </a>
          <form method="POST" action={`/places/${data.id}?_method=DELETE`} >
            <button type="submit" className="btn btn-danger">
              Delete
            </button>
          </form>
          
        </Def>
    )
}

module.exports = show
