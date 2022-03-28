const React = require ('react')
const Def = require ('./default')

function home () {
    return(
        <Def>
            <main>
                <h1>Home</h1>
                <div>
                    <img src="/images/A-plate-of-salade.jpg" alt="A bowl of salade" />
                    <div>
                    Photo by <a href="https://unsplash.com/@annapelzer?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Anna Pelzer</a> on <a href="https://unsplash.com/s/photos/food?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>
                    </div>
                </div>
                <a href="/places">
                <button className="btn-primary">Places Page</button>
                </a>
            </main>
        </Def>
    )
}

module.exports = home