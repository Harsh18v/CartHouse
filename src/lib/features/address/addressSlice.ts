import { addressDummyData, Address } from '@/assets/assets'
import { createSlice } from '@reduxjs/toolkit'


interface AddressState {
    list: Address[];
}

const initialState: AddressState = {
    list: [addressDummyData],
}

const addressSlice = createSlice({
    name: 'address',
    initialState,
    reducers: {
        addAddress: (state, action) => {
            state.list.push(action.payload)
        },
    }
})

export const { addAddress } = addressSlice.actions

export default addressSlice.reducer