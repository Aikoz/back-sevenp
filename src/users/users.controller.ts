import { Body, Controller, Delete, Get, Param, Patch, Post, Query} from '@nestjs/common';
import { userInfo } from 'os';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {

    constructor(private readonly usersService: UsersService)
    {}
    /*
    GET /users
    GET /users/:id
    POST /users
    PATCH /users/:id
    DELETE /users/:id
    */ 

    @Get() //Get /Users or /users?role=value&age=1
    findAll(@Query('role') role?: 'INTERN' | 'ENGINEER' | 'ADMIN' ){
        return this.usersService.findAll(role)
    }

    // @Get('interns') //GET /users/interns
    // findAllInterns(){
    //     return[]
    // }

    @Get(':id') //Get /Users/:id
    findOne(@Param('id') id: String){
        return this.usersService.findOne(+id)
    }

    @Post() //POST /users
    create(@Body() user:{name: string, email: string, role: 'INTERN' | 'ENGINEER' | 'ADMIN'}){
        return this.usersService.create(user)
    }

    @Patch(':id') //PATCH /users/:id
    update(@Param('id') id: string, @Body() userUpdate: {name: string, email: string, role: 'INTERN' | 'ENGINEER' | 'ADMIN'}){
        return this.usersService.update(+id,userUpdate)
    }

    @Delete(':id') //DELETE /Users/:id
    delete(@Param('id') id: String){
        return this.usersService.delete(+id)
    }

}
