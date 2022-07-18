import buildClient from '../api/build-client';

const LandingPage = ({ currentUser }) => {
   return (
     <>
       <div className="container">
         {currentUser ? <h1>Landing Pages Your Signed IN</h1> : <h1>You are NOT signed in</h1>}
       </div>
     </>
   );
};

LandingPage.getInitialProps = async (context) => {

  const client = buildClient(context)
  const {data} = await client.get('/api/users/currentuser')

  return data;
};

export default LandingPage;
