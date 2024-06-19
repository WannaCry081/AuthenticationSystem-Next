const baseUrl = "http://localhost:8000/";


interface RegisterServiceProps {
  username : string;
  email : string;
  password : string;
  rePassword : string;
};

const RegisterService = async (data : RegisterServiceProps) => {
  const url = new URL("api/v1/auth/login", baseUrl);


};


export { RegisterService };