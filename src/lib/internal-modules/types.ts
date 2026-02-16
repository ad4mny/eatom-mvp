export type InternalModuleProcess = {
  slug: string;
  title: string;
  description?: string;
  formId?: string;
};

export type InternalModuleSubmodule = {
  slug: string;
  title: string;
  description: string;
  processes: InternalModuleProcess[];
};

export type InternalModuleDefinition = {
  moduleNo: number;
  slug: string;
  routeSlug: string;
  title: string;
  description: string;
  submodules: InternalModuleSubmodule[];
};

export type FormFieldType = "text" | "textarea" | "date" | "select" | "email" | "number";

export type MockFormField = {
  name: string;
  label: string;
  type: FormFieldType;
  required?: boolean;
  placeholder?: string;
  options?: string[];
};

export type MockFormDefinition = {
  id: string;
  title: string;
  description: string;
  submitLabel: string;
  fields: MockFormField[];
};

export type DashboardLink = {
  label: string;
  href: string;
  description: string;
};

export type DashboardSection = {
  title: string;
  description: string;
  links: DashboardLink[];
};
