import { Request, Response, RequestHandler } from 'express';
import catchAsync from '../../../utils/helpers/catchAsync';
import httpStatus from 'http-status'
import sendResponse from '../../../utils/helpers/SendResponse';
import prisma from '../../../utils/helpers/prisma';
import { User } from '@prisma/client';

const GetProfile: RequestHandler = catchAsync(
    async (req: Request, res: Response) => {

        // get all users
        const result = await prisma.user.findUnique({
            where: {
                id: req?.user?.userId,
            },
        });

        sendResponse<User>(res, {
            statusCode: httpStatus.OK,
            success: true,
            message: 'Profile retrived successfully!',
            data: result,
        });
    }
)

export default GetProfile;