import { useDispatch } from 'react-redux'

const DropdownLinks = () => {
    const dispatch = useDispatch()

    return (
        <div className="nav__menu-links">
            <div className="nav__menu-link" onClick={() => dispatch({type: 'dropdown/close'})}>
                <i className="material-icons-outlined nav__menu-link-icon">
                    phone_iphone
                </i>
                <div className="nav__menu-link-text">
                    Get the mobile app
                </div>
            </div>
            <div className="nav__menu-link" onClick={() => dispatch({type: 'dropdown/close'})}>
                <i className="material-icons-outlined nav__menu-link-icon">
                    people
                </i>
                <div className="nav__menu-link-text">
                    Community
                </div>
            </div>
            <div className="nav__menu-link" onClick={() => dispatch({type: 'dropdown/close'})}>
                <i className="material-icons-outlined nav__menu-link-icon">
                    class
                </i>
                <div className="nav__menu-link-text">
                    Knowledge base
                </div>
            </div>
        </div>
    )
}

export default DropdownLinks