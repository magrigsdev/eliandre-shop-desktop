import axios from "axios"
import { useState } from "react"

/**
 * @callback send
 * @returns {errorAPI, data, loading}
 */
export const useFetch =() => {
    const [errorAPI, setErrorAPI] = useState({})
    const [data, setData] = useState({})


    //test body


  //
  /**
   * Sends an HTTP request and manages loading/errorAPI states
   * @async
   * @param {Object} options - Configuration object for the request
   * @param {string} options.url - The endpoint URL to send the request to
   * @param {Object|null} [options.body=null] - Request body data (for POST, PUT, etc.)
   * @returns {Promise<Object|null>} The response data on success, or null on errorAPIAPI
   */
    const send = async ({ url ,method, body= null}) => {
            setErrorAPI({})
            setData(null)
          try {
                const headers = {'Content-Type': 'application/json'};
                body = method === 'GET' && JSON.stringify(body)
                //axios
                const res = await axios(
                    {
                        method,
                        url,
                        data: body,
                        //headers: body ? headers  : {}
                        headers: headers
                    })

                setData(res.data)
                return res.data
          } catch (error) {
              const apiError = error.response?.data

              if(apiError?.code === 'USER_ALREADY_EXISTS') {
                  setErrorAPI("Cet email est déjà utilisé")
              }
              else if(apiError?.code === 'SERVER_NOT_FOUND') {
                  setErrorAPI("Server non disponible.")
              }
              else setErrorAPI(apiError?.error || 'Erreur de serveur')
              return {
                  success: false,
                  status: error.response?.status,
                  error: apiError.error,
                  code: apiError.code,
              }

          }
    }

  return { send, errorAPI, data}
}

