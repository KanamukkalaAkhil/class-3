const Users = [
    {
        id: 1,
        name: 'Anil',
        email: "kumar1123@gmail.com",
        age: 20,
        address: {
            city: 'Bangalore',
            pin:'564329'
        },
        bank: [
            {
                accNo: 12334,
                bName:'SBI',
                type: 'Savings'
            },
            {
                accNo:4334,
                bName: 'HDFC',
                type: 'Current'
                
            }
        ]
    },

    {
        id: 2,
        name: "Bharth",
        email: "bharth11@gmail..com",
        age: 19,
        address: {
            city: 'Bangalore',
            pin: '526897'
        },
        bank: [
            {
                accNo: 65432,
                bName:'BOI',
                type: 'Savings'
            },
            {
                accNo: 56229,
                bName: 'AXIS',
                type: 'Current'
                
            }
        ]
    }
]

export default Users