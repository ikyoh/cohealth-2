import PageContent from "@/components/page-content"
import { SidebarLeft } from "@/components/sidebar-left"
import {
    Avatar,
    AvatarFallback,
    AvatarImage,
} from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Input } from "@/components/ui/input"
import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableHead,
    TableHeader,
    TableRow
} from "@/components/ui/table"
import { ChevronDown, CirclePlus, EllipsisVertical } from "lucide-react"

const invoices = [
    {
        invoice: "INV001",
        paymentStatus: "Paid",
        colab: "CG",
        totalAmount: "$250.00",
        paymentMethod: "Credit Card",
    },
    {
        invoice: "INV002",
        paymentStatus: "Pending",
        colab: "CG",
        totalAmount: "$150.00",
        paymentMethod: "PayPal",
    },
    {
        invoice: "INV003",
        paymentStatus: "Unpaid",
        colab: "CG",
        totalAmount: "$350.00",
        paymentMethod: "Bank Transfer",
    },
    {
        invoice: "INV004",
        paymentStatus: "Paid",
        colab: "CG",
        totalAmount: "$450.00",
        paymentMethod: "Credit Card",
    },
    {
        invoice: "INV005",
        paymentStatus: "Paid",
        colab: "CG",
        totalAmount: "$550.00",
        paymentMethod: "PayPal",
    },
    {
        invoice: "INV006",
        paymentStatus: "Pending",
        colab: "CG",
        totalAmount: "$200.00",
        paymentMethod: "Bank Transfer",
    },
    {
        invoice: "INV007",
        paymentStatus: "Unpaid",
        colab: "CG",
        totalAmount: "$300.00",
        paymentMethod: "Credit Card",
    },
    {
        invoice: "INV008",
        paymentStatus: "Paid",
        colab: "CG",
        totalAmount: "$250.00",
        paymentMethod: "Credit Card",
    },
    {
        invoice: "INV009",
        paymentStatus: "Pending",
        colab: "CG",
        totalAmount: "$150.00",
        paymentMethod: "PayPal",
    },
    {
        invoice: "INV010",
        paymentStatus: "Unpaid",
        colab: "CG",
        totalAmount: "$350.00",
        paymentMethod: "Bank Transfer",
    },
    {
        invoice: "INV011",
        paymentStatus: "Paid",
        colab: "CG",
        totalAmount: "$450.00",
        paymentMethod: "Credit Card",
    },
    {
        invoice: "INV012",
        paymentStatus: "Paid",
        colab: "CG",
        totalAmount: "$550.00",
        paymentMethod: "PayPal",
    },
    {
        invoice: "INV013",
        paymentStatus: "Pending",
        colab: "CG",
        totalAmount: "$200.00",
        paymentMethod: "Bank Transfer",
    },
    {
        invoice: "INV014",
        paymentStatus: "Unpaid",
        colab: "CG",
        totalAmount: "$300.00",
        paymentMethod: "Credit Card",
    },
    {
        invoice: "INV015",
        paymentStatus: "Paid",
        colab: "CG",
        totalAmount: "$250.00",
        paymentMethod: "Credit Card",
    },
    {
        invoice: "INV016",
        paymentStatus: "Pending",
        colab: "CG",
        totalAmount: "$150.00",
        paymentMethod: "PayPal",
    },
    {
        invoice: "INV017",
        paymentStatus: "Unpaid",
        colab: "CG",
        totalAmount: "$350.00",
        paymentMethod: "Bank Transfer",
    },
    {
        invoice: "INV018",
        paymentStatus: "Paid",
        colab: "CG",
        totalAmount: "$450.00",
        paymentMethod: "Credit Card",
    },
    {
        invoice: "INV019",
        paymentStatus: "Paid",
        colab: "CG",
        totalAmount: "$550.00",
        paymentMethod: "PayPal",
    },
    {
        invoice: "INV020",
        paymentStatus: "Pending",
        colab: "CG",
        totalAmount: "$200.00",
        paymentMethod: "Bank Transfer",
    },
    {
        invoice: "INV021",
        paymentStatus: "Unpaid",
        colab: "CG",
        totalAmount: "$300.00",
        paymentMethod: "Credit Card",
    },
    {
        invoice: "INV0022",
        paymentStatus: "Paid",
        colab: "CG",
        totalAmount: "$250.00",
        paymentMethod: "Credit Card",
    },
    {
        invoice: "INV0023",
        paymentStatus: "Pending",
        colab: "CG",
        totalAmount: "$150.00",
        paymentMethod: "PayPal",
    },
    {
        invoice: "INV0024",
        paymentStatus: "Unpaid",
        colab: "CG",
        totalAmount: "$350.00",
        paymentMethod: "Bank Transfer",
    },
    {
        invoice: "INV0025",
        paymentStatus: "Paid",
        colab: "CG",
        totalAmount: "$450.00",
        paymentMethod: "Credit Card",
    },
    {
        invoice: "INV0026",
        paymentStatus: "Paid",
        colab: "CG",
        totalAmount: "$550.00",
        paymentMethod: "PayPal",
    },
    {
        invoice: "INV0027",
        paymentStatus: "Pending",
        colab: "CG",
        totalAmount: "$200.00",
        paymentMethod: "Bank Transfer",
    },
    {
        invoice: "INV0028",
        paymentStatus: "Unpaid",
        colab: "CG",
        totalAmount: "$300.00",
        paymentMethod: "Credit Card",
    },
]


