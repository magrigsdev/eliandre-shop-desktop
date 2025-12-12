import { useFetch } from "./useFetch"

/**
 * Custom hook for handling subscription requests
 * @returns {Object} Subscription hook object
 * @returns {Function} returns.subcribe - Async function to submit subscription form data
 * @returns {boolean} returns.loading - Loading state of the fetch request
 * @returns {Error} returns.error - Error object if fetch request fails
 * @returns {Object} returns.data - Response data from successful fetch request
 */
export const useSubscribe = () => {
    const {send, loading, error, data} = useFetch()
    const url = 'http://localhost:3000/api/subscribe'

    const subcribe =  async (formData) => {
        const res =  await send({
            method: 'POST',
            url:url,
            body:formData
        })
        return res
    }
    return {subcribe, loading, error, data}
}