import { Controller, Get } from '@nestjs/common';
import { Ctx, MessagePattern, Payload, RmqContext } from '@nestjs/microservices';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}
  
  @MessagePattern('rabbit-mq-producer')
  public async execute(
    @Payload() data: any,
    @Ctx() context: RmqContext
  ) {
    const channel = context.getChannelRef();
    const originalMessage = context.getMessage();

    console.log('data', data);
    // TODO: uncomment to demonstrate handling of long-running processes
    // await this.appService.mySuperLongProcessOfUser(data);

    channel.ack(originalMessage);
  }

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }
}
