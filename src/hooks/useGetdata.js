
import { useFetch } from './useFetch';

export const  useGetdata = () => {
    const {send, loading, error, data} = useFetch()

    const getData =  async (url) => {
        const res = await send({url})
        return res
    }
    return {getData,loading, error, data} 
}