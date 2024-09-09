import * as z from 'zod';


export const formSubscribeSchema = z.object({
    nome: z.string().min(1).max(255),
    cpf: z.string().min(1).max(255),
    dataNascimento: z.string().min(1).max(255),
    endereco: z.string().min(1).max(255),
    email: z.string().email(),
});

export type IFormSubscribe = z.infer<typeof formSubscribeSchema>;