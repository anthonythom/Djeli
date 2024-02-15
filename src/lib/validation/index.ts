import * as z from "zod";

// ============================================================
// USER
// ============================================================
export const SignupValidation = z.object({
  name: z.string().min(2, { message: "O nome deve ter pelo menos 2 caracteres." }),
  username: z.string().min(2, { message: "O nome deve ter pelo menos 2 caracteres." }),
  email: z.string().email(),
  password: z.string().min(8, { message: "A senha deve conter pelo menos 8 caracteres." }),
});

export const SigninValidation = z.object({
  email: z.string().email(),
  password: z.string().min(8, { message: "A senha deve conter pelo menos 8 caracteres." }),
});

export const ProfileValidation = z.object({
  file: z.custom<File[]>(),
  name: z.string().min(2, { message: "O nome deve ter pelo menos 2 caracteres." }),
  username: z.string().min(2, { message: "O nome deve ter pelo menos 2 caracteres." }),
  email: z.string().email(),
  bio: z.string(),
});

// ============================================================
// POST
// ============================================================
export const PostValidation = z.object({
  caption: z.string().min(5, { message: "Mínimo 5 caracteres." }).max(2200, { message: "Máximo 2.200 caracteres" }),
  file: z.custom<File[]>(),
  location: z.string().min(1, { message: "Este campo é obrigatório" }).max(1000, { message: "Máximo de 1000 caracteres." }),
  tags: z.string(),
});
