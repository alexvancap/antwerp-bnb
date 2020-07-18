import Layout from './../components/Layout'
import './../../theme/_basic.scss'
function Error({ statusCode }) {
  return (
    <Layout>
      <p className='center'>
        {statusCode
          ? `An error ${statusCode} occurred on server`
          : 'An error occurred on the client'}
      </p>
    </Layout>
  )
};

Error.getInitialProps = ({ res, err }) => {
  const statusCode = res ? res.statusCode : err.statusCode
  return { statusCode }
};

export default Error;