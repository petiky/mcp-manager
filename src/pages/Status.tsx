import { EnvironmentCheck } from "@/components/EnvironmentCheck";
import { PageLayout } from "@/components/PageLayout";

interface StatusPageProps {
  pythonPath: string;
  nodePath: string;
  uvPath: string;
  claudeInstalled: string;
  installing: Record<string, boolean>;
  onInstall: (type: string) => Promise<void>;
  installMessage: string;
}

export function StatusPage({
  pythonPath,
  nodePath,
  uvPath,
  claudeInstalled,
  installing,
  onInstall,
  installMessage,
}: StatusPageProps) {
  return (
    <PageLayout title="Environment Status">
      <EnvironmentCheck
        pythonPath={pythonPath}
        nodePath={nodePath}
        uvPath={uvPath}
        claudeInstalled={claudeInstalled}
        installing={installing}
        onInstall={onInstall}
        installMessage={installMessage}
      />
    </PageLayout>
  );
}
