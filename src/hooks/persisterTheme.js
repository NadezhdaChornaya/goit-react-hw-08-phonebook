import { useState, useEffect } from 'react';



const usePersisterThemeHook = (key, initialState) => {
    const [state, setState] = useState(() => {
        const storageValue = localStorage.getItem('theme')
        if (storageValue) {
            return JSON.parse(storageValue)
        } else return initialState
    })

    useEffect(() => {
        localStorage.setItem(key, JSON.stringify(state))
    }, [key, state])
    return [state, setState]
}

export default usePersisterThemeHook

// const [state, setState] = usePersitedTheme()