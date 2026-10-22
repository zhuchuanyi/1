import { useState } from 'react';
import Shredder from './Shredder';

const [files, setFiles] = useState([
  { id: 1, name: 'Harbour at dusk', size: '4.1 MB' },
  { id: 2, name: 'Studio, take two', size: '2.8 MB' },
  { id: 3, name: 'Fog over the bay', size: '6.3 MB' }
]);

<Shredder
  items={files}
  renderItem={file => (
    <div className="row">
      <span>{file.name}</span>
      <span>{file.size}</span>
    </div>
  )}
  onShred={file => setFiles(prev => prev.filter(f => f.id !== file.id))}
  onReorder={next => setFiles(next)}
  width={340}
  height={460}
  feedSpeed={180}
  bite={18}
  stripWidth={10}
  curl={1}
  autoAnimate={false}
  loop={false}
  loopAfterDelete={false}
  fallHeight={140}
/>
