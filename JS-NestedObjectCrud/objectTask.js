// create 
let institute = {
    name: "Innomatics Research Labs",
    location: {
        city: "Hyderabad",
        state: "Telangana",
        country: "India",
        address: {
            area: "Kukatpally",
            pincode: 500072,
            landmark: "Near KPHB"
        }
    },

    contact: {
        email: "info@innomatics.in",
        website: "www.innomatics.in"
    },

    courses: {
        javaFullStack: {
            name: "Java Full Stack",
            duration: "6 Months",
            fee: 30000,
            mode: "Offline",
        },

        dataScience: {
            name: "Data Science",
            duration: "6 Months",
            fee: 35000,
            mode: "Online"
        }
    },
};

// retrieve

console.log(institute.courses.javaFullStack);

console.log(institute.courses.javaFullStack.fee);
console.log(institute.courses.dataScience["fee"]);

// update

institute.courses.javaFullStack.fee = 60000;
institute.courses.dataScience["fee"] = 50000;

// delete 

delete institute.contact;
console.log(institute);
