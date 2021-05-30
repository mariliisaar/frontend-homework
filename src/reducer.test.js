import reducer from './reducer'

describe('reducers', () => {
    it('should return the initial state', () => {
        expect(reducer(undefined, {})).toEqual(
            {
                toggle: {
                    open: false
                },
                company: {
                    active: 0,
                    name: "Viljatootja AS"
                }
                
            }
        )
    })

    it('should handle opening dropdown', () => {
        expect(reducer(undefined, {
            type: "dropdown/toggle"
        }).toggle).toEqual(
            {
                open: true
            }
        )
    })

    it('should handle closing dropdown', () => {
        expect(reducer(undefined, {
            type: "dropdown/close"
        }).toggle).toEqual(
            {
                open: false
            }
        )
    })

    it('should handle closing dropdown when company is selected', () => {
        expect(reducer(undefined, {
            type: "dropdown/company"
        }).toggle).toEqual(
            {
                open: false
            }
        )
    })

    it('should change active company to Tartu Agro OÜ', () => {
        expect(reducer(undefined, {
            type: "dropdown/company",
            payload: 1
        }).company).toEqual(
            {
                name: 'Tartu Agro OÜ',
                active: 1
            }
        )
    })

    it('should change active company to Viljatootja AS', () => {
        expect(reducer(undefined, {
            type: "dropdown/company",
            payload: 0
        }).company).toEqual(
            {
                name: 'Viljatootja AS',
                active: 0
            }
        )
    })
})