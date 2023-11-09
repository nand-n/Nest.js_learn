import { Body, Controller, Get, Param, Post } from '@nestjs/common';

@Controller('users')
export class UsersController {
  @Get() // GET /users
  getUsers() {
    return { username: 'anson', email: 'anson@mail.com' };
  }
  @Get('posts')
  getUsersPost() {
    return {
      username: 'anson',
      email: 'anson@mail.com',
      posts: [
        {
          id: 1,
          title: 'Post 1',
        },
        {
          id: 2,
          title: 'Post 2',
        },
      ],
    };
  }
  @Get(':id') // GET /users/:id
  findOne(@Param('id') id: string) {
    return { id };
  }
  @Post() // POST /users
  create(@Body() user: {}) {
    return user;
  }
}
