
import { useFetch } from './useFetch';
/**
 * Custom hook for handling user login functionality
 * @returns {Object} Login hook object
 * @returns {Function} returns.login - Async function to authenticate user with email and password
 * @returns {Function} returns.login - @param {string} email - User's email address
 * @returns {Function} returns.login - @param {string} password - User's password
 * @returns {boolean} returns.loading - Loading state during login request
 * @returns {Error|null} returns.error - Error object if login fails, null otherwise
 * @returns {Object|null} returns.data - Response data from successful login request
 */
export const useLogin = () => {
  
  const {send, loading, error, data} = useFetch()
  const url = 'http://localhost:3000/api/login'
  //
  const login = async (email, password) => {
    const res = await send({
      method:'POST',
      url:url,
      body:{email, password}
    })
    return res
  }
  return {login, loading, error, data}
}


