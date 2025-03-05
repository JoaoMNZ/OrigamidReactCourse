import React from 'react'
import Head from '../Head'
import { STATS_GET } from '../../api'
import useFetch from '../../Hooks/useFetch'
import Loading from '../Helper/Loading'
import Error from '../Helper/Error'
const UserStatsGraphs = React.lazy(() => import('./UserStatsGraphs'))

const UserStats = () => {
  const { data, error, loading, request } = useFetch();
  

  React.useEffect(() => {
    async function getData(){
      const {url, options} = STATS_GET();
      const {response, json} = await request(url,options);
    }
    getData();
  },[request]);

  if(loading) return <Loading/>
  if(error) return <Error error={error}/>
  if(data) 
  return (
    
    <React.Suspense fallback={<Loading/>}>
      <Head title="Stats"/>
      <UserStatsGraphs data={data}/>
    </React.Suspense>
  )
  else return null;
}
export default UserStats