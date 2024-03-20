import React, { useRef } from 'react';
import Smartinterpretation1 from './Smartinterpretation1';
import Visualization1 from './Visualization1';
import Labreport1 from './Labreport1';
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';
import "./Pdf.css";
import AddTextToImage from './Coverpage';
// import Loader from './Loader';
// import BodyChart1 from './BodyChart1.jsx';
// import BodyChart from './BodyChart';
const Pdf = () => {
  const contentRef = useRef(null);

  const downloadPdf = () => {
    const content = contentRef.current;
  
    html2canvas(content, { height: content.scrollHeight }).then((canvas) => {
      const imgData = canvas.toDataURL('image/png');
      const pdf = new jsPDF('p', 'px', [canvas.width, canvas.height]);
      const pdfWidth = pdf.internal.pageSize.getWidth();
      const pdfHeight = pdf.internal.pageSize.getHeight();
      const imgHeight = (canvas.height * pdfWidth) / canvas.width;
      let position = 0;
  
      pdf.addImage(imgData, 'PNG', 0, position, pdfWidth, imgHeight);
      pdf.save('download.pdf');
    });
  };


  return (
    <div style={{ fontFamily: 'Arial, sans-serif' }}>
      <ContentSection contentRef={contentRef} />
      <button style={buttonStyle} onClick={downloadPdf}>Download PDF</button>
    </div>
  );
};

const ContentSection = ({ contentRef }) => (
  <div ref={contentRef}>
    <div className="hoho">
      
      <AddTextToImage></AddTextToImage>
    <h3>Lab report</h3>
    <Labreport1 />

    <h3>Visual info</h3>
    <Visualization1 />

    <h3>SmartInterpretation</h3>
    <Smartinterpretation1 />
    {/* <h3>BodyChart</h3>
    <BodyChart1 /> */}
    </div>
  </div>
);


const SectionHeading = ({ title }) => <h1 style={{ fontSize: '24px', margin: '20px 0' }}>{title}</h1>;

const buttonStyle = {
  backgroundColor: '#4CAF50',
  border: 'none',
  color: 'white',
  padding: '10px 20px',
  textAlign: 'center',
  textDecoration: 'none',
  display: 'inline-block',
  fontSize: '16px',
  margin: '20px',
  cursor: 'pointer',
  borderRadius: '5px',
  position:'relative',
  left:'430px',
  width:'30%',
};

export default Pdf;
