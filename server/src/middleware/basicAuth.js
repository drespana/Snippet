/**
 * This middleware parses the email and password from the Authorization
 * header in the request, and attaches them to req.user
 */
function basicAuth(req, res, next) {
    // access header
    const authHeader = req.headers.authorization
  
    // if no header or if the header doesn't start with 'Basic'
            // sends back 'Unauthorized'
    if (!authHeader || !authHeader.startsWith('Basic ')) {
      return res.status(401).json({ error: 'Unauthorized' })
    }
  
    // access the encoded header and split at space
    const encodedCredentials = authHeader.split(' ')[1]

    // decode the split encoded credentials
    const decodedCredentials = Buffer.from(encodedCredentials, 'base64').toString(
      'utf-8'
    )

    // get the email and password from the decoded credentials
    const [email, password] = decodedCredentials.split(':')
  
    // if no email or passord
    //      send back error
    if (!email || !password) {
      return res.status(400).json({ error: 'Email and password are required' })
    }
  
    req.user = { email, password }
    next()
  }
  
  module.exports = basicAuth