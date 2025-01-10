import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import data from "../../assets/custom_data.json";
export function DataDisplay() {
  return (
    <>
      <Table className=" bg-background">
        <TableHeader>
          <TableRow>
            <TableHead>User ID</TableHead>
            <TableHead>Post Type</TableHead>
            <TableHead>Likes</TableHead>
            <TableHead>Comments</TableHead>
            <TableHead>Shares</TableHead>
            <TableHead>Views</TableHead>
            <TableHead>Followers</TableHead>
            <TableHead>Timestamp</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {data.map((row, index) => (
            <TableRow key={index}>
              <TableCell>{row.user_id}</TableCell>
              <TableCell>{row.post_type}</TableCell>
              <TableCell>{row.likes}</TableCell>
              <TableCell>{row.comments}</TableCell>
              <TableCell>{row.shares}</TableCell>
              <TableCell>{row.views}</TableCell>
              <TableCell>{row.followers}</TableCell>
              <TableCell>{row.timestamp}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </>
  );
}
