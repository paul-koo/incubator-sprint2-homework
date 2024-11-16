const initState: ThemeStateType = {
    themeId: 1,
};

type ThemeStateType = { themeId: number };

export const themeReducer = (
    state = initState,
    action: ActionType
): ThemeStateType => {
    // fix any

    switch (action.type) {
        // дописать
        case 'SET_THEME_ID': {
            return { themeId: action.id };
        }
        default:
            return state;
    }
};

export const changeThemeId = (id: number): ChangeThemeIdType =>
    ({ type: 'SET_THEME_ID', id } as const); // fix any

type ActionType = ChangeThemeIdType;

type ChangeThemeIdType = {
    type: 'SET_THEME_ID';
    id: number;
};
