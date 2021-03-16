import { createAction, props } from '@ngrx/store';
import { Payment } from 'src/app/core/model/payment';
import { Response } from 'src/app/core/model/response';

//all categories
export const retrieveAllPayments = createAction('[Payment] payment');
export const initPayments = createAction('[Payment] init payment', props<{response: Response}>());

//create category
export const createPayment = createAction('[Payment] create payment', props<{payment: Payment}>());

//delete category
export const deletePayment = createAction('[Payment] delete payment', props<{payment: Payment}>());