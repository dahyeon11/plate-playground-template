import { PlateEditor } from '@/components/editor/plate-editor';
import { Toaster } from 'sonner';

function App() {
  return (
    <div className="h-screen w-full">
      <PlateEditor />
      <Toaster />
    </div>
  );
}

export default App;
