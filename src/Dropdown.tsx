import DropdownHeader from './components/DropdownHeader'
import DropdownLinks from './components/DropdownLinks'
import DropdownFooter from './components/DropdownFooter'
import DropdownSeparator from './components/DropdownSeparator'

const Dropdown = () => (
    <div className="nav__menu">
        <DropdownHeader />
        <DropdownSeparator />
        <DropdownLinks />
        <DropdownSeparator />
        <DropdownFooter />
    </div>
)

export default Dropdown