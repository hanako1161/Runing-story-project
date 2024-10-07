import React from 'react'
import  {Consumer}  from "../R076_ContextApi";

class contextChildren2 extends React.Component {
    render () {
        return (
                                            //제이쿼리문법인 $
            <Consumer>
                {contextValue=> <h3>{`contextChildren2 contextValue : ${contextValue}`}</h3>}
            </Consumer>
        )
    }
}
export default contextChildren2