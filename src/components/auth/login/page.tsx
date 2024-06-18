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
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { PasswordInput } from "@/components/ui/password-input";
import { loginSchema as formSchema } from "@/schemas";

export default function LoginView() {
  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSubmit = (values: any) => {
    alert(values.password);
  };

  return (
    <section className="fixed py-4 sm:p-6 md:p-8 sm:relative sm:top-4 bg-inherit mx-auto w-full">
      <Card className="mx-auto max-w-lg bg-neutral-900 border-0 sm:border border-neutral-700 text-neutral-300 font-mono">
        <CardHeader>
          <h1 className="text-2xl sm:text-5xl text-neutral-100">Login.</h1>
          <p className="pt-2 text-sm sm:text-base font-medium">
            Welcome back! Sign in with your verified email and password to
            access your account.
          </p>
        </CardHeader>
        <CardContent>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
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
                        placeholder="Enter your email address"
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

              <Link
                href="/forgot-password"
                className="float-right text-sm sm:text-base text-neutral-500 font-medium hover:text-neutral-300"
              >
                Forgot Password?
              </Link>

              <Button
                type="submit"
                size="lg"
                className="bg-neutral-700 w-full hover:bg-neutral-800"
              >
                Login
              </Button>
            </form>
          </Form>
        </CardContent>
        <CardFooter>
          <Link
            href="/register"
            className="text-sm sm:text-base text-neutral-500 text-center w-full font-medium hover:text-neutral-300"
          >
            Don't have an account?
          </Link>
        </CardFooter>
      </Card>
    </section>
  );
}
