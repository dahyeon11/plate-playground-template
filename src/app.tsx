import { Toaster } from 'sonner';

import { PlateEditor } from '@/components/editor/plate-editor';

function App() {
  return (
    <div className="h-screen w-full">
      <PlateEditor />
      <Toaster />
    </div>
  );
}

export default App;
