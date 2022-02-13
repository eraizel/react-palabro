export const GAME_TITLE = process.env.REACT_APP_GAME_NAME!

export const WIN_MESSAGES = ['Você é um Gênio!',
  'Parabéns você descobriu a palavra!',
  'Acertou Miserávi!']
export const GAME_COPIED_MESSAGE = 'Jogo copiado para área de trabalho'
export const ABOUT_GAME_MESSAGE = 'Sobre este Jogo'
export const NOT_ENOUGH_LETTERS_MESSAGE = 'Letras insuficientes'
export const WORD_NOT_FOUND_MESSAGE = 'Esta palavra não encontrada'
export const HARD_MODE_ALERT_MESSAGE =
  'Modo difícil só pode ser selecionado no início do jogo!'
export const CORRECT_WORD_MESSAGE = (solution: string) =>
  `A palavra era ${solution}`
export const WRONG_SPOT_MESSAGE = (guess: string, position: number) =>
  `Necessário usar ${guess} na posição ${position}`
export const NOT_CONTAINED_MESSAGE = (letter: string) =>
  `Tentativa precisa conter ${letter}`
export const ENTER_TEXT = 'Entrar'
export const DELETE_TEXT = 'Apagar'
export const STATISTICS_TITLE = 'Estatísticas'
export const GUESS_DISTRIBUTION_TEXT = 'Distribuição de tentativas'
export const NEW_WORD_TEXT = 'Nova palavra em'
export const SHARE_TEXT = 'Compartilhe'
export const TOTAL_TRIES_TEXT = 'Tentativas totais'
export const SUCCESS_RATE_TEXT = 'Taxa de sucesso'
export const CURRENT_STREAK_TEXT = 'Sequência de acertos'
export const BEST_STREAK_TEXT = 'Melhor sequência'
