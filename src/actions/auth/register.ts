"use server";
import * as z from "zod";
import { RegisterSchema } from "@/schemas";

const Register = async (values : z.infer<typeof RegisterSchema>) => {

};

export { Register };