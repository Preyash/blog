import { atom } from 'jotai'

let localData = localStorage.localUsers ? JSON.parse(localStorage.localUsers) : []
export const initialState = atom({ id: null, name: '', username: '' })
export const usersData = atom(localData)
export const editMode = atom(false)