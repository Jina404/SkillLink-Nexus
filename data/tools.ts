export type ToolItem = {
  name: string;
  domain: string;
  /** Optional Simple Icons slug for crisp SVG when available */
  icon?: string;
};

export const toolsSection = {
  title: "Fluent in the tools your team already uses",
  lines: [
    "AI-native executive support.",
    "Whatever stack your team runs on, our EAs already know it. Onboarding takes hours, not weeks.",
  ],
};

export const toolRows: ToolItem[][] = [
  [
    { name: "HubSpot", domain: "hubspot.com", icon: "hubspot" },
    { name: "Salesforce", domain: "salesforce.com", icon: "salesforce" },
    { name: "Jira", domain: "atlassian.com", icon: "jira" },
    { name: "Notion", domain: "notion.so", icon: "notion" },
    { name: "Slack", domain: "slack.com", icon: "slack" },
    { name: "Google Workspace", domain: "workspace.google.com", icon: "google" },
    { name: "MS Office", domain: "microsoft.com", icon: "microsoftoffice" },
  ],
  [
    { name: "Zoom AI", domain: "zoom.us", icon: "zoom" },
    { name: "Calendly", domain: "calendly.com", icon: "calendly" },
    { name: "OpenAI", domain: "openai.com", icon: "openai" },
    { name: "Claude", domain: "anthropic.com", icon: "anthropic" },
    { name: "Gemini", domain: "gemini.google.com", icon: "googlegemini" },
    { name: "Copilot", domain: "copilot.microsoft.com", icon: "microsoftcopilot" },
    { name: "Granola", domain: "granola.ai" },
  ],
  [
    { name: "Fireflies.ai", domain: "fireflies.ai" },
    { name: "Zapier", domain: "zapier.com", icon: "zapier" },
    { name: "Make", domain: "make.com", icon: "make" },
    { name: "Lovable", domain: "lovable.dev" },
  ],
];

export function toolLogoSrc(tool: ToolItem) {
  if (tool.icon) {
    return `https://cdn.simpleicons.org/${tool.icon}`;
  }
  return `https://www.google.com/s2/favicons?domain=${encodeURIComponent(tool.domain)}&sz=128`;
}
