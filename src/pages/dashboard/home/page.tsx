"use client";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { ProfileCard } from "@/components/custom/profile-card";
import { LogoutButton } from "@/components/custom/logout-button";

const HomePage = () => {
  return (
    <Card className="bg-inherit border-0 border-neutral-700  mx-auto text-neutral-100 font-mono max-w-lg sm:border mt-4">
      <CardHeader>
        <h1 className="text-2xl md:text-4xl font-semibold">Profile.</h1>
      </CardHeader>
      <CardContent>
        <div>
          <ProfileCard />
          <LogoutButton />
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

export default HomePage;
