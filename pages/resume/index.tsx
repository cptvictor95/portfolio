import React, { useRef } from 'react';
import { Flex, Button, Box, useToast } from '@chakra-ui/react';
import { LeftColumn } from '../../components/resume/LeftColumn';
import { RightColumn } from '../../components/resume/RightColumn';
import { useRouter } from 'next/router';
import Header from '../../components/Header';
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';
import { ptBR, enUS } from '../../locale/resume';
import Main from '../../layouts/Main';

const ResumePage = () => {
  const router = useRouter();
  const { locale } = router;
  const resumeRef = useRef<HTMLDivElement>(null);
  const toast = useToast();

  const handleToggle = () => {
    switch (locale) {
      case 'pt_BR':
        router.push(router.asPath, router.asPath, { locale: 'en_US' });
        break;
      case 'en_US':
        router.push(router.asPath, router.asPath, { locale: 'pt_BR' });
        break;
    }
  };

  const handleDownloadPDF = async () => {
    try {
      toast({
        title: 'Generating PDF...',
        status: 'info',
        duration: 2000,
        isClosable: true,
        position: 'top',
        variant: 'solid',
        colorScheme: 'blue',
      });

      // Get the resume content text
      const t = locale === 'pt_BR' ? ptBR : enUS;

      // Create a new hidden div for PDF layout
      const pdfContainer = document.createElement('div');
      pdfContainer.style.position = 'absolute';
      pdfContainer.style.left = '-9999px';
      pdfContainer.style.width = '210mm'; // A4 width
      pdfContainer.style.backgroundColor = 'white';
      pdfContainer.style.padding = '0';
      pdfContainer.style.margin = '0';
      document.body.appendChild(pdfContainer);

      // Create the PDF optimized layout
      pdfContainer.innerHTML = `
        <div style="font-family: Arial, sans-serif; color: black; padding: 20px; width: 100%; box-sizing: border-box;">
          <div style="margin-bottom: 20px; border-bottom: 2px solid #000; padding-bottom: 15px;">
            <h1 style="font-size: 28px; margin: 0; padding: 0; font-weight: bold;">Victor Cardoso</h1>
            <h1 style="font-size: 28px; margin: 0 0 10px 0; padding: 0; font-weight: bold;">Pudo Torres</h1>
            <h2 style="font-size: 18px; margin: 0; padding: 0; font-weight: bold;">${
              t.jobTitle
            }</h2>
          </div>
          
          <div style="margin-bottom: 20px; border-bottom: 2px solid #000; padding-bottom: 15px;">
            <h3 style="font-size: 18px; margin: 0 0 10px 0; padding: 0; font-weight: bold;">${
              t.profile.title
            }</h3>
            <p style="font-size: 12px; line-height: 1.4; margin: 0;">${
              t.profile.description
            }</p>
          </div>
          
          <div style="margin-bottom: 20px; border-bottom: 2px solid #000; padding-bottom: 15px;">
            <h3 style="font-size: 18px; margin: 0 0 10px 0; padding: 0; font-weight: bold;">${
              t.contact.title
            }</h3>
            <p style="font-size: 12px; margin: 8px 0; display: flex; align-items: center;">
              <span style="display: inline-block; width: 20px; margin-right: 8px;">✉</span>
              <a href="mailto:victor.cpt95@gmail.com" style="color: black; border-bottom: 1px solid black; text-decoration: none; padding-bottom: 1px;">victor.cpt95@gmail.com</a>
            </p>
            <p style="font-size: 12px; margin: 8px 0; display: flex; align-items: center;">
              <span style="display: inline-block; width: 20px; margin-right: 8px;">☏</span>
              <a href="tel:+5511947006135" style="color: black; border-bottom: 1px solid black; text-decoration: none; padding-bottom: 1px;">+55 (11) 94700-6135</a>
            </p>
            <p style="font-size: 12px; margin: 8px 0; display: flex; align-items: center;">
              <span style="display: inline-block; width: 20px; margin-right: 8px;">in</span>
              <a href="https://linkedin.com/in/victorcardosopudotorres" style="color: black; border-bottom: 1px solid black; text-decoration: none; padding-bottom: 1px;">/victorcardosopudotorres</a>
            </p>
            <p style="font-size: 12px; margin: 8px 0; display: flex; align-items: center;">
              <span style="display: inline-block; width: 20px; margin-right: 8px;">gh</span>
              <a href="https://github.com/cptvictor95" style="color: black; border-bottom: 1px solid black; text-decoration: none; padding-bottom: 1px;">/cptvictor95</a>
            </p>
          </div>
          
          <div style="margin-bottom: 20px;">
            <div style="border-bottom: 2px solid #000; margin-bottom: 10px;">
              <h3 style="font-size: 18px; margin: 0; padding: 0 0 10px 0; font-weight: bold;">${
                t.experience.title
              }</h3>
            </div>
            ${t.experience.items
              .slice(0, 7)
              .map(
                (job) => `
              <div style="margin-bottom: 15px;">
                <h4 style="font-size: 16px; margin: 0 0 5px 0; padding: 0; font-weight: bold;">${
                  job.role
                } | ${job.company}</h4>
                <p style="font-size: 12px; margin: 0 0 5px 0; color: #666;">
                  ${job.period}${job.location ? ` • ${job.location}` : ''}
                </p>
                ${
                  job.overview
                    ? `<p style="font-size: 12px; margin: 0 0 5px 0;">${job.overview}</p>`
                    : ''
                }
                
                ${
                  job.projects
                    ? job.projects
                        .map(
                          (project) => `
                  <div style="margin-bottom: 10px;">
                    <p style="font-size: 12px; font-weight: bold; margin: 0 0 5px 0;">${
                      project.name
                    }</p>
                    <ul style="margin: 0; padding-left: 20px;">
                      ${project.responsibilities
                        .map(
                          (resp) => `
                        <li style="font-size: 12px; margin-bottom: 3px;">${resp}</li>
                      `
                        )
                        .join('')}
                    </ul>
                  </div>
                `
                        )
                        .join('')
                    : ''
                }
                
                ${
                  job.responsibilities
                    ? `
                  <ul style="margin: 0; padding-left: 20px;">
                    ${job.responsibilities
                      .map(
                        (resp) => `
                      <li style="font-size: 12px; margin-bottom: 3px;">${resp}</li>
                    `
                      )
                      .join('')}
                  </ul>
                `
                    : ''
                }
              </div>
            `
              )
              .join('')}
          </div>
          
          <div style="margin-bottom: 20px;">
            <div style="border-bottom: 2px solid #000; margin-bottom: 10px;">
              <h3 style="font-size: 18px; margin: 0; padding: 0 0 10px 0; font-weight: bold;">${
                t.education.title
              }</h3>
            </div>
            <ul style="margin: 0; padding-left: 20px;">
              ${t.education.items
                .map(
                  (item) => `
                <li style="font-size: 12px; margin-bottom: 8px;">
                  ${item.course} at ${item.institution} - ${item.period}
                  ${
                    item.description
                      ? `<p style="margin: 3px 0 0 0;">${item.description}</p>`
                      : ''
                  }
                </li>
              `
                )
                .join('')}
            </ul>
          </div>
          
          <div>
            <div style="border-bottom: 2px solid #000; margin-bottom: 10px;">
              <h3 style="font-size: 18px; margin: 0; padding: 0 0 10px 0; font-weight: bold;">${
                t.skills.title
              }</h3>
            </div>
            <ul style="margin: 0; padding-left: 20px;">
              <li style="font-size: 12px; margin-bottom: 5px;">
                <span style="font-weight: bold;">${t.skills.frontend}:</span> ${
        t.skills.frontendDesc
      }
              </li>
              <li style="font-size: 12px; margin-bottom: 5px;">
                <span style="font-weight: bold;">${t.skills.backend}:</span> ${
        t.skills.backendDesc
      }
              </li>
              <li style="font-size: 12px; margin-bottom: 5px;">
                <span style="font-weight: bold;">${
                  t.skills.development
                }:</span> ${t.skills.developmentDesc}
              </li>
              <li style="font-size: 12px; margin-bottom: 5px;">
                <span style="font-weight: bold;">${
                  t.skills.infrastructure
                }:</span> ${t.skills.infrastructureDesc}
              </li>
              <li style="font-size: 12px; margin-bottom: 5px;">
                <span style="font-weight: bold;">${t.skills.database}:</span> ${
        t.skills.databaseDesc
      }
              </li>
              <li style="font-size: 12px; margin-bottom: 5px;">
                <span style="font-weight: bold;">${t.skills.testing}:</span> ${
        t.skills.testingDesc
      }
              </li>
              <li style="font-size: 12px; margin-bottom: 5px;">
                <span style="font-weight: bold;">${
                  t.skills.versioning
                }:</span> ${t.skills.versioningDesc}
              </li>
              <li style="font-size: 12px; margin-bottom: 5px;">
                <span style="font-weight: bold;">${
                  t.skills.languages
                }:</span> ${t.skills.languagesDesc}
              </li>
              <li style="font-size: 12px; margin-bottom: 5px;">
                <span style="font-weight: bold;">${t.skills.api}:</span> ${
        t.skills.apiDesc
      }
              </li>
            </ul>
          </div>
        </div>
      `;

      // Wait a moment for the content to render
      await new Promise((resolve) => setTimeout(resolve, 100));

      // Generate PDF from the optimized layout
      const canvas = await html2canvas(pdfContainer, {
        scale: 2,
        logging: false,
        useCORS: true,
        allowTaint: true,
      });

      const imgData = canvas.toDataURL('image/png');

      // Create a PDF with custom dimensions - A4 width but with height based on content
      const imgWidth = 210; // A4 width in mm
      const imgHeight = (canvas.height * imgWidth) / canvas.width;

      // Create a single-page PDF with the exact height needed
      const pdf = new jsPDF({
        orientation: 'portrait',
        unit: 'mm',
        format: [imgWidth, imgHeight], // Custom format with the exact dimensions needed
      });

      // Add the image to the PDF (single page)
      pdf.addImage(imgData, 'PNG', 0, 0, imgWidth, imgHeight);

      const pdfName = `Victor_Pudo_Resume_${
        locale === 'pt_BR' ? 'PT' : 'EN'
      }.pdf`;
      pdf.save(pdfName);

      // Clean up
      document.body.removeChild(pdfContainer);

      toast({
        title: 'Resume downloaded successfully!',
        status: 'success',
        duration: 3000,
        isClosable: true,
        position: 'top',
        variant: 'solid',
        styleConfig: {
          backgroundColor: 'green',
          color: '#000',
        },
      });
    } catch (error) {
      console.error('Error generating PDF:', error);
      toast({
        title: 'Failed to generate PDF',
        description: 'Please try again.',
        status: 'error',
        duration: 3000,
        isClosable: true,
        position: 'top',
      });
    }
  };

  return (
    <Main title={locale === 'pt_BR' ? 'Currículo' : 'Resume'}>
      <Header />
      <Flex
        w="full"
        flexDir={{
          base: 'column',
          md: 'row',
        }}
        minH={{
          base: 'auto',
          md: '100vh',
        }}
        bg="black"
        position="relative"
        ref={resumeRef}
      >
        <Button
          variant="scrollToTop"
          onClick={handleToggle}
          textShadow="outline"
          size={{ base: 'xs', md: 'sm' }}
          fontSize="sm"
          position="fixed"
          top="12vh"
          right="6"
          zIndex="10"
        >
          {locale === 'pt_BR' ? 'pt-BR' : 'en-US'}
        </Button>

        <LeftColumn onDownloadPDF={handleDownloadPDF} />
        <RightColumn />
      </Flex>
    </Main>
  );
};

export default ResumePage;
