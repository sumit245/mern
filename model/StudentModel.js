const mongoose = require('mongoose')

const Students = new mongoose.Schema(
    {
        form_No : String,
        form_date : String,
        regisitraton_No : String,
        batch : String,
        course : String,
        Date_of_Admission : String,
        studentName: String,
        fatherName : String,
        motherName : String,
        rollNumber : String,
        calss : String,
        students_DoB : String,
        parentName : String,
        address :String,
        post_Code : String,
        pin_Code :String,
        date_of_birth :String,
        place_of_birth : String,
        blood_group : String,
        Category : String,
        office : String,
        city : String,
        county : String,
        phone : String,
        emill : String,
        name_of_the_applicart : String,
        course_applied_for : String,


        


    },
    {
        timestamps: { createdAt: true, updatedAt: true }
    }
)

module.exports = mongoose.model("Students", Students);
