import React, { useState } from 'react';
import { Document,Page } from 'react-pdf/dist/esm/entry.webpack';
import resume from '../resume.pdf';

function Resume() {
  return (
    <div>
      <Document file={resume}>
        <Page pageNumber={1} />
      </Document>
    </div>
  );
}

export default Resume;