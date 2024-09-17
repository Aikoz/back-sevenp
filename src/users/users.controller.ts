import { Body, Controller, Delete, Get, Param, Patch, Post, Query, ParseIntPipe} from '@nestjs/common';
import { userInfo } from 'os';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-users.dto';
import { UpdateUsersDto } from './dto/update-users.dto';

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
    findOne(@Param('id', ParseIntPipe) id: number){
        return this.usersService.findOne(id)
    }

    @Post() //POST /users
    create(@Body() createUserDto: CreateUserDto){
        return this.usersService.create(createUserDto)
    }

    @Patch(':id') //PATCH /users/:id
    update(@Param('id', ParseIntPipe) id: number, @Body() userUpdate: {name: string, email: string, role: 'INTERN' | 'ENGINEER' | 'ADMIN'}){
        return this.usersService.update(id,userUpdate)
    }

    @Delete(':id') //DELETE /Users/:id
    delete(@Param('id', ParseIntPipe) id: number){
        return this.usersService.delete(id)
    }

}
