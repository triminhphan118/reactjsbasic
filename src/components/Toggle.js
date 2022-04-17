import React from "react";
import './StyleToggle.scss'

class Toggle extends React.Component {
    state = {
        isShow : false
    }

    handleShow = (status) => {
        this.setState({
            isShow : !status
        })
    }

    render() {
        let {jobs} = this.props;
        return (
            <>

                {
                    (this.state.isShow) ?  <button onClick={() => this.handleShow(true)}>show</button>
                    :
                    <>
                    {
                        jobs.map((item, index) => {
                            return (
                                <ul className="list" key={index}>
                                <li>
                                    <span>{item.name}</span>
                                    <span>{item.price}</span>
                                </li>
                                </ul>
                            )
                        })
                    }
                        <button onClick={() => this.handleShow(false)}>hide</button>
                    </>
                }
            </>

        )
    }
}


export default Toggle;