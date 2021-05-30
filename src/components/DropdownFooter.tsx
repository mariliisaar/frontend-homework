import { useDispatch } from 'react-redux'

const DropdownFooter = () => {
    const dispatch = useDispatch()

    return(
        <div className="nav__menu-footer">
            <div className="nav__menu-footer-links">
                <div className="nav__menu-link" onClick={() => dispatch({type: 'dropdown/close'})}>
                    <i className="material-icons-outlined nav__menu-link-icon">
                        settings
                    </i>
                    <div className="nav__menu-link-text">
                        Settings
                    </div>
                </div>
                <div className="nav__menu-link logout" onClick={() => dispatch({type: 'dropdown/close'})}>
                    <i className="material-icons-outlined nav__menu-link-icon">
                        exit_to_app
                    </i>
                    <div className="nav__menu-link-text">
                        Log out
                    </div>
                </div>
            </div>
        </div>
    )
}

export default DropdownFooter