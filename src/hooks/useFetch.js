import axios from "axios"
import { useState } from "react"

/**
 * @callback send
 * @returns {errorAPI, data, loading}
 */
export const useFetch =() => {
    const [errorAPI, setErrorAPI] = useState({})
    const [data, setData] = useState({})

  //
  /**
   * Sends an HTTP request and manages loading/errorAPI states
   * @async
   * @param {Object} options - Configuration object for the request
   * @param {string} options.url - The endpoint URL to send the request to
   * @param {Object|null} [options.body=null] - Request body data (for POST, PUT, etc.)
   * @returns {Promise<Object|null>} The response data on success, or null on errorAPIAPI
   */
    const send = async ({ url ,method='POST', body= null}) => {

          setErrorAPI(null)

          try {
                const headers = {'Content-Type': 'application/json'};
                //body = body ? JSON.stringify(body) : null
                //axios
                const res = await axios(
                    {
                        method,
                        url,
                        data: body,
                        headers: body ? {headers } : {}
                    })
                setData(res)

                //return res.data
          } catch (error) {
              const apiError = error.response?.data
              console.log('dans useFetch voici le error api ',apiError)
              if(apiError?.code === 'USER_ALREADY_EXISTS') {
                  setErrorAPI("Cet email est déjà utilisé")
              }
              else if(apiError?.code === 'SERVER_NOT_FOUND') {
                  setErrorAPI("Server non disponible.")
              }
              else setErrorAPI(apiError?.error || 'Erreur de serveur')
             // return null;
          }
      }



  return { send, errorAPI, data}

}

