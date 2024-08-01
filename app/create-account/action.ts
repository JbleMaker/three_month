"use server";
import { z } from "zod";

const usernameSchema = z.string().min(5).max(10);

export async function createAccount(prevState: any, formData: FormData) {
  const data = {
    username: formData.get("username"),
    email: formData.get("email"),
    password: formData.get("password"),
    passwordconfirm: formData.get("passwordconfirm"),
  };

  usernameSchema.parse(data.username);
}
