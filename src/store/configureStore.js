
export function configureStore(){
    return createStore(rootReducer, devToolsEnhancer())
}