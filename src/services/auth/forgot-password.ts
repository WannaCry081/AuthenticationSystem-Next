const baseUrl = "http://localhost:8000/";


interface ForgotPasswordServiceProps {
  email : string;
};

const ForgotPasswordService = async (data : ForgotPasswordServiceProps) => {
  const url = new URL("api/v1/auth/login", baseUrl);


};


export { ForgotPasswordService };