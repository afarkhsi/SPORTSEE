import { useState } from 'react';
import { generatePath, useNavigate } from 'react-router-dom';
const apiUrl = 'http://localhost:3000';
/**
 * Login component.
 *
 * @param {void}
 * @returns {JSX.Element} - Rendered component.
 */
export default function Login() {
  const navigate = useNavigate();
  const [userId, setUserId] = useState('');
  const userUrl = `${apiUrl}/user/${userId}`;
  const [serverUnavailable, setServerUnavailable] = useState(false);
  const [userNonexistent, setUserNonexistent] = useState(false);

  function handleChange(e) {
    setUserId(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    fetch(userUrl)
      .then((response) => {
        if (response.ok) {
          const path = generatePath('/user/:userId', { userId });
          navigate(path);
        } else {
          setUserNonexistent(true);
          setTimeout(() => {
            setUserNonexistent(false);
          }, 2000);
        }
      })
      .catch((error) => {
        setServerUnavailable(true);
        setTimeout(() => {
          setServerUnavailable(false);
        }, 2000);
      });
  }

  return (
    <div className="login">
      <img className="login-logo" src="{*}" alt="Logo" />
      <form className="login-form" onSubmit={handleSubmit}>
        <input
          className="login-input"
          type="number"
          value={userId}
          onChange={handleChange}
          placeholder="User ID"
          pattern="^[0-9]*$"
          required
        />
        <button className="login-btn" type="submit">
          Envoyer
        </button>
      </form>
      <div className="login-error">
        {serverUnavailable && (
          <p className="login-error-message">{'Serveur indisponible'}</p>
        )}
        {userNonexistent && (
          <p className="login-error-message">{'Utilisateur inexistant'}</p>
        )}
      </div>
    </div>
  );
}
