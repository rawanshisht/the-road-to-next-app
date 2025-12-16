import Link from "next/link";

import { Placeholder } from "@/components/placeholder";
import { Button } from "@/components/ui/button";
import { initialTickets } from "@/data";
import { TicketItem } from "@/features/ticket/components/ticket-item";
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
        <div className="flex justify-center animate-fade-in-from-top">
            <TicketItem ticket={ticket} isDetail />
        </div>
    );
}
export default TicketPage;