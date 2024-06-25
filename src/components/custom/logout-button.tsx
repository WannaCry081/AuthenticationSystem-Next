import { Button } from "@/components/ui/button";
import { LogoutAction } from "@/actions";

const LogoutButton = () => {
  const handleLogout = async () => {
    try {
      await LogoutAction();
    } catch (error) {
      console.error("Error during logout:", error);
    }
  };

  return (
    <Button
      onClick={handleLogout}
      size="lg"
      variant="destructive"
      className="bg-destructive/60 w-full mt-4"
    >
      Logout
    </Button>
  );
};

export { LogoutButton };
