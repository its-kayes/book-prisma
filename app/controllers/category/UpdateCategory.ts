import { Request, Response, RequestHandler } from 'express';
import catchAsync from '../../../utils/helpers/catchAsync';
import httpStatus from 'http-status'
import sendResponse from '../../../utils/helpers/SendResponse';
import prisma from '../../../utils/helpers/prisma';
import { Category } from '@prisma/client';


const UpdateCategory: RequestHandler = catchAsync(
    async (req: Request, res: Response) => {

        // update Category
        const result = await prisma.category.update({
            where: {
                id: req.params.id
            },
            data: req.body
        });

        sendResponse<Category>(res, {
            statusCode: httpStatus.OK,
            success: true,
            message: 'Category updated successfully!',
            data: result,
        });
    }
)

export default UpdateCategory;