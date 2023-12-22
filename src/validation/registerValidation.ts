import z from "zod";

const emailRegex = new RegExp("^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+.[a-zA-Z]{2,}$");
const passwordRegex = new RegExp("^(?=.*[A-Za-z])(?=.*\\d)[A-Za-z\\d]{8,}$");

const registerValidation = z.object({
  email: z.string().regex(emailRegex, "Email yang kamu masukkan tidak valid"),
  firstName: z.string().min(2, "Tidak boleh kurang dari 2 karakter"),
  lastName: z.string().min(2, "Tidak boleh kurang dari 2 karakter"),
  password: z
    .string()
    .regex(
      passwordRegex,
      "Password minimal 8 karakter, kombinasi huruf dan angka"
    ),
});

export type RegisterValidation = z.infer<typeof registerValidation>;
export default registerValidation;
