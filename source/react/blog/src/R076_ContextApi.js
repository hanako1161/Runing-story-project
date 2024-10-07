import React from 'react';
import Children from "./contextChildren";
//contextChildren 자식
const {Provider, Consumer} = React.createContext()
export {Consumer}

class R076_ContextApi extends React.Component {
    render() {
        return (
            <Provider value='100,000'>
                <Children />
            </Provider>
        )
    }
}

export default R076_ContextApi