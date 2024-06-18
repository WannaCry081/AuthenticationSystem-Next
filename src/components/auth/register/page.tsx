"use client";
import Link from "next/link";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { PasswordInput } from "@/components/ui/password-input";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { registerSchema as formSchema } from "@/schemas";

export default function RegisterView() {
  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: "",
      email: "",
      password: "",
      rePassword: "",
    },
  });

  const onSubmit = (values: any) => {
    alert(values.password);
  };

  return (
    <section className="py-4 sm:p-6 md:p-8 relative sm:top-4 bg-inherit">
      <Card className="mx-auto max-w-lg bg-neutral-900 border-0 sm:border border-neutral-700 text-neutral-300 font-mono">
        <CardHeader>
          <h1 className="text-2xl sm:text-5xl text-neutral-100">Join Now.</h1>
          <p className="pt-2 text-sm sm:text-base font-medium">
            Welcome! Create an account with your username, email, and password
            to get started.
          </p>
        </CardHeader>
        <CardContent>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
              <FormField
                control={form.control}
                name="username"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="uppercase text-xs font-bold text-neutral-500">
                      Username
                    </FormLabel>
                    <FormControl>
                      <Input
                        minLength={2}
                        maxLength={41}
                        className="bg-neutral-700 border-0"
                        placeholder="JohnnyDoe123"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="uppercase text-xs font-bold text-neutral-500">
                      Email Address
                    </FormLabel>
                    <FormControl>
                      <Input
                        minLength={5}
                        maxLength={101}
                        className="bg-neutral-700 border-0"
                        placeholder="JohnDoe@example.com"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="password"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="uppercase text-xs font-bold text-neutral-500">
                      Password
                    </FormLabel>
                    <FormControl>
                      <PasswordInput
                        className="bg-neutral-700 border-0"
                        placeholder="Enter your password"
                        field={field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="rePassword"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="uppercase text-xs font-bold text-neutral-500">
                      Confirm Password
                    </FormLabel>
                    <FormControl>
                      <PasswordInput
                        className="bg-neutral-700 border-0"
                        placeholder="Re-enter your password"
                        field={field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <div className="pt-3">
                <Button
                  type="submit"
                  size="lg"
                  className="bg-neutral-700 w-full hover:bg-neutral-800 "
                >
                  Submit
                </Button>
              </div>
            </form>
          </Form>
        </CardContent>
        <CardFooter>
          <Link
            href="/login"
            className="text-sm sm:text-base text-neutral-500 text-center w-full font-medium hover:text-neutral-300"
          >
            Already have an account?
          </Link>
        </CardFooter>
      </Card>
    </section>
  );
}
