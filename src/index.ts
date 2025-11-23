// Main components
export { PlateEditor } from './components/editor/plate-editor';

// Editor kits
export { EditorKit } from './components/editor/editor-kit';
export { BaseEditorKit } from './components/editor/editor-base-kit';

// Hooks
export { useChat } from './components/editor/use-chat';

// Types
export type * from './components/editor/plate-types';

// Transforms
export * from './components/editor/transforms';

// Settings
export { SettingsDialog } from './components/editor/settings-dialog';

// Styles - Users should import this separately in their app
import './globals.css';
