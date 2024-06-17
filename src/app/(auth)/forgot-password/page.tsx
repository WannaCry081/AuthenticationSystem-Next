"use client";

import * as Yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import Link from "next/link";
import { 
  Card, 
  CardContent, 
  CardFooter, 
  CardHeader 
} from "@/components/ui/card";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage
} from "@/components/ui/form";
import { useForm } from "react-hook-form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";


const formSchema = Yup.object({
  email : Yup.string()
    .required("Email Address is required.")
    .email("Invalid Email Address")
    .min(5, "Email Address must be at least 5 characters.")
    .max(100, "Email Address can be at most 100 characters."),
});


export default function LoginPage() {

  const form = useForm({
    resolver: yupResolver(formSchema),
    defaultValues: {
      email: "",
    },
  });

  const onSubmit = (values: any) => {
    alert(values.email);
  };

  return (
    <section className="p-4 sm:p-6 md:p-8 relative top-8 bg-inherit">
      <Card className="mx-auto max-w-lg bg-neutral-900 border border-neutral-700 text-neutral-300 font-mono">
        <CardHeader>
          <h1 className="text-2xl sm:text-4xl">Forgot Password.</h1>
          <p className="pt-2">
            Welcome! Enter your email to receive a link to reset your password and regain access to your account.
          </p>
        </CardHeader>
        <CardContent>
          <Form {...form}>
            <form 
              onSubmit={form.handleSubmit(onSubmit)}
              className="space-y-4">
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
                  className="bg-neutral-700 w-full hover:bg-neutral-800">
                    Submit
                </Button>
              </div>

            </form>
          </Form>
        </CardContent>
        <CardFooter>
          <Link href="/login" className="text-sm text-neutral-500 text-center w-full font-semibold hover:text-neutral-300">
            Remember your password?
          </Link>
        </CardFooter>
      </Card>
    </section>
  );
}
