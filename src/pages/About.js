import React from 'react';
import { ProgressBar } from 'react-bootstrap';


const About = () => {
    return (
        <div className="container m-5">
            <div className="row">
                <div className="about text-center mt-3">
                    <h2>SPECIALIST DENTAL CARE</h2>
                    <p>Advancing The Nations Oral Health Through Research Innovation. </p>
                </div>
                <div className="about-left col-md-6">
                    <p> <b>Dental assistant,</b> a specially trained health care worker who provides direct support to the dentist. an educationally qualified dental assistant may be delegated  to do intraoral procedures that do not require the professional skill and judgment of a dentist. Although not all states require formal eduction for dental assistant, minimum educational standards include a program of approximately one acadamic year. Dental assistant may take the Certificate Examination adminitered by the dental assisting national board and earn the title of a certified dental Assistant (CDA).</p>
                </div>
                <div className="about-right col-md-6">
                    <div>
                        <p> <b>General Dentist</b> </p>
                        <ProgressBar animated now={95} />
                    </div>
                    <div>
                        <p> <b>Oral & Maxillofacial surgoen</b> </p>
                        <ProgressBar animated now={80} />
                    </div>
                    <div>
                        <p> <b>Pediatric Dentist</b> </p>
                        <ProgressBar animated now={70} />
                    </div>
                    <div>
                        <p> <b>Bialogical Dentist</b> </p>
                        <ProgressBar animated now={65} />
                    </div>
                    <div>
                        <p> <b>Endodontist Training</b> </p>
                        <ProgressBar animated now={60} />
                    </div>



                </div>

            </div>
        </div>
    );
};

export default About;