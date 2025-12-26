import 'dotenv/config';

import { PrismaPg } from '@prisma/adapter-pg';

import { PrismaClient } from "../src/generated/prisma/client";
import { TicketStatus } from "../src/generated/prisma/enums";

const adapter = new PrismaPg({
    connectionString: process.env.DATABASE_URL,
});

const prisma = new PrismaClient({
    adapter
});

const tickets = [
    {
        title: "First Ticket",
        description: "This is the first ticket from seed file",
        status: TicketStatus.OPEN,
    },
    {
        title: "Second Ticket",
        description: "This is the second ticket from seed file",
        status: TicketStatus.IN_PROGRESS,
    },
    {
        title: "Third Ticket",
        description: "This is the third ticket from seed file",
        status: TicketStatus.DONE,
    },
];


export async function main() {
    await prisma.ticket.deleteMany({});
    for (const u of tickets) {
        await prisma.ticket.create({ data: u });
    }
}

main();