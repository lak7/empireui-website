import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs";
import CodePreview from "./code-preview";
import CodeRenderer from "./code-renderer";
import { extractCodeFromFilePath } from "@/lib/code";

type ComponentInstallProps = {
  cli: string;
  filePath: string;
};

export default function ComponentInstall({
  filePath,
  cli,
}: ComponentInstallProps) {
  const fileContent = extractCodeFromFilePath(`src/components/${filePath}.tsx`);
  const cliCommand = cli;

  return (
    <div className="not-prose relative z-0 flex items-center justify-between pb-3">
      <Tabs defaultValue="cli" className="relative mr-auto w-full">
        <TabsList className="mb-4">
          <TabsTrigger value="cli">CLI</TabsTrigger>
          <TabsTrigger value="manual">Manual</TabsTrigger>
        </TabsList>
        <TabsContent value="cli" className="rounded-[7px]">
          <CodePreview code={cliCommand}>
            <CodeRenderer code={cliCommand} lang="tsx" />
          </CodePreview>
        </TabsContent>
        <TabsContent value="manual" className="rounded-[7px]">
          <CodePreview code={fileContent}>
            <CodeRenderer code={fileContent} lang="tsx" />
          </CodePreview>
        </TabsContent>
      </Tabs>
    </div>
  );
}
