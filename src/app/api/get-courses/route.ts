import mongoose from "mongoose";
import { Course } from "@/model/Course";
import CourseModel from "@/model/Course";
import dbConnect from "@/lib/dbConnect";
import { coursesArray } from "@/data/courses";


export async function GET(request: Request){

    await dbConnect();

   console.log("Initiating GET request for courses")

   try {
    
    const courses = await CourseModel.find({}).exec();

    console.log(courses);

    if(!courses || courses.length === 0){

        console.log("No courses found")

        
        return Response.json(
            {
                success: false,
                message: "No courses found",
            },
            { status: 404 }
        );
    }

    console.log("Courses: ", courses)

    return Response.json(
        {
            success: true,
            message: "All Courses found successfully",
            courses: courses
        },
        { status: 200 }
    );
   } catch (error) {
    
    console.log("Error in getting all courses: ", error)

    return Response.json(
        {
            success: false,
            message: "Error in getting all courses",
        },
        { status: 500 }
    );
   }
}