import db from '../utils/db';
import StoreInfo from '../components/storeinfo';
import Layout from '../components/layout';
import Users from '../models/Users';
import LoginScreen from '@/components/login';
import { useSession } from 'next-auth/react';
import Productpage from '@/components/productpage';
import HomePage from '@/components/homepage';


export default function Home({storeinfo}) {
  const {status, data: session} = useSession();
 
  return (
    <Layout title="Home Page">

      {session?.user?.email? (
        // <div>{session.user._id}
        <div className='mt-12'>
          <Productpage />
        </div>
        //</div>
      ) :  (
        <div className="flex justify-center card mt-12">
        {/* <HomePage /> */}
        <div className="grid grid-cols-2 gap-4 mt-10 md:grid-cols-3 lg:grid-cols-5 ml-7 ">
        {storeinfo.map((sto) => (
          <StoreInfo
            key={sto._id}
            id={sto._id}
            banner={sto.banner}
            url={sto.url}
            state={sto.state}
            name={sto.name}
            city={sto.city}
            address={sto.address}
            tel={sto.tel}
          />
        ))}
      </div>
       </div>
      ) }
     
     
    </Layout>
  );
}
export async function getServerSideProps() {
  await db.connect();
  const users = await Users.find().sort({ state: 1 }).lean();
  return {
    props: {
      storeinfo: users.map((sto) => ({
        _id: sto._id.toString(),
        name: sto.name || null,
        city: sto.city || null,
        state: sto.state || null,
        address: sto.address || null,
        tel: sto.tel || null,
        banner: sto.banner || null
      })),
    },
  };
}
