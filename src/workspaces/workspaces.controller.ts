import { Controller, Delete, Get, Post } from '@nestjs/common';
import { User } from 'src/common/decorators/user.decorator';
import { Users } from 'src/entities/Users';
import { WorkspacesService } from 'src/workspaces/workspaces.service';

@Controller('api/workspaces')
export class WorkspacesController {
  constructor(private workspacesService: WorkspacesService) {}
  @Get()
  async getMyWorkspaces(@User() user: Users) {
    return this.workspacesService.findMyWorkspaces(user.id);
  }

  @Post()
  createWorkspace() {}

  @Get('url/members')
  getAllMembersFromWorkspace() {}

  @Post(':url/members')
  inviteMembersToWorkspace() {}

  @Delete(':url/members/:id')
  kickMemberInfoInWorkspace() {}
}
