import axios from "axios"
import { useState } from "react"

/**
 * @callback send
 * @returns {error, data, loading}
 */
export const useFetch =() => {
  const [loading, setLoading] = useState()
  const [error, setError] = useState()
  const [data, setData] = useState()

  //
  /**
   * Sends an HTTP request and manages loading/error states
   * @async
   * @param {Object} options - Configuration object for the request
   * @param {string} [options.method="GET"] - HTTP method (GET, POST, PUT, DELETE, etc.)
   * @param {string} options.url - The endpoint URL to send the request to
   * @param {Object|null} [options.body=null] - Request body data (for POST, PUT, etc.)
   * @returns {Promise<Object|null>} The response data on success, or null on error
   */
  const send = async ({ method = "GET",url , body = null}) => {
      setLoading(true)
      setError(null)

      try {
        const headers = {}
        //axios
        
        const res = await axios({method, url, data: body, headers})
        setData(res.data)
        return res.data
      } catch (error) {
        setError(error.response?.data?.msg || 'Request failed');
        return null;
      } finally{ setLoading(false)}
    
  }

  return {send, loading, error, data}

}

