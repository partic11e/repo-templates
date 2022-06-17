/**
 * The global shared types for the p11 CLI.
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
  IClassTemplateFileData,
  IFunctionTemplateFileData,
  IScaffoldFile,
  IScaffoldTemplateFileData,
  IVersionTemplateFileData,
} from "./interfaces.ts";
//  #endregion

//  #region type-export-file
//  #endregion

//  #region export-features
/**
 * A type describing the `"class-template"` template file and its interpolation
 * data and available interpolation regions.
 */
export type ScaffoldClassTemplateFile = IScaffoldFile<
  "class-template",
  ScaffoldImportRegion,
  IClassTemplateFileData
>;

/**
 * A type describing the `"function-template"` template file and its interpolation
 * data and available interpolation regions.
 */
export type ScaffoldFunctionTemplateFile = IScaffoldFile<
  "function-template",
  ScaffoldImportRegion,
  IFunctionTemplateFileData
>;

/**
 * A type describing the `"mod-template"` template file and its interpolation
 * data and available interpolation regions.
 */
export type ScaffoldModTemplateFile = IScaffoldFile<
  "mod-template",
  Exclude<ScaffoldExportRegion, "type-export-file">,
  IScaffoldTemplateFileData
>;

/**
 * A type describing the `"other-template"` template file and its interpolation
 * data and available interpolation regions.
 */
export type ScaffoldOtherTemplateFile = IScaffoldFile<
  "other-template",
  ScaffoldImportRegion | "type-export-file",
  IScaffoldTemplateFileData
>;

/**
 * A type describing the `"version-template"` template file and its interpolation
 * data and available interpolation regions.
 */
export type ScaffoldVersionTemplateFile = IScaffoldFile<
  "version-template",
  never,
  IVersionTemplateFileData
>;

/**
 * A type describing the available scaffold template files.
 */
export type ScaffoldTemplateFileType =
  | ScaffoldClassTemplateFile
  | ScaffoldFunctionTemplateFile
  | ScaffoldModTemplateFile
  | ScaffoldOtherTemplateFile
  | ScaffoldVersionTemplateFile;

/**
 * A type describing the available scaffold template file names.
 */
export type ScaffoldTemplateName =
  | "class-template"
  | "function-template"
  | "mod-template"
  | "version-template"
  | "other-template";

/**
 * A type describing the available scaffold import regions.
 */
export type ScaffoldImportRegion =
  | "feature-import-remote"
  | "feature-import-local"
  | "type-import-remote"
  | "type-import-local";

/**
 * A type describing the available scaffold export regions.
 */
export type ScaffoldExportRegion =
  | "export-types"
  | "export-constants"
  | "export-features"
  | "type-export-file";

//  #endregion

//  #region internal
//  #endregion
