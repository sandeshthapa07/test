/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
'use client';

// this registers <Editor> as a Client Component
import '@blocknote/core/fonts/inter.css';

import { BlockNoteView } from '@blocknote/mantine';
import { useCreateBlockNote } from '@blocknote/react';

import '@blocknote/mantine/style.css';

interface IProps {
  content: [];
}

// Our <Editor> component we can reuse later
const Editor = ({ content }: IProps) => {
  // Creates a new editor instance.
  const editor = useCreateBlockNote({
    initialContent: content || '',
  });

  return <>{editor && <BlockNoteView theme={'light'} editable={false} editor={editor} />}</>;
};

export default Editor;
