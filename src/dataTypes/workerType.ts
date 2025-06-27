import { ColumnDef } from "@tanstack/react-table"

export type Worker = {
    WorkerID : string,	
    WorkerName: string,	
    Skills: string,	
    AvailableSlots: string,	
    MaxLoadPerPhase: number,
    WorkerGroup: string,
    QualificationLevel: number
}

export const worker: ColumnDef<Worker>[] = [
    {
        accessorKey: "WorkerID",
        header: "WorkerID",
    },
    {
        accessorKey: "WorkerName",
        header: "WorkerName",
    },
    {
        accessorKey: "Skills",
        header: "Skills",
    },
    {
        accessorKey: "AvailableSlots",
        header: "AvailableSlots",
    },
    {
        accessorKey: "MaxLoadPerPhase",
        header: "MaxLoadPerPhase",
    },
    {
        accessorKey: "WorkerGroup",
        header: "WorkerGroup",
    },
    {
        accessorKey: "QualificationLevel",
        header: "QualificationLevel",
    }
]