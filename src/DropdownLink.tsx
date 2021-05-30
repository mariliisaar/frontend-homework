import { useAppSelector } from './hooks'
import { useDispatch } from 'react-redux'
import Dropdown from './Dropdown'
import { useRef, useEffect } from 'react'

const DropdownLink = () => {
    function ClickOutsideMenu(ref: React.RefObject<Element>) {
      useEffect(() => {
        function closeMenu(e: any) {
          if (ref.current && !ref.current.contains(e.target)) {
            dispatch({type: 'dropdown/close'})
          }
        }
    
        document.addEventListener('mousedown', closeMenu)
        return () => {
          document.removeEventListener('mousedown', closeMenu)
        }
      }, [ref])
    }
    const open = useAppSelector( state => state.toggle.open)
    const company = useAppSelector( state => state.company.name)
    const dispatch = useDispatch()
    const closeRef = useRef(null)
    ClickOutsideMenu(closeRef)

    return (
      <div ref={closeRef}>
        <div className="nav__link" onClick={() => dispatch({type: 'dropdown/toggle'})}>
          <div className="nav__link-text-wrapper">
            <div className="nav__link-text">
              Elon Musk
            </div>
  
            <div className="nav__link-subtext">
              { company }
            </div>
          </div>
  
          <i className="material-icons-outlined nav__link-icon">
            settings
          </i>
        </div>
        { open && <Dropdown /> }
      </div>
    )
}

export default DropdownLink