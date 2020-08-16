import Layout from './../components/Layout'
import './../../theme/_basic.scss'
function Error({ statusCode }) {
  return (
    <h2 className='center'>
      {statusCode
        ? `An error ${statusCode} occurred on server`
        : 'An error occurred on the client'}
    </h2>
  )
};

Error.getInitialProps = ({ res, err }) => {
  const statusCode = res ? res.statusCode : err.statusCode
  return { statusCode }
};

export default Error;