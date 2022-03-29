import { Body, Controller, Get, Post, Req, Res } from '@nestjs/common';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { JoinRequestDto } from 'src/users/dto/join.request.dto';
import { UsersService } from 'src/users/users.service';

@ApiTags('USER')
@Controller('api/users')
export class UsersController {
    constructor(private usersService: UsersService) {
        
    }
    @ApiOperation({summary:'내 정보 조회'})
    @Get()
    getUesrs(@Req() req) {
        return req.user;
    }
    @ApiOperation({summary:'회원가입'})
    @Post()
    postUsers(@Body() data: JoinRequestDto) {
        this.usersService.postUsers(data.email, data.nickname, data.password);
    }
    @ApiOperation({summary:'로그인'})
    @Post('login')
    logIn(@Req() req) {
        return req.user;
    }
    @ApiOperation({summary:'로그아웃'})
    @Post('logout')
    logOut(@Req() req, @Res() res) {
        req.logOut();
        res.clearCookie('connect.sid', {httpOnly: true});
        res.send('ok');
    }
}
