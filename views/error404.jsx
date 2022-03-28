const React = require('react')
const Def = require('./default')

function error404 () {
    return (
      <Def>
          <main>
              <h1>404: PAGE NOT FOUND</h1>
              <p>Oops, sorry, we can't find this page!</p>
              <div>
                    <img src="/images/dog-picture.jpg" alt="A bowl of salade" />
                    <div>
                    Photo by <a href="https://unsplash.com/@calebjamesfisher?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Caleb Fisher</a> on <a href="https://unsplash.com/s/photos/dog-searchin?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>
                    </div>
                </div>
          </main>
      </Def>
    )
  }

module.exports = error404