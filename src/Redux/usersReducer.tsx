import React from 'react';
import {DreamType, StoreType} from "./State";

let initialState: InitialStateType = {
    users: [ ]
}

export type UserType = {
    id: number
    photoURL: string
    followed: boolean
    fullName: string
    status: string
    location: { city: string, country: string }
}

export type InitialStateType = {
    users: Array<UserType>

}

export const usersReducer = (state = initialState, action: UsersActionsType): InitialStateType => {

    switch (action.type) {
        case 'FOLLOW':
            debugger
            return {
                ...state,
                users: state.users.map(t => {
                    if (t.id ===action.userId){
                        return {...t, followed:true}
                    }
                    return t;
                })
            }
        case 'UNFOLLOW':
            return {
                ...state,
                users: state.users.map(t => {
                    if (t.id ===action.userId){
                        return {...t, followed:false}
                    }
                    return t;
                })
            }
        case "SET-USERS":
            return {...state, users: [...state.users, ...action.users]}
        default:
            return state
    }
}

export const followAC = ( userId: number) => {
    return {
        type: "FOLLOW",
        userId: userId
    } as const
}

export const unFollowAC = ( userId: number) => {
    return {
        type: "UNFOLLOW",
        userId: userId
    } as const
}
export const setUsersAC = ( users: Array<UserType>) => {
    return {
        type: "SET-USERS",
        users: users
    } as const
}


type ChangeUserFollowType = ReturnType<typeof followAC>
type ChangeUserUnFollowType = ReturnType<typeof unFollowAC>
type SetUsersType = ReturnType<typeof setUsersAC>
type UsersActionsType = ChangeUserFollowType | ChangeUserUnFollowType | SetUsersType

