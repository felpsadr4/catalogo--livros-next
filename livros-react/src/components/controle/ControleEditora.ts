// Importando a classe Editora
import Editora from '../modelo/Editora';

// Definindo a variável editoras, como Array<Editora>, contendo ao menos três elementos, no formato JSON
const editoras: Editora[] = [
  new Editora(1, 'Editora Josef'),
  new Editora(2, 'Editora Codando'),
  new Editora(3, 'Editora React'),
];

// Criando a classe ControleEditora
class ControleEditora {
  // Implementando o método getEditoras, com o retorno do vetor editoras
  getEditoras(): Editora[] {
    return editoras;
  }

  // Implementando o método getNomeEditora, recebendo codEditora, do tipo numérico, e retornando o nome da editora
  getNomeEditora(codEditora: number): string | undefined {
    const editora = editoras.find((editora) => editora.codEditora === codEditora);
    return editora ? editora.nome : undefined;
  }
}

export default ControleEditora;
