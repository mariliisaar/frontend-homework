import { useAppSelector } from '../hooks'
import { useDispatch } from 'react-redux'

const DropdownHeader = () => {
    const active = useAppSelector( state => state.company.active)
    const dispatch = useDispatch()
        
    return (
        <div className="nav__menu-header">
            <div className="nav__menu-header-heading">
                Your companies
            </div>
            <div className={`nav__menu-link nav__menu-header-text ${active === 0 ? "nav__menu-active" : ""}`} onClick={() => dispatch({
                type: 'dropdown/company',
                payload: 0
            })}>
                Viljatootja AS
                <i className={`material-icons-outlined nav__menu-active-icon ${active === 0 ? "visible" : ""}`}>
                    check
                </i>
            </div>
            <div className={`nav__menu-link nav__menu-header-text ${active === 1 ? "nav__menu-active" : ""}`} onClick={() => dispatch({
                type: 'dropdown/company',
                payload: 1
            })}>
                Tartu Agro OÜ
                <i className={`material-icons-outlined nav__menu-active-icon ${active === 1 ? "visible" : ""}`}>
                    check
                </i>
            </div>
        </div>
    )
}

export default DropdownHeader