"use client";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { Logout } from "@/actions";

const HomeView = () => {

  const handleLogout = async () => {
    try {
      await Logout();
    } catch (error) {
      console.error('Error during logout:', error);
    }
  };

  return (
    <Card className="bg-inherit border-0 border-neutral-700  mx-auto text-neutral-100 font-mono max-w-lg sm:border mt-4">
      <CardHeader>
        <h1 className="text-2xl md:text-4xl font-semibold">Profile.</h1>
      </CardHeader>
      <CardContent>
        <div>
          
          <Button
            onClick={handleLogout}
            size="lg"
            variant="destructive"
            className="bg-destructive/60 w-full"
          >
            Logout
          </Button>
        </div>
      </CardContent>
      <CardFooter>
        <div className="w-full text-center">
          <p className="text-xs uppercase text-neutral-400">
            ©2024 by WannaCry081
          </p>
        </div>
      </CardFooter>
    </Card>
  );
};

export default HomeView;
