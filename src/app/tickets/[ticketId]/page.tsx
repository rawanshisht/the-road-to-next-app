import { initialTickets } from "@/data";

type ticketPageParams = {
    params: Promise<{
        ticketId: string
    }>
}

const TicketPage = async ({ params }: ticketPageParams) => {
    const { ticketId } = await params;
    const ticket = initialTickets.find((t) => t.id === ticketId);

    if (!ticket) {
        return <div>Ticket not found</div>;
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