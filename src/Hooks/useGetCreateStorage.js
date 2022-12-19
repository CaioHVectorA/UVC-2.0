import React from 'react'

const useGetCreateStorage = (chave,inicial) => {
    const [state,setState] = React.useState(() => {
        const local = localStorage.getItem(chave);
        // console.log(chave,local)
        return local ? local : inicial
})
React.useEffect(() => {
    window.localStorage.setItem(chave,state)
}, [state, chave])
return [state,setState]
}
export default useGetCreateStorage