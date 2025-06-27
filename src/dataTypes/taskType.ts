import { ColumnDef } from "@tanstack/react-table"

export type Task = {
    WTaskID : string, 
    TaskName : string,
    Category : string,
    Duration : number,
    RequiredSkills : string,
    PreferredPhases : string,
    MaxConcurrent : number,
}

export const task: ColumnDef<Task>[] = [
    {
        accessorKey: "WTaskID",
        header: "WTaskID",
    },
    {
        accessorKey: "TaskName",
        header: "TaskName",
    },
    {
        accessorKey: "Category",
        header: "Category",
    },
    {
        accessorKey: "Duration",
        header: "Duration",
    },
    {
        accessorKey: "RequiredSkills",
        header: "RequiredSkills",
    },
    {
        accessorKey: "PreferredPhases",
        header: "PreferredPhases",
    },
    {
        accessorKey: "MaxConcurrent",
        header: "MaxConcurrent",
    }
]