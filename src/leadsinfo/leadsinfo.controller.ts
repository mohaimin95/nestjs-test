import { Controller, Post, Body, Req, Get, Param, Delete } from '@nestjs/common';
import { LeadsinfoService } from './leadsinfo.service';

@Controller('leadsinfo')
export class LeadsinfoController {
    constructor(
        private readonly leadsService:LeadsinfoService
    ) {}
    @Post()
    async save(
        @Body() body,
        @Req() req
        )  {
        let leadsObj = {
            companyname:body.companyname,
            contacts:[{
                name:body.contactname,
                email:"",
                phoneno:""
            }],
            createdBy:req.user._id
        }
        let data = await this.leadsService.save(leadsObj)
        return data;
    }
    @Get()
    async get(
        @Req() req
        )  {
        let data = await this.leadsService.get(req.user);
        return data;
    }
    
    
    @Get(':id')
    async getById(
        @Req() req:any,
        @Param('id') id:string
    )  {
        let data = await this.leadsService.getById(id,req.user);
        return data;
    }
    
    @Delete(':id')
    async delete(
        @Req() req:any,
        @Param('id') id:string
    )  {
        let success = await this.leadsService.delete(id,req.user);
        return {data: success};
    }
}