const React = require('react')
const Def = require('../default')

function show (data) {
  let comments = (
    <h3 className='inactive'>
      No comments yet!
    </h3>
  )
    let rating = (
      <h3 className='inactive'>
        No ratings yet!
      </h3>
    )

  if (data.place.comments.length) {
    //average rating
    let sumRatings = data.place.comments.reduce((tot, c) => {
      return tot + c.stars
    }, 0)
    let averageRating = Math.round((sumRatings / data.place.comments.length)*2)/2
    let starRating = ''
    for (let i = 0; i < averageRating; i++) {
      starRating += '⭐️'
    }
    rating = (
      <h3>
        {starRating} stars
      </h3>
    )
    //comments section
    comments = data.place.comments.map(c => {
      return (
        <div className="border">
          <h2 className="rant">{c.rant ? 'Rant! 😡' : 'Rave! 😻'}</h2>
          <h4>{c.content}</h4>
          <h3>
            <stong>- {c.author}</stong>
          </h3>
          <h4>Rating: {c.stars}</h4>
        </div>
      )
    })
  }
    return (
      <Def>
      <main>
        <div className="row">
          <div className="col-sm-6">
            <img src={data.place.pic} alt={data.place.name} />
            <h3>
              Located in {data.place.city}, {data.place.state}
            </h3>
          </div>
          <div className="col-sm-6">
          <h1>{data.place.name}</h1>
                <h2>Rating</h2>
                {rating}
            <h2>
              Description
            </h2>
            <h3>
              {data.place.showEstablished()}
            </h3>
            <h4>
              Serving {data.place.cuisines}
            </h4>
            <div >
            <a href={`/places/${data.place.id}/edit`} className="btn btn-warning"> 
                    Edit
            </a> 
            <form method="POST" action={`/places/${data.place.id}?_method=DELETE`}> 
                <button type="submit" className="btn btn-danger" >Delete</button>
            </form> 
            </div>
          </div>
        </div>
              
        <div>
          <h2>Comments</h2>
          {comments}
        </div> 
        <div>
          <h2>Add a Comment</h2>
          <form className="form" method="POST" action={`/places/${data.place.id}/comments`}>
            <div className="form-group">
              <label htmlFor="content">Comment</label>
              <textarea className="form-control" name="content" id="content" cols="50" rows="5" placeholder='Write a comment'></textarea>
            </div>
            <div className='row'>
            <div className="form-group col-sm-6 col-lg-3 col-md-3">
              <label htmlFor="author">Author: </label>
              <input type="text" id="author" name="author" placeholder='Your name'/>
            </div>

            <div className="form-group col-sm-6 col-lg-3 col-md-3">
              <label htmlFor="rant">Rant</label>
              <input type="checkbox" id="rant" name="rant" />
            </div>

            <div className="form-group col-sm-6 col-lg-3 col-md-3">
              <label htmlFor="stars">Rating</label>
              <input type="number" className="form-control" id="stars" name="stars" step='0.5' min='0' max='5'/>
            </div>
            </div>
            <button className="btn btn-primary" type="submit" value='submit'>Add Comment</button>
          </form>
        </div>

      </main>
    </Def>
    )
}

module.exports = show