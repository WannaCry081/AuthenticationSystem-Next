"use client";
import * as z from "zod";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
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
import { ResetPasswordSchema } from "@/schemas";
import { ResetPassword } from "@/actions";
import { FormError } from "@/components/ui/form-error";

export default function ResetPasswordView() {
  const searchParam = useSearchParams();
  const [error, setError] = useState<string | undefined>("");
  const [isPending, startTransition] = useTransition();

  const form = useForm<z.infer<typeof ResetPasswordSchema>>({
    resolver: zodResolver(ResetPasswordSchema),
    defaultValues: {
      email: searchParam?.get("email") as string,
      resetCode: "",
      newPassword: "",
    },
  });

  const onSubmit = (values: z.infer<typeof ResetPasswordSchema>) => {
    setError("");
    startTransition(() => {
      ResetPassword(values).then((data: any) => {
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
          Reset Password.
        </h1>
        <p className="pt-2 text-sm sm:text-base font-medium">
          Reset your password by entering your username, email, and the
          verification code we sent you.
        </p>
      </CardHeader>
      <CardContent>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
            <FormField
              control={form.control}
              name="resetCode"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="uppercase text-xs sm:text-sm font-semibold text-neutral-500">
                    Reset Code
                  </FormLabel>
                  <FormControl>
                    <Input
                      disabled={isPending}
                      maxLength={101}
                      className="bg-neutral-700 border-0 text-base h-12"
                      placeholder="Enter your code"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="newPassword"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="uppercase text-xs sm:text-sm font-semibold text-neutral-500">
                    New Password
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
          Remember your account?
        </Link>
      </CardFooter>
    </Card>
  );
}
