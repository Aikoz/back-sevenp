import { Body, Controller, Delete, Get, Param, Patch, Post, Query} from '@nestjs/common';
import { userInfo } from 'os';

@Controller('users')
export class UsersController {
    /*
    GET /users
    GET /users/:id
    POST /users
    PATCH /users/:id
    DELETE /users/:id
    */ 

    @Get() //Get /Users or /users?role=value&age=1
    findAll(@Query('role') role?: 'INTERN' | 'ENGINEER' | 'ADMIN' ){
        return[]
    }

    // @Get('interns') //GET /users/interns
    // findAllInterns(){
    //     return[]
    // }

    @Get(':id') //Get /Users/:id
    findOne(@Param('id') id: String){
        return{id}
    }

    @Post() //POST /users
    create(@Body() user:{}){
        return user
    }

    @Patch(':id') //PATCH /users/:id
    update(@Param('id') id: string, @Body() userUpdate: {}){
        return { id , ...userUpdate}
    }

    @Delete(':id') //Get /Users/:id
    delete(@Param('id') id: String){
        return { id }
    }

}
