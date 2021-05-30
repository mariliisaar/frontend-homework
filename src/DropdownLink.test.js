import { Provider } from 'react-redux'
import { shallow } from 'enzyme'
import configureMockStore from 'redux-mock-store'
import DropdownLink from './DropdownLink'

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

    it('renders link', () => {
      expect(shallow(<Provider store={store}><DropdownLink /></Provider>)).toMatchSnapshot()
    })
})