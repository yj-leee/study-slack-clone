import { Body, Controller, Get, Post, Req, Res } from '@nestjs/common';
import { JoinRequestDto } from 'src/users/dto/join.request.dto';
import { UsersService } from 'src/users/users.service';

@Controller('api/users')
export class UsersController {
    constructor(private usersService: UsersService) {
        
    }
    @Get()
    getUesrs(@Req() req) {
        return req.user;
    }

    @Post()
    postUsers(@Body() data: JoinRequestDto) {
        this.usersService.postUsers(data.email, data.nickname, data.password);
    }
    
    @Post('login')
    logIn(@Req() req) {
        return req.user;
    }

    @Post('logout')
    logOut(@Req() req, @Res() res) {
        req.logOut();
        res.clearCookie('connect.sid', {httpOnly: true});
        res.send('ok');
    }
