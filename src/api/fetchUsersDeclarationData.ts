import { usersDeclaration } from "@/consts/usersDeclaration";
import { IUserDeclaration } from "@/types/usersDeclarations.types";

export async function getUsersDeclarationData(): Promise<IUserDeclaration[]> {
  return usersDeclaration;
}
