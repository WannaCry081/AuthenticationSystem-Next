"use client";
import * as z from "zod";
import Link from "next/link";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState, useTransition } from "react";
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
import { ForgotPasswordSchema } from "@/schemas";
import { ForgotPassword } from "@/actions";
import { FormError } from "@/components/ui/form-error";

export default function ForgotPasswordView() {
  const [error, setError] = useState<string | undefined>("");
  const [isPending, startTransition] = useTransition();

  const form = useForm<z.infer<typeof ForgotPasswordSchema>>({
    resolver: zodResolver(ForgotPasswordSchema),
    defaultValues: {
      email: "",
    },
  });

  const onSubmit = (values: z.infer<typeof ForgotPasswordSchema>) => {
    setError("");
    startTransition(() => {
      ForgotPassword(values).then((data: any) => {
        if (data) {
          setError(data.error);
        }
      });
    });
  };

  return (
    <Card className="mx-auto max-w-lg mt-4 bg-inherit border-0 border-neutral-700 text-neutral-300 font-mono sm:border">
      <CardHeader>
        <h1 className="text-3xl sm:text-4xl font-semibold  text-neutral-100">
          Forgot Password.
        </h1>
        <p className="pt-2 text-sm sm:text-base font-medium">
          Welcome! Enter your email to receive a link to reset your password and
          regain access to your account.
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
                      className="bg-neutral-700 border-0 text-base h-12"
                      placeholder="Enter your email address"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormError message={error} />
            <div className="pt-2">
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
          Remember your password?
        </Link>
      </CardFooter>
    </Card>
  );
}
