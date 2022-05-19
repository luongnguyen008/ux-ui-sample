import React, { useState } from "react";
import { Document, Page } from "react-pdf";
import { Dialog, Button } from '@mui/material';
import DialogTitle from '@mui/material/DialogTitle';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import sample from './sample.pdf'

export default function ModalPdf(props) {
    const [numPages, setNumPages] = useState(null);

    function onDocumentLoadSuccess({ numPages }) {
        setNumPages(numPages);
    }

    const { open } = props;
    const handleClose = () => {
        props.handleClose()
    }
    return (
        <Dialog open={open} onClose={handleClose} fullWidth maxWidth="md">
            <DialogContent>
                <Document
                    file={sample}
                    options={{ workerSrc: "/pdf.worker.js" }}
                    onLoadSuccess={onDocumentLoadSuccess}
                >
                    {Array.from(new Array(numPages), (el, index) => (
                        <Page key={`page_${index + 1}`} pageNumber={index + 1} />
                    ))}
                </Document>

            </DialogContent>
            <DialogActions>
                <Button
                    variant="outlined"
                    color="primary"
                    onClick={handleClose}>
                    Đóng
                </Button>
            </DialogActions>
        </Dialog>
    );
}