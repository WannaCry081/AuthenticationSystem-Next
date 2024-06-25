import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { oneDark } from "react-syntax-highlighter/dist/esm/styles/prism";
import { useState, useEffect } from "react";
import { GetProfileAction } from "@/actions";
import type { User } from "@/types/user";

const ProfileCard = () => {
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<boolean>(false);
  const [data, setData] = useState<User | undefined>();

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const response = await GetProfileAction();
        setData(response);
        setLoading(false);
      } catch (error) {
        setError(true);
        setLoading(false);
      }
    };

    fetchProfile();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Failed to load</div>;
  }

  return (
    <SyntaxHighlighter language="json" style={oneDark}>
      {JSON.stringify(data, null, 2)}
    </SyntaxHighlighter>
  );
};

export { ProfileCard };
