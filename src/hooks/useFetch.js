import axios from "axios"
import { useState } from "react"
import {Texts} from "../Constants/texts.js";


/**
 * useFetch
 * @callback send
 * @returns {errorAPI, data, loading}
 */
export const useFetch =() => {
    const [data, setData] = useState({})
    const [ErreurAPI, setErreurAPI] = useState(null)


  /**
   * Sends an HTTP request and manages loading/errorAPI states
   * @async
   * @param {Object} options - Configuration object for the request
   * @param {string} options.url - The endpoint URL to send the request to
   * @param {Object|null} [options.body=null] - Request body data (for POST, PUT, etc.)
   * @returns {Promise<Object|null>} The response data on success, or null on errorAPIAPI
   */
    const send = async ({ url ,method, body= null}) => {
            setErreurAPI(null); // On réinitialise l'erreur au début
            setData(null) // On réinitialise Data au début
          try {
                console.log("[useFetch] premier passage : ",body)
                //body = method === 'GET' && JSON.stringify(body)
                if(method === 'GET' && body.length > 0){
                    body = JSON.stringify(body)
                }
                //axios
                const res = await axios(
                    {
                        method,
                        url,
                        data: body,
                        headers: {'Content-Type': 'application/json'}
                    })


                return { success: true, data: res.data, status: res.status };

          } catch (error) {
              let errorMessage = Texts.ERREUR_SERVER_NOT_FOUND;
              let errorCode = error.code; // Code interne Axios (ex: ERR_NETWORK)

              // --- STRATÉGIE DE CAPTURE DES ERREURS ---

              if (error.response) {
                  /**
                   * Cas 1 : Le serveur a répondu mais avec un code d'erreur (4xx, 5xx)
                   * C'est ici qu'on trouve les erreurs 400 (Bad Request)
                   */
                  const data = error.response.data;
                  errorMessage = data?.error || data?.message || `Erreur ${error.response.status} .`;

                  // Gestion spécifique par tes codes d'erreur backend
                  if (data?.code === 'USER_ALREADY_EXISTS') errorMessage = Texts.USER_ALREADY_EXISTS;
                  if (data?.code === 'SERVER_NOT_FOUND') errorMessage = Texts.SERVER_NOT_FOUND;

              } else if (error.request) {
                  /**
                   * Cas 2 : La requête a été envoyée mais pas de réponse (Problème réseau)
                   */
                  errorMessage = Texts.SERVER_NOT_FOUND || "Le serveur est injoignable.";
                  errorCode = 'ERR_NETWORK';
              } else {
                  /**
                   * Cas 3 : Erreur lors de la configuration de la requête
                   */
                  errorMessage = error.message;
              }

              // Mise à jour de l'état pour l'UI
              setErreurAPI(errorMessage);

              console.error("-[useFetch] Détail de l'erreur :", {
                  message: errorMessage,
                  status: error.response?.status || 'Status non disponible.',
                  data: error.response?.data || 'Data non disponible.'
              });

              return {
                  success: false,
                  status: error.response?.status,
                  message: errorMessage,
                  code: errorCode,
                  data: error.response?.data // On retourne les détails (ex: erreurs de validation)
              };
          }


    }

    return { send, ErreurAPI, data}
}

