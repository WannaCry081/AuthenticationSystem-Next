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
import { forgotPasswordSchema as formSchema } from "@/schemas";

export default function ForgotPasswordView() {
  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
    },
  });

  const onSubmit = (values: any) => {
    alert(values.email);
  };

  return (
    <section className="fixed py-4 sm:p-6 md:p-8 sm:relative sm:top-4 bg-inherit w-full mx-auto">
      <Card className="mx-auto max-w-lg bg-neutral-900 border-0 sm:border border-neutral-700 text-neutral-300 font-mono">
        <CardHeader>
          <h1 className="text-2xl sm:text-4xl text-neutral-100">
            Forgot Password.
          </h1>
          <p className="pt-2 text-sm sm:text-base font-medium">
            Welcome! Enter your email to receive a link to reset your password
            and regain access to your account.
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

              <div className="pt-2">
                <Button
                  type="submit"
                  size="lg"
                  className="bg-neutral-700 w-full hover:bg-neutral-800"
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
    </section>
  );
}
