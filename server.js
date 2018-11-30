const express = require('express');
const path = require('path');
const app = express();
const proxy = require('http-proxy-middleware');
const compression = require('compression');

app.use(compression());


app.use(express.static(path.join(__dirname, 'public')));

app.use('/api/movies/:movieId/summary', 
  proxy({
    target: 'http://18.224.29.254/bundle.js'
  })
)

// app.use('/api/movies/:movieid/rating', 
//   proxy({
//     target: 'http://localhost:3013'
//   })
// )

// app.get('/api/movies/:movieid/reviews', 
//   proxy({
//     target: 'http://localhost:3013'
//   })
// )

// app.get('/api/movies/:genre/relatedmovies',
//   proxy({
//     target: 'http://localhost:3003'
//   })
// )

// app.get('/api/movies/:movie/:date/:location',
//   proxy({
//     target: 'http://localhost:3002'
//   })
// )

// app.get('/api/moviesbyid/:movieid/:date/:location',
//   proxy({
//     target: 'http://localhost:3002'
//   })
// )

app.listen(3000, () => {
  console.log('listening at port 3000');
})
