interface IMember {
    title: string;
    name: string;
    phoneNumber?: string; 
    email: string;
}

export const boardMemberData: IMember[] = [
    {
        title: "Puheenjohtaja",
        name: "Jaakko Kolmonen",
        phoneNumber: "+358 40 12312312",
        email: "jaakko.kolmonen@gmail.com"
    },
    {
        title: "Varapuheenjohtaja",
        name: "Veijo Vanamo",
        email: "veijo.vanamo@outlook.fi"
    },
    {
        title: "Sihteeri",
        name: "Pekka Mattila",
        email: "mattilan.pekka@gmail.com"
    },
    {
        title: "Taloudenhoitaja",
        name: "Matti Pekkala",
        email: "pekkalan.matti@gmail.com"
    },
]