export default function PageMission() {
    return (
        <>
            <SidebarLeft />
            <PageContent title="Missions">
                <div className="fixed top-0 right-0 z-20 px-5 py-3">
                    <div className="flex gap-5">
                        <Input type="search" />
                        <DropdownMenu>
                            <DropdownMenuTrigger asChild>
                                <Button variant="outline" className="ml-auto">
                                    Filtres <ChevronDown />
                                </Button>
                            </DropdownMenuTrigger>
                            <DropdownMenuContent align="end">
                                <DropdownMenuLabel>Statut</DropdownMenuLabel>
                                <DropdownMenuItem>
                                    En cours
                                </DropdownMenuItem>
                                <DropdownMenuItem>
                                    Archivé
                                </DropdownMenuItem>
                                <DropdownMenuItem>
                                    Facturé
                                </DropdownMenuItem>
                                <DropdownMenuItem>
                                    Annulé
                                </DropdownMenuItem>
                                <DropdownMenuItem>
                                    Tous
                                </DropdownMenuItem>
                            </DropdownMenuContent>
                        </DropdownMenu>
                        <Button variant="primary">
                            <CirclePlus />
                            <span className="text-sm">Nouvelle mission</span>
                        </Button>
                    </div>
                </div>
                <div className="bg-sidebar py-3 rounded-lg">
                    <Table>
                        <TableCaption>A list of your recent invoices.</TableCaption>
                        <TableHeader>
                            <TableRow>
                                <TableHead>#</TableHead>
                                <TableHead>Patient</TableHead>
                                <TableHead>Collaborateurs</TableHead>
                                <TableHead>Début</TableHead>
                                <TableHead>Fin</TableHead>
                                <TableHead>Durée</TableHead>
                                <TableHead>OPAS</TableHead>
                                <TableHead>Statut</TableHead>
                                <TableHead className="w-[40px]"></TableHead>
                            </TableRow>
                        </TableHeader>
                        <TableBody>
                            {invoices.map((invoice) => (
                                <TableRow key={invoice.invoice}>
                                    <TableCell className="font-medium">{invoice.invoice}</TableCell>
                                    <TableCell>{invoice.paymentStatus}</TableCell>
                                    <TableCell>
                                        <Avatar>
                                            <AvatarImage alt="@shadcn" />
                                            <AvatarFallback> {invoice.colab}</AvatarFallback>
                                        </Avatar>
                                    </TableCell>
                                    <TableCell>{invoice.paymentMethod}</TableCell>
                                    <TableCell>{invoice.paymentMethod}</TableCell>
                                    <TableCell>{invoice.paymentMethod}</TableCell>
                                    <TableCell>
                                        <DropdownMenu>
                                            <DropdownMenuTrigger>
                                                <Badge variant="outline" className="text-sm font-normal">
                                                    <div className="w-2 h-2 rounded-full bg-purple-400"></div>
                                                    {invoice.paymentMethod}
                                                    <ChevronDown className="ml-2" />
                                                </Badge>
                                            </DropdownMenuTrigger>
                                            <DropdownMenuContent align="end">
                                                <DropdownMenuLabel>Mission</DropdownMenuLabel>
                                                <DropdownMenuItem>Consulter</DropdownMenuItem>
                                                <DropdownMenuItem>Modifier</DropdownMenuItem>
                                                <DropdownMenuSeparator />
                                                <DropdownMenuLabel>OPAS</DropdownMenuLabel>
                                                <DropdownMenuItem>Consulter</DropdownMenuItem>
                                                <DropdownMenuItem>Modifier</DropdownMenuItem>
                                            </DropdownMenuContent>
                                        </DropdownMenu>

                                    </TableCell>
                                    <TableCell>
                                        <DropdownMenu>
                                            <DropdownMenuTrigger>
                                                <Badge variant="outline" className="text-sm font-normal">
                                                    <div className="w-2 h-2 rounded-full bg-green-400"></div>
                                                    {invoice.totalAmount}
                                                    <ChevronDown className="ml-2" />
                                                </Badge>
                                            </DropdownMenuTrigger>
                                            <DropdownMenuContent align="end">
                                                <DropdownMenuLabel>Mission</DropdownMenuLabel>
                                                <DropdownMenuItem>Consulter</DropdownMenuItem>
                                                <DropdownMenuItem>Modifier</DropdownMenuItem>
                                                <DropdownMenuSeparator />
                                                <DropdownMenuLabel>OPAS</DropdownMenuLabel>
                                                <DropdownMenuItem>Consulter</DropdownMenuItem>
                                                <DropdownMenuItem>Modifier</DropdownMenuItem>
                                            </DropdownMenuContent>
                                        </DropdownMenu>
                                    </TableCell>
                                    <TableCell className="text-right">
                                        <DropdownMenu>
                                            <DropdownMenuTrigger>
                                                <EllipsisVertical className="cursor-pointer" />
                                            </DropdownMenuTrigger>
                                            <DropdownMenuContent align="end">
                                                <DropdownMenuLabel>Mission</DropdownMenuLabel>
                                                <DropdownMenuItem>Consulter</DropdownMenuItem>
                                                <DropdownMenuItem>Modifier</DropdownMenuItem>
                                                <DropdownMenuSeparator />
                                                <DropdownMenuLabel>OPAS</DropdownMenuLabel>
                                                <DropdownMenuItem>Consulter</DropdownMenuItem>
                                                <DropdownMenuItem>Modifier</DropdownMenuItem>
                                            </DropdownMenuContent>
                                        </DropdownMenu>
                                    </TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                        {/* <TableFooter>
                            <TableRow>
                                <TableCell colSpan={5}>Total</TableCell>
                                <TableCell className="text-right">$2,500.00</TableCell>
                            </TableRow>
                        </TableFooter> */}
                    </Table>
                </div>
            </PageContent >
        </>
    )
}


