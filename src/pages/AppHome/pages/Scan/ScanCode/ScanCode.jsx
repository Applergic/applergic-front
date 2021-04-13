import React from 'react'
import '../Scan.scss';
import { BarcodeScanner } from './BarcodeScanner';

export default function ScanCode() {
    
    return ( 
        <div>
                <BarcodeScanner></BarcodeScanner>
        </div>
    );
}