"use server";
import * as z from "zod";
import { LoginSchema } from "@/schemas";

const Login = async (values : z.infer<typeof LoginSchema>) => {

};

export { Login };