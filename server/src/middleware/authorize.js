const jwt = require('jsonwebtoken')

/**
 * Parse and verify the token. If authentic, attach the payload to req.user
 * and pass to the next middleware.
 */
async function authorize(req, res, next) {
    // access header for authoration information
  const authHeader = req.headers.authorization

  // if there is no header or the header doesn't start with 'Bearer'
  //        send back 'Unauthorized'
  if (!authHeader || !authHeader.startsWith('Bearer ')) {
    return res.status(401).json({ error: 'Unauthorized' })
  }

  // split the header at the space to create an access token
  const accessToken = authHeader.split(' ')[1]

  // create an access token
  try {
    req.user = jwt.verify(accessToken, process.env['TOKEN_SECRET'])
    next()
  } catch (err) {
    res.status(403).json({ error: 'Invalid token' })
  }
}

module.exports = authorize