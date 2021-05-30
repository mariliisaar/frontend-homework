import { Provider } from 'react-redux'
import { shallow } from 'enzyme'
import configureMockStore from 'redux-mock-store'
import DropdownHeader from './components/DropdownHeader'
import DropdownLinks from './components/DropdownLinks'
import DropdownFooter from './components/DropdownFooter'
import DropdownSeparator from './components/DropdownSeparator'

describe('render dropdown footer', () => {
    const testStore = configureMockStore([])
    let store;

    beforeEach(() => {
        store = testStore({
            company: {
                name: 'Firma',
                active: 0
            },
            toggle: {
                open: false
            }
        })
    })

    it('renders header', () => {
      expect(shallow(<Provider store={store}><DropdownHeader /></Provider>)).toMatchSnapshot()
    })

    it('renders links', () => {
        expect(shallow(<Provider store={store}><DropdownLinks /></Provider>)).toMatchSnapshot()
    })

    it('renders footer', () => {
        expect(shallow(<Provider store={store}><DropdownFooter /></Provider>)).toMatchSnapshot()
    })

    it('renders separator', () => {
        expect(shallow(<Provider store={store}><DropdownSeparator /></Provider>)).toMatchSnapshot()
    })
})