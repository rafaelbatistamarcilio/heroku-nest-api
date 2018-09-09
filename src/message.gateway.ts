import { WebSocketGateway, SubscribeMessage, OnGatewayConnection } from '@nestjs/websockets';
import { Logger } from '@nestjs/common';

@WebSocketGateway()
export class MessageGateway implements OnGatewayConnection {

    public messages: { detail: string, date: Date }[];

    constructor() {
        this.messages = [];
    }

    @SubscribeMessage('chat-message')
    onEvent(client, message: { detail: string, date: Date }): void {
        try {
            Logger.warn('MESSAGE RECIEVED: ' + message.detail);
            this.messages.push(message);
            client.broadcast.emit('chat-message', this.messages);
        } catch (error) {
            Logger.error(error);
        }
    }

    handleConnection(socket) {
        socket.emit('chat-message', this.messages);
    }
}