//hello i am smit


import { Request, Response } from 'express';
import { validationResult } from 'express-validator';
import { responseMessages } from '../../constants/responseMessages';
import {
  extractErrors,
  handleCustomError,
} from '../../utils/customErrors/handleCustomErrors';
import { sendResponse } from '../../utils/sendResponse';
import { get } from '../users/services';

export const createUsers = async (req: Request, res: Response) => {
  try {
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
      const extractedErrors = extractErrors(errors);
      return sendResponse(res, 422, {}, { errors: extractedErrors });
    }

    // write code here
    // const { email } = req.body;
    // const data = await create();
    return sendResponse(res, 201, {}, responseMessages.genericSuccess);
  } catch (err) {
    return handleCustomError(res, err);
  }
};

export const getUsers = async (req: Request, res: Response) => {
  try {
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
      const extractedErrors = extractErrors(errors);
      return sendResponse(res, 422, {}, { errors: extractedErrors });
    }

    const { id } = req.params;
    const data = await get({ id });
    return sendResponse(res, 200, data, responseMessages.genericSuccess);
  } catch (err) {
    return handleCustomError(res, err);
  }
};

export const searchUsers = async (req: Request, res: Response) => {
  try {
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
      const extractedErrors = extractErrors(errors);
      return sendResponse(res, 422, {}, { errors: extractedErrors });
    }

    // write code here
    const data = '';
    return sendResponse(res, 200, data, responseMessages.genericSuccess);
  } catch (err) {
    return handleCustomError(res, err);
  }
};
//my name is mann bhalodiya
//i am changing this file 
export const updateUsers = async (req: Request, res: Response) => {
  try {
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
      const extractedErrors = extractErrors(errors);
      return sendResponse(res, 422, {}, { errors: extractedErrors });
    }

    // write code here
    const data = '';
    return sendResponse(res, 200, data, responseMessages.genericSuccess);
  } catch (err) {
    return handleCustomError(res, err);
  }
};

export const deleteUsers = async (req: Request, res: Response) => {
  try {
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
      const extractedErrors = extractErrors(errors);
      return sendResponse(res, 422, {}, { errors: extractedErrors });
    }

    // write code here
    const data = '';
    return sendResponse(res, 200, data, responseMessages.genericSuccess);
  } catch (err) {
    return handleCustomError(res, err);
  }
};
//edited by mann bhalodiya

//controller.ts edited by chirag