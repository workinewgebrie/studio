import { GoogleLogin } from '@react-oauth/google';

export default function SocialLogin() {
  return (
    <div>
      <GoogleLogin
        onSuccess={credentialResponse => {
          // Handle login success, e.g., save token, update UI
          console.log(credentialResponse);
        }}
        onError={() => {
          console.log('Login Failed');
        }}
      />
      {/* Add Facebook, GitHub, Instagram buttons here */}
    </div>
  );
}