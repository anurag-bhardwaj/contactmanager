const initialState = {
    contacts: [
        {
            id: 1,
            name: "Anurag",
            email: "anurag.bhardwajcpp@gmail.com",
            phone: "111-111-1111"
        },
        {
            id: 2,
            name: "Golu Bhardwaj",
            email: "sgolu.bhardwajcpp@gmail.com",
            phone: "222-222-2222"
        }
    ]
}

export default function (state = initialState, action) {
    switch (action.type) {
        case "GET_CONTACTs":
            return {
                ...state
            }
        case "DELETE_CONTACT":
            return {
                ...state,
                contacts: state.contacts.filter(contact => contact.id !== action.payload)
            }
        case "ADD_CONTACT":
            return {
                ...state,
                contacts: [...state.contacts, action.payload]
            }
        case "UPDATE_CONTACT":
            return {
                ...state,
                contacts: state.contacts.map(contact =>`${contact.id}` === action.payload.id ? (contact = action.payload) : contact)
            }
        default:
            return state;
    }
}