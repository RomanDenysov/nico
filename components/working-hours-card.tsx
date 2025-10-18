import { workingHoursData } from "@/app/config";
import { cn } from "@/lib/utils";

export const WorkingHoursCard = ({ className }: { className?: string }) => (
  <table className={cn("w-fit font-medium text-sm tracking-tight", className)}>
    <thead>
      <tr>
        <th className="text-left">{workingHoursData.week.title}</th>
        <th className="pl-1 text-right md:pl-4">
          {workingHoursData.week.hours}
        </th>
        <td className="px-2 md:px-3">
          <hr className="h-full w-px border-0 bg-primary" />
        </td>
        <th className="text-left">{workingHoursData.weekend.title}</th>
        <th className="pl-1 text-right md:pl-4">
          {workingHoursData.weekend.hours}
        </th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td className="">Brunch</td>
        <td className="pl-1 text-right font-bold md:pl-3">
          {workingHoursData.week.brunch}
        </td>
        <td className="px-2 md:px-3">
          <hr className="h-full w-px border-0 bg-primary" />
        </td>
        <td className="text-left">Brunch</td>
        <td className="pl-1 text-right font-bold md:pl-4">
          {workingHoursData.weekend.brunch}
        </td>
      </tr>
      <tr>
        <td className="">Bistro</td>
        <td className="pl-1 text-right font-bold md:pl-4">
          {workingHoursData.week.bistro}
        </td>
        <td className="px-2 md:px-3">
          <hr className="h-full w-px border-0 bg-primary" />
        </td>
        <td className="text-left">Bistro</td>
        <td className="pl-1 text-right font-bold md:pl-4">
          {workingHoursData.weekend.bistro}
        </td>
      </tr>
    </tbody>
  </table>
);
