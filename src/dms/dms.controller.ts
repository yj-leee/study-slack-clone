import { Controller, Post, Get, Param, Query, Body } from '@nestjs/common';
import { ApiParam, ApiQuery, ApiTags } from '@nestjs/swagger';
import { query } from 'express';

@ApiTags('DM')
@Controller('api/workspaces/:url/dms')
export class DmsController {
    @ApiParam({
        name: 'url',
        required: true,
        description: '워크스페이스 url',
    })
    @ApiParam({
        name: 'id',
        required: true,
        description: '사용자 id',
    })
    @ApiQuery({
        name: 'perPage',
        required: true,
        description: '한 번에 가져오는 개수',
    })
    @ApiQuery({
        name: 'page',
        required: true,
        description: '불러올 페이지',
    })
    @Get(':id/chats')
    getChat(@Query() query, @Param() param) {
        console.log(query.perPage, query.page);
        console.log(param.id, param.url);
    }

    @Post(':id/chats')
    postChat(@Body() body) {

    }
}

