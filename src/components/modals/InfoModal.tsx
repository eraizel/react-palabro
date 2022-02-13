import { Cell } from '../grid/Cell'
import { BaseModal } from './BaseModal'

type Props = {
  isOpen: boolean
  handleClose: () => void
}

export const InfoModal = ({ isOpen, handleClose }: Props) => {
  return (
    <BaseModal title="Como Jogar Palabro" isOpen={isOpen} handleClose={handleClose}>
      <p className="text-sm text-gray-500 dark:text-gray-300">
        Você possui 6 tentativas para descobrir a palavra do dia. Depois de cada
        tentativa, a cor das letras mudam para indicar o quão próximo da
        resposta você está.
      </p>

      <div className="flex justify-center mb-1 mt-4">
        <Cell value="V" status="correct" />
        <Cell value="E" />
        <Cell value="R" />
        <Cell value="D" />
        <Cell value="E" />
      </div>
      <p className="text-sm text-gray-500 dark:text-gray-300">
        A letra V existe na palavra e está no lugar certo.
      </p>

      <div className="flex justify-center mb-1 mt-4">
        <Cell value="P" />
        <Cell value="R" />
        <Cell value="A" status="present" />
        <Cell value="T" />
        <Cell value="O" />
      </div>
      <p className="text-sm text-gray-500 dark:text-gray-300">
        A letra A existe na palavra mas está na posição errada.
      </p>

      <div className="flex justify-center mb-1 mt-4">
        <Cell value="G" />
        <Cell value="R" />
        <Cell value="A" />
        <Cell value="Ç" status="absent" />
        <Cell value="A" />
      </div>
      <p className="text-sm text-gray-500 dark:text-gray-300">
        A letra Ç não existe na palavra.
      </p>
    </BaseModal>
  )
}
