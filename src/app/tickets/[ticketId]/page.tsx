import Link from "next/link";

import { Placeholder } from "@/components/placeholder";
import { Button } from "@/components/ui/button";
import { initialTickets } from "@/data";
import { ticketsPath } from "@/paths";

type ticketPageParams = {
    params: Promise<{
        ticketId: string
    }>
}

const TicketPage = async ({ params }: ticketPageParams) => {
    const { ticketId } = await params;
    const ticket = initialTickets.find((t) => t.id === ticketId);

    if (!ticket) {
        return <Placeholder
            label="Ticket not found"
            button={
                <Button asChild variant="outline">
                    <Link href={ticketsPath()}>Go back to Tickets</Link>
                </Button>
            } />;
    }
    return (
        <div>
            <h2 className="text-4xl text-teal-400">{ticket.title}</h2>
            <h2 className="text-2xl text-teal-400">{ticket.description}</h2>
            <h2 className="text-xl text-teal-400">{ticket.status}</h2>

        </div>
    );
}
export default TicketPage;