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
import { PasswordInput } from "@/components/ui/password-input";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { RegisterSchema } from "@/schemas";
import { Register } from "@/actions";
import { FormError } from "@/components/ui/form-error";

export default function RegisterView() {
  const [error, setError] = useState<string | undefined>("");
  const [isPending, startTransition] = useTransition();

  const form = useForm<z.infer<typeof RegisterSchema>>({
    resolver: zodResolver(RegisterSchema),
    defaultValues: {
      username: "",
      email: "",
      password: "",
      rePassword: "",
    },
  });

  const onSubmit = (values: z.infer<typeof RegisterSchema>) => {
    setError("");
    startTransition(() => {
      Register(values).then((data: any) => {
        if (data) {
          setError(data.error);
        }
      });
    });
  };

  return (
    <Card className="mx-auto max-w-lg mt-4 bg-inherit border-0 border-neutral-700 text-neutral-300 font-mono sm:border">
      <CardHeader>
        <h1 className="text-4xl sm:text-5xl font-semibold  text-neutral-100">
          Join Now.
        </h1>
        <p className="pt-2 text-sm sm:text-base font-medium">
          Welcome! Create an account with your username, email, and password to
          get started.
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
                  <FormLabel className="uppercase text-xs sm:text-sm font-semibold text-neutral-500">
                    Username
                  </FormLabel>
                  <FormControl>
                    <Input
                      disabled={isPending}
                      minLength={2}
                      maxLength={41}
                      className="bg-neutral-700 border-0 text-base h-12"
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
                  <FormLabel className="uppercase text-xs sm:text-sm font-semibold text-neutral-500">
                    Email Address
                  </FormLabel>
                  <FormControl>
                    <Input
                      disabled={isPending}
                      minLength={5}
                      maxLength={101}
                      className="bg-neutral-700 border-0 text-base h-12"
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
                  <FormLabel className="uppercase text-xs sm:text-sm font-semibold text-neutral-500">
                    Password
                  </FormLabel>
                  <FormControl>
                    <PasswordInput
                      disabled={isPending}
                      className="bg-neutral-700 border-0 text-base h-12"
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
                  <FormLabel className="uppercase text-xs sm:text-sm font-semibold text-neutral-500">
                    Confirm Password
                  </FormLabel>
                  <FormControl>
                    <PasswordInput
                      disabled={isPending}
                      className="bg-neutral-700 border-0 text-base h-12"
                      placeholder="Re-enter your password"
                      field={field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormError message={error} />
            <div className="pt-3">
              <Button
                disabled={isPending}
                type="submit"
                size="lg"
                className="bg-neutral-950 w-full hover:bg-neutral-800"
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
  );
}
