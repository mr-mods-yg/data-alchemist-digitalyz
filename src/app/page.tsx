"use client";

import { DataTable } from "@/components/custom/data-table";
import { Input } from "@/components/ui/input";
import { client, Client } from "@/dataTypes/clientType";
import { task, Task } from "@/dataTypes/taskType";
import { worker, Worker } from "@/dataTypes/workerType";
import { useState } from "react";
import * as XLSX from "xlsx";

export default function Home() {
  const [clientData, setClientData] = useState<Client[]>([]);
  const [workerData, setWorkerData] = useState<Worker[]>([]);
  const [taskData, setTaskData] = useState<Task[]>([]);

  const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (!file) {
      console.log("No file selected");
      return;
    }
    const reader = new FileReader();
    reader.onload = (e) => {
      const arrayBuffer = e.target?.result;
      const workbook = XLSX.read(arrayBuffer, { type: "array" });
      // console.log("Workbook Sheets:", workbook.Sheets);
      Object.entries(workbook.Sheets).forEach(([sheetName, sheet]) => {
        if (sheetName.startsWith("Client")) {
          const jsonData = XLSX.utils.sheet_to_json<Client>(sheet);
          console.log("Client Data:", jsonData);

          setClientData(jsonData as Client[]);
          // console.log("Client Data:", jsonData);

        } else if (sheetName.startsWith("Worker")) {
          const jsonData = XLSX.utils.sheet_to_json<Worker>(sheet);
          setWorkerData(jsonData as Worker[]);
          console.log("Worker Data:", jsonData);

        } else if (sheetName.startsWith("Task")) {
          const jsonData = XLSX.utils.sheet_to_json<Task>(sheet);
          setTaskData(jsonData as Task[]);
          console.log("Task Data:", jsonData);
        }
      })
    }
    reader.readAsArrayBuffer(file);
  };
  return (
    <div className="flex-col items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 space-y-6">
      <h1 className="text-2xl">Data Achemist</h1>
      <div>Upload files
        <Input
          type="file"
          accept=".xlsx,.xls,.csv"
          onChange={handleFileUpload}
        />
      </div>
      <div>
        <DataTable columns={client} data={clientData} />
        <DataTable columns={worker} data={workerData} />
        <DataTable columns={task} data={taskData} />
      </div>

      <div>Footer</div>
    </div>
  );
}
