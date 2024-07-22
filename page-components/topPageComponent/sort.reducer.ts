import {SortEnum} from "@/components/sort/Sort.props";
import {ProductModel} from "@/interfaces/product.interface";

export type SortActions = { type: SortEnum.Price } | { type: SortEnum.Rating }

export interface SortReducerState {
    sort: SortEnum,
    products: ProductModel[]
}

export const sortReducer = (state: SortReducerState, action: SortActions): SortReducerState => {
    switch (action.type) {
        case SortEnum.Price:
            return {
                ...state,
                sort: SortEnum.Price,
                products: [...state.products].sort((a, b) => a.price - b.price)
            }
        case SortEnum.Rating:
            return {
                ...state,
                sort: SortEnum.Rating,
                products: [...state.products].sort((a, b) => a.initialRating - b.initialRating)
            }
        default:
            throw new Error('Неверный тип сортировки');

    }
}