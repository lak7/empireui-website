import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs";
import CodePreview from "./code-preview";
import CodeRenderer from "./code-renderer";
import { extractCodeFromFilePath } from "@/lib/code";

type ComponentInstallProps = {
  cli: string;
  componentFilePath: string;
  routeFilePath: string;
};

export default function ComponentInstall({
  componentFilePath,
  routeFilePath,
  cli,
}: ComponentInstallProps) {
  const ComponentFileContent = extractCodeFromFilePath(
    `src/components/${componentFilePath}.tsx`
  );
  const routeFileContent = extractCodeFromFilePath(
    `src/app/api/${routeFilePath}/route.ts`
  );
  const cliCommand = cli;

  return (
    <div className="not-prose relative z-0 flex items-center justify-between pb-3">
      <Tabs defaultValue="cli" className="relative mr-auto w-full">
        <TabsList className="mb-4">
          <TabsTrigger value="cli">CLI</TabsTrigger>
          <TabsTrigger value="manual">Manual</TabsTrigger>
          <TabsTrigger value="route">API route</TabsTrigger>
        </TabsList>
        <TabsContent value="cli" className="rounded-[7px]">
          <CodePreview code={cliCommand}>
            <CodeRenderer code={cliCommand} lang="tsx" />
          </CodePreview>
        </TabsContent>
        <TabsContent value="manual" className="rounded-[7px]">
          <CodePreview code={ComponentFileContent}>
            <CodeRenderer code={ComponentFileContent} lang="tsx" />
          </CodePreview>
        </TabsContent>
        <TabsContent value="route" className="rounded-[7px]">
          <CodePreview code={routeFileContent}>
            <CodeRenderer code={routeFileContent} lang="tsx" />
          </CodePreview>
        </TabsContent>
      </Tabs>
    </div>
  );
}
