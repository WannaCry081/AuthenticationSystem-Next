"use client";
import * as z from "zod";
import Link from "next/link";
import { useState, useTransition } from "react";
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
import { LoginSchema } from "@/schemas";
import { Login } from "@/actions";
import { FormError } from "@/components/ui/form-error";

export default function LoginView() {
  const [error, setError] = useState<string | undefined>("");
  const [isPending, startTransition] = useTransition();

  const form = useForm<z.infer<typeof LoginSchema>>({
    resolver: zodResolver(LoginSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSubmit = (values: z.infer<typeof LoginSchema>) => {
    setError("");
    startTransition(() => {
      Login(values).then((data: any) => {
        if (data) {
          setError(data.error);
        }
      });
    });
  };

  return (
    <Card className="mx-auto max-w-lg bg-neutral-900 border-0 sm:border border-neutral-700 text-neutral-300 font-mono">
      <CardHeader>
        <h1 className="text-4xl sm:text-5xl font-semibold  text-neutral-100">Login.</h1>
        <p className="pt-2 text-sm sm:text-base font-medium">
          Welcome back! Sign in with your verified email and password to access
          your account.
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
                  <FormLabel className="uppercase text-xs sm:text-sm font-semibold text-neutral-500">
                    Email Address
                  </FormLabel>
                  <FormControl>
                    <Input
                      disabled={isPending}
                      minLength={5}
                      maxLength={101}
                      className="bg-neutral-700 border-0 text-base sm:h-12"
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
                  <FormLabel className="uppercase text-xs sm:text-sm font-semibold text-neutral-500">
                    Password
                  </FormLabel>
                  <FormControl>
                    <PasswordInput
                      disabled={isPending}
                      className="bg-neutral-700 border-0 text-base sm:h-12"
                      placeholder="Enter your password"
                      field={field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormError message={error} />
            <Link
              href="/forgot-password"
              className="float-right text-sm sm:text-base text-neutral-500 font-medium hover:text-neutral-300"
            >
              Forgot Password?
            </Link>
            <Button
              disabled={isPending}
              type="submit"
              size="lg"
              className="bg-neutral-950 w-full hover:bg-neutral-800"
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
  );
}
