import { GoogleLogin } from "@react-oauth/google";
import { GoogleOAuthProvider } from "@react-oauth/google";
import APIS from "../../constants/api";
import { account } from "../../client/axios";
import { useNavigate } from "react-router-dom";
import { useAppDispatch } from "../../redux/store";
import LOCAL_STORAGE_KEYS from "../../constants/local_storage";
import { setToken } from "../../redux/user/slice";
import { Color } from "../../constants/color";


export default function GoogleLoginButton() {
  const navigate = useNavigate()
	const dispatch = useAppDispatch()
  const handleLogin = (credentialResponse: any) => {
    console.log(credentialResponse)
    account.post(APIS.SOCIAL_SIGN_IN, {
				token_google: credentialResponse.credential,
			})
			.then((response) => {
        if (response.data.token) {
					localStorage.setItem(
						LOCAL_STORAGE_KEYS.TOKEN_KEY,
						response.data.token
					)
					dispatch(setToken(response.data.token))
					navigate('/')
				}
				})
			.catch((err: Error) => {
				console.log(err)
			})
  };
  return (
    <div className="w-100">
        <p className="text-center w-100 my-2 p-3 rounded fw-bold" style={{position:'absolute',backgroundColor:Color.grey}}>Sign in with Google</p>
        <div style={{opacity:0}}>
        <GoogleOAuthProvider clientId="485711266465-qi5n47f58r10e5s33hktjcm9fau6nd5v.apps.googleusercontent.com">
          <GoogleLogin onSuccess={handleLogin} />
        </GoogleOAuthProvider>
        </div>
    </div>
  );
}
