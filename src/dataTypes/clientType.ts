import { ColumnDef } from "@tanstack/react-table"

export type Client = {
  ClientID: string
  ClientName: string
  PriorityLevel: 1 | 2 | 3 | 4 | 5
  RequestedTaskIDs: string
  AttributesJSON: string
}

export const client: ColumnDef<Client>[] = [
  {
    accessorKey: "ClientID",
    header: "ClientID",
  },
  {
    accessorKey: "ClientName",
    header: "ClientName",
  },{
    accessorKey: "PriorityLevel",
    header: "PriorityLevel",
  },
  {
    accessorKey: "RequestedTaskIDs",
    header: "RequestedTaskIDs",
  },
  {
    accessorKey: "AttributesJSON",
    header: "AttributesJSON",
  }
]