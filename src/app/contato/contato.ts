/* CLASSE CONTATO */
export class Contato {
  id?: number;  /* obs: (?) = NÃO SÃO CAMPOS OBRIGATÓRIOS. */
  nome?: string;
  telefone?: number;
  email?: string;
  favorito?: boolean;
  foto?: any;

  /* CONSTRUTOR COM ATRIBUTOS DE CONTATO */
  constructor(nome: string, telefone: number, email: string) {
    this.nome = nome;
    this.telefone = telefone;
    this.email = email;
   
  }

}
