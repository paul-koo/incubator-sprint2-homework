import { initialPeople, UserType } from '../HW8';

type ActionType =
    | { type: 'sort'; payload: 'up' | 'down' }
    | { type: 'check'; payload: number };

export const homeWorkReducer = (
    state: UserType[] = initialPeople,
    action: ActionType
): UserType[] => {
    // need to fix any
    switch (action.type) {
        case 'sort': {
            if (action.payload === 'down') {
                // by name
                return [...state].sort((a, b) => {
                    if (a.name > b.name) return -1;
                    if (a.name < b.name) return 1;
                    return 0;
                });
            } else {
                return [...state].sort((a, b) => {
                    if (a.name < b.name) return -1;
                    if (a.name > b.name) return 1;
                    return 0;
                });
            } // need to fix
        }
        case 'check': {
            return state.filter((el) => el.age > 17); // need to fix
        }
        default:
            return state;
    }
};
