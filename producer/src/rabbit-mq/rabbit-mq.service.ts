import { Inject, Injectable } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { lastValueFrom } from 'rxjs';

@Injectable()
export class RabbitMQService {
    constructor(@Inject('rabbit-mq-module') private readonly client: ClientProxy) {}

    public send(pattern: string, data: any) {
        return lastValueFrom(this.client.send(pattern, data));
    }
}
