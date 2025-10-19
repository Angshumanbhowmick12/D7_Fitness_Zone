import {Request} from "express"
import { Role } from "../generated/prisma";

export function isAuthenticated(req:Request): req is Request & {user :{id: string; email:string; role:Role}}{
    return !!req.user;
}