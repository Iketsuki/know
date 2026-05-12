        // Native Browser Print HTML to PDF Function
        function printHTML(title, htmlContent) {
            const printWindow = window.open('', '', 'width=1000,height=800');
            printWindow.document.write(`
                <html>
                <head>
                    <title>${title}</title>
                    <style>
                        @media print {
                            body { -webkit-print-color-adjust: exact; print-color-adjust: exact; }
                        }
                        body { font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif; color: #333; line-height: 1.6; margin: 0 auto; padding: 40px; max-width: 900px; font-size: 16px;}
                        h1 { font-size: 32px; color: #2c3e50; margin-top: 0; }
                        h2 { font-size: 24px; color: #2c3e50; border-bottom: 2px solid #dee2e6; padding-bottom: 5px; margin-top: 30px; }
                        h3 { font-size: 18px; margin: 0; }
                        table { width: 100%; border-collapse: collapse; margin-bottom: 20px; font-size: 14px; font-family: 'Courier New', monospace; }
                        th, td { border: 1px solid #dee2e6; padding: 8px; text-align: left; }
                        th { background-color: #e9ecef; text-align: center; font-weight: bold;}
                        .page-break { page-break-before: always; padding-top: 20px; }
                        .code-block { background-color: #ffffff; border: 1px solid #d4d4d4; padding: 15px; border-radius: 4px; font-family: 'Courier New', Courier, monospace; font-size: 14px; white-space: pre-wrap; color: #000; margin-bottom: 15px; }
                        .status-pass { color: #28a745; font-weight: bold; }
                        .status-fail { color: #dc3545; font-weight: bold; }
                        .status-pending { color: #f59e0b; font-weight: bold; }
                        .status-none { color: #6c757d; font-weight: bold; }
                        .box-container { background-color: #f8f9fa; border: 1px solid #dee2e6; padding: 20px; border-radius: 5px; margin-bottom: 30px; page-break-inside: avoid; }
                        .center { text-align: center; }
                        .metrics-box { background: #e9ecef; padding: 20px; border-radius: 5px; text-align: center; }
                    </style>
                </head>
                <body>
                    ${htmlContent}
                </body>
                </html>
            `);
            printWindow.document.close();
            printWindow.focus();
            setTimeout(() => {
                printWindow.print();
                printWindow.close();
            }, 500);
        }
