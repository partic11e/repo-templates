/**
 * The global shared interfaces for the p11 CLI.
 *
 * @copyright 2022 IntegerEleven. All rights reserved. MIT license.
 */

//  #region feature-import-remote
//  #endregion

//  #region feature-import-local
//  #endregion

//  #region constants-local
//  #endregion

//  #region type-import-remote
//  #endregion

//  #region type-import-local
import type {
  ScaffoldExportRegion,
  ScaffoldImportRegion,
  ScaffoldTemplateFileType,
  ScaffoldTemplateName,
} from "./types.ts";
//  #endregion

//  #region type-export-file
//  #endregion

//  #region export-features
/**
 * An interface describing a response item for a GitHub label.
 */
export interface IGitHubIssueLabel {
  /**
   * The ID of the label.
   */
  id: string;
  /**
   * The globally unique ID of the label.
   */
  node_id: string;
  /**
   * URL for the label.
   */
  url: string;
  /**
   * The name of the label.
   */
  name: string;
  /**
   * The description of the label.
   */
  description: string;
  /**
   * 6-character hex code, without the leading #, identifying the color.
   */
  color: string;
  /**
   * Whether it is the default label.
   */
  default: boolean;
}

/**
 * An interface describing the structure of a `.scaffold.json` file for
 * scaffolding a repo with source files.
 */
export interface IScaffold {
  /**
   * The structure to scaffold at the root (cwd) of a project.
   */
  root: IScaffoldFolder;
  /**
   * The description of the scaffold structure.
   */
  description: string;
  /**
   * The structure of the scaffold.
   */
  "expected-structure": string[];
}

/**
 * An interface describing a scaffolding folder and its contents.
 */
export interface IScaffoldFolder {
  /**
   * The sub-folders to scaffold within this folder.
   */
  dirs?: { [key: string]: IScaffoldFolder };
  /**
   * The files to scaffold within this folder.
   */
  files?: { [key: string]: ScaffoldTemplateFileType };
}

/**
 * An interface describing a scaffolding file and the contents and
 * interpolation data.
 *
 * @template T The string name of the template file being referenced.
 * @template R The region names within the template file.
 * @template D The interpolation data accepted/required by the template file.
 */
export interface IScaffoldFile<
  T extends ScaffoldTemplateName,
  R extends (ScaffoldImportRegion | ScaffoldExportRegion) | never = never,
  D extends IScaffoldTemplateFileData | never = never,
> {
  /**
   * A description of the file and its purpose. Typically pulled from the
   * `.scaffold.json` file.
   */
  description?: string;
  /**
   * The name of the template file. Currently supported template files:
   *
   * - `"class-template"`
   * - `"function-template"`
   * - `"mod-template"`
   * - `"version-template"`
   * - `"other-template"`
   */
  template: T;
  /**
   * The data to interpolate into template tags in the template file.
   */
  data?: D extends IScaffoldTemplateFileData ? Partial<D>
    : Record<never, never>;
  /**
   * The regions to interpolate required, key, or suggested imports/exports
   * into.
   */
  regions?: R extends string ? Partial<{ [Key in R]: string[] }>
    : Record<never, never>;
}

/**
 * An interface describing the base interpolation data that all template files
 * accept or require.
 */
export interface IScaffoldTemplateFileData {
  /**
   * The copyright start year.
   */
  year: number;
  /**
   * A description of the feature within the template file, or the file
   * content itself as a whole.
   */
  description: string;
}

/**
 * An interface describing the interpolation data in the `"class-template"`.
 */
export interface IClassTemplateFileData extends IScaffoldTemplateFileData {
  /**
   * Whether the class is abstract or not.
   */
  abstract: "" | "abstract ";
  /**
   * The name of the class.
   */
  className: string;
}

/**
 * An interface describing the interpolation data in the `"function-template"`.
 */
export interface IFunctionTemplateFileData extends IScaffoldTemplateFileData {
  /**
   * Whether the function is asynchronous or not.
   */
  async: "" | "async ";
  /**
   * The name of the function.
   */
  functionName: string;
}

/**
 * An interface describing the interpolation data in the `"version-template"`.
 */
export interface IVersionTemplateFileData extends IScaffoldTemplateFileData {
  /**
   * The name of the module.
   */
  moduleName: string;
}
//  #endregion

//  #region internal
//  #endregion
