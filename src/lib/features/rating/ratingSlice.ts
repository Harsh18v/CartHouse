import { createSlice } from '@reduxjs/toolkit'

interface RatingState {
    ratings: Array<{
        orderId?: string;
        productId?: string;
        rating: number;
        [key: string]: unknown;
    }>;
}

const initialState: RatingState = {
    ratings: [],
}

const ratingSlice = createSlice({
    name: 'rating',
    initialState,
    reducers: {
        addRating: (state, action) => {
            state.ratings.push(action.payload)
        },
    }
})

export const { addRating } = ratingSlice.actions

export default ratingSlice.reducer