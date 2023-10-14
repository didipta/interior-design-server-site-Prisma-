import httpStatus from "http-status";
import catchAsync from "../../../shared/catchAsync";
import sendResponse from "../../../shared/sendResponse";
import { contentService } from "./content.service";

const insertcontent=catchAsync(async(req,res)=>{
    const result=await contentService.insertcontent(req.body);
    sendResponse(res,{
        statusCode:httpStatus.OK,
        success:true,
        message:"content inserted successfully",
        data:result
    })
}
)
const getcontent=catchAsync(async(req,res)=>{
    const result=await contentService.getcontent();
    sendResponse(res,{
        statusCode:httpStatus.OK,
        success:true,
        message:"content fetched successfully",
        data:result
    })
}
)

const deletecontent=catchAsync(async(req,res)=>{
    const result=await contentService.deletecontent(req.params.id);
    sendResponse(res,{
        statusCode:httpStatus.OK,
        success:true,
        message:"content deleted successfully",
        data:result
    })
}
)


export const contentController={
    insertcontent,
    getcontent,
    deletecontent
}
