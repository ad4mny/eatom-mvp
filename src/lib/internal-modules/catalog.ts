import module3 from "@/data/internal-modules/3-sistem-pemantauan-radiasi-persekitaran/module.json";
import module4 from "@/data/internal-modules/4-maklumat-pekerja-sinaran/module.json";
import module5 from "@/data/internal-modules/5-sistem-pengurusan-dokumen/module.json";
import module6 from "@/data/internal-modules/6-maklumat-dos-pekerja-sinaran/module.json";
import module7 from "@/data/internal-modules/7-sistem-khidmat-pengurusan/module.json";
import forms from "@/data/internal-modules/forms.json";
import dashboardSections from "@/data/internal-modules/dashboard-sections.json";
import type {
  DashboardSection,
  InternalModuleDefinition,
  InternalModuleProcess,
  InternalModuleSubmodule,
  MockFormDefinition,
} from "./types";

const internalModules: InternalModuleDefinition[] = [
  module3 as InternalModuleDefinition,
  module4 as InternalModuleDefinition,
  module5 as InternalModuleDefinition,
  module6 as InternalModuleDefinition,
  module7 as InternalModuleDefinition,
];

const mockForms = forms as MockFormDefinition[];

export function getDashboardSections() {
  return dashboardSections as DashboardSection[];
}

export function getInternalModules() {
  return internalModules;
}

export function getModuleByRouteSlug(routeSlug: string) {
  return internalModules.find((item) => item.routeSlug === routeSlug);
}

export function getSubmoduleBySlug(moduleDef: InternalModuleDefinition, submoduleSlug: string) {
  return moduleDef.submodules.find((submodule) => submodule.slug === submoduleSlug);
}

export function getProcessBySlug(submodule: InternalModuleSubmodule, processSlug: string) {
  return submodule.processes.find((process) => process.slug === processSlug);
}

export function getFormById(formId?: string) {
  if (!formId) {
    return undefined;
  }

  return mockForms.find((form) => form.id === formId);
}

export function getModuleParams() {
  return internalModules.map((moduleDef) => ({ module: moduleDef.routeSlug }));
}

export function getSubmoduleParams(moduleDef: InternalModuleDefinition) {
  return moduleDef.submodules.map((submodule) => ({ submodule: submodule.slug }));
}

export function getProcessParams(submodule: InternalModuleSubmodule) {
  return submodule.processes.map((process) => ({ process: process.slug }));
}

export function hasForm(process: InternalModuleProcess) {
  return Boolean(process.formId && getFormById(process.formId));
}
