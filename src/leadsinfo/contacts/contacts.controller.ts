import { Controller, Get, Param } from '@nestjs/common';
import { ContactsService } from './contacts.service';

@Controller('contacts')
export class ContactsController {
    constructor(
        private readonly contactsService:ContactsService
    ) { }
    @Get(':leadId')
    async getContacts(
        @Param('leadId') leadId:string
    ) {
        let contactsData = await this.contactsService.getAll(leadId)
        return contactsData;
    }
}
