import { NavLink, useParams } from "react-router"
import { useQuery } from "@tanstack/react-query"

import { Button } from "@/components/ui/button"
import { ScrollArea } from "@/components/ui/scroll-area"

import { getClients } from "../fake/fake-data"


const ContactList = () => {

    const { clientId } = useParams();

    const { data: clients, isLoading } = useQuery({
        queryKey: ['clients'],
        queryFn: () => getClients(),
        staleTime: 1000 * 60 * 5, // 5 minutes
    })

    return (
        <ScrollArea className="h-[calc(100vh-64px)]">
            <div className="space-y-4 p-4">
                <div className="space-y-1">
                    {isLoading ? (
                        <div className="animate-pulse">
                            <div className="h-4 w-3/4 bg-gray-300 rounded mb-2"></div>
                            <div className="h-4 w-full bg-gray-300 rounded mb-2"></div>
                            <div className="h-4 w-5/6 bg-gray-300 rounded mb-2"></div>
                        </div>
                    ) : null}
                    <h3 className="px-2 text-sm font-semibold">Contacts</h3>
                    <div className="space-y-1">
                        {clients?.map((client) => (
                            <NavLink
                                key={client.id}
                                to={`/chat/${client.id}`}
                                className={({ isActive }) => `w-full flex justify-start rounded-md transition-all duration-300 
                            ${isActive ?
                                        'bg-primary/10 text-primary'
                                        :
                                        'text-gray-300 hover:bg-gray-100'
                                    }`}
                            >
                                <div className={`h-6 w-6 rounded-full mr-2 flex-shrink-0 flex items-center justify-center text-xs ${client.id === clientId ? 'bg-blue-400 text-blue-600 font-medium' : 'bg-gray-300 text-white'
                                    }`}>
                                    {client.name.charAt(0).toUpperCase() + client.name.charAt(1).toUpperCase()}
                                </div>
                                <span className={`transition-all duration-300
                                    ${client.id === clientId
                                        ? 'text-blue-600 font-medium'
                                        :
                                        'text-gray-600'}
                                `}>
                                    {client.name}
                                </span>
                            </NavLink>
                        ))}
                    </div>
                </div>
                <div className="pt-4 border-t mt-4">
                    <h3 className="px-2 text-sm font-semibold mb-1">Recent</h3>
                    <Button variant="ghost" className="w-full justify-start mt-3 mr-3">
                        <div className="h-6 w-6 rounded-full bg-gray-300 mr-2 flex-shrink-0 flex items-center justify-center text-white text-xs">
                            TM
                        </div>
                        Thomas Miller
                    </Button>
                    <Button variant="ghost" className="w-full justify-start mt-3 mr-3">
                        <div className="h-6 w-6 rounded-full bg-red-500 mr-2 flex-shrink-0 flex items-center justify-center text-white text-xs">
                            SB
                        </div>
                        Sarah Brown
                    </Button>
                </div>
            </div>
        </ScrollArea>
    )
}

export default ContactList