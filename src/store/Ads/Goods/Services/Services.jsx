import { createArticle, deleteArticle, fetchGoods, updateArticle } from "../Api.jsx"

//масив з асинхронними функціями
const arrThunk = [createArticle, deleteArticle, fetchGoods, updateArticle];
//Створюємо різні функції для обробки стану в залежності від різних стадій асинхронних операцій
export const thunkFunction = (type)=>arrThunk.map(el=>el[type])

// запит в стані виконання
export const handlePending = (state) => {
  state.isLoading = true
}
//якщо сталася помилка при виконанні запиту
export const handleRejected = (state, action) => {
  state.isLoading = false
  state.error = action.payload
}
// успішне виконання запиту
export const handleFulfilled = (state) => {
  state.isLoading = false
  state.error = ''
}
//Обробляємо стан після успішного отримання даних і їх оновлюємо
   export const handleFulfilledGet = (state, action) => {
      state.items = action.payload
   }
//Обробляємо стан після успішного створення об'єкта та додаємо його до state.items
  export const handleFulfilledCreate = (state, action) => {
      state.items.push(action.payload)
  }
//Обробляємо стан після успішного видалення об'єкта та видаляємо його зі state.items
  export  const handleFulfilledDelete = (state, action) => {
      state.items = state.items.filter(item => item.id!==action.payload.id)
    }