import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import ChatSupport from "../ChatSupport/ChatSupport";
import DashBoard from "../DashBoard/DashBoard";
function Page() {
  return (
    <Tabs defaultValue="Dashboard" className="w-full">
      <TabsList className="grid w-full grid-cols-2">
        <TabsTrigger value="Dashboard">Dashboard</TabsTrigger>
        <TabsTrigger value="Chatbot">Chatbot</TabsTrigger>
      </TabsList>
      <TabsContent value="Dashboard">
        <DashBoard />
      </TabsContent>
      <TabsContent value="Chatbot">
        <ChatSupport />
      </TabsContent>
    </Tabs>
  );
}

export default Page;
