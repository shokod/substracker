import { Router } from "express";

const subscriptionRouter = Router();

subscriptionRouter.get('/', (req, res) => res.send( {title:'Get all subscriptions'}));
subscriptionRouter.post('/', (req, res) => res.send( {title:'Create a new subscription'}));
subscriptionRouter.get('/:id', (req, res) => res.send( {title:'Get subscription details'}));
subscriptionRouter.put('/:id', (req, res) => res.send( {title:'Update subscription'}));
subscriptionRouter.delete('/:id', (req, res) => res.send( {title:'Delete subscription'}));
subscriptionRouter.post('/:id/renew', (req, res) => res.send( {title:'Renew subscription'}));
subscriptionRouter.post('/:id/cancel', (req, res) => res.send( {title:'Cancel subscription'}));
subscriptionRouter.get('/user/:id', (req, res) => res.send( {title:'Get all user subscriptions'}));
subscriptionRouter.get('/upcoming-renewals', (req, res) => res.send( {title:'Get upcoming renewals'}));

export default subscriptionRouter;
