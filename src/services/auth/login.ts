const baseUrl = "http://localhost:8000/";


interface LoginServiceProps {
  email : string;
  password : string;
};

const LoginService = async (data : LoginServiceProps) => {
  const url = new URL("api/v1/auth/login", baseUrl);


};


export { LoginService };